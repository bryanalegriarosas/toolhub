<template>
    <div class="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl">
        <h1 class="text-3xl font-bold mb-6">Random Number Generator</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Basic Settings -->
            <div class="space-y-4">
                <h2 class="text-lg font-semibold text-gray-700">Basic Settings</h2>
                
                <div>
                    <label class="block text-sm font-medium mb-2">Minimum Value</label>
                    <input v-model.number="min" type="number" class="w-full border rounded-lg p-3" placeholder="Enter minimum value" />
                </div>
                
                <div>
                    <label class="block text-sm font-medium mb-2">Maximum Value</label>
                    <input v-model.number="max" type="number" class="w-full border rounded-lg p-3" placeholder="Enter maximum value" />
                </div>
                
                <div>
                    <label class="block text-sm font-medium mb-2">Quantity</label>
                    <input v-model.number="quantity" type="number" min="1" max="100" class="w-full border rounded-lg p-3" placeholder="How many numbers to generate" />
                </div>
            </div>

            <!-- Advanced Options -->
            <div class="space-y-4">
                <h2 class="text-lg font-semibold text-gray-700">Advanced Options</h2>
                
                <div>
                    <label class="block text-sm font-medium mb-2">Number Type</label>
                    <select v-model="numberType" class="w-full border rounded-lg p-3">
                        <option value="integer">Integer</option>
                        <option value="decimal">Decimal</option>
                        <option value="percentage">Percentage</option>
                        <option value="scientific">Scientific</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium mb-2">Decimal Places</label>
                    <input v-model.number="decimalPlaces" type="number" min="0" max="10" class="w-full border rounded-lg p-3" :disabled="numberType === 'integer'" />
                </div>
                
                <div>
                    <label class="block text-sm font-medium mb-2">Unique Numbers Only</label>
                    <label class="flex items-center">
                        <input v-model="unique" type="checkbox" class="mr-2" />
                        <span class="text-sm">Generate unique numbers only</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3 mb-6">
            <button @click="generate" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Generate Numbers
            </button>
            
            <button @click="copyAll" class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" :disabled="results.length === 0">
                Copy All
            </button>
            
            <button @click="clearResults" class="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors" :disabled="results.length === 0">
                Clear Results
            </button>
            
            <button @click="exportResults" class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors" :disabled="results.length === 0">
                Export
            </button>
        </div>

        <!-- Results Display -->
        <div v-if="results.length > 0" class="mb-6">
            <h3 class="text-lg font-semibold mb-3">Generated Numbers ({{ results.length }})</h3>
            <div class="bg-gray-50 rounded-lg p-4">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    <div v-for="(number, index) in results" :key="index" 
                         class="bg-white border rounded-lg p-3 text-center font-mono hover:bg-blue-50 cursor-pointer transition-colors"
                         @click="copyNumber(number)">
                        <div class="text-lg font-bold">{{ formatNumber(number) }}</div>
                        <div class="text-xs text-gray-500">Click to copy</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Statistics -->
        <div v-if="results.length > 0" class="mb-6">
            <h3 class="text-lg font-semibold mb-3">Statistics</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-blue-50 rounded-lg p-3">
                    <div class="text-sm text-gray-600">Average</div>
                    <div class="text-lg font-bold text-blue-600">{{ formatNumber(average) }}</div>
                </div>
                <div class="bg-green-50 rounded-lg p-3">
                    <div class="text-sm text-gray-600">Sum</div>
                    <div class="text-lg font-bold text-green-600">{{ formatNumber(sum) }}</div>
                </div>
                <div class="bg-purple-50 rounded-lg p-3">
                    <div class="text-sm text-gray-600">Min</div>
                    <div class="text-lg font-bold text-purple-600">{{ formatNumber(Math.min(...results)) }}</div>
                </div>
                <div class="bg-orange-50 rounded-lg p-3">
                    <div class="text-sm text-gray-600">Max</div>
                    <div class="text-lg font-bold text-orange-600">{{ formatNumber(Math.max(...results)) }}</div>
                </div>
            </div>
        </div>

        <!-- History -->
        <div v-if="history.length > 0" class="mb-6">
            <div class="flex justify-between items-center mb-3">
                <h3 class="text-lg font-semibold">Recent History</h3>
                <button @click="clearHistory" class="text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50 transition-colors">
                    Clear History
                </button>
            </div>
            <div class="space-y-2">
                <div v-for="(entry, index) in history.slice(-5)" :key="index" 
                     class="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                    <div class="text-sm">
                        <span class="font-medium">{{ entry.count }} numbers</span>
                        <span class="text-gray-500 ml-2">{{ entry.range }}</span>
                        <span class="text-gray-400 ml-2">{{ entry.timestamp }}</span>
                    </div>
                    <button @click="loadFromHistory(entry)" class="text-blue-600 hover:text-blue-800 text-sm">
                        Load
                    </button>
                </div>
            </div>
        </div>

        <ToolSeoContent 
            title="Random Number Generator"
            :description="seoDescription"
            :steps="seoSteps"
            :examples="seoExamples"
            :faqs="seoFaqs" />
    </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const Swal = inject('Swal');

const min = ref(1);
const max = ref(100);
const quantity = ref(1);
const numberType = ref('integer');
const decimalPlaces = ref(2);
const unique = ref(false);
const results = ref([]);
const history = ref([]);

