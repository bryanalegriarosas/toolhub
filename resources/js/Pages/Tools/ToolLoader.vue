<template>
    <Head>
        <title>{{ tool.seo_title ?? tool.name }} " - Free Online Tool"</title>

        <meta
            name="description"
            :content="tool.seo_description ?? tool.description"
        />

        <meta property="og:title" :content="tool.name + ' - ToolHub'" />

        <meta property="og:description" :content="tool.description" />
    </Head>

    <MainLayout>
        <component :is="component" />
    </MainLayout>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import { defineAsyncComponent } from "vue";
import MainLayout from "@/Layouts/MainLayout.vue";

const props = defineProps({
    tool: Object,
});

const component = defineAsyncComponent(
    () => import(`../../Tools/${props.tool.slug}.vue`),
);
</script>
