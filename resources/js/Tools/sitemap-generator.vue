<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Sitemap Generator</h1>

            <p class="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
                Generate XML sitemaps with validation, multiple URLs, and advanced options.
            </p>

            <!-- URL Input Section -->
            <div class="space-y-4 sm:space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <!-- URL Input -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700">URL Input</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Website
                                    URLs</label>
                                <textarea v-model="urls" @input="validateInputs"
                                    placeholder="Enter URLs one per line &#10;https://example.com/page1 &#10;https://example.com/page2"
                                    rows="6" class="form-input resize-none text-sm sm:text-base" />
                                <div class="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                                    <span>{{ urlCount }} URLs</span>
                                    <button @click="clearUrls"
                                        class="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                                        Clear URLs
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Quick
                                    Add</label>
                                <div class="flex flex-col sm:flex-row gap-2">
                                    <input v-model="singleUrl" @keyup.enter="addSingleUrl" placeholder="Add single URL"
                                        class="flex-1 form-input text-sm sm:text-base" />
                                    <button @click="addSingleUrl"
                                        class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
                                        Add URL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sitemap Options -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700">Sitemap Options</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Change
                                    Frequency</label>
                                <select v-model="options.changeFreq" class="form-select text-sm sm:text-base">
                                    <option value="always">Always</option>
                                    <option value="hourly">Hourly</option>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                    <option value="never">Never</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Priority</label>
                                <select v-model="options.priority" class="form-select text-sm sm:text-base">
                                    <option value="1.0">Highest</option>
                                    <option value="0.9">High</option>
                                    <option value="0.8">Medium</option>
                                    <option value="0.7">Low</option>
                                    <option value="0.6">Lowest</option>
                                    <option value="">Default</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Last
                                    Modified</label>
                                <select v-model="options.lastMod" class="form-select text-sm sm:text-base">
                                    <option value="server">Use server time</option>
                                    <option value="current">Use current time</option>
                                    <option value="">Don't include</option>
                                </select>
                            </div>

                            <div class="space-y-2">
                                <label class="flex items-center gap-2">
                                    <input v-model="options.includeImages" type="checkbox" class="rounded sm:mt-0" />
                                    <span class="text-sm sm:text-base font-medium text-gray-700">Include images</span>
                                </label>

                                <label class="flex items-center gap-2">
                                    <input v-model="options.validateUrls" type="checkbox" class="rounded sm:mt-0" />
                                    <span class="text-sm sm:text-base font-medium text-gray-700">Validate URLs</span>
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
                    <span v-if="processing">Generating...</span>
                    <span v-else>Generate Sitemap</span>
                </button>

                <button @click="copyToClipboard" :disabled="!xml"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                    {{ copied ? 'Copied!' : 'Copy XML' }}
                </button>

                <button @click="downloadFile" :disabled="!xml"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                    Download File
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base">
                    Clear All
                </button>
            </div>

            <!-- Generated XML -->
            <div v-if="xml" class="space-y-4 sm:space-y-6">
                <div class="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold text-gray-700">Generated Sitemap</h3>
                        <div class="flex gap-2">
                            <button @click="copyToClipboard"
                                class="px-3 py-1 sm:px-3 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-xs sm:text-sm">
                                {{ copied ? 'Copied!' : 'Copy XML' }}
                            </button>
                            <button @click="downloadFile"
                                class="px-3 py-1 sm:px-3 sm:py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-xs sm:text-sm">
                                Download File
                            </button>
                        </div>
                    </div>

                    <!-- XML Preview -->
                    <div class="bg-white rounded-lg p-3 sm:p-4">
                        <pre
                            class="text-xs sm:text-sm text-gray-800 overflow-x-auto font-mono"><code>{{ xml }}</code></pre>
                    </div>

                    <!-- Statistics -->
                    <div class="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
                        <div class="text-center">
                            <div class="text-xl sm:text-2xl font-bold text-blue-600">{{ urlCount }}</div>
                            <div class="text-gray-600">Total URLs</div>
                        </div>
                        <div class="text-center">
                            <div class="text-xl sm:text-2xl font-bold text-green-600">{{ xmlSize }}</div>
                            <div class="text-gray-600">File Size</div>
                        </div>
                        <div class="text-center">
                            <div class="text-xl sm:text-2xl font-bold text-purple-600">{{ validUrlCount }}</div>
                            <div class="text-gray-600">Valid URLs</div>
                        </div>
                        <div class="text-center">
                            <div class="text-xl sm:text-2xl font-bold text-orange-600">{{ invalidUrlCount }}</div>
                            <div class="text-gray-600">Invalid URLs</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Validation Messages -->
            <div v-if="validationErrors.length > 1"
                class="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-3 rounded-lg">
                <h4 class="font-semibold mb-2 text-sm sm:text-base">Please fix the following issues:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li v-for="error in validationErrors" :key="error" class="text-xs sm:text-sm">{{ error }}</li>
                </ul>
            </div>

            <!-- SEO Content -->
            <ToolSeoContent title="Sitemap Generator"
                description="Free online tool to generate XML sitemaps with validation, multiple URLs, and advanced options."
                :steps="steps" :examples="examples" :faqs="faqs" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const examples = [
    {
        title: "Blog Website Sitemap",
        description: "Generate sitemap for blog with weekly updates",
        code: "URLs: https://blog.com/, https://blog.com/about, https://blog.com/contact | Frequency: Weekly | Priority: 0.8",
        result: "XML sitemap with 3 URLs, weekly priority, and lastmod dates"
    },
    {
        title: "E-commerce Store Sitemap",
        description: "Create sitemap for online store with daily updates",
        code: "URLs: https://store.com/, https://store.com/products, https://store.com/categories | Frequency: Daily | Priority: 1.0",
        result: "XML sitemap optimized for e-commerce with high priority",
        steps: [
            "Add main store pages and categories",
            "Set daily frequency for new products",
            "Set highest priority for homepage",
            "Include lastmod for better crawling"
        ]
    },
    {
        title: "Portfolio Website Sitemap",
        description: "Generate sitemap for portfolio with monthly updates",
        code: "URLs: https://portfolio.com/, https://portfolio.com/projects, https://portfolio.com/contact | Frequency: Monthly | Priority: 0.7",
        result: "XML sitemap suitable for portfolio websites"
    }
];

const steps = [
    'Enter website URLs manually or add them one by one',
    'Configure sitemap options (frequency, priority, images)',
    'Choose validation settings and URL processing',
    'Generate XML sitemap with proper formatting',
    'Preview, copy, or download the generated sitemap'
];

const faqs = [
    {
        question: 'What is a sitemap?',
        answer: 'A sitemap is an XML file that lists all important pages of your website for search engines to discover and index.'
    },
    {
        question: 'Why do I need a sitemap?',
        answer: 'Sitemaps help search engines find your content faster, improve crawling efficiency, and ensure all pages are indexed.'
    },
    {
        question: 'What URLs should I include?',
        answer: 'Include all important pages: homepage, category pages, product pages, blog posts, and any content you want indexed.'
    },
    {
        question: 'What is change frequency?',
        answer: 'Change frequency tells search engines how often your content is updated. Use realistic values based on your update schedule.'
    },
    {
        question: 'What is priority?',
        answer: 'Priority indicates the importance of pages relative to other pages on your site. Use higher priority for more important pages.'
    },
    {
        question: 'How many URLs can I include?',
        answer: 'You can include up to 50,000 URLs per sitemap. For larger sites, create multiple sitemap files and use a sitemap index.'
    },
    {
        question: 'Is this tool free?',
        answer: 'Yes! Our sitemap generator is completely free with no registration required.'
    }
];

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