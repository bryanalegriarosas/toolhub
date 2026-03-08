<template>
    <Head>
        <meta name="description" content="Generate UUIDs quickly with options for count, case, and history." />
    </Head>
    <div class="bg-white shadow-lg rounded-xl p-6">
        <h2 class="text-xl font-bold mb-4">UUID Generator</h2>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label class="flex items-center gap-2">
                <span class="text-gray-700">Count:</span>
                <input type="number" v-model.number="count" min="1" class="w-20 border rounded px-2 py-1" />
            </label>
            <label class="flex items-center gap-2">
                <input type="checkbox" v-model="uppercase" />
                <span class="text-gray-700">Uppercase</span>
            </label>
        </div>

        <div class="flex gap-3 mb-4">
            <input
                v-model="uuid"
                readonly
                class="flex-1 border rounded-lg px-4 py-2 font-mono"
            />

            <button
                @click="generateUUID"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Generate
            </button>

            <button
                @click="copyUUID"
                :disabled="!uuid"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                Copy
            </button>

            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
                Clear
            </button>
        </div>

        <div v-if="history.length" class="mt-4">
            <h3 class="font-semibold mb-2">History</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li v-for="(u, idx) in history" :key="idx" class="flex items-center justify-between">
                    <span>{{ u }}</span>
                    <div class="flex gap-2">
                        <button @click="copyOne(u)" class="text-xs text-blue-600 hover:underline">Copy</button>
                    </div>
                </li>
            </ul>
            <div class="flex gap-3 mt-3">
                <button @click="downloadHistory" class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Download All</button>
                <button @click="clearHistory" class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition">Clear History</button>
            </div>
        </div>
    </div>

    <ToolSeoContent
        title="UUID Generator"
        description="Create universally unique identifiers (UUIDs) with configurable options and history."
        :steps="steps"
        :faqs="faqs"
    />
</template>

<script setup>
import { ref } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Set the number of UUIDs to generate",
    "Toggle uppercase if needed",
    "Click generate and copy or download results",
];

const faqs = [
    { question: "What is a UUID?", answer: "A UUID is a 128-bit identifier used to uniquely identify information in computer systems." },
    { question: "Which versions are supported?", answer: "This tool generates version 4 (random) UUIDs using the browser crypto API." },
    { question: "Can I generate multiple IDs at once?", answer: "Yes, specify a count and the output will include that many UUIDs." },
];

const uuid = ref("");
const count = ref(1);
const uppercase = ref(false);
const history = ref([]);

const generateUUID = () => {
    history.value = history.value || [];
    const list = [];
    for (let i = 0; i < count.value; i++) {
        let u = crypto.randomUUID();
        if (uppercase.value) u = u.toUpperCase();
        list.push(u);
        history.value.unshift(u);
    }
    uuid.value = list.join("\n");
};

const copyUUID = () => {
    if (!uuid.value) return;
    navigator.clipboard.writeText(uuid.value);
};

const copyOne = (u) => {
    navigator.clipboard.writeText(u);
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const blob = new Blob([history.value.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "uuids.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearHistory = () => {
    history.value = [];
};

const clearAll = () => {
    uuid.value = "";
    count.value = 1;
    uppercase.value = false;
};

</script>
