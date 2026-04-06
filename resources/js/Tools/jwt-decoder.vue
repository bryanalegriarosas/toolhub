<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('jwtDecoder.title') }}</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>{{ t('jwtDecoder.load_file') }}</span>
                <input ref="fileInput" type="file" accept=".jwt,.txt" @change="loadFile" class="form-input" />
            </label>
            <button
                @click="copyToken"
                :disabled="!token"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                {{ t('jwtDecoder.copy') }} 
            </button>
            <button
                @click="downloadToken"
                :disabled="!token"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                {{ t('jwtDecoder.download_token') }}
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
                Clear
            </button>
            <button
                @click="saveHistory"
                :disabled="!token"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
                {{ t('jwtDecoder.save') }}
            </button>
        </div>

        <textarea
            v-model="token"
            @input="decodeJWT"
            rows="4"
            :placeholder="t('jwtDecoder.paste_jwt_token_here')"
            class="w-full border dark:border-gray-600 rounded-lg p-4 mb-6"
        />

        <div class="space-y-6">
            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('jwtDecoder.header') }}</label>
                <pre class="bg-gray-200 dark:bg-gray-600 p-4 rounded overflow-auto">{{ header }}</pre>
            </div>

            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('jwtDecoder.payload') }}</label>
                <pre class="bg-gray-200 dark:bg-gray-600 p-4 rounded overflow-auto">{{ payload }}</pre>
            </div>

            <div>
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('jwtDecoder.signature') }}</label>
                <pre class="bg-gray-200 dark:bg-gray-600 p-4 rounded overflow-auto">{{ signature }}</pre>
            </div>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">{{ t('jwtDecoder.history') }}</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items-center justify-between"
                >
                    <div>
                        <span class="font-mono truncate max-w-xs">{{ h.token }}</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ h.date }}</p>
                    </div>
                    <button
                        @click="restore(h)"
                        class="mt-1 sm:mt-0 text-xs text-blue-600 hover:underline"
                    >
                        {{ t('jwtDecoder.restore') }}
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    {{ t('jwtDecoder.download_history') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                    {{ t('jwtDecoder.clear_history') }}
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
const title = computed(() => t('jwtDecoder.title'));
const mainDescription = computed(() => t('jwtDecoder.mainDescription'));
const extendedDescription = computed(() => t('jwtDecoder.extendedDescription'));
const features = computed(() => t('jwtDecoder.features'));
const steps = computed(() => t('jwtDecoder.steps'));
const examples = computed(() => t('jwtDecoder.examples'));
const useCases = computed(() => t('jwtDecoder.useCases'));
const technicalDetails = computed(() => t('jwtDecoder.technicalDetails'));
const bestPractices = computed(() => t('jwtDecoder.bestPractices'));
const commonErrors = computed(() => t('jwtDecoder.commonErrors'));
const alternatives = computed(() => t('jwtDecoder.alternatives'));
const relatedTools = computed(() => t('jwtDecoder.relatedTools'));
const faqs = computed(() => t('jwtDecoder.faqs'));
const securityNote = computed(() => t('jwtDecoder.securityNote'));
const additionalContent = computed(() => t('jwtDecoder.additionalContent'));

const token = ref("");
const header = ref("");
const payload = ref("");
const signature = ref("");
const history = ref([]);

const fileInput = ref(null);

const decodeJWT = () => {
    if (!token.value) {
        header.value = "";
        payload.value = "";
        signature.value = "";
        return;
    }

    try {
        const parts = token.value.split(".");
        if (parts.length !== 3) return;
        header.value = JSON.stringify(JSON.parse(atob(parts[0])), null, 2);
        payload.value = JSON.stringify(JSON.parse(atob(parts[1])), null, 2);
        signature.value = parts[2];
    } catch (e) {
        header.value = "Invalid token";
        payload.value = "";
        signature.value = "";
    }
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        token.value = ev.target.result.trim();
        decodeJWT();
    };
    reader.readAsText(file);
};

const copyToken = () => {
    if (token.value) navigator.clipboard.writeText(token.value);
};

const downloadToken = () => {
    if (!token.value) return;
    const blob = new Blob([token.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "token.jwt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearAll = () => {
    token.value = "";
    decodeJWT();
    if (fileInput.value) fileInput.value.value = null;
};

const saveHistory = () => {
    if (!token.value) return;
    history.value.unshift({ token: token.value, date: new Date().toLocaleString() });
};

const restore = (h) => {
    token.value = h.token;
    decodeJWT();
};

const clearHistory = () => {
    history.value = [];
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const data = history.value.map(h => h.token).join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "jwt-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};
</script>
