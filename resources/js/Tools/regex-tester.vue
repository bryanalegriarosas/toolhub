<template>
    <div class="max-w-6xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6">Regex Tester</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2">
                <span>Load file:</span>
                <input ref="fileInput" type="file" accept=".txt" @change="loadFile" class="form-input" />
            </label>
            <button
                @click="copyText"
                :disabled="!text"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                Copy Text
            </button>
            <button
                @click="downloadText"
                :disabled="!text"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                Download Text
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
                Clear
            </button>
            <button
                @click="saveHistory"
                :disabled="!pattern && !text"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                Save
            </button>
        </div>

        <div class="space-y-6">
            <div>
                <label class="block text-sm mb-2">Regex Pattern</label>

                <input
                    v-model="pattern"
                    placeholder="\d+"
                    class="w-full border rounded-lg p-3"
                />
            </div>

            <div>
                <label class="block text-sm mb-2">Test Text</label>

                <textarea
                    v-model="text"
                    rows="6"
                    placeholder="Enter text to test..."
                    class="w-full border rounded-lg p-3"
                />
            </div>

            <div>
                <label class="block text-sm mb-2">Matches</label>

                <div class="border rounded-lg p-4 bg-gray-50">
                    <div v-if="matches.length === 0" class="text-gray-400">
                        No matches
                    </div>

                    <ul v-else class="list-disc ml-6">
                        <li v-for="(match, index) in matches" :key="index">
                            {{ match }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">History</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items-center justify-between"
                >
                    <div>
                        <span class="font-mono break-words max-w-full">/{{ h.pattern }}/ → {{ h.text }}</span>
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
            title="Regex Tester"
            description="Evaluate regular expression patterns against text with instant match results and history."
            :steps="steps"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Enter a regex pattern and sample text",
    "See matches listed immediately",
    "Use buttons to copy/download or save to history",
];

const faqs = [
    {
        question: "What syntax is allowed?",
        answer: "Standard JavaScript RegExp syntax; global flag is applied automatically.",
    },
    {
        question: "What if the pattern is invalid?",
        answer: "You'll see 'Invalid regex' in the matches area.",
    },
    {
        question: "Is history persistent?",
        answer: "No, it resets on page reload.",
    },
];

const pattern = ref("");
const text = ref("");
const history = ref([]);
const fileInput = ref(null);

const matches = computed(() => {
    if (!pattern.value || !text.value) return [];
    try {
        const regex = new RegExp(pattern.value, "g");
        const result = text.value.match(regex);
        return result || [];
    } catch (e) {
        return ["Invalid regex"];
    }
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
    a.download = "text.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearAll = () => {
    pattern.value = "";
    text.value = "";
    if (fileInput.value) fileInput.value.value = null;
};

const saveHistory = () => {
    if (!pattern.value && !text.value) return;
    history.value.unshift({ pattern: pattern.value, text: text.value, date: new Date().toLocaleString() });
};

const restore = (h) => {
    pattern.value = h.pattern;
    text.value = h.text;
};

const clearHistory = () => {
    history.value = [];
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const data = history.value.map(h => `/${h.pattern}/ ${h.text}`).join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "regex-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};
</script>
