<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Diff Checker</h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Text 1 -->
            <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Text 1 (Original)
                </label>
                <div class="flex gap-2">
                    <button
                        @click="loadFile(1)"
                        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                    >
                        Load File
                    </button>
                    <button
                        @click="clearText(1)"
                        class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                    >
                        Clear
                    </button>
                </div>
                <textarea
                    v-model="text1"
                    placeholder="Paste or type your first text here..."
                    class="w-full h-64 p-4 border dark:border-gray-600 rounded-lg font-mono text-sm focus:ring focus:ring-blue-200"
                ></textarea>
                <input
                    ref="fileInput1"
                    type="file"
                    @change="handleFileLoad(1, $event)"
                    class="hidden"
                    accept=".txt"
                />
            </div>

            <!-- Text 2 -->
            <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Text 2 (Modified)
                </label>
                <div class="flex gap-2">
                    <button
                        @click="loadFile(2)"
                        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                    >
                        Load File
                    </button>
                    <button
                        @click="clearText(2)"
                        class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                    >
                        Clear
                    </button>
                </div>
                <textarea
                    v-model="text2"
                    placeholder="Paste or type your second text here..."
                    class="w-full h-64 p-4 border dark:border-gray-600 rounded-lg font-mono text-sm focus:ring focus:ring-blue-200"
                ></textarea>
                <input
                    ref="fileInput2"
                    type="file"
                    @change="handleFileLoad(2, $event)"
                    class="hidden"
                    accept=".txt"
                />
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3">
            <button
                @click="compareTexts"
                :disabled="!text1 || !text2"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
                Compare Texts
            </button>

            <button
                @click="swapTexts"
                :disabled="!text1 && !text2"
                class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
            >
                Swap Texts
            </button>

            <button
                @click="copyDifferences"
                :disabled="!differences.length"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                Copy Differences
            </button>

            <button
                @click="downloadDiff"
                :disabled="!differences.length"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                Download Diff
            </button>

            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                Clear All
            </button>
        </div>

        <!-- Statistics -->
        <div v-if="stats" class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">{{ stats.linesAdded }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Lines Added</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-red-600">{{ stats.linesRemoved }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Lines Removed</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-yellow-600">{{ stats.linesModified }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Lines Modified</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-gray-600 dark:text-gray-400">{{ stats.linesUnchanged }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Lines Unchanged</div>
            </div>
        </div>

        <!-- Differences Display -->
        <div v-if="differences.length" class="space-y-4">
            <h3 class="text-lg font-semibold">Differences</h3>
            <div class="border dark:border-gray-600 rounded-lg overflow-auto max-h-96">
                <div
                    v-for="(diff, index) in differences"
                    :key="index"
                    :class="[
                        'p-3 border-b font-mono text-sm',
                        diff.type === 'added' ? 'bg-green-50 border-green-200' :
                        diff.type === 'removed' ? 'bg-red-50 border-red-200' :
                        diff.type === 'modified' ? 'bg-yellow-50 border-yellow-200' :
                        'bg-gray-50 dark:bg-gray-700'
                    ]"
                >
                    <div class="flex items-start gap-2">
                        <span class="text-gray-500 dark:text-gray-400 text-xs w-8">{{ diff.lineNumber }}</span>
                        <span
                            :class="[
                                'flex-1',
                                diff.type === 'added' ? 'text-green-700' :
                                diff.type === 'removed' ? 'text-red-700' :
                                diff.type === 'modified' ? 'text-yellow-700' :
                                'text-gray-700 dark:text-gray-300'
                            ]"
                        >
                            <span v-if="diff.type === 'added'" class="font-bold">+</span>
                            <span v-else-if="diff.type === 'removed'" class="font-bold">-</span>
                            <span v-else-if="diff.type === 'modified'" class="font-bold">~</span>
                            <span v-else class="font-bold"> </span>
                            {{ diff.content }}
                        </span>
                    </div>
                    <div v-if="diff.type === 'modified' && diff.oldContent" class="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Was: {{ diff.oldContent }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Side-by-Side View -->
        <div v-if="showSideBySide && differences.length" class="space-y-4">
            <h3 class="text-lg font-semibold">Side-by-Side View</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="border dark:border-gray-600 rounded-lg p-4">
                    <h4 class="font-semibold mb-2 text-red-600">Text 1</h4>
                    <div class="space-y-1">
                        <div
                            v-for="line in sideBySide.text1"
                            :key="line.number"
                            :class="[
                                'p-2 font-mono text-sm rounded',
                                line.status === 'removed' ? 'bg-red-100 text-red-800' :
                                line.status === 'modified' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-50 dark:bg-gray-700'
                            ]"
                        >
                            <span class="text-gray-500 dark:text-gray-400 text-xs mr-2">{{ line.number }}</span>
                            {{ line.content }}
                        </div>
                    </div>
                </div>
                <div class="border dark:border-gray-600 rounded-lg p-4">
                    <h4 class="font-semibold mb-2 text-green-600">Text 2</h4>
                    <div class="space-y-1">
                        <div
                            v-for="line in sideBySide.text2"
                            :key="line.number"
                            :class="[
                                'p-2 font-mono text-sm rounded',
                                line.status === 'added' ? 'bg-green-100 text-green-800' :
                                line.status === 'modified' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-50 dark:bg-gray-700'
                            ]"
                        >
                            <span class="text-gray-500 dark:text-gray-400 text-xs mr-2">{{ line.number }}</span>
                            {{ line.content }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Toggle View Button -->
        <div v-if="differences.length" class="flex justify-center">
            <button
                @click="showSideBySide = !showSideBySide"
                class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
            >
                {{ showSideBySide ? 'Hide' : 'Show' }} Side-by-Side View
            </button>
        </div>

        <ToolSeoContent
            title="Diff Checker - Text Comparison Tool"
            description="Compare two texts and find differences with highlighted changes and statistics."
            :steps="steps"
            :examples="examples"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const examples = [
    {
        title: "Code Review Comparison",
        description: "Compare different versions of code",
        code: "Text 1: function calculateTotal(price, tax) { return price * (1 + tax); } | Text 2: function calculateTotal(price, tax) { return price * (1 + tax) * 1.1; }",
        result: "Highlights: Added '* 1.1' for service fee calculation"
    },
    {
        title: "Document Revision Tracking",
        description: "Track changes in document revisions",
        code: "Text 1: The quick brown fox jumps over the lazy dog. | Text 2: The quick brown fox jumps over the sleeping dog.",
        result: "Changes: 'lazy' → 'sleeping' - improved word choice",
        steps: [
            "Paste original document in left panel",
            "Add revised version in right panel",
            "Review highlighted differences",
            "Accept or reject changes as needed"
        ]
    },
    {
        title: "Configuration File Changes",
        description: "Compare configuration file modifications",
        code: "Text 1: timeout: 30 | retries: 3 | debug: false | Text 2: timeout: 60 | retries: 5 | debug: true",
        result: "Modified: timeout 30→60, retries 3→5, debug false→true"
    }
];

const steps = [
    "Enter or load two texts to compare",
    "Click 'Compare Texts' to find differences",
    "View highlighted changes and statistics",
    "Download or copy the results"
];

const faqs = [
    { 
        question: "What text formats are supported?", 
        answer: "Plain text files (.txt) and any text content you paste directly." 
    },
    { 
        question: "How are differences detected?", 
        answer: "The tool compares texts line by line and identifies additions, removals, and modifications." 
    },
    { 
        question: "Can I compare large texts?", 
        answer: "Yes, the tool can handle large texts, but very large files may take longer to process." 
    }
];

const text1 = ref("");
const text2 = ref("");
const differences = ref([]);
const stats = ref(null);
const showSideBySide = ref(false);
const sideBySide = ref({ text1: [], text2: [] });
const fileInput1 = ref(null);
const fileInput2 = ref(null);

const compareTexts = () => {
    if (!text1.value || !text2.value) return;

    const lines1 = text1.value.split('\n');
    const lines2 = text2.value.split('\n');
    
    differences.value = [];
    sideBySide.value = { text1: [], text2: [] };
    
    const maxLength = Math.max(lines1.length, lines2.length);
    let added = 0, removed = 0, modified = 0, unchanged = 0;
    
    for (let i = 0; i < maxLength; i++) {
        const line1 = lines1[i] || '';
        const line2 = lines2[i] || '';
        
        if (i >= lines1.length) {
            // Line added
            differences.value.push({
                type: 'added',
                lineNumber: i + 1,
                content: line2
            });
            sideBySide.value.text1.push({ number: i + 1, content: '', status: 'empty' });
            sideBySide.value.text2.push({ number: i + 1, content: line2, status: 'added' });
            added++;
        } else if (i >= lines2.length) {
            // Line removed
            differences.value.push({
                type: 'removed',
                lineNumber: i + 1,
                content: line1
            });
            sideBySide.value.text1.push({ number: i + 1, content: line1, status: 'removed' });
            sideBySide.value.text2.push({ number: i + 1, content: '', status: 'empty' });
            removed++;
        } else if (line1 !== line2) {
            // Line modified
            differences.value.push({
                type: 'modified',
                lineNumber: i + 1,
                content: line2,
                oldContent: line1
            });
            sideBySide.value.text1.push({ number: i + 1, content: line1, status: 'modified' });
            sideBySide.value.text2.push({ number: i + 1, content: line2, status: 'modified' });
            modified++;
        } else {
            // Line unchanged
            sideBySide.value.text1.push({ number: i + 1, content: line1, status: 'unchanged' });
            sideBySide.value.text2.push({ number: i + 1, content: line2, status: 'unchanged' });
            unchanged++;
        }
    }
    
    stats.value = {
        linesAdded: added,
        linesRemoved: removed,
        linesModified: modified,
        linesUnchanged: unchanged
    };
};

const loadFile = (textInput) => {
    if (textInput === 1) {
        fileInput1.value?.click();
    } else {
        fileInput2.value?.click();
    }
};

const handleFileLoad = (textInput, event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        if (textInput === 1) {
            text1.value = e.target.result;
        } else {
            text2.value = e.target.result;
        }
    };
    reader.readAsText(file);
};

