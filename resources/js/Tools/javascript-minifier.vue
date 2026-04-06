<template>
    <div class="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded-xl">

        <h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('javascriptMinifier.title') }}</h1>

        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('javascriptMinifier.input_javascript') }}</label>
                <textarea v-model="input" @input="onInputChange" class="w-full border p-3 rounded font-mono text-sm"
                    rows="8" :placeholder="t('javascriptMinifier.input_javascript_placeholder')" />
            </div>

            <div class="flex gap-2">
                <button @click="minify" :disabled="!input.trim()"
                    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                    {{ t('javascriptMinifier.minify') }}
                </button>
                <button @click="copyToClipboard" :disabled="!output"
                    class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                    {{ t('javascriptMinifier.copy_output') }}
                </button>
                <button @click="clearAll"
                    class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                    {{ t('javascriptMinifier.clear_all') }}
                </button>
            </div>

            <div class="flex gap-4 items-center text-sm">
                <div class="flex items-center gap-2">
                    <input type="checkbox" v-model="options.removeComments" id="removeComments" class="rounded" />
                    <label for="removeComments" class="text-gray-700 dark:text-gray-300">{{ t('javascriptMinifier.remove_comments') }}</label>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" v-model="options.removeWhitespace" id="removeWhitespace" class="rounded" />
                    <label for="removeWhitespace" class="text-gray-700 dark:text-gray-300">{{ t('javascriptMinifier.remove_extra_whitespace') }}</label>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" v-model="options.preserveLineBreaks" id="preserveLineBreaks"
                        class="rounded" />
                    <label for="preserveLineBreaks" class="text-gray-700 dark:text-gray-300">{{ t('javascriptMinifier.preserve_line_breaks') }}</label>
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('javascriptMinifier.minified_output') }}</label>
                <textarea v-model="output" class="w-full border p-3 rounded font-mono text-sm" rows="8" readonly
                    :placeholder="t('javascriptMinifier.minified_javascript_will_appear_here')" />
            </div>

            <div v-if="stats.originalSize > 0" class="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                <h3 class="font-semibold mb-2">{{ t('javascriptMinifier.statistics') }}</h3>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">{{ t('javascriptMinifier.original_size') }}</span>
                        <span class="font-mono">{{ formatBytes(stats.originalSize) }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">{{ t('javascriptMinifier.minified_size') }}</span>
                        <span class="font-mono">{{ formatBytes(stats.minifiedSize) }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">{{ t('javascriptMinifier.savings') }}</span>
                        <span class="font-mono text-green-600">{{ formatBytes(stats.savings) }} ({{
                            stats.percentageSaved.toFixed(1) }}%)</span>
                    </div>
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">{{ t('javascriptMinifier.compression_ratio') }}</span>
                        <span class="font-mono">{{ (stats.compressionRatio).toFixed(2) }}:1</span>
                    </div>
                </div>
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
import { ref, computed, watch } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('javascriptMinifier.title'));
const mainDescription = computed(() => t('javascriptMinifier.mainDescription'));
const extendedDescription = computed(() => t('javascriptMinifier.extendedDescription'));
const features = computed(() => t('javascriptMinifier.features'));
const steps = computed(() => t('javascriptMinifier.steps'));
const examples = computed(() => t('javascriptMinifier.examples'));
const useCases = computed(() => t('javascriptMinifier.useCases'));
const technicalDetails = computed(() => t('javascriptMinifier.technicalDetails'));
const bestPractices = computed(() => t('javascriptMinifier.bestPractices'));
const commonErrors = computed(() => t('javascriptMinifier.commonErrors'));
const alternatives = computed(() => t('javascriptMinifier.alternatives'));
const relatedTools = computed(() => t('javascriptMinifier.relatedTools'));
const faqs = computed(() => t('javascriptMinifier.faqs'));
const securityNote = computed(() => t('javascriptMinifier.securityNote'));
const additionalContent = computed(() => t('javascriptMinifier.additionalContent'));

const input = ref("");
const output = ref("");
const copySuccess = ref(false);

const options = ref({
    removeComments: true,
    removeWhitespace: true,
    preserveLineBreaks: false
});

const stats = computed(() => {
    const originalSize = new Blob([input.value]).size;
    const minifiedSize = new Blob([output.value]).size;
    const savings = originalSize - minifiedSize;
    const percentageSaved = originalSize > 0 ? (savings / originalSize) * 100 : 0;
    const compressionRatio = originalSize > 0 ? originalSize / minifiedSize : 1;

    return {
        originalSize,
        minifiedSize,
        savings,
        percentageSaved,
        compressionRatio
    };
});

const formatBytes = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const onInputChange = () => {
    if (input.value.trim()) {
        minify();
    } else {
        output.value = "";
    }
};

const minify = () => {
    if (!input.value.trim()) return;

    let result = input.value;

    if (options.value.removeComments) {
        result = result.replace(/\/\*[\s\S]*?\*\//g, '');
        result = result.replace(/\/\/.*$/gm, '');
    }

    if (options.value.removeWhitespace) {
        result = result
            .replace(/\s+/g, ' ')
            .replace(/\s*([{}();,=])\s*/g, '$1')
            .replace(/;}/g, '}')
            .replace(/\s*([+-])\s*([+-])/g, '$1$2')
            .replace(/\s*([=!<>])\s*([=!<>])/g, '$1$2')
            .trim();
    }

    if (!options.value.preserveLineBreaks) {
        result = result.replace(/\n/g, '');
    }

    output.value = result;
};

const copyToClipboard = async () => {
    if (!output.value) return;

    try {
        await navigator.clipboard.writeText(output.value);
        copySuccess.value = true;
        setTimeout(() => {
            copySuccess.value = false;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};

const clearAll = () => {
    input.value = "";
    output.value = "";
    copySuccess.value = false;
};

watch(options, () => {
    if (input.value.trim()) {
        minify();
    }
}, { deep: true });

</script>
