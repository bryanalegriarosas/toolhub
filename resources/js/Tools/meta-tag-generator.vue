<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ t('metaTags.title') }}</h1>

        <!-- Input Section -->
        <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <!-- Basic Meta Tags -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('metaTags.basic_meta_tags') }}</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.page_title') }}</label>
                                <input v-model="pageTitle" @input="validateInputs"
                                    :placeholder="t('metaTags.page_title_placeholder')" maxlength="60"
                                    class="form-input text-sm sm:text-base" />
                                <div class="flex justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <span>{{ t('metaTags.character_count', { current: pageTitle.length, max: 60 }) }}</span>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.meta_description') }}</label>
                                <textarea v-model="description" @input="validateInputs"
                                    :placeholder="t('metaTags.meta_description_placeholder')" maxlength="160"
                                    rows="3" class="form-input resize-none text-sm sm:text-base" />
                                <div class="flex justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <span>{{ t('metaTags.character_count', { current: description.length, max: 160 }) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Advanced Meta Tags -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('metaTags.advanced_meta_tags') }}</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label
                                    class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.keywords') }}</label>
                                <input v-model="keywords" @input="validateInputs"
                                    :placeholder="t('metaTags.keywords_placeholder')"
                                    class="form-input text-sm sm:text-base" />
                                <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <span>{{ t('metaTags.keywords_count', { count: keywordCount }) }}</span>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.author') }}</label>
                                <input v-model="author" @input="validateInputs" :placeholder="t('metaTags.author_placeholder')"
                                    class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.canonical_url') }}</label>
                                <input v-model="canonical" @input="validateInputs"
                                    :placeholder="t('metaTags.canonical_url_placeholder')" class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.robots') }}</label>
                                <select v-model="robots" class="form-select text-sm sm:text-base">
                                    <option value="index,follow">{{ t('metaTags.robots_index_follow') }}</option>
                                    <option value="index,nofollow">{{ t('metaTags.robots_index_nofollow') }}</option>
                                    <option value="noindex,nofollow">{{ t('metaTags.robots_noindex_nofollow') }}</option>
                                    <option value="none">{{ t('metaTags.robots_none') }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Open Graph Tags -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('metaTags.open_graph_tags') }}</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.og_title') }}</label>
                                <input v-model="ogTitle" @input="validateInputs"
                                    :placeholder="t('metaTags.og_title_placeholder')" maxlength="100"
                                    class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.og_description') }}</label>
                                <textarea v-model="ogDescription" @input="validateInputs"
                                    :placeholder="t('metaTags.og_description_placeholder')" maxlength="300" rows="2"
                                    class="form-input resize-none text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.og_image') }}</label>
                                <input v-model="ogImage" @input="validateInputs"
                                    :placeholder="t('metaTags.og_image_placeholder')"
                                    class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.og_type') }}</label>
                                <select v-model="ogType" class="form-select text-sm sm:text-base">
                                    <option value="website">{{ t('metaTags.og_type_website') }}</option>
                                    <option value="article">{{ t('metaTags.og_type_article') }}</option>
                                    <option value="product">{{ t('metaTags.og_type_product') }}</option>
                                    <option value="profile">{{ t('metaTags.og_type_profile') }}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Twitter Card Tags -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('metaTags.twitter_card_tags') }}</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.twitter_title') }}</label>
                                <input v-model="twitterTitle" @input="validateInputs"
                                    :placeholder="t('metaTags.twitter_title_placeholder')" maxlength="70"
                                    class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.twitter_description') }}</label>
                                <textarea v-model="twitterDescription" @input="validateInputs"
                                    :placeholder="t('metaTags.twitter_description_placeholder')" maxlength="200" rows="2"
                                    class="form-input resize-none text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.twitter_image') }}</label>
                                <input v-model="twitterImage" @input="validateInputs"
                                    :placeholder="t('metaTags.twitter_image_placeholder')"
                                    class="form-input text-sm sm:text-base" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-3">
                <button
                    @click="generateTags"
                    :disabled="!isValidInputs"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {{ t('metaTags.generate_button') }}
                </button>
                <button
                    @click="copyToClipboard"
                    :disabled="!result"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                    {{ copied ? t('metaTags.copied') : t('metaTags.copy_result') }}
                </button>
                <button
                    @click="downloadHtml"
                    :disabled="!result"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('metaTags.download') }}
                </button>
                <button
                    @click="clearAll"
                    class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                    {{ t('metaTags.clear') }}
                </button>
            </div>

            <!-- Generated Code -->
            <div v-if="result" class="space-y-4">
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('metaTags.generated_tags') }}</h3>
                        <div class="flex gap-2">
                            <button
                                @click="copyToClipboard"
                                class="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                            >
                                {{ copied ? t('metaTags.copied') : t('metaTags.copy_all') }}
                            </button>
                            <button
                                @click="downloadHtml"
                                class="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
                            >
                                {{ t('metaTags.download_html') }}
                            </button>
                        </div>
                    </div>

                    <!-- Code Preview -->
                    <div class="bg-white rounded-lg p-4">
                        <pre class="text-sm text-gray-800 dark:text-white overflow-x-auto"><code>{{ result }}</code></pre>
                    </div>

                    <!-- Live Preview -->
                    <div class="mt-4">
                        <h4 class="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ t('metaTags.live_preview') }}</h4>
                        <div class="border dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                            <div v-html="result"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Validation Messages -->
            <div v-if="validationErrors.length > 0" class="text-red-500 font-medium bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">{{ t('metaTags.validation_errors') }}</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li v-for="error in validationErrors" :key="error">{{ error }}</li>
                </ul>
            </div>

        <!-- SEO Content with expanded sections -->
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
const title = computed(() => t('metaTags.title'));
const mainDescription = computed(() => t('metaTags.mainDescription'));
const extendedDescription = computed(() => t('metaTags.extendedDescription'));
const features = computed(() => t('metaTags.features'));
const steps = computed(() => t('metaTags.steps'));
const examples = computed(() => t('metaTags.examples'));
const useCases = computed(() => t('metaTags.useCases'));
const technicalDetails = computed(() => t('metaTags.technicalDetails'));
const bestPractices = computed(() => t('metaTags.bestPractices'));
const commonErrors = computed(() => t('metaTags.commonErrors'));
const alternatives = computed(() => t('metaTags.alternatives'));
const relatedTools = computed(() => t('metaTags.relatedTools'));
const faqs = computed(() => t('metaTags.faqs'));
const securityNote = computed(() => t('metaTags.securityNote'));
const additionalContent = computed(() => t('metaTags.additionalContent'));

