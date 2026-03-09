<template>
    <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Slug Generator</h1>

        <div class="space-y-6">
            <div>
                <label class="block text-sm mb-2"> Enter text </label>

                <input
                    v-model="text"
                    type="text"
                    placeholder="Hello World 2026"
                    class="w-full border rounded-lg p-3"
                />
            </div>

            <div>
                <label class="block text-sm mb-2"> Slug </label>

                <input
                    :value="slug"
                    readonly
                    class="w-full border rounded-lg p-3 bg-gray-100"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const text = ref("");

const slug = computed(() => {
    return text.value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/--+/g, "-");
});
</script>
