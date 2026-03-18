<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">Password Generator</h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Generate secure passwords with custom length and character sets.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                <div>
                    <label class="block text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-2">Password length</label>
                    <input type="number" v-model.number="length" min="1"
                        class="form-input w-24 sm:w-32 text-sm sm:text-base" />
                </div>
                <div class="flex flex-wrap gap-2 sm:gap-4">
                    <label class="flex items-center gap-2">
                        <input type="checkbox" v-model="includeUppercase" class="sm:mt-0" />
                        <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Uppercase</span>
                    </label>
                    <label class="flex items-center gap-2">
                        <input type="checkbox" v-model="includeLowercase" class="sm:mt-0" />
                        <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Lowercase</span>
                    </label>
                    <label class="flex items-center gap-2">
                        <input type="checkbox" v-model="includeNumbers" class="sm:mt-0" />
                        <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Numbers</span>
                    </label>
                    <label class="flex items-center gap-2">
                        <input type="checkbox" v-model="includeSymbols" class="sm:mt-0" />
                        <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Symbols</span>
                    </label>
                    <label class="flex items-center gap-2">
                        <input type="checkbox" v-model="excludeSimilar" class="sm:mt-0" />
                        <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Exclude similar (iIlLoO0)</span>
                    </label>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4">
                <input v-model="password" readonly class="flex-1 form-input font-mono text-sm sm:text-base" />

                <button @click="generatePassword" :disabled="!isPoolValid"
                    class="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base">
                    Generate
                </button>

                <button @click="copyPassword" :disabled="!password"
                    class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base">
                    Copy
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition text-sm sm:text-base">
                    Clear
                </button>
            </div>

            <div v-if="error" class="text-red-500 text-xs sm:text-sm mb-4">{{ error }}</div>

            <div v-if="history.length" class="mt-4">
                <h3 class="font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">History</h3>
                <div class="max-h-48 sm:max-h-64 overflow-y-auto border dark:border-gray-600 rounded-lg p-3 sm:p-4 bg-gray-50 dark:bg-gray-700">
                    <ul class="space-y-2">
                        <li v-for="(p, idx) in history" :key="idx"
                            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-2 bg-white rounded border">
                            <span class="font-mono text-xs sm:text-sm break-all">{{ p }}</span>
                            <button @click="copyOne(p)"
                                class="text-xs text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900 self-start sm:self-auto">Copy</button>
                        </li>
                    </ul>
                </div>
                <div class="flex gap-2 sm:gap-3 mt-3">
                    <button @click="downloadHistory"
                        class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-xs sm:text-sm">Download
                        All</button>
                    <button @click="clearHistory"
                        class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition text-xs sm:text-sm">Clear
                        History</button>
                </div>
            </div>
            <ToolSeoContent title="Password Generator"
                description="Create strong passwords by customizing length and character sets." :steps="steps"
                :examples="examples" :faqs="faqs" />

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Choose desired length and character sets",
    "Click generate to create a password",
    "Copy or download passwords, and review history",
];

const examples = [
    {
        title: "Strong Password for Website",
        description: "Generate a secure password for user registration",
        code: "Length: 16, Include: Uppercase, Lowercase, Numbers, Symbols",
        result: "Kj8#mP2$nL9@xQ5!",
        steps: [
            "Set length to 16 characters",
            "Enable all character types (uppercase, lowercase, numbers, symbols)",
            "Click 'Generate'",
            "Copy the generated password"
        ]
    },
    {
        title: "Simple PIN Code",
        description: "Generate a numeric PIN for mobile devices",
        code: "Length: 6, Include: Numbers only",
        result: "274936",
        steps: [
            "Set length to 6",
            "Enable only 'Numbers' option",
            "Disable other character types",
            "Click 'Generate'"
        ]
    },
    {
        title: "Passphrase-Style Password",
        description: "Create a readable but secure password without symbols",
        code: "Length: 20, Include: Uppercase, Lowercase, Numbers, Exclude similar characters",
        result: "TrustedBlueSky48",
        steps: [
            "Set length to 20",
            "Enable uppercase, lowercase, numbers",
            "Disable symbols",
            "Enable 'Exclude similar characters'",
            "Generate multiple options until you find one memorable"
        ]
    }
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
