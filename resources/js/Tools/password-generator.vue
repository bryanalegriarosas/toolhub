<template>
    <div class="bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h2 class="text-xl font-bold">Password Generator</h2>

        <div>
            <label class="text-sm text-gray-500"> Password length </label>

            <input
                type="number"
                v-model="length"
                class="border rounded-lg px-3 py-2 w-24"
            />
        </div>

        <div class="flex gap-3 mt-4">
            <input
                v-model="password"
                readonly
                class="flex-1 border rounded-lg px-4 py-2 font-mono"
            />

            <button
                @click="generatePassword"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Generate
            </button>

            <button
                @click="copyPassword"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
                Copy
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const length = ref(16);
const password = ref("");

const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const generatePassword = () => {
    let result = "";

    for (let i = 0; i < length.value; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    password.value = result;
};

const copyPassword = () => {
    navigator.clipboard.writeText(password.value);
};
</script>
