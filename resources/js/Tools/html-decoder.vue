<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('htmlDecoder.title') }}</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>{{ t('htmlDecoder.load_file') }}</span>
                <input ref="fileInput" type="file" accept=".html,.txt" @change="loadFile" class="form-input" />
            </label>
            <button
                @click="copyText"
                :disabled="!text"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                {{ t('htmlDecoder.copy') }}
            </button>
            <button
                @click="downloadText"
                :disabled="!text"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {{ t('htmlDecoder.download_input') }}
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                {{ t('htmlDecoder.clear') }}
            </button>
            <button
                @click="saveHistory"
                :disabled="!text"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                {{ t('htmlDecoder.save') }}
            </button>
        </div>

        <textarea
            v-model="text"
            rows="6"
            :placeholder="t('htmlDecoder.paste_encoded_html_here')"
            class="w-full border dark:border-gray-600 rounded-lg p-4 mb-6"
        />

        <div>
            <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('htmlDecoder.decoded_html') }}</label>

            <textarea
                :value="decoded"
                readonly
                rows="6"
                class="w-full border dark:border-gray-600 rounded-lg p-4 bg-gray-100 dark:bg-gray-800"
            />
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">{{ t('htmlDecoder.history') }}</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items_center justify-between"
                >
                    <div>
                        <span class="font-mono break-words max-w-full">{{ h.text }}</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ h.date }}</p>
                    </div>
                    <button
                        @click="restore(h)"
                        class="mt-1 sm:mt-0 text-xs text-blue-600 hover:underline"
                    >
                        {{ t('htmlDecoder.restore') }}
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('htmlDecoder.download_history') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    {{ t('htmlDecoder.clear_history') }}
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
const title = computed(() => t('htmlDecoder.title'));
const mainDescription = computed(() => t('htmlDecoder.mainDescription'));
const extendedDescription = computed(() => t('htmlDecoder.extendedDescription'));
const features = computed(() => t('htmlDecoder.features'));
const steps = computed(() => t('htmlDecoder.steps'));
const examples = computed(() => t('htmlDecoder.examples'));
const useCases = computed(() => t('htmlDecoder.useCases'));
const technicalDetails = computed(() => t('htmlDecoder.technicalDetails'));
const bestPractices = computed(() => t('htmlDecoder.bestPractices'));
const commonErrors = computed(() => t('htmlDecoder.commonErrors'));
const alternatives = computed(() => t('htmlDecoder.alternatives'));
const relatedTools = computed(() => t('htmlDecoder.relatedTools'));
const faqs = computed(() => t('htmlDecoder.faqs'));
const securityNote = computed(() => t('htmlDecoder.securityNote'));
const additionalContent = computed(() => t('htmlDecoder.additionalContent'));

const text = ref("");
const history = ref([]);
const fileInput = ref(null);

const decoded = computed(() => {
    if (!text.value) return "";
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text.value;
    return textarea.value;
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
    a.download = "input.txt";
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
    a.download = "html-decoder-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};
</script>
