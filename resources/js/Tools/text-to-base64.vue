<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                {{ t('textToBase64.title') }}
            </h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ t('textToBase64.description') }}
            </p>

            <div class="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <label class="flex items-center gap-2">
                    <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300">{{ t('textToBase64.load_file')
                        }}</span>
                    <input ref="fileInput" type="file" accept="text/*" @change="loadFile"
                        class="form-input text-sm sm:text-base" />
                </label>
                <button @click="downloadResult" :disabled="!output"
                    class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-sm sm:text-base">
                    Download
                </button>
                <button @click="saveHistory" :disabled="!input"
                    class="px-3 sm:px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50 text-sm sm:text-base">
                    {{ t('textToBase64.save') }}
                </button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

                <!-- INPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{
                        t('textToBase64.input') }}</h2>
                    <textarea v-model="input" @input="autoEncode"
                        class="w-full h-64 sm:h-80 p-3 sm:p-4 border dark:border-gray-600 rounded-lg font-mono text-xs sm:text-sm resize-none dark:bg-gray-700 dark:text-white"
                        :placeholder="t('textToBase64.placeholder_text')"></textarea>
                </div>

                <!-- OUTPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{
                        t('textToBase64.output') }}</h2>
                    <textarea readonly :value="output"
                        class="w-full h-64 sm:h-80 p-3 sm:p-4 border dark:border-gray-600 rounded-lg font-mono text-xs sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-white resize-none"></textarea>
                </div>

            </div>

            <div v-if="error" class="text-red-500 text-xs sm:text-sm mb-4">
                {{ error }}
            </div>

            <div class="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                <button @click="encode"
                    class="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                    {{ t('textToBase64.encode') }}
                </button>

                <button @click="decode"
                    class="px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm sm:text-base">
                    {{ t('textToBase64.decode') }}
                </button>

                <button @click="copyResult"
                    class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base"
                    :disabled="!output">
                    {{ t('textToBase64.copy') }}
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-sm sm:text-base">
                    {{ t('textToBase64.clear') }}
                </button>
            </div>

            <div v-if="history.length" class="mt-4 sm:mt-6">
                <h3 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{
                    t('textToBase64.history') }}</h3>
                <div
                    class="max-h-48 sm:max-h-64 overflow-y-auto border dark:border-gray-600 rounded-lg p-3 sm:p-4 bg-gray-50 dark:bg-gray-700">
                    <ul class="space-y-2">
                        <li v-for="(item, idx) in history" :key="idx"
                            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-2 bg-white dark:bg-gray-600 rounded border dark:border-gray-500">
                            <div class="flex-1 min-w-0">
                                <div class="font-mono text-xs sm:text-sm truncate">{{ item.type === 'encode' ? 'Encode'
                                    : 'Decode' }}: {{ item.input.substring(0, 50) }}{{ item.input.length > 50 ? '...' :
                                        '' }}</div>
                                <div class="text-xs text-gray-500 dark:text-gray-400 truncate">{{
                                    item.output.substring(0, 50) }}{{
                                        item.output.length > 50 ? '...' : '' }}</div>
                            </div>
                            <div class="flex gap-1 self-start sm:self-auto">
                                <button @click="restore(item)"
                                    class="text-xs text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900">{{
                                    t('textToBase64.restore') }}</button>
                                <button @click="copyHistoryItem(item.output)"
                                    class="text-xs text-green-600 dark:text-green-400 hover:underline px-2 py-1 rounded hover:bg-green-50 dark:hover:bg-green-900">{{
                                    t('textToBase64.copy') }}</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="flex gap-2 sm:gap-3 mt-3">
                    <button @click="downloadHistory" :disabled="!history.length"
                        class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-xs sm:text-sm">
                        {{ t('textToBase64.download_all') }}
                    </button>
                    <button @click="clearHistory"
                        class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-xs sm:text-sm">
                        {{ t('textToBase64.clear_history') }}
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
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('textToBase64.title'));
const mainDescription = computed(() => t('textToBase64.mainDescription'));
const extendedDescription = computed(() => t('textToBase64.extendedDescription'));
const features = computed(() => t('textToBase64.features'));
const steps = computed(() => t('textToBase64.steps'));
const examples = computed(() => t('textToBase64.examples'));
const useCases = computed(() => t('textToBase64.useCases'));
const technicalDetails = computed(() => t('textToBase64.technicalDetails'));
const bestPractices = computed(() => t('textToBase64.bestPractices'));
const commonErrors = computed(() => t('textToBase64.commonErrors'));
const alternatives = computed(() => t('textToBase64.alternatives'));
const relatedTools = computed(() => t('textToBase64.relatedTools'));
const faqs = computed(() => t('textToBase64.faqs'));
const securityNote = computed(() => t('textToBase64.securityNote'));
const additionalContent = computed(() => t('textToBase64.additionalContent'));

const input = ref("");
const output = ref("");
const error = ref("");
const history = ref([]);
const fileInput = ref(null);

const encode = () => {
    error.value = "";
    try {
        output.value = btoa(unescape(encodeURIComponent(input.value)));
    } catch (e) {
        error.value = "Error encoding text";
        output.value = "";
    }
};

const decode = () => {
    error.value = "";
    try {
        output.value = decodeURIComponent(escape(atob(input.value)));
    } catch (e) {
        error.value = "Invalid Base64 format";
        output.value = "";
    }
};

const autoEncode = () => {
    if (input.value) {
        encode();
    } else {
        output.value = "";
        error.value = "";
    }
};

const copyResult = () => {
    if (output.value) {
        navigator.clipboard.writeText(output.value);
    }
};

const downloadResult = () => {
    if (!output.value) return;
    const blob = new Blob([output.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "base64-result.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const saveHistory = () => {
    if (!input.value || !output.value) return;

    const isEncoded = input.value === output.value ? false :
        input.value.length < output.value.length;

    history.value.unshift({
        input: input.value,
        output: output.value,
        type: isEncoded ? 'encode' : 'decode',
        timestamp: new Date().toISOString()
    });

    if (history.value.length > 20) {
        history.value = history.value.slice(0, 20);
    }
};

const restore = (item) => {
    input.value = item.input;
    output.value = item.output;
    error.value = "";
};

const copyHistoryItem = (text) => {
    navigator.clipboard.writeText(text);
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const data = history.value
        .map(item => `${item.type.toUpperCase()}: ${item.input} -> ${item.output}`)
        .join("\n\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "base64-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearHistory = () => {
    history.value = [];
};

const clearAll = () => {
    input.value = "";
    output.value = "";
    error.value = "";
    if (fileInput.value) fileInput.value.value = null;
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        input.value = ev.target.result;
        autoEncode();
    };
    reader.readAsText(file);
};
</script>
