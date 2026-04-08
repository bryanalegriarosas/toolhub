<template>
    <Head>
        <title>{{ t('home.title') }}</title>

        <meta name="description"
            content="{{ t('home.description') }}" />

        <meta name="keywords"
            content="{{ t('home.keywords') }}" />

        <link rel="canonical" href="https://toolhub.bryanalegriarosas.com/" />

        <meta property="og:title" content="{{ t('home.title') }}" />
        <meta property="og:description" content="{{ t('home.seo_description') }}" />
        <meta property="og:type" content="website" />
    </Head>

    <MainLayout>
        <div class="mt-8">
            <!-- HERO -->
            <div
                class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-4 sm:p-6 md:p-10 lg:p-14 rounded-2xl shadow-xl text-center">

                <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                    {{ t('home.hero_title') }}
                </h1>

                <p class="opacity-90 mb-3 sm:mb-4 text-sm sm:text-base">
                    {{ t('home.hero_subtitle') }}
                </p>

                <p class="opacity-90 mb-2 text-sm sm:text-base">
                    {{ toolsCountText }}
                </p>

                <div class="flex justify-center gap-3 sm:gap-6 text-xs sm:text-sm opacity-90 mt-3 sm:mt-4">
                    <span>⚡ {{ t('home.fast') }}</span>
                    <span>🔒 {{ t('home.secure') }}</span>
                    <span>🆓 {{ t('home.free') }}</span>
                </div>

                <Link href="/tools"
                    class="inline-block mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base">
                    {{ t('home.explore_all_tools') }}
                </Link>

                <!-- SEARCH -->
                <div class="mt-3 sm:mt-4 max-w-lg sm:max-w-xl mx-auto">
                    <input v-model="search" @keydown.down.prevent="moveSelection(1)"
                        @keydown.up.prevent="moveSelection(-1)" @keydown.enter.prevent="activateSelection"
                        :placeholder="t('home.search_placeholder')" class="text-black dark:text-white border dark:border-gray-600 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 w-full text-sm dark:bg-gray-800" />
                </div>

                <!-- SEARCH RESULTS -->
                <div v-if="search.length > 0" class="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow mt-4 max-w-xl mx-auto">

                    <div v-for="(tool, index) in filteredTools" :key="tool.id"
                        :class="['p-3 border-b cursor-pointer', { 'bg-gray-200 dark:bg-gray-700': index === selectedIndex }]"
                        @click="goToTool(tool.slug)" @mouseenter="selectedIndex = index">

                        <Link :href="`/tools/${tool.slug}`">
                            {{ tool.name }}
                        </Link>
                    </div>

                    <div v-if="filteredTools.length === 0" class="p-3 text-gray-500 dark:text-gray-400">
                        {{ t('home.no_tools_found') }}
                    </div>
                </div>
            </div>

            <!-- ADS (TOP) -->
            <!--<div class="text-center mt-3">
                <div class="bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-6 text-gray-400 dark:text-gray-500">
                    <AdBanner />
                </div>
            </div>-->

            <!-- SEO TEXT -->
            <div class="max-w-3xl mx-auto mt-3 text-center text-gray-600 dark:text-gray-400">
                <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{{ t('home.seo_title') }}</h2>
                <p>
                    {{ t('home.seo_description') }}
                </p>
            </div>

            <!-- POPULAR TOOLS -->
            <div class="mt-4">
                <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🔥 {{ t('home.popular_tools') }}</h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ToolCard v-for="tool in popularTools" :key="tool.id" :tool="tool" />
                </div>
            </div>

            <!-- CATEGORIES -->
            <div v-for="(category, index) in sortedCategories" :key="category.id" class="mb-10 mt-4">

                <Link :href="'/category/' + category.slug"
                    class="text-2xl font-bold mb-4 flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 text-gray-900 dark:text-white">

                    <ToolIcon :name="category.icon" />
                    {{ category.name }}
                </Link>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    <ToolCard v-for="tool in category.tools" :key="tool.id" :tool="tool" />
                </div>

                <!-- ADS after 2nd category -->
                <!--<div v-if="index === 1" class="mt-8 text-center">
                    <div class="bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-6 text-gray-400 dark:text-gray-500">
                        <AdBanner />
                    </div>
                </div>-->

            </div>

            <!-- ADS (BOTTOM) -->
            <!--<div class="text-center">
                <div class="bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-6 text-gray-400 dark:text-gray-500">
                    <AdBanner />
                </div>
            </div>-->

        </div>
    </MainLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import { usePage, Link, Head } from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";
import ToolCard from "@/Components/ToolCard.vue";
import ToolIcon from "@/Components/ToolIcon.vue";
import AdBanner from "@/Components/AdBanner.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

const page = usePage();
const tools = page.props.tools;
const categories = page.props.categories;

// Computed property for tools count with interpolation
const toolsCountText = computed(() => {
    return t('home.tools_count').replace('{{ count }}', tools.length);
});

// SEARCH
const search = ref("");
const selectedIndex = ref(-1);

const filteredTools = computed(() => {
    const q = search.value.toLowerCase();
    if (!q) return [];
    return tools.filter(tool => tool.name.toLowerCase().includes(q));
});

const moveSelection = (delta) => {
    if (!filteredTools.value.length) return;
    selectedIndex.value =
        (selectedIndex.value + delta + filteredTools.value.length) %
        filteredTools.value.length;
};

const activateSelection = () => {
    if (selectedIndex.value >= 0) {
        goToTool(filteredTools.value[selectedIndex.value].slug);
    }
};

const goToTool = (slug) => {
    window.location.href = `/tools/${slug}`;
};

// CATEGORY ORDER (CRÍTICO)
const priorityOrder = [
    'seo-tools',
    'pdf-tools',
    'image-tools',
    'developer-tools',
    'text-tools',
    'converters-encoding',
    'security-crypto',
    'generators',
    'media-tools'
];

const sortedCategories = computed(() => {
    return [...categories].sort(
        (a, b) =>
            priorityOrder.indexOf(a.slug) -
            priorityOrder.indexOf(b.slug)
    );
});

// POPULAR TOOLS
const popularSlugs = [
    'json-formatter',
    'image-compressor',
    'meta-tag-generator',
    'merge-pdf'
];

const popularTools = computed(() =>
    tools.filter(t => popularSlugs.includes(t.slug))
);
</script>
