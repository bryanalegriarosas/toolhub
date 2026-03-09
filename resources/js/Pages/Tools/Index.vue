<template>
    <Head>
        <title>All Tools - ToolHub</title>
        <meta name="description" content="Browse all the free online developer tools available on ToolHub." />
        <meta property="og:title" content="All Tools - ToolHub" />
        <meta property="og:description" content="Browse all the free online developer tools available on ToolHub." />
    </Head>

    <MainLayout :tools="tools">
        <div class="max-w-7xl mx-auto py-2 space-y-4">
            <h1 class="text-3xl font-bold">Todas las herramientas</h1>

            <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ToolCard
                    v-for="tool in tools"
                    :key="tool.id"
                    :tool="tool"
                />
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import ToolCard from "@/Components/ToolCard.vue";
import { Head } from "@inertiajs/vue3";

const props = defineProps({
    tools: Array,
});
</script>
