<template>
    <div class="max-w-4xl mx-auto mt-16">
        <h2 class="text-2xl font-bold mb-6">Related Tools</h2>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a
                v-for="tool in tools"
                :href="`/tools/${tool.slug}`"
                class="border rounded-lg p-4 hover:bg-gray-50"
            >
                {{ tool.name }}
            </a>
        </div>
    </div>
</template>

<script setup>
const tools = [
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "Password Generator", slug: "password-generator" },
];
</script>
