<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ t('base64.title') }}</h1>

        <!-- Tool functionality (same as before) -->
        <div class="flex flex-col md:flex-row md:items-center gap-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" v-model="autoProcess" />
                <span>{{ t('base64.auto_decode') }}</span>
            </label>
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>{{ t('base64.load_file') }}</span>
                <input ref="fileInput" type="file" @change="loadFile" class="form-input" />
            </label>
        </div>

        <textarea
            v-model="input"
            :placeholder="t('base64.input_placeholder')"
            class="w-full h-40 p-4 border dark:border-gray-600 rounded-lg font-mono text-sm focus:ring focus:ring-blue-200"
        ></textarea>

        <div class="flex flex-wrap gap-3">
            <button
                @click="process"
                :disabled="!input"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
                {{ t('base64.decode_button') }}
            </button>
            <button
                @click="copyOutput"
                :disabled="!output"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                {{ t('base64.copy_result') }}
            </button>
            <button
                @click="downloadOutput"
                :disabled="!output"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {{ t('base64.download') }}
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
                {{ t('base64.clear') }}
            </button>
        </div>

        <div v-if="error" class="text-red-500 font-medium bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            {{ error }}
        </div>

        <div v-if="output" class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('base64.decoded_output') }}</label>
            <pre class="w-full h-40 p-4 border dark:border-gray-600 rounded-lg bg-gray-900 text-green-400 text-sm overflow-auto">{{ output }}</pre>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-3 text-gray-900 dark:text-white">{{ t('base64.decoding_history') }}</h3>
            <ul class="space-y-2">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded"
                >
                    <span class="font-mono text-sm text-gray-600 dark:text-gray-300 truncate flex-1">{{ h }}</span>
                    <button
                        @click="copyOne(h)"
                        class="ml-3 text-xs text-blue-600 hover:underline"
                    >
                        {{ t('base64.copy') }}
                    </button>
                </li>
            </ul>
            <div class="flex gap-3 mt-3">
                <button
                    @click="downloadHistory"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
                >
                    {{ t('base64.download_all_history') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-sm"
                >
                    {{ t('base64.clear_history') }}
                </button>
            </div>
        </div>

        <!-- SEO Content with expanded sections -->
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
import { ref, watch, computed } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// Tool functionality
const input = ref("");
const output = ref("");
const autoProcess = ref(false);
const error = ref("");
const history = ref([]);
const fileInput = ref(null);

const process = () => {
    error.value = "";
    try {
        const decoded = atob(input.value);
        output.value = decodeURIComponent(escape(decoded));
        if (output.value && !history.value.includes(output.value)) {
            history.value.unshift(output.value);
            if (history.value.length > 10) history.value.pop();
        }
    } catch (e) {
        error.value = t('base64.decoding_error', { error: e.message });
        output.value = "";
    }
};

const copyOutput = () => {
    if (!output.value) return;
    navigator.clipboard.writeText(output.value);
};

const copyOne = (h) => {
    navigator.clipboard.writeText(h);
};

const downloadOutput = () => {
    if (!output.value) return;
    const blob = new Blob([output.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "base64-decoded.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const blob = new Blob([history.value.join("\n\n---\n\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "decoding-history.txt";
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
    autoProcess.value = false;
    if (fileInput.value) fileInput.value.value = null;
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        input.value = ev.target.result;
        if (autoProcess.value) process();
    };
    reader.readAsText(file);
};

watch(input, () => {
    if (autoProcess.value && input.value) process();
});

// SEO Content Data - Now using translations
const title = computed(() => t('base64.title'));
const mainDescription = computed(() => t('mainDescription'));
const extendedDescription = computed(() => t('extendedDescription'));
const features = computed(() => t('features'));
const steps = computed(() => t('steps'));
const examples = computed(() => t('examples'));
const useCases = computed(() => t('useCases'));
const technicalDetails = computed(() => t('technicalDetails'));
const bestPractices = computed(() => t('bestPractices'));
const commonErrors = computed(() => t('commonErrors'));
const alternatives = computed(() => t('alternatives'));
const relatedTools = computed(() => t('relatedTools'));
const faqs = computed(() => t('faqs'));
const securityNote = computed(() => t('securityNote'));
const additionalContent = computed(() => t('additionalContent'));
</script>
