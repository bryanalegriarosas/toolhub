<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('hashGenerator.title') }}</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>{{ t('hashGenerator.load_file') }}</span>
                <input ref="fileInput" type="file" accept="*" @change="loadFile" class="form-input" />
            </label>
            <button
                @click="copyText"
                :disabled="!text"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                {{ t('hashGenerator.copy_text') }}
            </button>
            <button
                @click="downloadText"
                :disabled="!text"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                {{ t('hashGenerator.download_text') }}
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                Clear
            </button>
            <button
                @click="saveHistory"
                :disabled="!text"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                {{ t('hashGenerator.save') }}
            </button>
        </div>

        <textarea
            v-model="text"
            @input="generateHashes"
            rows="4"
            :placeholder="t('hashGenerator.enter_text')"
            class="w-full border dark:border-gray-600 rounded-lg p-4 mb-6"
        />

        <div class="space-y-4">
            <div class="relative">
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('hashGenerator.sha1') }}</label>
                <input
                    :value="sha1"
                    readonly
                    class="w-full border rounded p-2 pr-24"
                />
                <div class="absolute top-[1.7rem] right-2 flex gap-1">
                    <button @click="copyHash('sha1')" class="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700">{{ t('hashGenerator.copy') }}</button>
                    <button @click="downloadHash('sha1')" class="text-xs px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">{{ t('hashGenerator.download') }}</button>
                </div>
            </div>

            <div class="relative">
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('hashGenerator.sha256') }}</label>
                <input
                    :value="sha256"
                    readonly
                    class="w-full border rounded p-2 pr-24"
                />
                <div class="absolute top-[1.7rem] right-2 flex gap-1">
                    <button @click="copyHash('sha256')" class="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700">{{ t('hashGenerator.copy') }}</button>
                    <button @click="downloadHash('sha256')" class="text-xs px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">{{ t('hashGenerator.download') }}</button>
                </div>
            </div>

            <div class="relative">
                <label class="text-sm text-gray-500 dark:text-gray-400">{{ t('hashGenerator.sha512') }}</label>
                <input
                    :value="sha512"
                    readonly
                    class="w-full border rounded p-2 pr-24"
                />
                <div class="absolute top-[1.7rem] right-2 flex gap-1">
                    <button @click="copyHash('sha512')" class="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700">{{ t('hashGenerator.copy') }}</button>
                    <button @click="downloadHash('sha512')" class="text-xs px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">{{ t('hashGenerator.download') }}</button>
                </div>
            </div>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">{{ t('hashGenerator.history') }}</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items-center justify-between"
                >
                    <div>
                        <span class="font-mono">{{ h.sha1 }}</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400 truncate max-w-xs">{{ h.text }}</p>
                    </div>
                    <button
                        @click="restore(h)"
                        class="mt-1 sm:mt-0 text-xs text-blue-600 hover:underline"
                    >
                        {{ t('hashGenerator.restore') }}
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('hashGenerator.download_history') }}
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
                >
                    {{ t('hashGenerator.clear_history') }}
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
const title = computed(() => t('hashGenerator.title'));
const mainDescription = computed(() => t('hashGenerator.mainDescription'));
const extendedDescription = computed(() => t('hashGenerator.extendedDescription'));
const features = computed(() => t('hashGenerator.features'));
const steps = computed(() => t('hashGenerator.steps'));
const examples = computed(() => t('hashGenerator.examples'));
const useCases = computed(() => t('hashGenerator.useCases'));
const technicalDetails = computed(() => t('hashGenerator.technicalDetails'));
const bestPractices = computed(() => t('hashGenerator.bestPractices'));
const commonErrors = computed(() => t('hashGenerator.commonErrors'));
const alternatives = computed(() => t('hashGenerator.alternatives'));
const relatedTools = computed(() => t('hashGenerator.relatedTools'));
const faqs = computed(() => t('hashGenerator.faqs'));
const securityNote = computed(() => t('hashGenerator.securityNote'));
const additionalContent = computed(() => t('hashGenerator.additionalContent'));

const text = ref("");
const sha1 = ref("");
const sha256 = ref("");
const sha512 = ref("");
const history = ref([]);

const stopWords = []; // unused but keep placeholder

async function generateHashes() {
    if (!text.value) {
        sha1.value = "";
        sha256.value = "";
        sha512.value = "";
        return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text.value);

    async function hash(algo) {
        const buffer = await crypto.subtle.digest(algo, data);
        return Array.from(new Uint8Array(buffer))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
    }

    sha1.value = await hash("SHA-1");
    sha256.value = await hash("SHA-256");
    sha512.value = await hash("SHA-512");
}

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        text.value = ev.target.result;
        generateHashes();
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

const copyHash = (which) => {
    const val = which === 'sha1' ? sha1.value : which === 'sha256' ? sha256.value : sha512.value;
    if (val) navigator.clipboard.writeText(val);
};

const downloadHash = (which) => {
    let val;
    if (which === 'sha1') val = sha1.value;
    else if (which === 'sha256') val = sha256.value;
    else if (which === 'sha512') val = sha512.value;
    if (!val) return;
    const blob = new Blob([val], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${which}.txt`;
    a.click();
    URL.revokeObjectURL(url);
};

const saveHistory = () => {
    if (!text.value) return;
    history.value.unshift({
        text: text.value,
        sha1: sha1.value,
        sha256: sha256.value,
        sha512: sha512.value,
    });
};

const restore = (h) => {
    text.value = h.text;
    sha1.value = h.sha1;
    sha256.value = h.sha256;
    sha512.value = h.sha512;
};

const fileInput = ref(null);

const clearAll = () => {
    text.value = "";
    generateHashes();
    if (fileInput.value) fileInput.value.value = null;
};

const clearHistory = () => {
    history.value = [];
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const data = history.value
        .map((h) => `${h.sha1} | ${h.sha256} | ${h.sha512}`)
        .join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hash-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};
</script>
