<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('randomStringGenerator.title') }}</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>{{ t('randomStringGenerator.load_file') }}</span>
                <input ref="fileInput" type="file" accept="*" @change="loadFile" class="form-input" />
            </label>
            <button
                @click="copyResult"
                :disabled="!result"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                {{ t('randomStringGenerator.copy') }}
            </button>
            <button
                @click="downloadResult"
                :disabled="!result"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {{ t('randomStringGenerator.download_result') }}
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
                {{ t('randomStringGenerator.save') }}
            </button>
        </div>

        <div class="space-y-6">
            <div>
                <label class="block text-sm mb-2 text-gray-700 dark:text-gray-300">{{ t('randomStringGenerator.length') }}</label>

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
                    {{ t('randomStringGenerator.letters') }}
                </label>

                <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <input type="checkbox" v-model="includeNumbers" />
                    {{ t('randomStringGenerator.numbers') }}
                </label>

                <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <input type="checkbox" v-model="includeSymbols" />
                    {{ t('randomStringGenerator.symbols') }}
                </label>
            </div>

            <button
                @click="generate"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
                {{ t('randomStringGenerator.generate') }}
            </button>

            <div v-if="result">
                <label class="block text-sm mb-2 mt-4">{{ t('randomStringGenerator.result') }}</label>

                <input
                    :value="result"
                    readonly
                    class="w-full border dark:border-gray-600 rounded-lg p-3 bg-gray-100 dark:bg-gray-800"
                />
            </div>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">{{ t('randomStringGenerator.history') }}</h3>
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
                        {{ t('randomStringGenerator.restore') }}
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('randomStringGenerator.download_history') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    {{ t('randomStringGenerator.clear_history') }}
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
const title = computed(() => t('randomStringGenerator.title'));
const mainDescription = computed(() => t('randomStringGenerator.mainDescription'));
const extendedDescription = computed(() => t('randomStringGenerator.extendedDescription'));
const features = computed(() => t('randomStringGenerator.features'));
const steps = computed(() => t('randomStringGenerator.steps'));
const examples = computed(() => t('randomStringGenerator.examples'));
const useCases = computed(() => t('randomStringGenerator.useCases'));
const technicalDetails = computed(() => t('randomStringGenerator.technicalDetails'));
const bestPractices = computed(() => t('randomStringGenerator.bestPractices'));
const commonErrors = computed(() => t('randomStringGenerator.commonErrors'));
const alternatives = computed(() => t('randomStringGenerator.alternatives'));
const relatedTools = computed(() => t('randomStringGenerator.relatedTools'));
const faqs = computed(() => t('randomStringGenerator.faqs'));
const securityNote = computed(() => t('randomStringGenerator.securityNote'));
const additionalContent = computed(() => t('randomStringGenerator.additionalContent'));

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