// Basic meta tags
const pageTitle = ref('');
const description = ref('');
const keywords = ref('');
const author = ref('');
const canonical = ref('');
const robots = ref('index,follow');

// Open Graph tags
const ogTitle = ref('');
const ogDescription = ref('');
const ogImage = ref('');
const ogType = ref('website');

// Twitter Card tags
const twitterTitle = ref('');
const twitterDescription = ref('');
const twitterImage = ref('');

// UI state
const result = ref('');
const copied = ref(false);
const validationErrors = ref([]);

// Computed properties
const keywordCount = computed(() => {
    return keywords.value ? keywords.value.split(',').filter(k => k.trim()).length : 0;
});

const isValidInputs = computed(() => {
    const errors = [];

    // Validate title
    if (pageTitle.value.length > 60) {
        errors.push(t('metaTags.title_length_error', { current: pageTitle.value.length }));
    }

    // Validate description
    if (description.value.length > 160) {
        errors.push(t('metaTags.description_length_error', { current: description.value.length }));
    }

    // Validate keywords
    if (keywordCount.value > 10) {
        errors.push(t('metaTags.keywords_count_error', { current: keywordCount.value }));
    }

    validationErrors.value = errors;
    return errors.length === 0;
});

const validateInputs = () => {
    validationErrors.value = [];
};

const generateTags = () => {
    if (!isValidInputs.value) return;

    const tags = [];

    // Basic meta tags
    if (pageTitle.value) {
        tags.push(`<title>${escapeHtml(pageTitle.value)}</title>`);
    }

    if (description.value) {
        tags.push(`<meta name="description" content="${escapeHtml(description.value)}">`);
    }

    if (keywords.value) {
        tags.push(`<meta name="keywords" content="${escapeHtml(keywords.value)}">`);
    }

    if (author.value) {
        tags.push(`<meta name="author" content="${escapeHtml(author.value)}">`);
    }

    if (canonical.value) {
        tags.push(`<link rel="canonical" href="${escapeHtml(canonical.value)}">`);
    }

    if (robots.value !== 'none') {
        tags.push(`<meta name="robots" content="${escapeHtml(robots.value)}">`);
    }

    // Open Graph tags
    if (ogTitle.value) {
        tags.push(`<meta property="og:title" content="${escapeHtml(ogTitle.value)}">`);
    }

    if (ogDescription.value) {
        tags.push(`<meta property="og:description" content="${escapeHtml(ogDescription.value)}">`);
    }

    if (ogImage.value) {
        tags.push(`<meta property="og:image" content="${escapeHtml(ogImage.value)}">`);
    }

    if (ogType.value) {
        tags.push(`<meta property="og:type" content="${escapeHtml(ogType.value)}">`);
    }

    // Twitter Card tags
    if (twitterTitle.value) {
        tags.push(`<meta name="twitter:title" content="${escapeHtml(twitterTitle.value)}">`);
    }

    if (twitterDescription.value) {
        tags.push(`<meta name="twitter:description" content="${escapeHtml(twitterDescription.value)}">`);
    }

    if (twitterImage.value) {
        tags.push(`<meta name="twitter:image" content="${escapeHtml(twitterImage.value)}">`);
    }

    // Add viewport and charset
    tags.push('<meta charset="UTF-8">');
    tags.push('<meta name="viewport" content="width=device-width, initial-scale=1.0">');

    result.value = tags.join('\n    ');
};

const copyToClipboard = async () => {
    if (!result.value) return;

    try {
        await navigator.clipboard.writeText(result.value);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        console.error('Copy error:', err);
    }
};

const downloadHtml = () => {
    if (!result.value) return;

    const blob = new Blob([result.value], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'meta-tags.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const clearAll = () => {
    pageTitle.value = '';
    description.value = '';
    keywords.value = '';
    author.value = '';
    canonical.value = '';
    robots.value = 'index,follow';
    ogTitle.value = '';
    ogDescription.value = '';
    ogImage.value = '';
    ogType.value = 'website';
    twitterTitle.value = '';
    twitterDescription.value = '';
    twitterImage.value = '';
    result.value = '';
    copied.value = false;
    validationErrors.value = [];
};

const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};
</script>