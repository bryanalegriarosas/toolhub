<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('regexTester.title') }}</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>{{ t('regexTester.load_file') }}</span>
                <input ref="fileInput" type="file" accept=".txt" @change="loadFile" class="form-input" />
            </label>
            <button
                @click="copyText"
                :disabled="!text"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                {{ t('regexTester.copy_text') }}
            </button>
            <button
                @click="downloadText"
                :disabled="!text"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {{ t('regexTester.download_text') }}
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                Clear
            </button>
            <button
                @click="saveHistory"
                :disabled="!pattern && !text"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                {{ t('regexTester.save') }}
            </button>
        </div>

        <div class="space-y-6">
            <div>
                <label class="block text-sm mb-2 text-gray-700 dark:text-gray-300">{{ t('regexTester.regex_pattern') }}</label>

                <input
                    v-model="pattern"
                    placeholder="\d+"
                    class="w-full border dark:border-gray-600 rounded-lg p-3"
                />
            </div>

            <div>
                <label class="block text-sm mb-2 text-gray-700 dark:text-gray-300">{{ t('regexTester.test_text') }}</label>

                <textarea
                    v-model="text"
                    rows="6"
                    :placeholder="t('regexTester.text_placeholder')"
                    class="w-full border dark:border-gray-600 rounded-lg p-3"
                />
            </div>

            <div>
                <label class="block text-sm mb-2 text-gray-700 dark:text-gray-300">{{ t('regexTester.matches') }}</label>

                <div class="border dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                    <div v-if="matches.length === 0" class="text-gray-400">
                        {{ t('regexTester.no_matches') }}
                    </div>

                    <ul v-else class="list-disc ml-6">
                        <li v-for="(match, index) in matches" :key="index">
                            {{ match }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">{{ t('regexTester.history') }}</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items-center justify-between"
                >
                    <div>
                        <span class="font-mono break-words max-w-full">/{{ h.pattern }}/ → {{ h.text }}</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ h.date }}</p>
                    </div>
                    <button
                        @click="restore(h)"
                        class="mt-1 sm:mt-0 text-xs text-blue-600 hover:underline"
                    >
                        {{ t('regexTester.restore') }}
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('regexTester.download_history') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    {{ t('regexTester.clear_history') }}
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
const title = computed(() => t('regexTester.title'));
const mainDescription = computed(() => t('regexTester.mainDescription'));
const extendedDescription = computed(() => t('regexTester.extendedDescription'));
const features = computed(() => t('regexTester.features'));
const steps = computed(() => t('regexTester.steps'));
const examples = computed(() => t('regexTester.examples'));
const useCases = computed(() => t('regexTester.useCases'));
const technicalDetails = computed(() => t('regexTester.technicalDetails'));
const bestPractices = computed(() => t('regexTester.bestPractices'));
const commonErrors = computed(() => t('regexTester.commonErrors'));
const alternatives = computed(() => t('regexTester.alternatives'));
const relatedTools = computed(() => t('regexTester.relatedTools'));
const faqs = computed(() => t('regexTester.faqs'));
const securityNote = computed(() => t('regexTester.securityNote'));
const additionalContent = computed(() => t('regexTester.additionalContent'));

const pattern = ref("");
const text = ref("");
const history = ref([]);
const fileInput = ref(null);

const matches = computed(() => {
    if (!pattern.value || !text.value) return [];
    try {
        const regex = new RegExp(pattern.value, "g");
        const result = text.value.match(regex);
        return result || [];
    } catch (e) {
        return ["Invalid regex"];
    }
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
    pattern.value = "";
    text.value = "";
    if (fileInput.value) fileInput.value.value = null;
};

const saveHistory = () => {
    if (!pattern.value && !text.value) return;
    history.value.unshift({ pattern: pattern.value, text: text.value, date: new Date().toLocaleString() });
};

const restore = (h) => {
    pattern.value = h.pattern;
    text.value = h.text;
};

const clearHistory = () => {
    history.value = [];
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const data = history.value.map(h => `/${h.pattern}/ ${h.text}`).join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "regex-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};
</script>
