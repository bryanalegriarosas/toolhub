<template>
    <div class="max-w-6xl mx-auto p-6">
        <div class="bg-white shadow-lg rounded-xl p-6">
            <h1 class="text-3xl font-bold mb-6 text-gray-800">
                JSON Formatter
            </h1>

            <p class="text-gray-500 mb-6">
                Format and validate JSON instantly.
            </p>

            <div class="grid md:grid-cols-2 gap-6">
                <!-- INPUT -->
                <div>
                    <h2 class="font-semibold mb-2 text-gray-700">Input JSON</h2>

                    <textarea
                        v-model="input"
                        placeholder="Paste your JSON here..."
                        class="w-full h-80 p-4 border rounded-lg font-mono text-sm focus:ring focus:ring-blue-200"
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
            <div class="flex gap-3 mt-6">
                <button
                    @click="formatJson"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Format
                </button>

                <button
                    @click="minifyJson"
                    class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                    Minify
                </button>

                <button
                    @click="copyResult"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                    Copy
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const input = ref("");
const output = ref("");
const error = ref("");

function formatJson() {
    error.value = "";

    try {
        const parsed = JSON.parse(input.value);
        output.value = JSON.stringify(parsed, null, 2);
    } catch (e) {
        error.value = "Invalid JSON format";
        output.value = "";
    }
}

function minifyJson() {
    error.value = "";

    try {
        const parsed = JSON.parse(input.value);
        output.value = JSON.stringify(parsed);
    } catch (e) {
        error.value = "Invalid JSON format";
        output.value = "";
    }
}

function copyResult() {
    navigator.clipboard.writeText(output.value);
}
</script>
