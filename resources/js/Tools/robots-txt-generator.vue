<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ t('robots.title') }}</h1>

        <!-- Input Section -->
        <div class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <!-- Basic Robots Configuration -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Basic Configuration</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Sitemap URL</label>
                                <input v-model="sitemap" @input="validateInputs"
                                    placeholder="https://example.com/sitemap.xml"
                                    class="form-input text-sm sm:text-base" />
                                <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span v-if="sitemap">{{ isValidUrl(sitemap) ? '✓ Valid URL' : 'Enter valid sitemap URL'
                                    }}</span>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Crawl Delay</label>
                                <select v-model="crawlDelay" class="form-select text-sm sm:text-base">
                                    <option value="0">No delay</option>
                                    <option value="1">1 second delay</option>
                                    <option value="5">5 seconds delay</option>
                                    <option value="10">10 seconds delay</option>
                                    <option value="custom">Custom delay</option>
                                </select>
                            </div>

                            <div v-if="crawlDelay === 'custom'" class="mt-2">
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Custom Delay (seconds)</label>
                                <input v-model="customDelay" type="number" min="0" max="3600"
                                    placeholder="Enter custom delay" class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">User Agent</label>
                                <select v-model="userAgent" class="form-select text-sm sm:text-base">
                                    <option value="*">All robots (*)</option>
                                    <option value="Googlebot">Googlebot</option>
                                    <option value="Bingbot">Bingbot</option>
                                    <option value="Slurp">Slurp</option>
                                    <option value="DuckDuckBot">DuckDuckBot</option>
                                    <option value="custom">Custom user agent</option>
                                </select>
                            </div>

                            <div v-if="userAgent === 'custom'" class="mt-2">
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Custom User Agent</label>
                                <input v-model="customUserAgent" placeholder="MyCustomBot/1.0"
                                    class="form-input text-sm sm:text-base" />
                            </div>
                        </div>
                    </div>

                    <!-- Advanced Directives -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Advanced Directives</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <!-- Allow/Disallow Rules -->
                            <div class="space-y-2">
                                <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Allow/Disallow Rules</label>
                                <div class="space-y-2">
                                    <div v-for="(rule, index) in rules.allow" :key="index" class="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                                        <input v-model="rule.path" placeholder="Path or pattern"
                                            class="flex-1 px-3 py-2 border dark:border-gray-600 rounded-lg text-sm sm:text-base" />
                                        <select v-model="rule.type" class="w-full sm:w-auto px-3 py-2 border dark:border-gray-600 rounded-lg text-sm sm:text-base">
                                            <option value="allow">Allow</option>
                                            <option value="disallow">Disallow</option>
                                        </select>
                                        <button @click="removeRule('allow', index)"
                                            class="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base">
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <button @click="addRule('allow')"
                                    class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
                                    Add Allow Rule
                                </button>
                            </div>


                            <!-- Disallow Rules -->
                            <div class="space-y-2">
                                <div v-for="(rule, index) in rules.disallow" :key="index" class="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                                    <input v-model="rule.path" placeholder="Path or pattern"
                                        class="flex-1 px-3 py-2 border dark:border-gray-600 rounded-lg text-sm sm:text-base" />
                                    <select v-model="rule.type" class="w-full sm:w-auto px-3 py-2 border dark:border-gray-600 rounded-lg text-sm sm:text-base">
                                        <option value="allow">Allow</option>
                                        <option value="disallow">Disallow</option>
                                    </select>
                                    <button @click="removeRule('disallow', index)"
                                        class="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <button @click="addRule('disallow')"
                                class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
                                Add Disallow Rule
                            </button>
                        </div>

                        <!-- Host Directives -->
                        <div class="space-y-2">
                            <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Host Directives</label>
                            <div v-for="(directive, index) in hostDirectives" :key="index" class="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                                <input v-model="directive.value" placeholder="Host: example.com"
                                    class="flex-1 px-3 py-2 border dark:border-gray-600 rounded-lg text-sm sm:text-base" />
                                <button @click="removeHostDirective(index)"
                                    class="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base">
                                    Remove
                                </button>
                            </div>
                        </div>
                        <button @click="addHostDirective"
                            class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
                            Add Host Directive
                        </button>

                        <!-- Sitemap Directives -->
                        <div class="space-y-2">
                            <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Sitemap Directives</label>
                            <div v-for="(directive, index) in sitemapDirectives" :key="index" class="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                                <input v-model="directive.value" placeholder="Sitemap: https://example.com/sitemap.xml"
                                    class="flex-1 px-3 py-2 border dark:border-gray-600 rounded-lg text-sm sm:text-base" />
                                <button @click="removeSitemapDirective(index)"
                                    class="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base">
                                    Remove
                                </button>
                            </div>
                        </div>
                        <button @click="addSitemapDirective"
                            class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
                            Add Sitemap Directive
                        </button>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-3">
                <button
                    @click="generateRobots"
                    :disabled="!isValidInputs"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {{ t('robots.generate_button') }}
                </button>
                <button
                    @click="copyToClipboard"
                    :disabled="!result"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                    {{ copied ? t('robots.copied') : t('robots.copy_result') }}
                </button>
                <button
                    @click="downloadFile"
                    :disabled="!result"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {{ t('robots.download') }}
                </button>
                <button
                    @click="clearAll"
                    class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                    {{ t('robots.clear') }}
                </button>
            </div>

            <!-- Generated Code -->
            <div v-if="result" class="space-y-4">
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('robots.generated_robots') }}</h3>
                        <div class="flex gap-2">
                            <button
                                @click="copyToClipboard"
                                class="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                            >
                                {{ copied ? t('robots.copied') : t('robots.copy_all') }}
                            </button>
                            <button
                                @click="downloadFile"
                                class="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
                            >
                                {{ t('robots.download_file') }}
                            </button>
                        </div>
                    </div>

                    <!-- Code Preview -->
                    <div class="bg-white rounded-lg p-4">
                        <pre class="text-sm text-gray-800 dark:text-white overflow-x-auto font-mono"><code>{{ result }}</code></pre>
                    </div>

                    <!-- Live Preview -->
                    <div class="mt-4">
                        <h4 class="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ t('robots.live_preview') }}</h4>
                        <div class="border dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                            <pre class="text-sm text-gray-600 dark:text-gray-400 overflow-x-auto"><code>{{ result }}</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Validation Messages -->
            <div v-if="validationErrors.length > 0" class="text-red-500 font-medium bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">{{ t('robots.validation_errors') }}</h4>
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
import { ref, computed } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('robots.title'));
const mainDescription = computed(() => t('robots.mainDescription'));
const extendedDescription = computed(() => t('robots.extendedDescription'));
const features = computed(() => t('robots.features'));
const steps = computed(() => t('robots.steps'));
const examples = computed(() => t('robots.examples'));
const useCases = computed(() => t('robots.useCases'));
const technicalDetails = computed(() => t('robots.technicalDetails'));
const bestPractices = computed(() => t('robots.bestPractices'));
const commonErrors = computed(() => t('robots.commonErrors'));
const alternatives = computed(() => t('robots.alternatives'));
const relatedTools = computed(() => t('robots.relatedTools'));
const faqs = computed(() => t('robots.faqs'));
const securityNote = computed(() => t('robots.securityNote'));
const additionalContent = computed(() => t('robots.additionalContent'));

