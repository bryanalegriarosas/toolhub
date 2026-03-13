<template>
    <Head>
        <meta name="description" content="Analyze keyword density with real-time calculation, multiple metrics, and SEO optimization." />
    </Head>

    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">Keyword Density Checker</h2>

        <!-- Input Section -->
        <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Text Input -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-700">Content Analysis</h3>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Enter Text Content</label>
                            <textarea 
                                v-model="text" 
                                @input="analyzeText"
                                placeholder="Paste your text content here...\nOr enter your main keyword to analyze against"
                                rows="8"
                                class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                            <div class="flex justify-between text-xs text-gray-500 mt-1">
                                <span>{{ text.length }} characters</span>
                                <span>{{ wordCount }} words</span>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Target Keywords (optional)</label>
                            <textarea 
                                v-model="targetKeywords" 
                                @input="analyzeText"
                                placeholder="Enter keywords to analyze against (comma separated)"
                                rows="3"
                                class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                            <div class="text-xs text-gray-500 mt-1">
                                <span>{{ targetKeywordCount }} keywords</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Analysis Options -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-700">Analysis Options</h3>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Minimum Word Length</label>
                            <input 
                                v-model="options.minWordLength" 
                                type="number" 
                                min="1" 
                                max="20"
                                placeholder="3"
                                class="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Stop Words</label>
                            <textarea 
                                v-model="options.stopWords" 
                                placeholder="the, and, or, but, a, an, in, is, it, of, to, that"
                                rows="3"
                                class="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        
                        <div>
                            <label class="flex items-center space-x-2">
                                <input 
                                    v-model="options.caseSensitive" 
                                    type="checkbox" 
                                    class="rounded"
                                />
                                <span class="text-sm font-medium text-gray-700">Case Sensitive</span>
                            </label>
                        </div>
                        
                        <div>
                            <label class="flex items-center space-x-2">
                                <input 
                                    v-model="options.includeMetaTags" 
                                    type="checkbox" 
                                    class="rounded"
                                />
                                <span class="text-sm font-medium text-gray-700">Include Meta Tags</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4">
            <button 
                @click="analyzeText" 
                :disabled="!text.trim()"
                class="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
                <span v-if="processing">Analyzing...</span>
                <span v-else>Analyze Text</span>
            </button>
            
            <button 
                @click="copyResults" 
                :disabled="!hasResults"
                class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
                {{ copied ? 'Copied!' : 'Copy Results' }}
            </button>
            
            <button 
                @click="downloadResults" 
                :disabled="!hasResults"
                class="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
                Download CSV
            </button>
            
            <button 
                @click="clearAll"
                class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
                Clear All
            </button>
        </div>

        <!-- Results Section -->
        <div v-if="hasResults" class="space-y-6">
            <div class="bg-gray-50 rounded-lg p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-gray-700">Analysis Results</h3>
                    <div class="flex gap-2">
                        <button 
                            @click="copyResults"
                            class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                        >
                            {{ copied ? 'Copied!' : 'Copy All' }}
                        </button>
                        <button 
                            @click="downloadResults"
                            class="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
                        >
                            Download CSV
                        </button>
                    </div>
                </div>
                
                <!-- Keyword Density Table -->
                <div class="mb-6">
                    <h4 class="text-md font-semibold text-gray-700 mb-4">Keyword Density Analysis</h4>
                    
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Keyword</th>
                                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Count</th>
                                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Frequency</th>
                                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Density %</th>
                                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Prominence</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr 
                                    v-for="item in results" 
                                    :key="item.word"
                                    :class="{
                                        'bg-green-50': item.isTargetKeyword,
                                        'bg-yellow-50': item.density > 3 && item.density <= 5,
                                        'bg-red-50': item.density > 5
                                    }"
                                >
                                    <td class="p-2 border font-medium" :class="{
                                        'text-green-700': item.isTargetKeyword,
                                        'text-gray-900': !item.isTargetKeyword
                                    }">{{ item.word }}</td>
                                    <td class="p-2 border text-center">{{ item.count }}</td>
                                    <td class="p-2 border text-center">{{ item.frequency.toFixed(2) }}%</td>
                                    <td class="p-2 border text-center font-medium" :class="{
                                        'text-green-700': item.density > 3,
                                        'text-yellow-700': item.density > 1 && item.density <= 3,
                                        'text-red-700': item.density <= 1
                                    }">{{ item.density.toFixed(2) }}%</td>
                                    <td class="p-2 border text-center">
                                        <span 
                                            v-if="item.density > 3" 
                                            class="text-green-700 font-medium"
                                        >
                                            High
                                        </span>
                                        <span 
                                            v-else-if="item.density > 1" 
                                            class="text-yellow-700 font-medium"
                                        >
                                            Medium
                                        </span>
                                        <span 
                                            v-else 
                                            class="text-red-700 font-medium"
                                        >
                                            Low
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Statistics -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-blue-600">{{ totalWords }}</div>
                        <div class="text-gray-600">Total Words</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-green-600">{{ uniqueWords }}</div>
                        <div class="text-gray-600">Unique Words</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-purple-600">{{ averageWordLength }}</div>
                        <div class="text-gray-600">Avg Word Length</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-orange-600">{{ keywordDensity }}%</div>
                        <div class="text-gray-600">Target Keyword Density</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Validation Messages -->
        <div v-if="validationErrors.length > 0" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <h4 class="font-semibold mb-2">Please fix the following issues:</h4>
            <ul class="list-disc list-inside space-y-1">
                <li v-for="error in validationErrors" :key="error" class="text-sm">{{ error }}</li>
            </ul>
        </div>

        <!-- SEO Content -->
        <ToolSeoContent
            title="Keyword Density Checker"
            description="Free online tool to analyze keyword density, word frequency, and SEO metrics with detailed reports."
            :steps="steps"
            :faqs="faqs"
        />

    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    'Enter your text content or paste it to analyze',
    'Configure analysis options (word length, stop words, case sensitivity)',
    'Add target keywords to compare against',
    'Analyze keyword density and word frequency',
    'Review detailed results with color-coded density indicators',
    'Export results as CSV or copy to clipboard'
];

