<template>
    <Head>
        <meta name="description" content="Minify HTML code online." />
    </Head>

    <div class="max-w-4xl mx-auto p-6 bg-white shadow rounded-xl">

        <h1 class="text-2xl font-bold mb-4">HTML Minifier</h1>

        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Input HTML</label>
                <textarea 
                    v-model="input" 
                    @input="onInputChange"
                    class="w-full border p-3 rounded font-mono text-sm" 
                    rows="8" 
                    placeholder="Paste your HTML code here..."
                />
            </div>

            <div class="flex gap-2">
                <button 
                    @click="minify" 
                    :disabled="!input.trim()"
                    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                    Minify
                </button>
                <button 
                    @click="copyToClipboard" 
                    :disabled="!output"
                    class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                    Copy Output
                </button>
                <button 
                    @click="clearAll" 
                    class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                    Clear All
                </button>
            </div>

            <div class="flex gap-4 items-center text-sm">
                <div class="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        v-model="options.removeComments" 
                        id="removeComments"
                        class="rounded"
                    />
                    <label for="removeComments">Remove comments</label>
                </div>
                <div class="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        v-model="options.removeWhitespace" 
                        id="removeWhitespace"
                        class="rounded"
                    />
                    <label for="removeWhitespace">Remove extra whitespace</label>
                </div>
                <div class="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        v-model="options.preserveLineBreaks" 
                        id="preserveLineBreaks"
                        class="rounded"
                    />
                    <label for="preserveLineBreaks">Preserve line breaks</label>
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Minified Output</label>
                <textarea 
                    v-model="output" 
                    class="w-full border p-3 rounded font-mono text-sm" 
                    rows="8" 
                    readonly
                    placeholder="Minified HTML will appear here..."
                />
            </div>

            <div v-if="stats.originalSize > 0" class="bg-gray-50 p-4 rounded">
                <h3 class="font-semibold mb-2">Statistics</h3>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span class="text-gray-600">Original size:</span> 
                        <span class="font-mono">{{ formatBytes(stats.originalSize) }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Minified size:</span> 
                        <span class="font-mono">{{ formatBytes(stats.minifiedSize) }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Savings:</span> 
                        <span class="font-mono text-green-600">{{ formatBytes(stats.savings) }} ({{ stats.percentageSaved.toFixed(1) }}%)</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Compression ratio:</span> 
                        <span class="font-mono">{{ (stats.compressionRatio).toFixed(2) }}:1</span>
                    </div>
                </div>
            </div>
        </div>

        <ToolSeoContent
            title="HTML Minifier"
            description="Compress HTML code by removing unnecessary whitespace, comments, and formatting to reduce file size and improve page load speed."
            :steps="steps"
            :faqs="faqs"
        />

    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const input = ref("");
const output = ref("");
const copySuccess = ref(false);

const options = ref({
    removeComments: true,
    removeWhitespace: true,
    preserveLineBreaks: false
});

const steps = [
    "Paste your HTML code into the input textarea",
    "Configure minification options (remove comments, whitespace, etc.)",
    "Click the 'Minify' button or let it auto-minify as you type",
    "Copy the minified HTML using the 'Copy Output' button",
    "View statistics to see the compression achieved"
];

const faqs = [
    {
        question: "What does HTML minification do?",
        answer: "HTML minification removes unnecessary characters from your HTML code, including whitespace, comments, and formatting, without changing its functionality. This reduces file size and improves page load speed."
    },
    {
        question: "Is minified HTML still valid?",
        answer: "Yes, minified HTML remains completely valid and functional. The minification process only removes non-essential characters like spaces, line breaks, and comments."
    },
    {
        question: "Should I preserve line breaks?",
        answer: "Preserving line breaks is useful if you need to maintain some readability in the minified code for debugging purposes. However, removing them will result in smaller file sizes."
    },
    {
        question: "How much compression can I expect?",
        answer: "Compression varies depending on your HTML structure, but typically you can achieve 10-30% size reduction. Well-formatted HTML with lots of whitespace and comments will compress more."
    },
    {
        question: "Can I customize the minification process?",
        answer: "Yes, you can choose to remove comments, extra whitespace, and preserve line breaks independently using the checkboxes above the input area."
    }
];

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
        result = result.replace(/<!--[^>]*-->/g, '');
    }
    
    if (options.value.removeWhitespace) {
        result = result
            .replace(/\s+/g, ' ')
            .replace(/>\s+</g, '><')
            .replace(/\s+>/g, '>')
            .replace(/<\s+/g, '<');
    }
    
    if (!options.value.preserveLineBreaks) {
        result = result.replace(/\n/g, '');
    }
    
    result = result.trim();
    
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
