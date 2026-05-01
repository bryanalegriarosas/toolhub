<template>
    <ToolHeadSeo v-bind="seo" />

    <MainLayout>
        <div class="max-w-6xl mx-auto px-4">
            <!-- 🔥 TOP AD (cuando ya te aprueben) -->
            <!--<div class="mt-6 text-center">
                <AdBanner />
            </div>-->

            <!-- ✅ TOOL -->
            <component :is="component" class="mt-8" />

            <!-- 🔥 RELATED TOOLS (SUBIRLO MÁS ARRIBA) -->
            <div class="mt-10">
                <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Related Tools
                </h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ToolCard
                        v-for="t in relatedTools"
                        :key="t.id"
                        :tool="t"
                    />
                </div>
            </div>

            <!-- 🔥 MIDDLE AD -->
            <!--<div class="mt-10 text-center">
                <AdBanner />
            </div>-->

            <!-- ✅ EXTRA CONTENT (SEO + ADSENSE BOOST) -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 mt-12 max-w-6xl mx-auto text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-4">

                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                    About this tool
                </h2>

                <p>
                    {{ tool.name }} is a free online tool designed to help users perform tasks quickly and efficiently.
                    It works directly in your browser, meaning your data stays private and secure.
                </p>

                <p>
                    Our platform provides a simple and intuitive interface so anyone can use this tool without
                    technical knowledge. Whether you are a student, professional, or casual user, this tool is built
                    to save time and improve productivity.
                </p>

                <p>
                    You can use this tool as many times as you want with no limitations, no registration,
                    and no hidden costs.
                </p>

            </div>

            <!-- 🔥 BOTTOM AD -->
            <!--<div class="mt-10 text-center">
                <AdBanner />
            </div>-->

        </div>

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

// ✅ Lazy load del tool
const component = defineAsyncComponent(() =>
    import(`../../Tools/${tool.slug}.vue`)
);
</script>