const faqs = [
    { 
        question: 'What is keyword density?', 
        answer: 'Keyword density is the percentage of times a keyword appears in text compared to total words. Ideal density is 1-3% for SEO.' 
    },
    { 
        question: 'Why is keyword density important?', 
        answer: 'Proper keyword density helps search engines understand your content focus and improves ranking for target terms.' 
    },
    { 
        question: 'What is a good keyword density?', 
        answer: '1-3% is considered optimal. Above 5% may be seen as keyword stuffing, below 1% may be too low.' 
    },
    { 
        question: 'What are stop words?', 
        answer: 'Stop words are common words (the, and, or, but) that are excluded from keyword density analysis to focus on meaningful terms.' 
    },
    { 
        question: 'How do I improve keyword density?', 
        answer: 'Use keywords naturally, maintain 1-3% density, focus on long-tail keywords, and avoid keyword stuffing.' 
    },
    { 
        question: 'What is word frequency?', 
        answer: 'Word frequency shows how often each word appears in your text, helping identify repeated terms and content patterns.' 
    },
    { 
        question: 'Is this tool free?', 
        answer: 'Yes! Our keyword density checker is completely free with no registration required.' 
    }
];

// Reactive data
const text = ref('');
const targetKeywords = ref('');
const results = ref([]);
const processing = ref(false);
const copied = ref(false);
const validationErrors = ref([]);

const options = ref({
    minWordLength: 3,
    stopWords: 'the, and, or, but, a, an, in, is, it, of, to, that',
    caseSensitive: false,
    includeMetaTags: false
});

// Computed properties
const wordCount = computed(() => {
    if (!text.value) return 0;
    const words = text.value.toLowerCase().split(/\s+/).filter(word => word.trim());
    return words.length;
});

const targetKeywordCount = computed(() => {
    if (!targetKeywords.value) return 0;
    return targetKeywords.value.split(',').filter(k => k.trim()).length;
});

const hasResults = computed(() => results.value.length > 0);

const totalWords = computed(() => {
    if (!text.value) return 0;
    const words = text.value.toLowerCase().split(/\s+/).filter(word => word.trim());
    return words.length;
});

const uniqueWords = computed(() => {
    if (!text.value) return 0;
    const words = text.value.toLowerCase().split(/\s+/).filter(word => word.trim());
    const uniqueWords = new Set(words);
    return uniqueWords.size;
});

