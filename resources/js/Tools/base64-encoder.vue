<template>
    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">Base64 Encoder</h2>

        <div class="flex flex-col md:flex-row md:items-center gap-4">
            <label class="flex items-center gap-2">
                <input type="checkbox" v-model="autoProcess" />
                <span>Auto</span>
            </label>
            <label class="flex items-center gap-2">
                <span>Load file:</span>
                <input ref="fileInput" type="file" @change="loadFile" class="form-input" />
            </label>
        </div>

        <textarea
            v-model="input"
            placeholder="Paste text here..."
            class="w-full h-40 p-4 border rounded-lg font-mono text-sm focus:ring focus:ring-blue-200"
        ></textarea>

        <div class="flex flex-wrap gap-3">
            <button
                @click="process"
                :disabled="!input"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
                Encode
            </button>

            <button
                @click="copyOutput"
                :disabled="!output"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                Copy
            </button>

            <button
                @click="downloadOutput"
                :disabled="!output"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                Download
            </button>

            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
                Clear
            </button>
        </div>

        <div v-if="error" class="text-red-500 font-medium">
            {{ error }}
        </div>

        <pre
            class="w-full h-40 p-4 border rounded-lg bg-gray-900 text-green-400 text-sm overflow-auto"
        >{{ output }}</pre>

        <div v-if="history.length" class="mt-4">
            <h3 class="font-semibold mb-2">History</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex items-center justify-between"
                >
                    <span>{{ h }}</span>
                    <button
                        @click="copyOne(h)"
                        class="text-xs text-blue-600 hover:underline"
                    >
                        Copy
                    </button>
                </li>
            </ul>
            <div class="flex gap-3 mt-3">
                <button
                    @click="downloadHistory"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    Download All
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
            title="Base64 Encoder"
            description="Convert text to Base64 encoding quickly."
            :steps="steps"
            :examples="examples"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Enter or load text",
    "Click encode (or use auto)",
    "Copy or download the result",
];

const examples = [
    {
        title: "Encoding Text to Base64",
        description: "Convert plain text to Base64 for safe transmission",
        code: "Hello World!",
        result: "SGVsbG8gV29ybGQh"
    },
    {
        title: "Encoding JSON for API",
        description: "Encode JSON data for API requests",
        code: `{"user":"john","status":"active"}`,
        result: "eyJ1c2VyIjoiSm9obiIsInN0YXR1cyI6ImFjdGl2ZSJ9"
    },
    {
        title: "Encoding Special Characters",
        description: "Handle special characters and international text",
        code: "Café ☕ & Crème brûlée",
        result: "Q2Fmw6kg4pCUICYgQ3LDqG1lIGJyw7Juw6ls",
        steps: [
            "Paste text with special characters",
            "Click 'Encode' button",
            "Copy the Base64 result",
            "Use in URLs or data transmission"
        ]
    }
];

const faqs = [
    { question: "What is Base64?", answer: "A way to encode binary data as ASCII text, often used for embedding images or transmitting data." },
];

const input = ref("");
const output = ref("");
const autoProcess = ref(false);
const error = ref("");
const history = ref([]);
const fileInput = ref(null);

const process = () => {
    error.value = "";

    try {
        // always encode in this component
    // handle unicode correctly
    output.value = btoa(unescape(encodeURIComponent(input.value)));
        if (output.value) history.value.unshift(output.value);
    } catch (e) {
        error.value = `Error: ${e.message}`;
        output.value = "";
    }
};

const copyOutput = () => {
    if (!output.value) return;
    navigator.clipboard.writeText(output.value);
};

const copyOne = (h) => {
    navigator.clipboard.writeText(h);
};

const downloadOutput = () => {
    if (!output.value) return;
    const blob = new Blob([output.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "base64.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const blob = new Blob([history.value.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "history.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearHistory = () => {
    history.value = [];
};

const clearAll = () => {
    input.value = "";
    output.value = "";
    error.value = "";
    autoProcess.value = false;
    if (fileInput.value) fileInput.value.value = null;
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        input.value = ev.target.result;
        if (autoProcess.value) process();
    };
    reader.readAsText(file);
};

watch(input, (val) => {
    if (autoProcess.value && input.value) process();
});
</script>
