<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                Text to Base64 Encoder / Decoder
            </h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Encode or decode Base64 from plain text instantly with history and download features.
            </p>

            <div class="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <label class="flex items-center gap-2">
                    <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300">Load file</span>
                    <input ref="fileInput" type="file" accept="text/*" @change="loadFile"
                        class="form-input text-sm sm:text-base" />
                </label>
                <button @click="downloadResult" :disabled="!output"
                    class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-sm sm:text-base">
                    Download
                </button>
                <button @click="saveHistory" :disabled="!input"
                    class="px-3 sm:px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50 text-sm sm:text-base">
                    Save
                </button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

                <!-- INPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">Input</h2>
                    <textarea v-model="input" @input="autoEncode"
                        class="w-full h-64 sm:h-80 p-3 sm:p-4 border dark:border-gray-600 rounded-lg font-mono text-xs sm:text-sm resize-none dark:bg-gray-700 dark:text-white"
                        placeholder="Enter text or Base64..."></textarea>
                </div>

                <!-- OUTPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">Output</h2>
                    <textarea readonly :value="output"
                        class="w-full h-64 sm:h-80 p-3 sm:p-4 border dark:border-gray-600 rounded-lg font-mono text-xs sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-white resize-none"></textarea>
                </div>

            </div>

            <div v-if="error" class="text-red-500 text-xs sm:text-sm mb-4">
                {{ error }}
            </div>

            <div class="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                <button @click="encode"
                    class="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                    Encode
                </button>

                <button @click="decode"
                    class="px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm sm:text-base">
                    Decode
                </button>

                <button @click="copyResult"
                    class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base"
                    :disabled="!output">
                    Copy
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-sm sm:text-base">
                    Clear
                </button>
            </div>

            <div v-if="history.length" class="mt-4 sm:mt-6">
                <h3 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">History</h3>
                <div class="max-h-48 sm:max-h-64 overflow-y-auto border dark:border-gray-600 rounded-lg p-3 sm:p-4 bg-gray-50 dark:bg-gray-700">
                    <ul class="space-y-2">
                        <li v-for="(item, idx) in history" :key="idx"
                            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-2 bg-white dark:bg-gray-600 rounded border dark:border-gray-500">
                            <div class="flex-1 min-w-0">
                                <div class="font-mono text-xs sm:text-sm truncate">{{ item.type === 'encode' ? 'Encode'
                                    : 'Decode' }}: {{ item.input.substring(0, 50) }}{{ item.input.length > 50 ? '...' :
                                    '' }}</div>
                                <div class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ item.output.substring(0, 50) }}{{
                                    item.output.length > 50 ? '...' : '' }}</div>
                            </div>
                            <div class="flex gap-1 self-start sm:self-auto">
                                <button @click="restore(item)"
                                    class="text-xs text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900">Restore</button>
                                <button @click="copyHistoryItem(item.output)"
                                    class="text-xs text-green-600 dark:text-green-400 hover:underline px-2 py-1 rounded hover:bg-green-50 dark:hover:bg-green-900">Copy</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="flex gap-2 sm:gap-3 mt-3">
                    <button @click="downloadHistory" :disabled="!history.length"
                        class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-xs sm:text-sm">
                        Download All
                    </button>
                    <button @click="clearHistory"
                        class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-xs sm:text-sm">
                        Clear History
                    </button>
                </div>
            </div>

            <ToolSeoContent title="Text to Base64 Encoder / Decoder"
                description="Encode and decode Base64 text with automatic detection, history tracking, and batch processing capabilities."
                :steps="steps" :examples="examples" :faqs="faqs" />

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Enter text or Base64 in the input field",
    "Click Encode or Decode to convert",
    "Copy or download the result",
    "Save to history for later reference",
];

const examples = [
    {
        title: "Encoding Text",
        description: "Convert plain text to Base64 format",
        code: "Hello, World!",
        result: "SGVsbG8sIFdvcmxkIQ==",
        steps: [
            "Enter 'Hello, World!' in the input field",
            "Click 'Encode' button",
            "Copy the Base64 result: SGVsbG8sIFdvcmxkIQ=="
        ]
    },
    {
        title: "Decoding Base64",
        description: "Convert Base64 back to readable text",
        code: "SGVsbG8sIFdvcmxkIQ==",
        result: "Hello, World!",
        steps: [
            "Enter 'SGVsbG8sIFdvcmxkIQ==' in the input field",
            "Click 'Decode' button",
            "Get the decoded text: Hello, World!"
        ]
    },
    {
        title: "Encoding Special Characters",
        description: "Handle Unicode and special characters",
        code: "¡Hola! ¿Cómo estás?",
        result: "wqFIb2xhISDCsUNvbW8gZXN0w6FzPw==",
        steps: [
            "Enter text with special characters",
            "Click 'Encode' to handle Unicode properly",
            "Use the Base64 result for safe transmission"
        ]
    }
];

const faqs = [
    {
        question: "What is Base64 encoding?",
        answer: "Base64 is an encoding scheme that converts binary data into ASCII text format, commonly used for safe data transmission.",
    },
    {
        question: "Can I encode Unicode characters?",
        answer: "Yes, the tool properly handles Unicode characters and special symbols using UTF-8 encoding before Base64 conversion.",
    },
    {
        question: "Is my data secure?",
        answer: "All processing happens in your browser locally. No data is sent to any server, ensuring complete privacy.",
    },
    {
        question: "Can I process large files?",
        answer: "Yes, you can load text files using the file input. The tool handles files of reasonable size for browser processing.",
    },
];

const input = ref("");
const output = ref("");
const error = ref("");
const history = ref([]);
const fileInput = ref(null);

const encode = () => {
    error.value = "";
    try {
        output.value = btoa(unescape(encodeURIComponent(input.value)));
    } catch (e) {
        error.value = "Error encoding text";
        output.value = "";
    }
};

const decode = () => {
    error.value = "";
    try {
        output.value = decodeURIComponent(escape(atob(input.value)));
    } catch (e) {
        error.value = "Invalid Base64 format";
        output.value = "";
    }
};

const autoEncode = () => {
    if (input.value) {
        encode();
    } else {
        output.value = "";
        error.value = "";
    }
};

const copyResult = () => {
    if (output.value) {
        navigator.clipboard.writeText(output.value);
    }
};

const downloadResult = () => {
    if (!output.value) return;
    const blob = new Blob([output.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "base64-result.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const saveHistory = () => {
    if (!input.value || !output.value) return;

    const isEncoded = input.value === output.value ? false :
        input.value.length < output.value.length;

    history.value.unshift({
        input: input.value,
        output: output.value,
        type: isEncoded ? 'encode' : 'decode',
        timestamp: new Date().toISOString()
    });

    if (history.value.length > 20) {
        history.value = history.value.slice(0, 20);
    }
};

const restore = (item) => {
    input.value = item.input;
    output.value = item.output;
    error.value = "";
};

const copyHistoryItem = (text) => {
    navigator.clipboard.writeText(text);
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const data = history.value
        .map(item => `${item.type.toUpperCase()}: ${item.input} -> ${item.output}`)
        .join("\n\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "base64-history.txt";
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
    if (fileInput.value) fileInput.value.value = null;
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        input.value = ev.target.result;
        autoEncode();
    };
    reader.readAsText(file);
};
</script>
