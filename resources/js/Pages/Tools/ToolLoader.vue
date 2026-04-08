<template>
    <ToolHeadSeo v-bind="seo" />

    <MainLayout>

        <!-- 🔥 TOP AD -->
        <!--<div class="mb-6 text-center">
            <AdBanner />
        </div>-->

        <!-- TOOL -->
        <component :is="component" />

        <!-- 🔥 MIDDLE AD -->
        <!--<div class="mt-8 text-center">
            <div class="bg-gray-100 border rounded-xl p-4 text-gray-400">
                <AdBanner />
            </div>
        </div>-->

        <!-- 🔥 RELATED TOOLS -->
        <div class="mt-10">
            <h2 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Related Tools</h2>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ToolCard
                    v-for="t in relatedTools"
                    :key="t.id"
                    :tool="t"
                />
            </div>
        </div>

        <!-- 🔥 BOTTOM AD -->
        <!--<div class="mt-10 text-center">
            <div class="bg-gray-100 border rounded-xl p-4 text-gray-400">
                <AdBanner />
            </div>
        </div>-->

    </MainLayout>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { usePage } from "@inertiajs/vue3";
import ToolHeadSeo from "@/Components/tools/ToolHeadSeo.vue";
import MainLayout from "@/Layouts/MainLayout.vue";
import ToolCard from "@/Components/ToolCard.vue";
import AdBanner from "@/Components/AdBanner.vue";

const page = usePage();

const tool = page.props.tool;
const seo = page.props.seo;
const relatedTools = page.props.relatedTools;

// ✅ IMPORT CORRECTO SEGÚN TU ESTRUCTURA
const component = defineAsyncComponent(() =>
    import(`../../Tools/${tool.slug}.vue`)
);
</script>