const clearText = (textInput) => {
    if (textInput === 1) {
        text1.value = "";
        if (fileInput1.value) fileInput1.value.value = null;
    } else {
        text2.value = "";
        if (fileInput2.value) fileInput2.value.value = null;
    }
    clearResults();
};

const swapTexts = () => {
    const temp = text1.value;
    text1.value = text2.value;
    text2.value = temp;
    clearResults();
};

const clearAll = () => {
    text1.value = "";
    text2.value = "";
    clearResults();
    if (fileInput1.value) fileInput1.value.value = null;
    if (fileInput2.value) fileInput2.value.value = null;
};

const clearResults = () => {
    differences.value = [];
    stats.value = null;
    showSideBySide.value = false;
    sideBySide.value = { text1: [], text2: [] };
};

const copyDifferences = () => {
    if (!differences.value.length) return;
    
    const diffText = differences.value.map(diff => {
        const prefix = diff.type === 'added' ? '+' : diff.type === 'removed' ? '-' : diff.type === 'modified' ? '~' : ' ';
        return `${prefix} ${diff.content}`;
    }).join('\n');
    
    navigator.clipboard.writeText(diffText);
};

const downloadDiff = () => {
    if (!differences.value.length) return;
    
    let content = "DIFF CHECKER RESULTS\n";
    content += "====================\n\n";
    content += `Lines Added: ${stats.value.linesAdded}\n`;
    content += `Lines Removed: ${stats.value.linesRemoved}\n`;
    content += `Lines Modified: ${stats.value.linesModified}\n`;
    content += `Lines Unchanged: ${stats.value.linesUnchanged}\n\n`;
    content += "DIFFERENCES:\n";
    content += "------------\n";
    
    differences.value.forEach(diff => {
        const prefix = diff.type === 'added' ? '+' : diff.type === 'removed' ? '-' : diff.type === 'modified' ? '~' : ' ';
        content += `${prefix} ${diff.content}\n`;
        if (diff.type === 'modified' && diff.oldContent) {
            content += `- ${diff.oldContent}\n`;
        }
    });
    
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "diff-results.txt";
    a.click();
    URL.revokeObjectURL(url);
};
</script>