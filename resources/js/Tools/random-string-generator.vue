<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Random String Generator</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>Load file:</span>
                <input ref="fileInput" type="file" accept="*" @change="loadFile" class="form-input" />
            </label>
            <button
                @click="copyResult"
                :disabled="!result"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                Copy
            </button>
            <button
                @click="downloadResult"
                :disabled="!result"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                Download Result
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                Clear
            </button>
            <button
                @click="saveHistory"
                :disabled="!result"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                Save
            </button>
        </div>

        <div class="space-y-6">
            <div>
                <label class="block text-sm mb-2 text-gray-700 dark:text-gray-300">Length</label>

                <input
                    v-model="length"
                    type="number"
                    min="4"
                    max="128"
                    class="w-full border dark:border-gray-600 rounded-lg p-3"
                />
            </div>

            <div class="flex gap-6">
                <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <input type="checkbox" v-model="includeLetters" />
                    Letters
                </label>

                <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <input type="checkbox" v-model="includeNumbers" />
                    Numbers
                </label>

                <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <input type="checkbox" v-model="includeSymbols" />
                    Symbols
                </label>
            </div>

            <button
                @click="generate"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
                Generate
            </button>

            <div v-if="result">
                <label class="block text-sm mb-2 mt-4">Result</label>

                <input
                    :value="result"
                    readonly
                    class="w-full border dark:border-gray-600 rounded-lg p-3 bg-gray-100 dark:bg-gray-800"
                />
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
                        <span class="font-mono truncate max-w-xs">{{ h.result }}</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ h.date }}</p>
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
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    Clear History
                </button>
            </div>
        </div>

        <ToolSeoContent
            title="Random String Generator"
            description="Create secure random strings with custom length and charset. Includes history, copy/download and file support."
            :steps="steps"
            :examples="examples"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const examples = [
    {
        title: "API Key Generator",
        description: "Generate secure API key for authentication",
        code: "Length: 32 | Characters: Letters + Numbers | Symbols: No",
        result: "Generated: a7b3K9m2X5p8Q1r4T6y9U2w5Z8c1F (secure API key)"
    },
    {
        title: "Session Token",
        description: "Create random session token for web applications",
        code: "Length: 64 | Characters: Letters + Numbers + Symbols | Symbols: Yes",
        result: "Generated: K9$m2X5#p8Q1r4!T6y9U2@w5Z8c1F*a7b3K9m2X5p8Q1r4T6y9U2w5Z8c1F",
        steps: [
            "Set length to 64 characters for security",
            "Include all character types",
            "Generate and store in secure database",
            "Use for user session authentication"
        ]
    },
    {
        title: "Random Password",
        description: "Generate strong random password",
        code: "Length: 16 | Characters: Letters + Numbers + Symbols | Symbols: Yes",
        result: "Generated: Q1r4!T6y9U2@w5Z8 (strong password)"
    }
];

const steps = [
    "Choose length and character sets",
    "Click generate to produce a string",
    "Copy, download or save to history",
];

const faqs = [
    {
        question: "How long can the string be?",
        answer: "Between 4 and 128 characters, configurable by the length field.",
    },
    {
        question: "What characters are included?",
        answer: "You can toggle letters, numbers and symbols independently.",
    },
    {
        question: "Does history persist?",
        answer: "No, history exists only during the current session.",
    },
];

const length = ref(16);
const includeLetters = ref(true);
const includeNumbers = ref(true);
const includeSymbols = ref(false);
const result = ref("");
const history = ref([]);
const fileInput = ref(null);

const generate = () => {
    let chars = "";
    if (includeLetters.value) {
        chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers.value) {
        chars += "0123456789";
    }
    if (includeSymbols.value) {
        chars += "!@#$%^&*()_+-=[]{}<>?";
    }
    if (!chars) {
        result.value = "";
        return;
    }
    let output = "";
    for (let i = 0; i < length.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        output += chars[randomIndex];
    }
    result.value = output;
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        length.value = parseInt(ev.target.result, 10) || length.value;
    };
    reader.readAsText(file);
};

const copyResult = () => {
    if (result.value) navigator.clipboard.writeText(result.value);
};

const downloadResult = () => {
    if (!result.value) return;
    const blob = new Blob([result.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "random.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearAll = () => {
    result.value = "";
    length.value = 16;
    includeLetters.value = true;
    includeNumbers.value = true;
    includeSymbols.value = false;
    if (fileInput.value) fileInput.value.value = null;
};

const saveHistory = () => {
    if (!result.value) return;
    history.value.unshift({ result: result.value, date: new Date().toLocaleString() });
};

const restore = (h) => {
    result.value = h.result;
};

const clearHistory = () => {
    history.value = [];
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const data = history.value.map(h => h.result).join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "random-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};
</script>
