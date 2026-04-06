<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('wordCounter.title') }}</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>{{ t('wordCounter.load_file') }}</span>
                <input ref="fileInput" type="file" accept=".txt" @change="loadFile" class="form-input" />
            </label>
            <button
                @click="copyText"
                :disabled="!text"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                {{ t('wordCounter.copy_text') }}
            </button>
            <button
                @click="downloadText"
                :disabled="!text"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {{ t('wordCounter.download_text') }}
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                {{ t('wordCounter.clear') }}
            </button>
            <button
                @click="saveHistory"
                :disabled="!text"
                class="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition disabled:opacity-50"
            >
                {{ t('wordCounter.save') }}
            </button>
        </div>

        <textarea
            v-model="text"
            rows="10"
            :placeholder="t('wordCounter.paste_your_text_here')"
            class="w-full border dark:border-gray-600 rounded-xl p-4 mb-6 text-gray-900 dark:text-white"
        />

        <div class="grid grid-cols-2 md:grid-cols-7 gap-4 mb-4">
            <div class="border dark:border-gray-600 rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('wordCounter.words') }}</p>
                <p class="text-xl font-bold">{{ wordCount }}</p>
            </div>

            <div class="border dark:border-gray-600 rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('wordCounter.characters') }}</p>
                <p class="text-xl font-bold">{{ charCount }}</p>
            </div>

            <div class="border dark:border-gray-600 rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('wordCounter.characters_no_spaces') }}</p>
                <p class="text-xl font-bold">{{ charNoSpaces }}</p>
            </div>

            <div class="border dark:border-gray-600 rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('wordCounter.lines') }}</p>
                <p class="text-xl font-bold">{{ lineCount }}</p>
            </div>

            <div class="border dark:border-gray-600 rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('wordCounter.reading_time') }}</p>
                <p class="text-xl font-bold">{{ readingTime }} min</p>
            </div>

            <div class="border dark:border-gray-600 rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('wordCounter.avg_word_length') }}</p>
                <p class="text-xl font-bold">{{ avgWordLength }}</p>
            </div>

            <div class="border dark:border-gray-600 rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('wordCounter.unique_words') }}</p>
                <p class="text-xl font-bold">{{ uniqueWords }}</p>
            </div>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">{{ t('wordCounter.history') }}</h3>
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
                        {{ t('wordCounter.restore') }}
                    </button>
                </li>
            </ul>
            <button
                @click="clearHistory"
                class="mt-3 px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                {{ t('wordCounter.clear_history') }}
            </button>
        </div>

        <ToolSeoContentExpanded
            :title="title"
            :description="mainDescription"
            :extended-description="extendedDescription"
            :features="features"
            :steps="steps"
            :examples="examples"
            :use-cases="useCases"
            :technical-details="technicalDetails"
            :best-practices="bestPractices"
            :common-errors="commonErrors"
            :alternatives="alternatives"
            :related-tools="relatedTools"
            :faqs="faqs"
            :security-note="securityNote"
            :additional-content="additionalContent"
        />
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('wordCounter.title'));
const mainDescription = computed(() => t('wordCounter.mainDescription'));
const extendedDescription = computed(() => t('wordCounter.extendedDescription'));
const features = computed(() => t('wordCounter.features'));
const steps = computed(() => t('wordCounter.steps'));
const examples = computed(() => t('wordCounter.examples'));
const useCases = computed(() => t('wordCounter.useCases'));
const technicalDetails = computed(() => t('wordCounter.technicalDetails'));
const bestPractices = computed(() => t('wordCounter.bestPractices'));
const commonErrors = computed(() => t('wordCounter.commonErrors'));
const alternatives = computed(() => t('wordCounter.alternatives'));
const relatedTools = computed(() => t('wordCounter.relatedTools'));
const faqs = computed(() => t('wordCounter.faqs'));
const securityNote = computed(() => t('wordCounter.securityNote'));
const additionalContent = computed(() => t('wordCounter.additionalContent'));

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