const average = computed(() => {
    if (results.value.length === 0) return 0;
    return results.value.reduce((sum, num) => sum + num, 0) / results.value.length;
});

const sum = computed(() => {
    return results.value.reduce((sum, num) => sum + num, 0);
});

const generate = () => {
    if (min.value > max.value) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Minimum value must be less than maximum value',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
        return;
    }

    if (unique.value && (max.value - min.value + 1) < quantity.value) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Cannot generate unique numbers: range is too small for requested quantity',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true
        });
        return;
    }

    const newResults = [];
    const usedNumbers = new Set();

    while (newResults.length < quantity.value) {
        let number;
        
        if (numberType.value === 'integer') {
            number = Math.floor(Math.random() * (max.value - min.value + 1)) + min.value;
        } else if (numberType.value === 'decimal') {
            number = Math.random() * (max.value - min.value) + min.value;
            number = Number(number.toFixed(decimalPlaces.value));
        } else if (numberType.value === 'percentage') {
            number = Math.random() * 100;
            number = Number(number.toFixed(decimalPlaces.value));
        } else if (numberType.value === 'scientific') {
            number = Math.random() * (max.value - min.value) + min.value;
            number = Number(number.toExponential(decimalPlaces.value));
        }

        if (!unique.value || !usedNumbers.has(number)) {
            newResults.push(number);
            if (unique.value) {
                usedNumbers.add(number);
            }
        }
    }

    results.value = newResults;
    
    // Add to history
    history.value.push({
        count: quantity.value,
        range: `${min.value}-${max.value}`,
        type: numberType.value,
        timestamp: new Date().toLocaleTimeString(),
        results: [...newResults]
    });
};

const formatNumber = (number) => {
    if (numberType.value === 'percentage') {
        return `${number}%`;
    } else if (numberType.value === 'scientific') {
        return number.toExponential(decimalPlaces.value);
    } else if (numberType.value === 'decimal') {
        return number.toFixed(decimalPlaces.value);
    }
    return number.toString();
};

const copyNumber = async (number) => {
    try {
        await navigator.clipboard.writeText(formatNumber(number));
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'Number copied to clipboard',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });
    } catch (err) {
        console.error('Failed to copy number: ', err);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to copy number',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }
};

const copyAll = async () => {
    try {
        const formattedNumbers = results.value.map(num => formatNumber(num)).join(', ');
        await navigator.clipboard.writeText(formattedNumbers);
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'All numbers copied to clipboard',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });
    } catch (err) {
        console.error('Failed to copy numbers: ', err);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to copy numbers',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }
};

const clearResults = () => {
    results.value = [];
};

const clearHistory = () => {
    history.value = [];
};

const exportResults = () => {
    const formattedNumbers = results.value.map(num => formatNumber(num)).join('\n');
    const blob = new Blob([formattedNumbers], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'random-numbers.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
};

const loadFromHistory = (entry) => {
    results.value = [...entry.results];
};

const seoExamples = [
    {
        title: "Lottery Number Generator",
        description: "Generate random lottery numbers",
        code: "Range: 1-49 | Quantity: 6 | Type: Integer | Unique: Yes",
        result: "Generated: 7, 15, 23, 31, 42, 48 (unique lottery numbers)"
    },
    {
        title: "Dice Roll Simulator",
        description: "Simulate multiple dice rolls",
        code: "Range: 1-6 | Quantity: 3 | Type: Integer | Unique: No",
        result: "Generated: 4, 2, 5 (three dice rolls)",
        steps: [
            "Set range from 1 to 6 for standard dice",
            "Choose quantity for number of dice",
            "Disable unique to allow repeated numbers",
            "Generate and use for board games"
        ]
    },
    {
        title: "Random Percentage Generator",
        description: "Generate random percentages for statistics",
        code: "Range: 0-100 | Quantity: 5 | Type: Percentage | Decimal: 2",
        result: "Generated: 23.45%, 67.89%, 12.34%, 89.01%, 45.67%"
    }
];

const seoDescription = "Generate random numbers with customizable range, quantity, and format. Perfect for games, statistics, simulations, and random selections. Support for integers, decimals, and percentages.";

const seoSteps = [
    "Set your minimum and maximum values",
    "Choose the quantity of numbers to generate",
    "Select number type (Integer, Decimal, Percentage, or Scientific)",
    "Configure advanced options like decimal places and uniqueness",
    "Click 'Generate Numbers' to create your random numbers",
    "Copy individual numbers or export all results"
];

const seoFaqs = [
    {
        question: "What types of numbers can I generate?",
        answer: "You can generate integers, decimal numbers, percentages, and numbers in scientific notation. Each type can be customized with different precision and formatting options."
    },
    {
        question: "Can I generate unique numbers only?",
        answer: "Yes! Enable the 'Unique Numbers Only' option to ensure no duplicates are generated. The tool will automatically check if your range allows for enough unique numbers."
    },
    {
        question: "How many numbers can I generate at once?",
        answer: "You can generate up to 100 numbers at once. The results are displayed in a grid format for easy viewing and individual copying."
    },
    {
        question: "What statistics are calculated?",
        answer: "The tool automatically calculates average, sum, minimum, and maximum values for your generated numbers, providing quick insights into your data."
    },
    {
        question: "Can I save my generated numbers?",
        answer: "Yes! You can copy individual numbers, copy all numbers at once, or export them as a text file. The tool also maintains a history of recent generations."
    }
];
</script>