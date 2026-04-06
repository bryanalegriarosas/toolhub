<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">{{ t('sitemap.title') }}</h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ t('sitemap.description') }}
            </p>

            <!-- URL Input Section -->
            <div class="space-y-4 sm:space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <!-- URL Input -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('sitemap.url_input') }}</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('sitemap.website_urls')
                                    }}</label>
                                <textarea v-model="urls" @input="validateInputs"
                                    placeholder="{{ t('sitemap.urls_placeholder') }}"
                                    rows="6" class="form-input resize-none text-sm sm:text-base" />
                                <div class="flex justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <span>{{ urlCount }} URLs</span>
                                    <button @click="clearUrls"
                                        class="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                                        {{ t('sitemap.clear_urls') }}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('sitemap.quick_add')
                                    }}</label>
                                <div class="flex flex-col sm:flex-row gap-2">
                                    <input v-model="singleUrl" @keyup.enter="addSingleUrl" placeholder="{{ t('sitemap.add_single_url') }}"
                                        class="flex-1 form-input text-sm sm:text-base" />
                                    <button @click="addSingleUrl"
                                        class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
                                        {{ t('sitemap.add_url') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sitemap Options -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('sitemap.sitemap_options') }}</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('sitemap.change_frequency')
                                    }}</label>
                                <select v-model="options.changeFreq" class="form-select text-sm sm:text-base">
                                    <option value="always">{{ t('sitemap.always') }}</option>
                                    <option value="hourly">{{ t('sitemap.hourly') }}</option>
                                    <option value="daily">{{ t('sitemap.daily') }}</option>
                                    <option value="weekly">{{ t('sitemap.weekly') }}</option>
                                    <option value="monthly">{{ t('sitemap.monthly') }}</option>
                                    <option value="yearly">{{ t('sitemap.yearly') }}</option>
                                    <option value="never">{{ t('sitemap.never') }}</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Priority</label>
                                <select v-model="options.priority" class="form-select text-sm sm:text-base">
                                    <option value="1.0">{{ t('sitemap.highest') }}</option>
                                    <option value="0.9">{{ t('sitemap.high') }}</option>
                                    <option value="0.8">{{ t('sitemap.medium') }}</option>
                                    <option value="0.7">{{ t('sitemap.low') }}</option>
                                    <option value="0.6">{{ t('sitemap.lowest') }}</option>
                                    <option value="">{{ t('sitemap.default') }}</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('sitemap.last_modified')
                                    }}</label>
                                <select v-model="options.lastMod" class="form-select text-sm sm:text-base">
                                    <option value="server">{{ t('sitemap.use_server_time') }}</option>
                                    <option value="current">{{ t('sitemap.use_current_time') }}</option>
                                    <option value="">{{ t('sitemap.dont_include') }}</option>
                                </select>
                            </div>

                            <div class="space-y-2">
                                <label class="flex items-center gap-2">
                                    <input v-model="options.includeImages" type="checkbox" class="rounded sm:mt-0" />
                                    <span class="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">{{ t('sitemap.include_images') }}</span>
                                </label>

                                <label class="flex items-center gap-2">
                                    <input v-model="options.validateUrls" type="checkbox" class="rounded sm:mt-0" />
                                    <span class="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">{{ t('sitemap.validate_urls') }}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-2 sm:gap-4">
                <button @click="generateSitemap" :disabled="!isValidInputs"
                    class="flex-1 bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                    <span v-if="processing">{{ t('sitemap.generate_button') }}...</span>
                    <span v-else>{{ t('sitemap.generate_button') }}</span>
                </button>

                <button @click="copyToClipboard" :disabled="!xml"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                    {{ copied ? t('sitemap.copied') : t('sitemap.copy_xml') }}
                </button>

                <button @click="downloadFile" :disabled="!xml"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                    {{ t('sitemap.download_file') }}
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base">
                    {{ t('sitemap.clear_all') }}
                </button>
            </div>

            <!-- Generated XML -->
            <div v-if="xml" class="space-y-4 sm:space-y-6">
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('sitemap.generated_sitemap') }}</h3>
                        <div class="flex gap-2">
                            <button @click="copyToClipboard"
                                class="px-3 py-1 sm:px-3 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-xs sm:text-sm">
                                {{ copied ? t('sitemap.copied') : t('sitemap.copy_xml') }}
                            </button>
                            <button @click="downloadFile"
                                class="px-3 py-1 sm:px-3 sm:py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-xs sm:text-sm">
                                {{ t('sitemap.download_file') }}
                            </button>
                        </div>
                    </div>

                    <!-- XML Preview -->
                    <div class="bg-white rounded-lg p-3 sm:p-4">
                        <pre
                            class="text-xs sm:text-sm text-gray-800 dark:text-white overflow-x-auto font-mono"><code>{{ xml }}</code></pre>
                    </div>

                    <!-- Statistics -->
                    <div class="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
                        <div class="text-center">
                            <div class="text-xl sm:text-2xl font-bold text-blue-600">{{ urlCount }}</div>
                            <div class="text-gray-600 dark:text-gray-400">{{ t('sitemap.total_urls') }}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-xl sm:text-2xl font-bold text-green-600">{{ xmlSize }}</div>
                            <div class="text-gray-600 dark:text-gray-400">{{ t('sitemap.file_size') }}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-xl sm:text-2xl font-bold text-purple-600">{{ validUrlCount }}</div>
                            <div class="text-gray-600 dark:text-gray-400">{{ t('sitemap.valid_urls') }}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-xl sm:text-2xl font-bold text-orange-600">{{ invalidUrlCount }}</div>
                            <div class="text-gray-600 dark:text-gray-400">{{ t('sitemap.invalid_urls') }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Validation Messages -->
            <div v-if="validationErrors.length > 1"
                class="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-3 rounded-lg">
                <h4 class="font-semibold mb-2 text-sm sm:text-base">{{ t('sitemap.validation_errors') }}</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li v-for="error in validationErrors" :key="error" class="text-xs sm:text-sm">{{ error }}</li>
                </ul>
            </div>

            <!-- SEO Content -->
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
const title = computed(() => t('sitemap.title'));
const mainDescription = computed(() => t('sitemap.mainDescription'));
const extendedDescription = computed(() => t('sitemap.extendedDescription'));
const features = computed(() => t('sitemap.features'));
const steps = computed(() => t('sitemap.steps'));
const examples = computed(() => t('sitemap.examples'));
const useCases = computed(() => t('sitemap.useCases'));
const technicalDetails = computed(() => t('sitemap.technicalDetails'));
const bestPractices = computed(() => t('sitemap.bestPractices'));
const commonErrors = computed(() => t('sitemap.commonErrors'));
const alternatives = computed(() => t('sitemap.alternatives'));
const relatedTools = computed(() => t('sitemap.relatedTools'));
const faqs = computed(() => t('sitemap.faqs'));
const securityNote = computed(() => t('sitemap.securityNote'));
const additionalContent = computed(() => t('sitemap.additionalContent'));

// Reactive data
const urls = ref('');
const singleUrl = ref('');
const xml = ref('');
const processing = ref(false);
const copied = ref(false);
const validationErrors = ref([]);

const options = ref({
    changeFreq: 'weekly',
    priority: '',
    lastMod: 'server',
    includeImages: false,
    validateUrls: true
});

// Computed properties
const urlList = computed(() => {
    return urls.value.split('\n').filter(url => url.trim()).filter(url => url);
});

const urlCount = computed(() => urlList.value.length);

const validUrlList = computed(() => {
    if (!options.value.validateUrls) return urlList.value;

    return urlList.value.filter(url => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    });
});

