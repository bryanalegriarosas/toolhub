<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('httpStatusCodes.title') }}</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <button
                @click="copyCode"
                :disabled="!code"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                {{ t('httpStatusCodes.copy') }}
            </button>
            <button
                @click="downloadCode"
                :disabled="!code"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {{ t('httpStatusCodes.download_code') }}
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                {{ t('httpStatusCodes.clear') }}
            </button>
            <button
                @click="saveHistory"
                :disabled="!code"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                {{ t('httpStatusCodes.save') }}
            </button>
        </div>

        <input
            v-model="code"
            type="number"
            :placeholder="t('httpStatusCodes.enter_status_code_placeholder')"
            class="w-full border dark:border-gray-600 rounded-lg p-3 mb-6"
        />

        <div v-if="code" class="border dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
            <p class="text-lg font-semibold">
                {{ code }}
            </p>

            <p class="text-gray-600 dark:text-gray-400">
                {{ result }}
            </p>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">{{ t('httpStatusCodes.history') }}</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items-center justify-between"
                >
                    <div>
                        <span class="font-mono break-words max-w-full">{{ h.code }} → {{ h.desc }}</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ h.date }}</p>
                    </div>
                    <button
                        @click="restore(h)"
                        class="mt-1 sm:mt-0 text-xs text-blue-600 hover:underline"
                    >
                        {{ t('httpStatusCodes.restore') }}
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('httpStatusCodes.download_history') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    {{ t('httpStatusCodes.clear_history') }}
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
const title = computed(() => t('httpStatusCodes.title'));
const mainDescription = computed(() => t('httpStatusCodes.mainDescription'));
const extendedDescription = computed(() => t('httpStatusCodes.extendedDescription'));
const features = computed(() => t('httpStatusCodes.features'));
const steps = computed(() => t('httpStatusCodes.steps'));
const examples = computed(() => t('httpStatusCodes.examples'));
const useCases = computed(() => t('httpStatusCodes.useCases'));
const technicalDetails = computed(() => t('httpStatusCodes.technicalDetails'));
const bestPractices = computed(() => t('httpStatusCodes.bestPractices'));
const commonErrors = computed(() => t('httpStatusCodes.commonErrors'));
const alternatives = computed(() => t('httpStatusCodes.alternatives'));
const relatedTools = computed(() => t('httpStatusCodes.relatedTools'));
const faqs = computed(() => t('httpStatusCodes.faqs'));
const securityNote = computed(() => t('httpStatusCodes.securityNote'));
const additionalContent = computed(() => t('httpStatusCodes.additionalContent'));

const code = ref("");
const history = ref([]);

const statuses = {
    200: "OK – The request succeeded.",
    201: "Created – The request succeeded and a resource was created.",
    204: "No Content – Request successful but no content returned.",

    301: "Moved Permanently – Resource moved to a new URL.",
    302: "Found – Temporary redirect.",

    400: "Bad Request – Invalid request.",
    401: "Unauthorized – Authentication required.",
    403: "Forbidden – Server understood request but refuses to authorize.",
    404: "Not Found – Resource not found.",

    500: "Internal Server Error – Generic server error.",
    502: "Bad Gateway – Invalid response from upstream server.",
    503: "Service Unavailable – Server temporarily unavailable.",
};

const result = computed(() => {
    if (!code.value) return "";

    return statuses[code.value] || "Unknown status code";
});

const copyCode = () => {
    if (!code.value) return;
    navigator.clipboard.writeText(code.value).catch(() => {});
};

const downloadCode = () => {
    if (!code.value) return;
    const blob = new Blob([code.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `status-${code.value}.txt`;
    a.click();
    URL.revokeObjectURL(url);
};

const clearAll = () => {
    code.value = "";
};

const saveHistory = () => {
    if (!code.value) return;
    history.value.push({
        code: code.value,
        desc: result.value,
        date: new Date().toLocaleString(),
    });
};

const restore = (entry) => {
    code.value = entry.code;
};

const downloadHistory = () => {
    const lines = history.value.map(h => `${h.code} - ${h.desc} (${h.date})`).join("\n");
    const blob = new Blob([lines], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "status-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearHistory = () => {
    history.value = [];
};
</script>
