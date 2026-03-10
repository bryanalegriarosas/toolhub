<template>
    <Head>
        <meta
            name="description"
            content="Decode HTML entities back to characters. Includes history, file support, and copy/download options."
        />
    </Head>
    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 class="text-3xl font-bold mb-6">HTML Decoder</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2">
                <span>Load file:</span>
                <input ref="fileInput" type="file" accept=".html,.txt" @change="loadFile" class="form-input" />
            </label>
            <button
                @click="copyText"
                :disabled="!text"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                Copy
            </button>
            <button
                @click="downloadText"
                :disabled="!text"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                Download Input
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
                Clear
            </button>
            <button
                @click="saveHistory"
                :disabled="!text"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                Save
            </button>
        </div>

        <textarea
            v-model="text"
            rows="6"
            placeholder="Paste encoded HTML here..."
            class="w-full border rounded-lg p-4 mb-6"
        />

        <div>
            <label class="text-sm text-gray-500">Decoded HTML</label>

            <textarea
                :value="decoded"
                readonly
                rows="6"
                class="w-full border rounded-lg p-4 bg-gray-100"
            />
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">History</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items_center justify-between"
                >
                    <div>
                        <span class="font-mono break-words max-w-full">{{ h.text }}</span>
                        <p class="text-xs text-gray-500">{{ h.date }}</p>
                    </div>
                    <button
                        @click="restore(h)"
                        class="mt-1 sm:mt-0 text-xs text-blue-600 hover:underline"
                    >
                        Restore
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    Download History
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                    Clear History
                </button>
            </div>
        </div>

        <ToolSeoContent
            title="HTML Decoder"
            description="Decode HTML entities back to characters with file input and history support."
            :steps="steps"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Paste encoded HTML or load a file",
    "Decoded output appears below",
    "Copy, download or save to history",
];

const faqs = [
    {
        question: "What does this tool do?",
        answer: "It converts HTML entities back to their original characters.",
    },
    {
        question: "Can I load a file?",
        answer: "Yes, load .html or .txt files and they'll be decoded.",
    },
    {
        question: "Where is history stored?",
        answer: "Only in the current session; it does not persist.",
    },
];

const text = ref("");
const history = ref([]);
const fileInput = ref(null);

const decoded = computed(() => {
    if (!text.value) return "";
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text.value;
    return textarea.value;
});

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        text.value = ev.target.result;
    };
    reader.readAsText(file);
};

const copyText = () => {
    if (text.value) navigator.clipboard.writeText(text.value);
};

const downloadText = () => {
    if (!text.value) return;
    const blob = new Blob([text.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "input.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearAll = () => {
    text.value = "";
    if (fileInput.value) fileInput.value.value = null;
};

const saveHistory = () => {
    if (!text.value) return;
    history.value.unshift({ text: text.value, date: new Date().toLocaleString() });
};

const restore = (h) => {
    text.value = h.text;
};

const clearHistory = () => {
    history.value = [];
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const data = history.value.map(h => h.text).join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "html-decoder-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};
</script>
