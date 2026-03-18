<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">Robots.txt Generator</h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Generate robots.txt files with sitemap support, crawl delays, and advanced directives.
            </p>

            <!-- Input Section -->
            <div class="space-y-4 sm:space-y-6">
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
            <div class="flex flex-wrap gap-2 sm:gap-4">
                <button @click="generateRobots" :disabled="!isValidInputs"
                    class="flex-1 bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                    Generate Robots.txt
                </button>

                <button @click="copyToClipboard" :disabled="!result"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                    {{ copied ? 'Copied!' : 'Copy to Clipboard' }}
                </button>

                <button @click="downloadFile" :disabled="!result"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                    Download File
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base">
                    Clear All
                </button>
            </div>

            <!-- Generated Code -->
            <div v-if="result" class="space-y-4 sm:space-y-6">
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Generated Robots.txt</h3>
                        <div class="flex gap-2">
                            <button @click="copyToClipboard"
                                class="px-3 py-1 sm:px-3 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-xs sm:text-sm">
                                {{ copied ? 'Copied!' : 'Copy All' }}
                            </button>
                            <button @click="downloadFile"
                                class="px-3 py-1 sm:px-3 sm:py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-xs sm:text-sm">
                                Download File
                            </button>
                        </div>
                    </div>

                <!-- Code Preview -->
                <div class="bg-white rounded-lg p-3 sm:p-4">
                    <pre class="text-xs sm:text-sm text-gray-800 dark:text-white overflow-x-auto font-mono"><code>{{ result }}</code></pre>
                </div>

                <!-- Live Preview -->
                <div class="mt-4">
                    <h4 class="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Live Preview</h4>
                    <div class="border dark:border-gray-600 rounded-lg p-3 sm:p-4 bg-gray-50 dark:bg-gray-700">
                        <pre class="text-xs text-gray-600 dark:text-gray-400 overflow-x-auto"><code>{{ result }}</code></pre>
                    </div>
                </div>
            </div>
        </div>

        <!-- Validation Messages -->
        <div v-if="validationErrors.length > 0"
            class="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-3 rounded-lg">
            <h4 class="font-semibold mb-2 text-sm sm:text-base">Please fix the following issues:</h4>
            <ul class="list-disc list-inside space-y-1">
                <li v-for="error in validationErrors" :key="error" class="text-xs sm:text-sm">{{ error }}</li>
            </ul>
        </div>

        <!-- SEO Content -->
        <ToolSeoContent title="Robots.txt Generator"
            description="Free online tool to generate robots.txt files with sitemap support, crawl delays, and advanced directives."
            :steps="steps" :examples="examples" :faqs="faqs" />

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const examples = [
    {
        title: "Blog Website Robots.txt",
        description: "Generate robots.txt for blog with sitemap",
        code: "Sitemap: https://myblog.com/sitemap.xml | User-agent: * | Disallow: /admin/ | Disallow: /private/",
        result: "User-agent: *\nDisallow: /admin/\nDisallow: /private/\n\nSitemap: https://myblog.com/sitemap.xml"
    },
    {
        title: "E-commerce Store Configuration",
        description: "Configure robots.txt for online store",
        code: "Sitemap: https://store.com/sitemap.xml | User-agent: * | Disallow: /cart/ | Disallow: /checkout/ | Crawl-delay: 1",
        result: "User-agent: *\nDisallow: /cart/\nDisallow: /checkout/\nCrawl-delay: 1\n\nSitemap: https://store.com/sitemap.xml",
        steps: [
            "Add sitemap URL for product pages",
            "Disallow cart and checkout directories",
            "Set crawl delay to prevent server overload",
            "Allow all other pages for indexing"
        ]
    },
    {
        title: "API-Only Website",
        description: "Block all crawlers except API documentation",
        code: "User-agent: * | Disallow: / | User-agent: Googlebot | Allow: /docs/ | Sitemap: https://api.example.com/docs-sitemap.xml",
        result: "User-agent: *\nDisallow: /\n\nUser-agent: Googlebot\nAllow: /docs/\n\nSitemap: https://api.example.com/docs-sitemap.xml"
    }
];

const steps = [
    'Enter sitemap URL and basic configuration',
    'Configure crawl delays and user agent settings',
    'Add allow/disallow rules for specific paths',
    'Include host and sitemap directives',
    'Generate and download robots.txt file'
];

const faqs = [
    {
        question: 'What is a robots.txt file?',
        answer: 'A robots.txt file tells search engine crawlers which pages or sections of your site they can or cannot access.'
    },
    {
        question: 'Why do I need a robots.txt file?',
        answer: 'It helps control search engine crawling, improves SEO, prevents indexing of sensitive content, and sitemap discovery.'
    },
    {
        question: 'What are User-agent directives?',
        answer: 'User-agent directives allow you to specify rules for specific crawlers like Googlebot, Bingbot, or custom bots.'
    },
    {
        question: 'What is the difference between Allow and Disallow?',
        answer: 'Allow permits crawling of specific paths, while Disallow blocks access. Use Disallow for private/admin areas.'
    },
    {
        question: 'What are crawl delays?',
        answer: 'Crawl-delay specifies time gaps between requests to prevent server overload. Useful for large sites.'
    },
    {
        question: 'What are Sitemap directives?',
        answer: 'Sitemap directives point search engines to your XML sitemap files for better content discovery.'
    },
    {
        question: 'Is this tool free?',
        answer: 'Yes! Our robots.txt generator is completely free with no registration required.'
    }
];

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