// Reactive data
const sitemap = ref('');
const crawlDelay = ref('0');
const customDelay = ref('');
const userAgent = ref('*');
const customUserAgent = ref('');
const rules = ref({ allow: [], disallow: [] });
const hostDirectives = ref([]);
const sitemapDirectives = ref([]);
const result = ref('');
const copied = ref(false);
const validationErrors = ref([]);

// Computed properties
const isValidInputs = computed(() => {
    const errors = [];

    // Validate sitemap URL
    if (sitemap.value && !isValidUrl(sitemap.value)) {
        errors.push('Please enter a valid sitemap URL');
    }

    // Validate custom delay
    if (crawlDelay.value === 'custom' && (!customDelay.value || customDelay.value < 0 || customDelay.value > 3600)) {
        errors.push('Custom delay must be between 0 and 3600 seconds');
    }

    // Validate custom user agent
    if (userAgent.value === 'custom' && !customUserAgent.value.trim()) {
        errors.push('Custom user agent cannot be empty');
    }

    validationErrors.value = errors;
    return errors.length === 0;
});

const isValidUrl = (url) => {
    if (!url) return false;
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

const addRule = (type) => {
    const rule = { path: '', type: type };
    rules.value[type].push(rule);
};

const removeRule = (type, index) => {
    rules.value[type].splice(index, 1);
};

const addHostDirective = () => {
    hostDirectives.value.push('');
};

const removeHostDirective = (index) => {
    hostDirectives.value.splice(index, 1);
};

const addSitemapDirective = () => {
    sitemapDirectives.value.push('');
};

const removeSitemapDirective = (index) => {
    sitemapDirectives.value.splice(index, 1);
};

const generateRobots = () => {
    if (!isValidInputs.value) return;

    validationErrors.value = [];

    let robotsContent = [];

    // User-agent
    if (userAgent.value === 'custom') {
        robotsContent.push(`User-agent: ${customUserAgent.value}`);
    } else {
        robotsContent.push(`User-agent: ${userAgent.value}`);
    }

    // Crawl delay
    if (crawlDelay.value === 'custom') {
        robotsContent.push(`Crawl-delay: ${customDelay.value}`);
    } else if (crawlDelay.value !== '0') {
        robotsContent.push(`Crawl-delay: ${crawlDelay.value}`);
    }

    // Allow rules
    if (rules.value.allow.length > 0) {
        rules.value.allow.forEach(rule => {
            robotsContent.push(`${rule.type}: ${rule.path}`);
        });
    }

    // Disallow rules
    if (rules.value.disallow.length > 0) {
        rules.value.disallow.forEach(rule => {
            robotsContent.push(`${rule.type}: ${rule.path}`);
        });
    }

    // Sitemap
    if (sitemap.value) {
        robotsContent.push(`Sitemap: ${sitemap.value}`);
    }

    // Host directives
    hostDirectives.value.forEach(directive => {
        if (directive.trim()) {
            robotsContent.push(`Host: ${directive}`);
        }
    });

    // Sitemap directives
    sitemapDirectives.value.forEach(directive => {
        if (directive.trim()) {
            robotsContent.push(`Sitemap: ${directive}`);
        }
    });

    result.value = robotsContent.join('\n    ');
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

const downloadFile = () => {
    if (!result.value) return;

    const blob = new Blob([result.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'robots.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const clearAll = () => {
    sitemap.value = '';
    crawlDelay.value = '0';
    customDelay.value = '';
    userAgent.value = '*';
    customUserAgent.value = '';
    rules.value = { allow: [], disallow: [] };
    hostDirectives.value = [];
    sitemapDirectives.value = [];
    result.value = '';
    copied.value = false;
    validationErrors.value = [];
};
</script>