<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Text Case Converter</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
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
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
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
            rows="5"
            placeholder="Enter your text..."
            class="w-full border dark:border-gray-600 rounded-lg p-4 mb-6"
        />

        <div class="space-y-4">
            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">UPPERCASE</label>
                <input
                    :value="upper"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>

            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">lowercase</label>
                <input
                    :value="lower"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>

            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">camelCase</label>
                <input
                    :value="camel"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>

            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">snake_case</label>
                <input
                    :value="snake"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>

            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">kebab-case</label>
                <input
                    :value="kebab"
                    readonly
                    class="w-full border rounded p-2"
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
                        <span class="font-mono block break-words max-w-full">{{ h.text }}</span>
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
            title="Text Case Converter"
            description="Convert text into various cases with history and file support."
            :steps="steps"
            :examples="examples"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const examples = [
    {
        title: "Programming Variables",
        description: "Convert text to different programming case formats",
        code: "Input: User Profile Management System",
        result: "UPPERCASE: USER PROFILE MANAGEMENT SYSTEM | lowercase: user profile management system | camelCase: userProfileManagementSystem | snake_case: user_profile_management_system | kebab-case: user-profile-management-system"
    },
    {
        title: "CSS Class Names",
        description: "Convert text to CSS-friendly kebab-case",
        code: "Input: Main Navigation Header",
        result: "kebab-case: main-navigation-header (perfect for CSS classes)",
        steps: [
            "Enter descriptive text for CSS class",
            "Copy kebab-case result",
            "Use in HTML class attributes",
            "Maintain consistent naming convention"
        ]
    },
    {
        title: "JavaScript Variables",
        description: "Convert to camelCase for JavaScript variables",
        code: "Input: Shopping Cart Total Price",
        result: "camelCase: shoppingCartTotalPrice (ideal for JS variables)"
    }
];

const steps = [
    "Paste or load text",
    "View conversions immediately",
    "Copy, download or save original text",
];

const faqs = [
    {
        question: "Does conversion modify punctuation?",
        answer: "Non-alphanumeric characters are removed in camel, snake and kebab cases.",
    },
    {
        question: "Can I use a file?",
        answer: "Yes, drop a .txt file using the load panel above.",
    },
    {
        question: "Is history permanent?",
        answer: "No, history is kept only in the current session.",
    },
];

const text = ref("");
const history = ref([]);
const fileInput = ref(null);

const upper = computed(() => text.value.toUpperCase());
const lower = computed(() => text.value.toLowerCase());
const camel = computed(() => {
    return text.value
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]+/g, "")
        .split(" ")
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join("");
});
const snake = computed(() => {
    return text.value
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]+/g, "")
        .trim()
        .replace(/\s+/g, "_");
});
const kebab = computed(() => {
    return text.value
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]+/g, "")
        .trim()
        .replace(/\s+/g, "-");
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
    a.download = "text-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};
</script>
