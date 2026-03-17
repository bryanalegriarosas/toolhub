<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Meta Tag Generator</h1>

            <p class="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
                Generate SEO meta tags with real-time preview, validation, and multiple tag support.
            </p>

            <!-- Input Section -->
            <div class="space-y-4 sm:space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <!-- Basic Meta Tags -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700">Basic Meta Tags</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Page
                                    Title</label>
                                <input v-model="title" @input="validateInputs"
                                    placeholder="Enter your page title (50-60 characters)" maxlength="60"
                                    class="form-input text-sm sm:text-base" />
                                <div class="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                                    <span>{{ title.length }}/60</span>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Meta
                                    Description</label>
                                <textarea v-model="description" @input="validateInputs"
                                    placeholder="Enter your meta description (120-160 characters)" maxlength="160"
                                    rows="3" class="form-input resize-none text-sm sm:text-base" />
                                <div class="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                                    <span>{{ description.length }}/160</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Advanced Meta Tags -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700">Advanced Meta Tags</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label
                                    class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Keywords</label>
                                <input v-model="keywords" @input="validateInputs"
                                    placeholder="Enter keywords (comma separated)"
                                    class="form-input text-sm sm:text-base" />
                                <div class="text-xs sm:text-sm text-gray-500 mt-1">
                                    <span>{{ keywordCount }} keywords</span>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Author</label>
                                <input v-model="author" @input="validateInputs" placeholder="Author name"
                                    class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Canonical
                                    URL</label>
                                <input v-model="canonical" @input="validateInputs"
                                    placeholder="https://example.com/page" class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Robots</label>
                                <select v-model="robots" class="form-select text-sm sm:text-base">
                                    <option value="index,follow">Index, Follow</option>
                                    <option value="index,nofollow">Index, Nofollow</option>
                                    <option value="noindex,nofollow">Noindex, Nofollow</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Open Graph Tags -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700">Open Graph Tags</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">OG
                                    Title</label>
                                <input v-model="ogTitle" @input="validateInputs"
                                    placeholder="Social media title (optional)" maxlength="100"
                                    class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">OG
                                    Description</label>
                                <textarea v-model="ogDescription" @input="validateInputs"
                                    placeholder="Social media description (optional)" maxlength="300" rows="2"
                                    class="form-input resize-none text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">OG
                                    Image</label>
                                <input v-model="ogImage" @input="validateInputs"
                                    placeholder="https://example.com/image.jpg"
                                    class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">OG Type</label>
                                <select v-model="ogType" class="form-select text-sm sm:text-base">
                                    <option value="website">Website</option>
                                    <option value="article">Article</option>
                                    <option value="product">Product</option>
                                    <option value="profile">Profile</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Twitter Card Tags -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700">Twitter Card Tags</h3>

                        <div class="space-y-3 sm:space-y-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Twitter
                                    Title</label>
                                <input v-model="twitterTitle" @input="validateInputs"
                                    placeholder="Twitter card title (optional)" maxlength="70"
                                    class="form-input text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Twitter
                                    Description</label>
                                <textarea v-model="twitterDescription" @input="validateInputs"
                                    placeholder="Twitter card description (optional)" maxlength="200" rows="2"
                                    class="form-input resize-none text-sm sm:text-base" />
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">Twitter
                                    Image</label>
                                <input v-model="twitterImage" @input="validateInputs"
                                    placeholder="https://example.com/twitter-image.jpg"
                                    class="form-input text-sm sm:text-base" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-2 sm:gap-4">
                <button @click="generateTags" :disabled="!isValidInputs"
                    class="flex-1 bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                    Generate Meta Tags
                </button>

                <button @click="copyToClipboard" :disabled="!result"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                    {{ copied ? 'Copied!' : 'Copy to Clipboard' }}
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
                    Clear All
                </button>
            </div>

            <!-- Generated Code -->
            <div v-if="result" class="space-y-4 sm:space-y-6">
                <div class="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold text-gray-700">Generated Meta Tags</h3>
                        <div class="flex gap-2">
                            <button @click="copyToClipboard"
                                class="px-3 py-1 sm:px-3 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-xs sm:text-sm">
                                {{ copied ? 'Copied!' : 'Copy All' }}
                            </button>
                            <button @click="downloadHtml"
                                class="px-3 py-1 sm:px-3 sm:py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-xs sm:text-sm">
                                Download HTML
                            </button>
                        </div>
                    </div>

                    <!-- Code Preview -->
                    <div class="bg-white rounded-lg p-3 sm:p-4">
                        <pre class="text-xs sm:text-sm text-gray-800 overflow-x-auto"><code>{{ result }}</code></pre>
                    </div>

                    <!-- Live Preview -->
                    <div class="mt-4">
                        <h4 class="text-md font-semibold text-gray-700 mb-2">Live Preview</h4>
                        <div class="border rounded-lg p-3 sm:p-4 bg-gray-50">
                            <div v-html="result"></div>
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
            <ToolSeoContent title="Meta Tag Generator"
                description="Free online tool to generate SEO meta tags, Open Graph, and Twitter cards. Real-time preview, validation, and HTML export."
                :steps="steps" :faqs="faqs" />

        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    'Enter basic meta tags (title, description, keywords)',
    'Add advanced meta tags (author, canonical, robots)',
    'Configure Open Graph tags for social media',
    'Set up Twitter card tags for Twitter sharing',
    'Generate HTML code with all meta tags',
    'Copy to clipboard or download as HTML file'
];

const faqs = [
    {
        question: 'What are meta tags?',
        answer: 'Meta tags are HTML elements that provide information about your webpage to search engines and social media platforms.'
    },
    {
        question: 'Why do I need meta tags?',
        answer: 'Meta tags improve SEO, help search engines understand your content, and control how your pages appear in search results.'
    },
    {
        question: 'What is Open Graph?',
        answer: 'Open Graph tags control how your content appears when shared on social media platforms like Facebook, LinkedIn, and Twitter.'
    },
    {
        question: 'What are Twitter Cards?',
        answer: 'Twitter Cards are meta tags that control how your content appears when shared on Twitter with rich media attachments.'
    },
    {
        question: 'What is the ideal title length?',
        answer: 'For SEO, keep titles between 50-60 characters. For social sharing, aim for 60-70 characters.'
    },
    {
        question: 'What about meta descriptions?',
        answer: 'Meta descriptions should be 120-160 characters for best results. Focus on accurately describing the page content.'
    },
    {
        question: 'How many keywords should I use?',
        answer: 'Use 5-10 relevant keywords. Focus on quality over quantity and avoid keyword stuffing.'
    },
    {
        question: 'Is this tool free?',
        answer: 'Yes! Our meta tag generator is completely free with no registration required.'
    }
];

// Basic meta tags
const title = ref('');
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
    if (title.value.length > 60) {
        errors.push('Title should be 50-60 characters (current: ' + title.value.length + ')');
    }

    // Validate description
    if (description.value.length > 160) {
        errors.push('Description should be 120-160 characters (current: ' + description.value.length + ')');
    }

    // Validate keywords
    if (keywordCount.value > 10) {
        errors.push('Use 5-10 keywords maximum (current: ' + keywordCount.value + ')');
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
    if (title.value) {
        tags.push(`<title>${escapeHtml(title.value)}</title>`);
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
    title.value = '';
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