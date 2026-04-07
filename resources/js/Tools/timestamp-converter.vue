<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">{{ t('timestampConverter.title') }}</h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ t('timestampConverter.description') }}
            </p>

            <div class="space-y-4 sm:space-y-6">
                <div>
                    <label class="block text-sm sm:text-base mb-2 text-gray-700 dark:text-gray-300">{{ t('timestampConverter.unix_timestamp') }}</label>
                    <input v-model="timestamp" type="number" placeholder="1710000000"
                        class="w-full border dark:border-gray-600 rounded-lg p-3 sm:p-4 text-sm sm:text-base" />
                </div>

                <div>
                    <label class="block text-sm sm:text-base mb-2 text-gray-700 dark:text-gray-300">{{ t('timestampConverter.date') }}</label>
                    <input v-model="date" :type="dateOnly ? 'date' : 'datetime-local'"
                        class="w-full border dark:border-gray-600 rounded-lg p-3 sm:p-4 text-sm sm:text-base" />
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <label class="flex items-center gap-2">
                        <input type="radio" value="seconds" v-model="unit" class="sm:mt-0" />
                        <span class="text-sm sm:text-base">{{ t('timestampConverter.seconds') }}</span>
                    </label>
                    <label class="flex items-center gap-2">
                        <input type="radio" value="milliseconds" v-model="unit" class="sm:mt-0" />
                        <span class="text-sm sm:text-base">{{ t('timestampConverter.milliseconds') }}</span>
                    </label>
                    <label class="flex items-center gap-2">
                        <input type="checkbox" v-model="dateOnly" class="sm:mt-0" />
                        <span class="text-sm sm:text-base">{{ t('timestampConverter.use_date_only_input') }}</span>
                    </label>
                </div>

                <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button @click="convert"
                        class="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                        {{ t('timestampConverter.convert') }}
                    </button>

                    <button @click="copyTimestamp" :disabled="!timestamp"
                        class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base">
                        {{ t('timestampConverter.copy_timestamp') }}
                    </button>

                    <button @click="copyDate" :disabled="!date"
                        class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base">
                        {{ t('timestampConverter.copy_date') }}
                    </button>

                    <button @click="clearAll"
                        class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition text-sm sm:text-base">
                        {{ t('timestampConverter.clear') }}
                    </button>
                </div>
            </div>

            <div v-if="history.length" class="mt-4 sm:mt-6">
                <h3 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('timestampConverter.history') }}</h3>
                <div class="max-h-48 sm:max-h-64 overflow-y-auto border dark:border-gray-600 rounded-lg p-3 sm:p-4 bg-gray-50 dark:bg-gray-700">
                    <ul class="space-y-2">
                        <li v-for="(h, idx) in history" :key="idx"
                            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-2 bg-white rounded border">
                            <span class="font-mono text-xs sm:text-sm break-all">{{ h }}</span>
                            <button @click="copyOne(h)"
                                class="text-xs text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900 self-start sm:self-auto">{{ t('timestampConverter.copy') }}</button>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3">
                    <button @click="clearHistory"
                        class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition text-sm sm:text-base">{{ t('timestampConverter.clear_history') }}</button>
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
const title = computed(() => t('timestampConverter.title'));
const mainDescription = computed(() => t('timestampConverter.mainDescription'));
const extendedDescription = computed(() => t('timestampConverter.extendedDescription'));
const features = computed(() => t('timestampConverter.features'));
const steps = computed(() => t('timestampConverter.steps'));
const examples = computed(() => t('timestampConverter.examples'));
const useCases = computed(() => t('timestampConverter.useCases'));
const technicalDetails = computed(() => t('timestampConverter.technicalDetails'));
const bestPractices = computed(() => t('timestampConverter.bestPractices'));
const commonErrors = computed(() => t('timestampConverter.commonErrors'));
const alternatives = computed(() => t('timestampConverter.alternatives'));
const relatedTools = computed(() => t('timestampConverter.relatedTools'));
const faqs = computed(() => t('timestampConverter.faqs'));
const securityNote = computed(() => t('timestampConverter.securityNote'));
const additionalContent = computed(() => t('timestampConverter.additionalContent'));

const timestamp = ref("");
const date = ref("");
const unit = ref("seconds");
const dateOnly = ref(false);
const history = ref([]);

const timestampToDate = () => {
    if (!timestamp.value) return;
    const factor = unit.value === "milliseconds" ? 1 : 1000;
    const d = new Date(parseInt(timestamp.value) * factor);
    // format as local datetime-local string
    const pad = (n) => n.toString().padStart(2, "0");
    if (dateOnly.value) {
        date.value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T00:00:00`;
    } else {
        date.value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
            d.getHours()
        )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    }
};

const dateToTimestamp = () => {
    if (!date.value) return;
    let d;
    if (dateOnly.value) {
        // ignore time component
        const parts = date.value.split("T")[0];
        d = new Date(parts);
    } else {
        d = new Date(date.value);
    }
    const ms = d.getTime();
    timestamp.value = unit.value === "milliseconds" ? ms : Math.floor(ms / 1000);
};

const convert = () => {
    if (timestamp.value && !date.value) {
        timestampToDate();
    } else if (date.value && !timestamp.value) {
        dateToTimestamp();
    } else if (timestamp.value && date.value) {
        timestampToDate();
    }
    if (timestamp.value && date.value) {
        history.value.unshift(`${timestamp.value} ↔ ${date.value}`);
    }
};

const copyTimestamp = () => {
    if (timestamp.value) navigator.clipboard.writeText(timestamp.value);
};

const copyOne = (h) => {
    navigator.clipboard.writeText(h);
};

const clearHistory = () => {
    history.value = [];
};

const copyDate = () => {
    if (date.value) navigator.clipboard.writeText(date.value);
};

const clearAll = () => {
    timestamp.value = "";
    date.value = "";
};
</script>
