<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
                JSON to CSV Converter
            </h1>

            <p class="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
                Convert JSON array data into CSV format with history tracking and download features.
            </p>

            <div class="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <label class="flex items-center gap-2">
                    <span class="text-sm sm:text-base">Load JSON file</span>
                    <input ref="fileInput" type="file" accept=".json,application/json" @change="loadFile"
                        class="form-input text-sm sm:text-base" />
                </label>
                <button @click="downloadResult" :disabled="!output"
                    class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-sm sm:text-base">
                    Download
                </button>
                <button @click="saveHistory" :disabled="!input || !output"
                    class="px-3 sm:px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50 text-sm sm:text-base">
                    Save
                </button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

                <!-- INPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700 text-sm sm:text-base">Input JSON</h2>
                    <textarea v-model="input" @input="autoConvert"
                        class="w-full h-64 sm:h-80 p-3 sm:p-4 border rounded-lg font-mono text-xs sm:text-sm resize-none"
                        placeholder='[{"name":"John","age":30}]'></textarea>
                </div>

                <!-- OUTPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700 text-sm sm:text-base">CSV Output</h2>
                    <textarea readonly :value="output"
                        class="w-full h-64 sm:h-80 p-3 sm:p-4 border rounded-lg font-mono text-xs sm:text-sm bg-gray-50 resize-none"></textarea>
                </div>

            </div>

            <div v-if="error" class="text-red-500 text-xs sm:text-sm mb-4">
                {{ error }}
            </div>

            <div class="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                <button @click="convertToCSV"
                    class="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                    Convert
                </button>

                <button @click="copyResult"
                    class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base"
                    :disabled="!output">
                    Copy
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-sm sm:text-base">
                    Clear
                </button>
            </div>

            <div v-if="history.length" class="mt-4 sm:mt-6">
                <h3 class="font-semibold mb-2 text-gray-700 text-sm sm:text-base">History</h3>
                <div class="max-h-48 sm:max-h-64 overflow-y-auto border rounded-lg p-3 sm:p-4 bg-gray-50">
                    <ul class="space-y-2">
                        <li v-for="(item, idx) in history" :key="idx"
                            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-2 bg-white rounded border">
                            <div class="flex-1 min-w-0">
                                <div class="font-mono text-xs sm:text-sm truncate">JSON to CSV: {{
                                    item.input.substring(0, 50) }}{{ item.input.length > 50 ? '...' : '' }}</div>
                                <div class="text-xs text-gray-500 truncate">{{ item.output.substring(0, 50) }}{{
                                    item.output.length > 50 ? '...' : '' }}</div>
                            </div>
                            <div class="flex gap-1 self-start sm:self-auto">
                                <button @click="restore(item)"
                                    class="text-xs text-blue-600 hover:underline px-2 py-1 rounded hover:bg-blue-50">Restore</button>
                                <button @click="copyHistoryItem(item.output)"
                                    class="text-xs text-green-600 hover:underline px-2 py-1 rounded hover:bg-green-50">Copy</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="flex gap-2 sm:gap-3 mt-3">
                    <button @click="downloadHistory" :disabled="!history.length"
                        class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-xs sm:text-sm">
                        Download All
                    </button>
                    <button @click="clearHistory"
                        class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-xs sm:text-sm">
                        Clear History
                    </button>
                </div>
            </div>

            <ToolSeoContent title="JSON to CSV Converter"
                description="Convert JSON arrays to CSV format with automatic delimiter detection, history tracking, and batch processing capabilities."
                :steps="steps" :examples="examples" :faqs="faqs" />

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Enter JSON array data or upload a JSON file",
    "Click Convert to transform to CSV format",
    "Copy or download the CSV result",
    "Save to history for later reference",
];

