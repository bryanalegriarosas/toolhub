<template>
    <Head>
        <!-- Title -->
        <title>{{ title }} | WebToolStack</title>

        <!-- Meta -->
        <meta name="description" :content="description" />
        <meta name="keywords" :content="keywords" />

        <!-- Canonical -->
        <link v-if="url" rel="canonical" :href="url" />

        <!-- Open Graph -->
        <meta property="og:title" :content="title" />
        <meta property="og:description" :content="description" />
        <meta property="og:type" content="website" />
        <meta property="og:url" :content="url" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="title" />
        <meta name="twitter:description" :content="description" />
    </Head>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";

defineProps({
    title: String,
    description: String,
    keywords: {
        type: String,
        default: "",
    },
    url: {
        type: String,
        default: "",
    },
});
</script>
