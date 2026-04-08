<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('slugGenerator.title') }}</h1>

        <div class="space-y-6">
            <div class="flex items-center gap-2">
                <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>{{ t('slugGenerator.load_file') }}</span>
                    <input ref="fileInput" type="file" accept=".txt" @change="loadFile" class="form-input" />
                </label>
            </div>

            <div>
                <label class="block text-sm mb-2 text-gray-700 dark:text-gray-300">{{ t('slugGenerator.enter_text') }}</label>

                <input
                    v-model="text"
                    type="text"
                    placeholder="Hello World 2026"
                    class="w-full border dark:border-gray-600 rounded-lg p-3"
                />
            </div>

            <div class="flex flex-col md:flex-row md:items-center gap-4">
                <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <input type="radio" value="-" v-model="separator" />
                    <span>{{ t('slugGenerator.hyphen') }}</span>
                </label>
                <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <input type="radio" value="_" v-model="separator" />
                    <span>{{ t('slugGenerator.underscore') }}</span>
                </label>
                <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <input type="checkbox" v-model="removeStopWords" />
                    <span>{{ t('slugGenerator.remove_common_words') }}</span>
                </label>
            </div>

            <div>
                <label class="block text-sm mb-2 text-gray-700 dark:text-gray-300">{{ t('slugGenerator.slug') }}</label>

                <input
                    :value="slug"
                    readonly
                    class="w-full border dark:border-gray-600 rounded-lg p-3 bg-gray-100 dark:bg-gray-800"
                />
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ t('slugGenerator.length') }} {{ slug.length }}</p>
            </div>

            <div class="flex flex-wrap gap-2">
                <button
                    @click="copySlug"
                    :disabled="!slug"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                    {{ t('slugGenerator.copy') }}
                </button>
                <button
                    @click="downloadSlug"
                    :disabled="!slug"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('slugGenerator.download_result') }}
                </button>
                <button
                    @click="clearAll"
                    class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    {{ t('slugGenerator.clear') }}
                </button>
                <button
                    @click="saveHistory"
                    :disabled="!slug"
                    class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
                >
                    {{ t('slugGenerator.save') }}
                </button>
            </div>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">{{ t('slugGenerator.history') }}</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items-center justify-between"
                >
                    <div>
                        <span class="font-mono">{{ h.summary }}</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400 truncate max-w-xs">{{ h.text }}</p>
                    </div>
                    <button
                        @click="restore(h)"
                        class="mt-1 sm:mt-0 text-xs text-blue-600 hover:underline"
                    >
                        {{ t('slugGenerator.restore') }}
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('slugGenerator.download_history') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    {{ t('slugGenerator.clear_history') }}
                </button>
            </div>
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
const title = computed(() => t('slugGenerator.title'));
const mainDescription = computed(() => t('slugGenerator.mainDescription'));
const extendedDescription = computed(() => t('slugGenerator.extendedDescription'));
const features = computed(() => t('slugGenerator.features'));
const steps = computed(() => t('slugGenerator.steps'));
const examples = computed(() => t('slugGenerator.examples'));
const useCases = computed(() => t('slugGenerator.useCases'));
const technicalDetails = computed(() => t('slugGenerator.technicalDetails'));
const bestPractices = computed(() => t('slugGenerator.bestPractices'));
const commonErrors = computed(() => t('slugGenerator.commonErrors'));
const alternatives = computed(() => t('slugGenerator.alternatives'));
const relatedTools = computed(() => t('slugGenerator.relatedTools'));
const faqs = computed(() => t('slugGenerator.faqs'));
const securityNote = computed(() => t('slugGenerator.securityNote'));
const additionalContent = computed(() => t('slugGenerator.additionalContent'));

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
