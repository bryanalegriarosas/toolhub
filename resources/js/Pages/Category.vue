<template>
    <Head>
        <title>{{ category.name }} | ToolHub</title>

        <meta
            name="description"
            :content="'Free online ' + category.name + ' tools'"
        />
    </Head>

    <MainLayout>
        <h1 class="text-3xl font-bold mb-6">
            {{ category.name }}
        </h1>
    </MainLayout>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";

const props = defineProps({
    category: Object,
});
</script>
