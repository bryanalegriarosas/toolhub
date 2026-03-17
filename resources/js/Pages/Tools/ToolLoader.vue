<template>
    <ToolHeadSeo v-bind="seo" />

    <MainLayout>
        <component :is="component" />
    </MainLayout>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { usePage } from "@inertiajs/vue3";
import ToolHeadSeo from "@/Components/tools/ToolHeadSeo.vue";
import MainLayout from "@/Layouts/MainLayout.vue";

const page = usePage();

const tool = page.props.tool;
const seo = page.props.seo;

// ✅ IMPORT CORRECTO SEGÚN TU ESTRUCTURA
const component = defineAsyncComponent(() =>
    import(`../../Tools/${tool.slug}.vue`)
);
</script>
