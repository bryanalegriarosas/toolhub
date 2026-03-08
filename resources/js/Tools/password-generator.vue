<template>
    <Head>
        <meta name="description" content="Generate secure passwords with custom length and character sets. Includes history and download options." />
    </Head>
    <div class="bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h2 class="text-xl font-bold">Password Generator</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label class="text-sm text-gray-500"> Password length </label>
                <input
                    type="number"
                    v-model.number="length"
                    min="1"
                    class="border rounded-lg px-3 py-2 w-24"
                />
            </div>
            <div class="flex flex-wrap gap-4">
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="includeUppercase" />
                    <span class="text-gray-700">Uppercase</span>
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="includeLowercase" />
                    <span class="text-gray-700">Lowercase</span>
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="includeNumbers" />
                    <span class="text-gray-700">Numbers</span>
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="includeSymbols" />
                    <span class="text-gray-700">Symbols</span>
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="excludeSimilar" />
                    <span class="text-gray-700">Exclude similar (iIlLoO0)</span>
                </label>
            </div>
        </div>

        <div class="flex flex-wrap gap-3 mt-4">
            <input
                v-model="password"
                readonly
                class="flex-1 border rounded-lg px-4 py-2 font-mono"
            />

            <button
                @click="generatePassword"
                :disabled="!isPoolValid"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
                Generate
            </button>

            <button
                @click="copyPassword"
                :disabled="!password"
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

        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

        <div v-if="history.length" class="mt-4">
            <h3 class="font-semibold mb-2">History</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li v-for="(p, idx) in history" :key="idx" class="flex items-center justify-between">
                    <span>{{ p }}</span>
                    <button @click="copyOne(p)" class="text-xs text-blue-600 hover:underline">Copy</button>
                </li>
            </ul>
            <div class="flex gap-3 mt-3">
                <button @click="downloadHistory" class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Download All</button>
                <button @click="clearHistory" class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition">Clear History</button>
            </div>
        </div>
    </div>

    <ToolSeoContent
        title="Password Generator"
        description="Create strong passwords by customizing length and character sets."
        :steps="steps"
        :faqs="faqs"
    />
</template>

<script setup>
import { ref, computed } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Choose desired length and character sets",
    "Click generate to create a password",
    "Copy or download passwords, and review history",
];

const faqs = [
    { question: "What makes a password strong?", answer: "Longer length and a mix of character types (uppercase, lowercase, numbers, symbols) improve strength." },
    { question: "What are similar characters?", answer: "Characters like i, l, 1, L, o, O, 0 can look alike; excluding them reduces confusion." },
    { question: "Can I generate multiple passwords?", answer: "The tool currently generates one at a time but keeps a history for later use." },
];

const length = ref(16);
const password = ref("");
const includeUppercase = ref(true);
const includeLowercase = ref(true);
const includeNumbers = ref(true);
const includeSymbols = ref(true);
const excludeSimilar = ref(false);
const error = ref("");
const history = ref([]);

const similarChars = "ilLIoO0";

const charSets = computed(() => {
    let set = "";
    if (includeUppercase.value) set += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase.value) set += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers.value) set += "0123456789";
    if (includeSymbols.value) set += "!@#$%^&*()";
    if (excludeSimilar.value) {
        set = set.split("").filter((c) => !similarChars.includes(c)).join("");
    }
    return set;
});

const isPoolValid = computed(() => charSets.value.length > 0 && length.value > 0);

const generatePassword = () => {
    error.value = "";
    if (!isPoolValid.value) {
        error.value = "Please select at least one character type and a positive length.";
        return;
    }
    let result = "";
    const pool = charSets.value;
    for (let i = 0; i < length.value; i++) {
        result += pool.charAt(Math.floor(Math.random() * pool.length));
    }
    password.value = result;
    history.value.unshift(result);
};

const copyPassword = () => {
    if (!password.value) return;
    navigator.clipboard.writeText(password.value);
};

const copyOne = (p) => {
    navigator.clipboard.writeText(p);
};

const downloadHistory = () => {
    if (!history.value.length) return;
    const blob = new Blob([history.value.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "passwords.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearHistory = () => {
    history.value = [];
};

const clearAll = () => {
    password.value = "";
    length.value = 16;
    includeUppercase.value = true;
    includeLowercase.value = true;
    includeNumbers.value = true;
    includeSymbols.value = true;
    excludeSimilar.value = false;
    error.value = "";
};
</script>
