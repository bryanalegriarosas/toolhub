<template>
    <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Word Counter</h1>

        <textarea
            v-model="text"
            rows="10"
            placeholder="Paste your text here..."
            class="w-full border rounded-xl p-4 mb-6"
        />

        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Words</p>
                <p class="text-xl font-bold">{{ wordCount }}</p>
            </div>

            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Characters</p>
                <p class="text-xl font-bold">{{ charCount }}</p>
            </div>

            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Characters (no spaces)</p>
                <p class="text-xl font-bold">{{ charNoSpaces }}</p>
            </div>

            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Lines</p>
                <p class="text-xl font-bold">{{ lineCount }}</p>
            </div>

            <div class="border rounded-lg p-4 text-center">
                <p class="text-sm text-gray-500">Reading Time</p>
                <p class="text-xl font-bold">{{ readingTime }} min</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const text = ref("");

const wordCount = computed(() => {
    if (!text.value) return 0;
    return text.value.trim().split(/\s+/).length;
});

const charCount = computed(() => {
    return text.value.length;
});

const charNoSpaces = computed(() => {
    return text.value.replace(/\s/g, "").length;
});

const lineCount = computed(() => {
    if (!text.value) return 0;
    return text.value.split("\n").length;
});

const readingTime = computed(() => {
    const words = wordCount.value;
    const minutes = words / 200;
    return minutes.toFixed(2);
});
</script>