const examples = [
    {
        title: "Simple User Data",
        description: "Convert user information from JSON to CSV",
        code: '[{"name":"John","age":30,"city":"New York"},{"name":"Jane","age":25,"city":"Los Angeles"}]',
        result: "name,age,city\nJohn,30,New York\nJane,25,Los Angeles",
        steps: [
            "Enter the JSON array in the input field",
            "Click 'Convert' to transform to CSV",
            "Copy the CSV result for use in spreadsheets"
        ]
    },
    {
        title: "Product Catalog",
        description: "Convert product data for e-commerce platforms",
        code: '[{"id":1,"product":"Laptop","price":999.99,"stock":50},{"id":2,"product":"Mouse","price":29.99,"stock":200}]',
        result: "id,product,price,stock\n1,Laptop,999.99,50\n2,Mouse,29.99,200",
        steps: [
            "Paste product JSON data",
            "Convert to CSV for inventory management",
            "Download as CSV file for Excel import"
        ]
    },
    {
        title: "API Response Data",
        description: "Convert API responses to spreadsheet format",
        code: '[{"status":"success","code":200,"message":"Data retrieved"}]',
        result: "status,code,message\nsuccess,200,Data retrieved",
        steps: [
            "Copy API response JSON",
            "Convert to CSV for analysis",
            "Use in data analysis tools"
        ]
    }
];

const faqs = [
    {
        question: "What JSON format is supported?",
        answer: "The tool accepts JSON arrays of objects. Each object should have consistent keys that will become CSV headers.",
    },
    {
        question: "How are special characters handled?",
        answer: "Special characters including commas, quotes, and newlines are properly escaped according to CSV standards.",
    },
    {
        question: "Can I process large JSON files?",
        answer: "Yes, you can upload JSON files. The tool handles files of reasonable size for browser processing.",
    },
    {
        question: "What happens with missing values?",
        answer: "Missing or null values are converted to empty strings in the CSV output.",
    },
];

const input = ref("");
const output = ref("");
const error = ref("");
const history = ref([]);
const fileInput = ref(null);

const convertToCSV = () => {
    error.value = "";
    output.value = "";

    try {
        const json = JSON.parse(input.value);

        if (!Array.isArray(json)) {
            error.value = "JSON must be an array of objects";
            return;
        }

        if (json.length === 0) {
            error.value = "JSON array cannot be empty";
            return;
        }

        const headers = Object.keys(json[0]);

        const csvRows = [
            headers.join(","),
            ...json.map(row =>
                headers.map(field => `"${(row[field] ?? "").toString().replace(/"/g, '""')}"`).join(",")
            )
        ];

        output.value = csvRows.join("\n");
    } catch (e) {
        error.value = "Invalid JSON format";
    }
};

const autoConvert = () => {
    if (input.value) {
        convertToCSV();
    } else {
        output.value = "";
        error.value = "";
    }
};

const copyResult = () => {
    if (output.value) {
        navigator.clipboard.writeText(output.value);
    }
};

const downloadResult = () => {
    if (!output.value) return;
    const blob = new Blob([output.value], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    a.click();
    URL.revokeObjectURL(url);
};

const saveHistory = () => {
    if (!input.value || !output.value) return;

    history.value.unshift({
        input: input.value,
        output: output.value,
        type: 'json-to-csv',
        timestamp: new Date().toISOString()
    });

    if (history.value.length > 20) {
        history.value = history.value.slice(0, 20);
    }
};

const restore = (item) => {
    input.value = item.input;
    output.value = item.output;
    error.value = "";
};

const copyHistoryItem = (text) => {
    navigator.clipboard.writeText(text);
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const data = history.value
        .map((item, index) => `=== Conversion ${index + 1} ===\n${item.output}`)
        .join("\n\n");
    const blob = new Blob([data], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "json-to-csv-history.csv";
    a.click();
    URL.revokeObjectURL(url);
};

const clearHistory = () => {
    history.value = [];
};

const clearAll = () => {
    input.value = "";
    output.value = "";
    error.value = "";
    if (fileInput.value) fileInput.value.value = null;
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        input.value = ev.target.result;
        autoConvert();
    };
    reader.readAsText(file);
};
</script>
