<template>
    <div class="max-w-6xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6">Slug Generator</h1>

        <div class="space-y-6">
            <div class="flex items-center gap-2">
                <label class="flex items-center gap-2">
                    <span>Load file:</span>
                    <input ref="fileInput" type="file" accept=".txt" @change="loadFile" class="form-input" />
                </label>
            </div>

            <div>
                <label class="block text-sm mb-2"> Enter text </label>

                <input
                    v-model="text"
                    type="text"
                    placeholder="Hello World 2026"
                    class="w-full border rounded-lg p-3"
                />
            </div>

            <div class="flex flex-col md:flex-row md:items-center gap-4">
                <label class="flex items-center gap-2">
                    <input type="radio" value="-" v-model="separator" />
                    <span>Hyphen (-)</span>
                </label>
                <label class="flex items-center gap-2">
                    <input type="radio" value="_" v-model="separator" />
                    <span>Underscore (_)</span>
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="removeStopWords" />
                    <span>Remove common words</span>
                </label>
            </div>

            <div>
                <label class="block text-sm mb-2"> Slug </label>

                <input
                    :value="slug"
                    readonly
                    class="w-full border rounded-lg p-3 bg-gray-100"
                />
                <p class="text-sm text-gray-500 mt-1">Length: {{ slug.length }}</p>
            </div>

            <div class="flex flex-wrap gap-2">
                <button
                    @click="copySlug"
                    :disabled="!slug"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                    Copy Slug
                </button>
                <button
                    @click="downloadSlug"
                    :disabled="!slug"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    Download Slug
                </button>
                <button
                    @click="clearAll"
                    class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                    Clear
                </button>
                <button
                    @click="saveHistory"
                    :disabled="!slug"
                    class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
                >
                    Save
                </button>
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
                        <span class="font-mono">{{ h.summary }}</span>
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
            title="Slug Generator"
            description="Create URL-friendly slugs from any text with customizable separators and stop-word removal."
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
    "Type or paste text",
    "Choose a separator and whether to strip common words",
    "Copy, download or save the resulting slug",
    "View or download your slug history",
];

const examples = [
    {
        title: "Blog Post URL",
        description: "Create SEO-friendly URL for blog posts",
        code: "Input: How to Learn JavaScript Programming in 2024",
        result: "Slug: how-to-learn-javascript-programming-in-2024"
    },
    {
        title: "Product Page URL",
        description: "Generate clean product URLs for e-commerce",
        code: "Input: Apple iPhone 15 Pro Max - 256GB - Blue Titanium",
        result: "Slug: apple-iphone-15-pro-max-256gb-blue-titanium",
        steps: [
            "Enter product title with details",
            "Use hyphen separator for readability",
            "Enable 'Remove common words' option",
            "Copy the SEO-friendly slug"
        ]
    },
    {
        title: "Article Title with Special Characters",
        description: "Handle special characters and symbols",
        code: "Input: C++ Programming: The Complete Guide (2024 Edition)",
        result: "Slug: c-programming-complete-guide-2024-edition"
    }
];

const faqs = [
    {
        question: "Why remove common words?",
        answer: "Stripping words like 'the' or 'and' can make shorter, cleaner slugs.",
    },
    {
        question: "Can I change the separator?",
        answer: "Yes. You can switch between hyphens and underscores.",
    },
    {
        question: "How is the slug generated?",
        answer: "Text is lowercased, non-word characters removed, and spaces replaced with the selected separator.",
    },
];

const text = ref("");
const separator = ref("-");
const removeStopWords = ref(false);
const history = ref([]);

const stopWords = [
    "a",
    "an",
    "the",
    "and",
    "or",
    "but",
    "of",
    "to",
    "in",
    "on",
    "for",
    "with",
    "at",
    "by",
    "from",
];

const slug = computed(() => {
    let s = text.value.toLowerCase().trim();
    if (removeStopWords.value && s) {
        s = s
            .split(/\s+/)
            .filter((w) => !stopWords.includes(w))
            .join(" ");
    }
    const sep = separator.value;
    return s
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, sep)
        .replace(new RegExp(sep + "+", "g"), sep);
});

const copySlug = () => {
    if (slug.value) navigator.clipboard.writeText(slug.value);
};

// allow exporting history to a file
const downloadHistory = () => {
    if (!history.value.length) return;
    const textData = history.value.map(h => h.summary).join("\n");
    const blob = new Blob([textData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "slug-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};
const downloadSlug = () => {
    if (!slug.value) return;
    const blob = new Blob([slug.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "slug.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const fileInput = ref(null);

const clearAll = () => {
    text.value = "";
    if (fileInput.value) fileInput.value.value = null;
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    // use file name without extension as default slug source
    text.value = file.name.replace(/\.[^/.]+$/, "");
};


const saveHistory = () => {
    if (!slug.value) return;
    history.value.unshift({
        summary: slug.value,
        text: text.value,
    });
};

const restore = (h) => {
    text.value = h.text;
};

const clearHistory = () => {
    history.value = [];
};
</script>