const validUrlCount = computed(() => validUrlList.value.length);

const invalidUrlCount = computed(() => urlCount.value - validUrlCount.value);

const xmlSize = computed(() => {
    if (!xml.value) return '0 KB';
    const bytes = new Blob([xml.value]).size;
    return (bytes / 1024).toFixed(1) + ' KB';
});

const isValidInputs = computed(() => {
    const errors = [];

    if (urlCount.value === 0) {
        errors.push('Please enter at least one URL');
    }

    if (urlCount.value > 50000) {
        errors.push('Maximum 50,000 URLs allowed per sitemap');
    }

    validationErrors.value = errors;
    return errors.length === 0;
});

const validateInputs = () => {
    validationErrors.value = [];
};

const addSingleUrl = () => {
    if (singleUrl.value.trim()) {
        urls.value += (urls.value.trim() ? '\n' : '') + singleUrl.value.trim();
        singleUrl.value = '';
    }
};

const clearUrls = () => {
    urls.value = '';
    singleUrl.value = '';
    validationErrors.value = [];
};

const generateSitemap = async () => {
    if (!isValidInputs.value) return;

    processing.value = true;
    validationErrors.value = [];

    try {
        const validUrls = options.value.validateUrls ? validUrlList.value : urlList.value;

        let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xmlContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        validUrls.forEach((url, index) => {
            const lastmod = options.value.lastMod === 'current'
                ? new Date().toISOString().split('T')[0]
                : options.value.lastMod === 'server'
                    ? ''
                    : '';

            xmlContent += '  <url>\n';
            xmlContent += `    <loc>${escapeXml(url)}</loc>\n`;

            if (options.value.lastMod && lastmod) {
                xmlContent += `    <lastmod>${lastmod}</lastmod>\n`;
            }

            if (options.value.changeFreq) {
                xmlContent += `    <changefreq>${options.value.changeFreq}</changefreq>\n`;
            }

            if (options.value.priority) {
                xmlContent += `    <priority>${options.value.priority}</priority>\n`;
            }

            xmlContent += '  </url>\n';
        });

        xmlContent += '</urlset>';

        xml.value = xmlContent;
        processing.value = false;

    } catch (err) {
        console.error('Sitemap generation error:', err);
        validationErrors.value = ['Failed to generate sitemap. Please try again.'];
        processing.value = false;
    }
};

const copyToClipboard = async () => {
    if (!xml.value) return;

    try {
        await navigator.clipboard.writeText(xml.value);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        console.error('Copy error:', err);
    }
};

const downloadFile = () => {
    if (!xml.value) return;

    const blob = new Blob([xml.value], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const clearAll = () => {
    urls.value = '';
    singleUrl.value = '';
    xml.value = '';
    processing.value = false;
    copied.value = false;
    validationErrors.value = [];
    options.value = {
        changeFreq: 'weekly',
        priority: '',
        lastMod: 'server',
        includeImages: false,
        validateUrls: true
    };
};

const escapeXml = (text) => {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};
</script>