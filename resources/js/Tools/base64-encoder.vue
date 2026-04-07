<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('base64Encoder.title') }}</h2>

        <div class="flex flex-col md:flex-row md:items-center gap-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" v-model="autoProcess" />
                <span>{{ t('base64Encoder.auto') }}</span>
            </label>
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>{{ t('base64Encoder.load_file') }}</span>
                <input ref="fileInput" type="file" @change="loadFile" class="form-input" />
            </label>
        </div>

        <textarea
            v-model="input"
            :placeholder="t('base64Encoder.paste_text_here')"
            class="w-full h-40 p-4 border dark:border-gray-600 rounded-lg font-mono text-sm focus:ring focus:ring-blue-200"
        ></textarea>

        <div class="flex flex-wrap gap-3">
            <button
                @click="process"
                :disabled="!input"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
                {{ t('base64Encoder.encode') }}
            </button>

            <button
                @click="copyOutput"
                :disabled="!output"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                {{ t('base64Encoder.copy') }}
            </button>

            <button
                @click="downloadOutput"
                :disabled="!output"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {{ t('base64Encoder.download') }}
            </button>

            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                {{ t('base64Encoder.clear') }}
            </button>
        </div>

        <div v-if="error" class="text-red-500 font-medium">
            {{ error }}
        </div>

        <pre
            class="w-full h-40 p-4 border dark:border-gray-600 rounded-lg bg-gray-900 text-green-400 text-sm overflow-auto"
        >{{ output }}</pre>

        <div v-if="history.length" class="mt-4">
            <h3 class="font-semibold mb-2">{{ t('base64Encoder.history') }}</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex items-center justify-between"
                >
                    <span>{{ h }}</span>
                    <button
                        @click="copyOne(h)"
                        class="text-xs text-blue-600 hover:underline"
                    >
                        {{ t('base64Encoder.copy') }}
                    </button>
                </li>
            </ul>
            <div class="flex gap-3 mt-3">
                <button
                    @click="downloadHistory"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    {{ t('base64Encoder.download_all') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    {{ t('base64Encoder.clear_history') }}
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
import { ref, watch, computed } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('base64Encoder.title'));
const mainDescription = computed(() => t('base64Encoder.mainDescription'));
const extendedDescription = computed(() => t('base64Encoder.extendedDescription'));
const features = computed(() => t('base64Encoder.features'));
const steps = computed(() => t('base64Encoder.steps'));
const examples = computed(() => t('base64Encoder.examples'));
const useCases = computed(() => t('base64Encoder.useCases'));
const technicalDetails = computed(() => t('base64Encoder.technicalDetails'));
const bestPractices = computed(() => t('base64Encoder.bestPractices'));
const commonErrors = computed(() => t('base64Encoder.commonErrors'));
const alternatives = computed(() => t('base64Encoder.alternatives'));
const relatedTools = computed(() => t('base64Encoder.relatedTools'));
const faqs = computed(() => t('base64Encoder.faqs'));
const securityNote = computed(() => t('base64Encoder.securityNote'));
const additionalContent = computed(() => t('base64Encoder.additionalContent'));

const input = ref("");
const output = ref("");
const autoProcess = ref(false);
const error = ref("");
const history = ref([]);
const fileInput = ref(null);

const process = () => {
    error.value = "";

    try {
        // always encode in this component
    // handle unicode correctly
    output.value = btoa(unescape(encodeURIComponent(input.value)));
        if (output.value) history.value.unshift(output.value);
    } catch (e) {
        error.value = `Error: ${e.message}`;
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
    a.download = "base64.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const blob = new Blob([history.value.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "history.txt";
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

watch(input, (val) => {
    if (autoProcess.value && input.value) process();
});
</script>
