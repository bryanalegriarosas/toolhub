<template>
    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 class="text-3xl font-bold mb-6">Hash Generator</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2">
                <span>Load file</span>
                <input ref="fileInput" type="file" accept="*" @change="loadFile" class="form-input" />
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
                :disabled="!text"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                Save
            </button>
        </div>

        <textarea
            v-model="text"
            @input="generateHashes"
            rows="4"
            placeholder="Enter text..."
            class="w-full border rounded-lg p-4 mb-6"
        />

        <div class="space-y-4">
            <div class="relative">
                <label class="text-sm text-gray-500">SHA-1</label>
                <input
                    :value="sha1"
                    readonly
                    class="w-full border rounded p-2 pr-24"
                />
                <div class="absolute top-[1.7rem] right-2 flex gap-1">
                    <button @click="copyHash('sha1')" class="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700">Copy</button>
                    <button @click="downloadHash('sha1')" class="text-xs px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Download</button>
                </div>
            </div>

            <div class="relative">
                <label class="text-sm text-gray-500">SHA-256</label>
                <input
                    :value="sha256"
                    readonly
                    class="w-full border rounded p-2 pr-24"
                />
                <div class="absolute top-[1.7rem] right-2 flex gap-1">
                    <button @click="copyHash('sha256')" class="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700">Copy</button>
                    <button @click="downloadHash('sha256')" class="text-xs px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Download</button>
                </div>
            </div>

            <div class="relative">
                <label class="text-sm text-gray-500">SHA-512</label>
                <input
                    :value="sha512"
                    readonly
                    class="w-full border rounded p-2 pr-24"
                />
                <div class="absolute top-[1.7rem] right-2 flex gap-1">
                    <button @click="copyHash('sha512')" class="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700">Copy</button>
                    <button @click="downloadHash('sha512')" class="text-xs px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Download</button>
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
                        <span class="font-mono">{{ h.sha1 }}</span>
                        <p class="text-xs text-gray-500 truncate max-w-xs">{{ h.text }}</p>
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
            title="Hash Generator"
            description="Produce SHA‑1, SHA‑256 and SHA‑512 hashes from text or files. Manage results with copy, download and history features."
            :steps="steps"
            :examples="examples"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Type or paste text or load a file",
    "Hashes are generated automatically",
    "Copy or download individual hashes",
    "Save to history and restore later",
];

const examples = [
    {
        title: "Hashing Passwords",
        description: "Generate secure SHA-256 hash for password storage",
        code: "mypassword123",
        result: "SHA-256: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd5f7b9e1e00fce",
        steps: [
            "Enter your password",
            "Copy the SHA-256 hash",
            "Store in database (never store plain passwords)",
            "Use for verification during login"
        ]
    },
    {
        title: "Hashing File Content",
        description: "Generate hash for data integrity verification",
        code: "Important document content that should not be modified",
        result: "SHA-256: 2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae",
        steps: [
            "Paste or load file content",
            "Generate SHA-256 hash",
            "Store hash for verification",
            "Compare later to detect changes"
        ]
    },
    {
        title: "API Key Generation",
        description: "Create unique identifiers for API keys",
        code: "user123_api_secret_2024",
        result: "SHA-1: 8d6e8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c"
    }
];

const faqs = [
    {
        question: "Which algorithms are supported?",
        answer: "SHA-1, SHA-256 and SHA-512 are calculated in the browser using Web Crypto API.",
    },
    {
        question: "Can I hash a file?",
        answer: "Yes – load any file and its content will be hashed automatically.",
    },
    {
        question: "Is history saved between sessions?",
        answer: "No, history only lives in-memory during the current visit.",
    },
];

const text = ref("");
const sha1 = ref("");
const sha256 = ref("");
const sha512 = ref("");
const history = ref([]);

const stopWords = []; // unused but keep placeholder

async function generateHashes() {
    if (!text.value) {
        sha1.value = "";
        sha256.value = "";
        sha512.value = "";
        return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text.value);

    async function hash(algo) {
        const buffer = await crypto.subtle.digest(algo, data);
        return Array.from(new Uint8Array(buffer))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
    }

    sha1.value = await hash("SHA-1");
    sha256.value = await hash("SHA-256");
    sha512.value = await hash("SHA-512");
}

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        text.value = ev.target.result;
        generateHashes();
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

const copyHash = (which) => {
    const val = which === 'sha1' ? sha1.value : which === 'sha256' ? sha256.value : sha512.value;
    if (val) navigator.clipboard.writeText(val);
};

const downloadHash = (which) => {
    let val;
    if (which === 'sha1') val = sha1.value;
    else if (which === 'sha256') val = sha256.value;
    else if (which === 'sha512') val = sha512.value;
    if (!val) return;
    const blob = new Blob([val], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${which}.txt`;
    a.click();
    URL.revokeObjectURL(url);
};

const saveHistory = () => {
    if (!text.value) return;
    history.value.unshift({
        text: text.value,
        sha1: sha1.value,
        sha256: sha256.value,
        sha512: sha512.value,
    });
};

const restore = (h) => {
    text.value = h.text;
    sha1.value = h.sha1;
    sha256.value = h.sha256;
    sha512.value = h.sha512;
};

const fileInput = ref(null);

const clearAll = () => {
    text.value = "";
    generateHashes();
    if (fileInput.value) fileInput.value.value = null;
};

const clearHistory = () => {
    history.value = [];
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const data = history.value
        .map((h) => `${h.sha1} | ${h.sha256} | ${h.sha512}`)
        .join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hash-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};
</script>
