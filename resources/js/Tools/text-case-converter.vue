<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('textCaseConverter.title') }}</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>{{ t('textCaseConverter.load_file') }}</span>
                <input ref="fileInput" type="file" accept=".txt" @change="loadFile" class="form-input" />
            </label>
            <button
                @click="copyText"
                :disabled="!text"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                {{ t('textCaseConverter.copy_text') }}
            </button>
            <button
                @click="downloadText"
                :disabled="!text"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {{ t('textCaseConverter.download_text') }}
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                {{ t('textCaseConverter.clear') }}
            </button>
            <button
                @click="saveHistory"
                :disabled="!text"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                {{ t('textCaseConverter.save') }}
            </button>
        </div>

        <textarea
            v-model="text"
            rows="5"
            :placeholder="t('textCaseConverter.enter_your_text')"
            class="w-full border dark:border-gray-600 rounded-lg p-4 mb-6"
        />

        <div class="space-y-4">
            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('textCaseConverter.uppercase') }}</label>
                <input
                    :value="upper"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>

            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('textCaseConverter.lowercase') }}</label>
                <input
                    :value="lower"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>

            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('textCaseConverter.camelcase') }}</label>
                <input
                    :value="camel"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>

            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('textCaseConverter.snake_case') }}</label>
                <input
                    :value="snake"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>

            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('textCaseConverter.kebab_case') }}</label>
                <input
                    :value="kebab"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">{{ t('textCaseConverter.history') }}</h3>
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
                        {{ t('textCaseConverter.restore') }}
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('textCaseConverter.download_history') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    {{ t('textCaseConverter.clear_history') }}
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
const title = computed(() => t('textCaseConverter.title'));
const mainDescription = computed(() => t('textCaseConverter.mainDescription'));
const extendedDescription = computed(() => t('textCaseConverter.extendedDescription'));
const features = computed(() => t('textCaseConverter.features'));
const steps = computed(() => t('textCaseConverter.steps'));
const examples = computed(() => t('textCaseConverter.examples'));
const useCases = computed(() => t('textCaseConverter.useCases'));
const technicalDetails = computed(() => t('textCaseConverter.technicalDetails'));
const bestPractices = computed(() => t('textCaseConverter.bestPractices'));
const commonErrors = computed(() => t('textCaseConverter.commonErrors'));
const alternatives = computed(() => t('textCaseConverter.alternatives'));
const relatedTools = computed(() => t('textCaseConverter.relatedTools'));
const faqs = computed(() => t('textCaseConverter.faqs'));
const securityNote = computed(() => t('textCaseConverter.securityNote'));
const additionalContent = computed(() => t('textCaseConverter.additionalContent'));

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
