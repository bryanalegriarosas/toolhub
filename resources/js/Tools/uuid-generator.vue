<template>
    <div class="bg-white shadow-lg rounded-xl p-6">
        <h2 class="text-xl font-bold mb-4">UUID Generator</h2>

        <div class="flex gap-3">
            <input
                v-model="uuid"
                readonly
                class="flex-1 border rounded-lg px-4 py-2 font-mono"
            />

            <button
                @click="generateUUID"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Generate
            </button>

            <button
                @click="copyUUID"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
                Copy
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const uuid = ref("");

const generateUUID = () => {
    uuid.value = crypto.randomUUID();
}

const copyUUID = () => {
    navigator.clipboard.writeText(uuid.value);
};

</script>
