<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">{{ t('uuidGenerator.title') }}</h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ t('uuidGenerator.description') }}
            </p>

            <div class="flex flex-col gap-3 sm:gap-4 mb-4">
                <label class="flex items-center gap-2">
                    <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('uuidGenerator.count') }}</span>
                    <input type="number" v-model.number="count" min="1"
                        class="w-16 sm:w-20 border rounded px-2 py-1 text-sm sm:text-base" />
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="uppercase" class="sm:mt-0" />
                    <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('uuidGenerator.uppercase') }}</span>
                </label>
            </div>

            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4">
                <input v-model="uuid" :placeholder="t('uuidGenerator.placeholder')" readonly
                    class="flex-1 border dark:border-gray-600 rounded-lg px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm" />

                <button @click="generateUUID"
                    class="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                    {{ t('uuidGenerator.generate') }}
                </button>

                <button @click="copyUUID" :disabled="!uuid"
                    class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base">
                    Copy
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition text-sm sm:text-base">
                    Clear
                </button>
            </div>

            <div v-if="history.length" class="mt-4 sm:mt-6">
                <h3 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('uuidGenerator.history') }}</h3>
                <div class="max-h-48 sm:max-h-64 overflow-y-auto border dark:border-gray-600 rounded-lg p-3 sm:p-4 bg-gray-50 dark:bg-gray-700">
                    <ul class="space-y-2 sm:space-y-1">
                        <li v-for="(u, idx) in history" :key="idx"
                            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-2 bg-white rounded border">
                            <span class="font-mono text-xs sm:text-sm break-all">{{ u }}</span>
                            <div class="flex gap-2">
                                <button @click="copyOne(u)"
                                    class="text-xs text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900">
                                    {{ t('uuidGenerator.copy') }}
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3">
                    <button @click="downloadHistory"
                        class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm sm:text-base">
                        {{ t('uuidGenerator.download_all') }}
                    </button>
                    <button @click="clearHistory"
                        class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition text-sm sm:text-base">
                        {{ t('uuidGenerator.clear_history') }}
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
const title = computed(() => t('uuidGenerator.title'));
const mainDescription = computed(() => t('uuidGenerator.mainDescription'));
const extendedDescription = computed(() => t('uuidGenerator.extendedDescription'));
const features = computed(() => t('uuidGenerator.features'));
const steps = computed(() => t('uuidGenerator.steps'));
const examples = computed(() => t('uuidGenerator.examples'));
const useCases = computed(() => t('uuidGenerator.useCases'));
const technicalDetails = computed(() => t('uuidGenerator.technicalDetails'));
const bestPractices = computed(() => t('uuidGenerator.bestPractices'));
const commonErrors = computed(() => t('uuidGenerator.commonErrors'));
const alternatives = computed(() => t('uuidGenerator.alternatives'));
const relatedTools = computed(() => t('uuidGenerator.relatedTools'));
const faqs = computed(() => t('uuidGenerator.faqs'));
const securityNote = computed(() => t('uuidGenerator.securityNote'));
const additionalContent = computed(() => t('uuidGenerator.additionalContent'));

const uuid = ref("");
const count = ref(1);
const uppercase = ref(false);
const history = ref([]);

const generateUUID = () => {
    history.value = history.value || [];
    const list = [];
    for (let i = 0; i < count.value; i++) {
        let u = crypto.randomUUID();
        if (uppercase.value) u = u.toUpperCase();
        list.push(u);
        history.value.unshift(u);
    }
    uuid.value = list.join("\n");
};

const copyUUID = () => {
    if (!uuid.value) return;
    navigator.clipboard.writeText(uuid.value);
};

const copyOne = (u) => {
    navigator.clipboard.writeText(u);
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const blob = new Blob([history.value.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "uuids.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearHistory = () => {
    history.value = [];
};

const clearAll = () => {
    uuid.value = "";
    count.value = 1;
    uppercase.value = false;
};
</script>
