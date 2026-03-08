<template>
    <Head>
        <meta
            name="description"
            content="Format and beautify JSON instantly with this free JSON formatter tool."
        />
    </Head>

    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white shadow-lg rounded-xl p-6">
            <h1 class="text-3xl font-bold mb-6 text-gray-800">
                JSON Formatter
            </h1>

            <p class="text-gray-500 mb-6">
                Format and validate JSON instantly.
            </p>

            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <label class="flex items-center gap-2">
                    <span class="text-gray-700">Load file:</span>
                    <input ref="fileInput" type="file" accept=".json" @change="loadFile" class="form-input" />
                </label>
                <label class="flex items-center gap-2">
                    <span class="text-gray-700">Indent:</span>
                    <select v-model.number="indent" class="form-select">
                        <option value="2">2 spaces</option>
                        <option value="4">4 spaces</option>
                        <option value="0">None</option>
                    </select>
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="autoFormat" />
                    <span class="text-gray-700">Auto-format</span>
                </label>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
                <!-- INPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700">Input JSON</h2>

                    <textarea
                        v-model="input"
                        placeholder="Paste your JSON here..."
                        :class="['w-full h-80 p-4 rounded-lg font-mono text-sm focus:ring focus:ring-blue-200', { 'border-red-500': error, 'border-gray-300': !error } ]"
                    ></textarea>
                </div>

                <!-- OUTPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700">Result</h2>

                    <pre
                        class="w-full h-80 p-4 border rounded-lg bg-gray-900 text-green-400 text-sm overflow-auto"
                        >{{ output }}</pre
                    >
                </div>
            </div>

            <!-- ERROR -->
            <div v-if="error" class="mt-4 text-red-500 font-medium">
                {{ error }}
            </div>

            <!-- BUTTONS -->
            <div class="flex flex-wrap gap-3 mt-6">
                <button
                    @click="formatJson"
                    :disabled="!isValidJson"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                    Format
                </button>

                <button
                    @click="minifyJson"
                    :disabled="!isValidJson"
                    class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
                >
                    Minify
                </button>

                <button
                    @click="copyResult"
                    :disabled="!output"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                    Copy
                </button>

                <button
                    @click="downloadResult"
                    :disabled="!output"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    Download
                </button>

                <button
                    @click="clearAll"
                    class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                    Clear
                </button>
            </div>
        </div>

        <ToolSeoContent
            title="JSON Formatter"
            description="A JSON formatter allows you to beautify and validate JSON data to make it easier to read and debug."
            :steps="steps"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import { ref, computed, watch } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Paste or load your JSON into the editor",
    "Choose indentation or toggle auto-format",
    "Click the format or minify button (or use auto-format)",
    "Copy or download the formatted JSON",
];

const faqs = [
    {
        question: "What is JSON?",
        answer: "JSON (JavaScript Object Notation) is a lightweight data-interchange format used by APIs and web applications.",
    },
    {
        question: "Why format JSON?",
        answer: "Formatting JSON makes it easier to read, debug, and share with others. Minification reduces size for network transfer.",
    },
    {
        question: "Can I load a file?",
        answer: "Yes; use the file input to load `.json` files directly into the editor.",
    },
];

const input = ref("");
const output = ref("");
const error = ref("");
const indent = ref(2);
const autoFormat = ref(false);
const fileInput = ref(null);  // to reset file chooser

// helper computed
const isValidJson = computed(() => {
    try {
        JSON.parse(input.value);
        return true;
    } catch {
        return false;
    }
});

const formatJson = () => {
    error.value = "";

    try {
        const parsed = JSON.parse(input.value);
        output.value = JSON.stringify(parsed, null, indent.value);
    } catch (e) {
        error.value = `Invalid JSON: ${e.message}`;
        output.value = "";
    }
};

const minifyJson = () => {
    error.value = "";

    try {
        const parsed = JSON.parse(input.value);
        output.value = JSON.stringify(parsed);
    } catch (e) {
        error.value = `Invalid JSON: ${e.message}`;
        output.value = "";
    }
};

const copyResult = () => {
    if (!output.value) return;
    navigator.clipboard.writeText(output.value);
};

const clearAll = () => {
    input.value = "";
    output.value = "";
    error.value = "";
    if (fileInput.value) {
        fileInput.value.value = null;
    }
};

const downloadResult = () => {
    if (!output.value) return;
    const blob = new Blob([output.value], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    a.click();
    URL.revokeObjectURL(url);
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        input.value = ev.target.result;
        if (autoFormat.value) formatJson();
    };
    reader.readAsText(file);
};

watch(input, (val) => {
    if (autoFormat.value) {
        if (isValidJson.value) {
            formatJson();
        } else {
            output.value = "";
        }
    }
});
</script>
