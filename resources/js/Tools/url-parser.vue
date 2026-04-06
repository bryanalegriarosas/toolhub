<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('urlParser.title') }}</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <button
                @click="copyUrl"
                :disabled="!inputUrl"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                {{ t('urlParser.copy') }}
            </button>
            <button
                @click="downloadUrl"
                :disabled="!inputUrl"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {{ t('urlParser.download_url') }}
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                {{ t('urlParser.clear') }}
            </button>
            <button
                @click="saveHistory"
                :disabled="!inputUrl"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                {{ t('urlParser.save') }}
            </button>
        </div>

        <input
            v-model="inputUrl"
            :placeholder="t('urlParser.url_placeholder')"
            class="w-full border dark:border-gray-600 rounded-lg p-3 mb-6"
        />

        <div v-if="parsed && !parsed.error" class="space-y-4">
            <div class="border rounded p-3">
                <strong>{{ t('urlParser.protocol') }}</strong> {{ parsed.protocol }}
            </div>

            <div class="border rounded p-3">
                <strong>{{ t('urlParser.host') }}</strong> {{ parsed.host }}
            </div>

            <div class="border rounded p-3">
                <strong>{{ t('urlParser.hostname') }}</strong> {{ parsed.hostname }}
            </div>

            <div class="border rounded p-3">
                <strong>{{ t('urlParser.port') }}</strong> {{ parsed.port || "—" }}
            </div>

            <div class="border rounded p-3">
                <strong>{{ t('urlParser.path') }}</strong> {{ parsed.pathname }}
            </div>

            <div class="border rounded p-3">
                <strong>{{ t('urlParser.hash') }}</strong> {{ parsed.hash || "—" }}
            </div>

            <div class="border rounded p-3">
                <strong>{{ t('urlParser.query_parameters') }}</strong>

                <div v-if="Object.keys(parsed.params).length === 0">{{ t('urlParser.none') }}</div>

                <ul v-else class="list-disc ml-6">
                    <li v-for="(value, key) in parsed.params" :key="key">
                        {{ key }} : {{ value }}
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="parsed && parsed.error" class="text-red-500">
            {{ t('urlParser.invalid_url') }}
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">{{ t('urlParser.history') }}</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items-center justify-between"
                >
                    <div>
                        <span class="font-mono break-words max-w-full">{{ h.url }}</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ h.date }}</p>
                    </div>
                    <button
                        @click="restore(h)"
                        class="mt-1 sm:mt-0 text-xs text-blue-600 hover:underline"
                    >
                        {{ t('urlParser.restore') }}
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('urlParser.download_history') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    {{ t('urlParser.clear_history') }}
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

const inputUrl = ref("");
const history = ref([]);

const parsed = computed(() => {
    if (!inputUrl.value) return null;

    try {
        const url = new URL(inputUrl.value);

        const params = {};

        url.searchParams.forEach((value, key) => {
            params[key] = value;
        });

        return {
            protocol: url.protocol,
            host: url.host,
            hostname: url.hostname,
            port: url.port,
            pathname: url.pathname,
            hash: url.hash,
            params,
        };
    } catch {
        return { error: "Invalid URL" };
    }
});

const copyUrl = () => {
    if (!inputUrl.value) return;
    navigator.clipboard.writeText(inputUrl.value).catch(() => {});
};

const downloadUrl = () => {
    if (!inputUrl.value) return;
    const blob = new Blob([inputUrl.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `url.txt`;
    a.click();
    URL.revokeObjectURL(url);
};

const clearAll = () => {
    inputUrl.value = "";
};

const saveHistory = () => {
    if (!inputUrl.value) return;
    history.value.push({ url: inputUrl.value, date: new Date().toLocaleString() });
};

const restore = (entry) => {
    inputUrl.value = entry.url;
};

const downloadHistory = () => {
    const lines = history.value.map(h => `${h.url} (${h.date})`).join("\n");
    const blob = new Blob([lines], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "url-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearHistory = () => {
    history.value = [];
};

// SEO Content Data - Now using translations
const title = computed(() => t('urlParser.title'));
const mainDescription = computed(() => t('urlParser.mainDescription'));
const extendedDescription = computed(() => t('urlParser.extendedDescription'));
const features = computed(() => t('urlParser.features'));
const steps = computed(() => t('urlParser.steps'));
const examples = computed(() => t('urlParser.examples'));
const useCases = computed(() => t('urlParser.useCases'));
const technicalDetails = computed(() => t('urlParser.technicalDetails'));
const bestPractices = computed(() => t('urlParser.bestPractices'));
const commonErrors = computed(() => t('urlParser.commonErrors'));
const alternatives = computed(() => t('urlParser.alternatives'));
const relatedTools = computed(() => t('urlParser.relatedTools'));
const faqs = computed(() => t('urlParser.faqs'));
const securityNote = computed(() => t('urlParser.securityNote'));
const additionalContent = computed(() => t('urlParser.additionalContent'));
</script>
