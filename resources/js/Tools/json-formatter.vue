<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                Free {{ t('jsonFormatter.title') }}
            </h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ t('jsonFormatter.description') }}
            </p>

            <div class="mb-6 text-center">
                <div class="bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 rounded-xl p-4 text-gray-400">
                    Advertisement
                </div>
            </div>

            <div class="flex flex-col gap-3 sm:gap-4 mb-4">
                <label class="flex items-center gap-2">
                    <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('jsonFormatter.load_file') }}</span>
                    <input ref="fileInput" type="file" accept=".json" @change="loadFile"
                        class="form-input text-sm sm:text-base" />
                </label>
                <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <label class="flex items-center gap-2">
                        <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('jsonFormatter.indent') }}</span>
                        <select v-model.number="indent" class="form-select text-sm sm:text-base">
                            <option value="2">{{ t('jsonFormatter.two_spaces') }}</option>
                            <option value="4">{{ t('jsonFormatter.four_spaces') }}</option>
                            <option value="0">{{ t('jsonFormatter.none') }}</option>
                        </select>
                    </label>
                    <label class="flex items-center gap-2">
                        <input type="checkbox" v-model="autoFormat" class="sm:mt-0" />
                        <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('jsonFormatter.auto_format') }}</span>
                    </label>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <!-- INPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('jsonFormatter.input_json') }}</h2>

                    <textarea v-model="input" placeholder="Paste your JSON here..." :class="[
                        'w-full h-64 sm:h-80 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm focus:ring focus:ring-blue-200',
                        {
                            'border-red-500': error,
                            'border-gray-300': !error,
                        },
                    ]"></textarea>
                </div>

                <!-- OUTPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('jsonFormatter.result') }}</h2>

                    <pre
                        class="w-full h-64 sm:h-80 p-3 sm:p-4 border dark:border-gray-600 rounded-lg bg-gray-900 text-green-400 text-xs sm:text-sm overflow-auto">{{ output }}</pre>
                </div>
            </div>

            <!-- ERROR -->
            <div v-if="error" class="mt-4 text-red-500 font-medium text-sm sm:text-base">
                {{ error }}
            </div>

            <!-- BUTTONS -->
            <div class="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                <button @click="formatJson" :disabled="!isValidJson"
                    class="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base">
                    {{ t('jsonFormatter.format') }}
                </button>

                <button @click="minifyJson" :disabled="!isValidJson"
                    class="px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50 text-sm sm:text-base">
                    {{ t('jsonFormatter.minify') }}
                </button>

                <button @click="copyResult" :disabled="!output"
                    class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base">
                    {{ t('jsonFormatter.copy') }}
                </button>

                <button @click="downloadResult" :disabled="!output"
                    class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-sm sm:text-base">
                    {{ t('jsonFormatter.download') }}
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition text-sm sm:text-base">
                    {{ t('jsonFormatter.clear') }}
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

            <div class="mt-8 text-center">
                <div class="bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 rounded-xl p-4 text-gray-400">
                    Advertisement
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('jsonFormatter.title'));
const mainDescription = computed(() => t('jsonFormatter.mainDescription'));
const extendedDescription = computed(() => t('jsonFormatter.extendedDescription'));
const features = computed(() => t('jsonFormatter.features'));
const steps = computed(() => t('jsonFormatter.steps'));
const examples = computed(() => t('jsonFormatter.examples'));
const useCases = computed(() => t('jsonFormatter.useCases'));
const technicalDetails = computed(() => t('jsonFormatter.technicalDetails'));
const bestPractices = computed(() => t('jsonFormatter.bestPractices'));
const commonErrors = computed(() => t('jsonFormatter.commonErrors'));
const alternatives = computed(() => t('jsonFormatter.alternatives'));
const relatedTools = computed(() => t('jsonFormatter.relatedTools'));
const faqs = computed(() => t('jsonFormatter.faqs'));
const securityNote = computed(() => t('jsonFormatter.securityNote'));
const additionalContent = computed(() => t('jsonFormatter.additionalContent'));

const input = ref("");
const output = ref("");
const error = ref("");
const indent = ref(2);
const autoFormat = ref(false);
const fileInput = ref(null); // to reset file chooser

// helper computed
const isValidJson = computed(() => {
    try {
        JSON.parse(input.value);
        return true;
    } catch {
        return false;
    }
});

const formatJson = () => {
    error.value = "";

    try {
        const parsed = JSON.parse(input.value);
        output.value = JSON.stringify(parsed, null, indent.value);
    } catch (e) {
        error.value = `Invalid JSON: ${e.message}`;
        output.value = "";
    }
};

const minifyJson = () => {
    error.value = "";

    try {
        const parsed = JSON.parse(input.value);
        output.value = JSON.stringify(parsed);
    } catch (e) {
        error.value = `Invalid JSON: ${e.message}`;
        output.value = "";
    }
};

const copyResult = () => {
    if (!output.value) return;
    navigator.clipboard.writeText(output.value);
};

const clearAll = () => {
    input.value = "";
    output.value = "";
    error.value = "";
    if (fileInput.value) {
        fileInput.value.value = null;
    }
};

const downloadResult = () => {
    if (!output.value) return;
    const blob = new Blob([output.value], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    a.click();
    URL.revokeObjectURL(url);
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        input.value = ev.target.result;
        if (autoFormat.value) formatJson();
    };
    reader.readAsText(file);
};

watch(input, (val) => {
    if (autoFormat.value) {
        if (isValidJson.value) {
            formatJson();
        } else {
            output.value = "";
        }
    }
});
</script>
