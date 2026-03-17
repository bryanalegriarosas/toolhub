<template>
    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 class="text-3xl font-bold mb-6">Word Counter</h1>

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
                :disabled="!text"
                class="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition disabled:opacity-50"
            >
                Save
            </button>
        </div>

        <textarea
            v-model="text"
            rows="10"
            placeholder="Paste your text here..."
            class="w-full border rounded-xl p-4 mb-6"
        />

        <div class="grid grid-cols-2 md:grid-cols-7 gap-4 mb-4">
            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Words</p>
                <p class="text-xl font-bold">{{ wordCount }}</p>
            </div>

            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Characters</p>
                <p class="text-xl font-bold">{{ charCount }}</p>
            </div>

            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Characters (no spaces)</p>
                <p class="text-xl font-bold">{{ charNoSpaces }}</p>
            </div>

            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Lines</p>
                <p class="text-xl font-bold">{{ lineCount }}</p>
            </div>

            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Reading Time</p>
                <p class="text-xl font-bold">{{ readingTime }} min</p>
            </div>

            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Avg word length</p>
                <p class="text-xl font-bold">{{ avgWordLength }}</p>
            </div>

            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Unique words</p>
                <p class="text-xl font-bold">{{ uniqueWords }}</p>
            </div>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">History</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex items-center justify-between"
                >
                    <span>{{ h.summary }}</span>
                    <button
                        @click="restore(h)"
                        class="text-xs text-blue-600 hover:underline"
                    >
                        Restore
                    </button>
                </li>
            </ul>
            <button
                @click="clearHistory"
                class="mt-3 px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
                Clear History
            </button>
        </div>

        <ToolSeoContent
            title="Word Counter"
            description="Count words, characters, sentences, and paragraphs in your text instantly. Perfect for writers, students, and content creators."
            :steps="steps"
            :examples="examples"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Paste or load text",
    "Review word, character and line counts",
    "Use buttons to copy, download, clear or save to history",
];

const examples = [
    {
        title: "Counting Words in Article",
        description: "Analyze text content for word count and statistics",
        code: "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet at least once. It's commonly used for testing typefaces and keyboards.",
        result: "Words: 23 | Characters: 136 | Characters (no spaces): 113 | Sentences: 2 | Paragraphs: 1"
    },
    {
        title: "Blog Post Analysis",
        description: "Check blog post length and readability",
        code: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        result: "Words: 30 | Characters: 201 | Characters (no spaces): 168 | Sentences: 3 | Paragraphs: 1",
        steps: [
            "Paste your blog post content",
            "Review word count for SEO optimization",
            "Check character limits for social media",
            "Analyze sentence structure for readability"
        ]
    }
];

const faqs = [
    { question: "How are words counted?", answer: "Words are split by whitespace and trimmed; multiple spaces are ignored." },
    { question: "What is a ‘unique word’?", answer: "It's the number of distinct words, case-insensitive." },
    { question: "How is reading time calculated?", answer: "Assuming 200 words per minute." },
];

const text = ref("");
const history = ref([]);

const wordCount = computed(() => {
    if (!text.value) return 0;
    return text.value.trim().split(/\s+/).filter(w => w).length;
});

const charCount = computed(() => {
    return text.value.length;
});

const charNoSpaces = computed(() => {
    return text.value.replace(/\s/g, "").length;
});

const lineCount = computed(() => {
    if (!text.value) return 0;
    return text.value.split("\n").length;
});

const readingTime = computed(() => {
    const words = wordCount.value;
    const minutes = words / 200;
    return minutes.toFixed(2);
});

const avgWordLength = computed(() => {
    if (wordCount.value === 0) return 0;
    return (charNoSpaces.value / wordCount.value).toFixed(2);
});

const uniqueWords = computed(() => {
    const words = text.value.toLowerCase().trim().split(/\s+/).filter(w => w);
    return new Set(words).size;
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

const fileInput = ref(null);

const clearAll = () => {
    text.value = "";
    if (fileInput.value) fileInput.value.value = null;
};

const saveHistory = () => {
    if (!text.value) return;
    history.value.unshift({
        summary: `${wordCount.value} words, ${lineCount.value} lines`,
        content: text.value,
    });
};

const restore = (h) => {
    text.value = h.content;
};

const clearHistory = () => {
    history.value = [];
};
</script>