const averageWordLength = computed(() => {
    if (!text.value || totalWords.value === 0) return 0;
    const words = text.value.toLowerCase().split(/\s+/).filter(word => word.trim());
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    return (totalLength / words.length).toFixed(1);
});

const keywordDensity = computed(() => {
    if (!targetKeywords.value || targetKeywordCount.value === 0) return 0;
    
    const targetWords = targetKeywords.value.toLowerCase().split(',').filter(k => k.trim());
    const textWords = text.value.toLowerCase().split(/\s+/).filter(word => word.trim());
    
    let targetCount = 0;
    targetWords.forEach(targetWord => {
        targetCount += textWords.filter(word => word === targetWord).length;
    });
    
    return totalWords.value > 0 ? ((targetCount / totalWords.value) * 100).toFixed(2) : 0;
});

const isValidInputs = computed(() => {
    const errors = [];
    
    if (!text.value.trim()) {
        errors.push('Please enter some text to analyze');
    }
    
    if (options.value.minWordLength < 1 || options.value.minWordLength > 20) {
        errors.push('Minimum word length must be between 1 and 20');
    }
    
    validationErrors.value = errors;
    return errors.length === 0;
});

const analyzeText = () => {
    if (!isValidInputs.value) return;
    
    processing.value = true;
    validationErrors.value = [];
    
    try {
        const textToAnalyze = text.value.toLowerCase();
        const stopWordsArray = options.value.stopWords.toLowerCase().split(',').filter(word => word.trim());
        const words = textToAnalyze.split(/\s+/).filter(word => word.trim());
        
        // Filter out stop words if option is enabled
        const filteredWords = options.value.caseSensitive 
            ? words.filter(word => !stopWordsArray.includes(word))
            : words.filter(word => !stopWordsArray.includes(word.toLowerCase()));
        
        // Filter by minimum word length
        const validWords = filteredWords.filter(word => word.length >= options.value.minWordLength);
        
        // Count word frequency
        const wordMap = {};
        validWords.forEach(word => {
            wordMap[word] = (wordMap[word] || 0) + 1;
        });
        
        // Calculate density and identify target keywords
        const targetWordsList = options.value.includeMetaTags 
            ? targetKeywords.value.toLowerCase().split(',').filter(k => k.trim())
            : [];
        
        const analysisResults = Object.entries(wordMap)
            .map(([word, count]) => {
                const frequency = (count / totalWords.value) * 100;
                const density = (count / totalWords.value) * 100;
                const isTargetKeyword = targetWordsList.includes(word);
                
                return {
                    word,
                    count,
                    frequency,
                    density,
                    isTargetKeyword
                };
            })
            .sort((a, b) => b.count - a.count)
            .slice(0, 50); // Limit to top 50 results
        
        results.value = analysisResults;
        
    } catch (err) {
        console.error('Analysis error:', err);
        validationErrors.value = ['Failed to analyze text. Please try again.'];
    } finally {
        processing.value = false;
    }
};

const copyResults = async () => {
    if (results.value.length === 0) return;
    
    try {
        const csvContent = [
            ['Keyword', 'Count', 'Frequency (%)', 'Density (%)', 'Is Target Keyword'],
            ...results.value.map(item => [
                item.word,
                item.count.toString(),
                item.frequency.toFixed(2),
                item.density.toFixed(2),
                item.isTargetKeyword ? 'Yes' : 'No'
            ])
        ].map(row => row.join(',')).join('\n');
        
        await navigator.clipboard.writeText(csvContent);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        console.error('Copy error:', err);
    }
};

const downloadResults = () => {
    if (results.value.length === 0) return;
    
    const csvContent = [
            ['Keyword', 'Count', 'Frequency (%)', 'Density (%)', 'Is Target Keyword'],
            ...results.value.map(item => [
                item.word,
                item.count.toString(),
                item.frequency.toFixed(2),
                item.density.toFixed(2),
                item.isTargetKeyword ? 'Yes' : 'No'
            ])
        ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'keyword-density-analysis.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const clearAll = () => {
    text.value = '';
    targetKeywords.value = '';
    results.value = [];
    processing.value = false;
    copied.value = false;
    validationErrors.value = [];
};
</script>