<template>
    <Head>
        <title>{{ t('home.title') }}</title>

        <meta name="description" :content="t('home.description')" />
        <meta name="keywords" :content="t('home.keywords')" />

        <link rel="canonical" href="https://toolhub.bryanalegriarosas.com/" />

        <meta property="og:title" :content="t('home.title')" />
        <meta property="og:description" :content="t('home.seo_description')" />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />
    </Head>

    <MainLayout>
        <div class="mt-8">

            <!-- HERO -->
            <div class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 md:p-10 rounded-2xl shadow-xl text-center">

                <h1 class="text-2xl md:text-4xl font-bold mb-4">
                    {{ t('home.hero_title') }}
                </h1>

                <p class="opacity-90 mb-4">
                    {{ t('home.hero_subtitle') }}
                </p>

                <p class="opacity-90 mb-2 text-sm">
                    {{ toolsCountText }}
                </p>

                <p class="opacity-80 text-xs">
                    No registration required • 100% free • Works on all devices
                </p>

                <div class="flex justify-center gap-4 text-sm opacity-90 mt-4">
                    <span>⚡ {{ t('home.fast') }}</span>
                    <span>🔒 {{ t('home.secure') }}</span>
                    <span>🆓 {{ t('home.free') }}</span>
                </div>

                <Link href="/tools"
                    class="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
                    {{ t('home.explore_all_tools') }}
                </Link>

                <!-- SEARCH -->
                <div class="mt-4 max-w-xl mx-auto">
                    <input v-model="search"
                        @keydown.down.prevent="moveSelection(1)"
                        @keydown.up.prevent="moveSelection(-1)"
                        @keydown.enter.prevent="activateSelection"
                        :placeholder="t('home.search_placeholder')"
                        class="text-black dark:text-white border dark:border-gray-600 rounded-lg px-4 py-3 w-full dark:bg-gray-800" />
                </div>

                <!-- SEARCH RESULTS -->
                <div v-if="search.length > 0"
                    class="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow mt-4 max-w-xl mx-auto">

                    <div v-for="(tool, index) in filteredTools"
                        :key="tool.id"
                        :class="['p-3 border-b cursor-pointer',
                            { 'bg-gray-200 dark:bg-gray-700': index === selectedIndex }]"
                        @click="goToTool(tool.slug)"
                        @mouseenter="selectedIndex = index">

                        <Link :href="`/tools/${tool.slug}`">
                            {{ tool.name }}
                        </Link>
                    </div>

                    <div v-if="filteredTools.length === 0"
                        class="p-3 text-gray-500">
                        {{ t('home.no_tools_found') }}
                    </div>
                </div>

            </div>

            <!-- SEO TEXT -->
            <div class="max-w-3xl mx-auto mt-6 text-center text-gray-600 dark:text-gray-400">
                <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {{ t('home.seo_title') }}
                </h2>
                <p>
                    {{ t('home.seo_description') }}
                </p>
            </div>

            <!-- CATEGORIES -->
            <div v-for="category in sortedCategories"
                :key="category.id"
                class="mb-10 mt-6">

                <Link :href="'/category/' + category.slug"
                    class="text-2xl font-bold mb-4 flex items-center gap-2 hover:text-blue-600">

                    <ToolIcon :name="category.icon" />
                    {{ category.name }}
                </Link>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <ToolCard v-for="tool in category.tools"
                        :key="tool.id"
                        :tool="tool" />
                </div>

            </div>

            <!-- WHY CHOOSE -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-6xl mx-auto mt-16 space-y-6 text-gray-600 dark:text-gray-400">

                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ t('home.why_choose_us') }}
                </h2>

                <p>{{ t('home.extended_description') }}</p>

                <div class="grid md:grid-cols-2 gap-6">
                    <div v-for="feature in t('home.features')" :key="feature.title">
                        <h3 class="font-semibold text-gray-900 dark:text-white">
                            {{ feature.title }}
                        </h3>
                        <p class="text-sm">
                            {{ feature.description }}
                        </p>
                    </div>
                </div>

            </div>

            <!-- USE CASES -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-6xl mx-auto mt-12 space-y-6 text-gray-600 dark:text-gray-400">

                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                   {{ t('home.use_cases_title') }}
                </h2>

                <div class="grid md:grid-cols-2 gap-6">
                    <div v-for="useCase in t('home.use_cases')" :key="useCase.title">
                        <h3 class="font-semibold text-gray-900 dark:text-white">
                            {{ useCase.title }}
                        </h3>
                        <p class="text-sm">
                            {{ useCase.description }}
                        </p>
                    </div>
                </div>

            </div>

            <!-- FAQ -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-6xl mx-auto mt-12 space-y-6 text-gray-600 dark:text-gray-400">

                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                    FAQ
                </h2>

                <div v-for="faq in t('home.faqs')" :key="faq.question">
                    <h3 class="font-semibold text-gray-900 dark:text-white">
                        {{ faq.question }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        {{ faq.answer }}
                    </p>
                </div>

            </div>

            <!-- AD (VISIBLE) -->
            <div class="text-center mt-6">
                <AdBanner />
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import { usePage, Link, Head, router } from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";
import ToolCard from "@/Components/ToolCard.vue";
import ToolIcon from "@/Components/ToolIcon.vue";
import AdBanner from "@/Components/AdBanner.vue";
import { useTranslations } from "@/languageManager.js";

const { t } = useTranslations();

const page = usePage();
const tools = page.props.tools;
const categories = page.props.categories;

const toolsCountText = computed(() => {
    return t('home.tools_count').replace('{{ count }}', tools.length);
});

// SEARCH
const search = ref("");
const selectedIndex = ref(-1);

const filteredTools = computed(() => {
    const q = search.value.toLowerCase();
    if (!q) return [];

    return tools
        .filter(tool => tool.name.toLowerCase().includes(q))
        .slice(0, 6);
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
    router.visit(`/tools/${slug}`);
};

// CATEGORY ORDER
const priorityOrder = [
    'file-tools',
    'image-tools',
    'text-tools',
    'converters',
    'generators'
];

const sortedCategories = computed(() => {
    return [...categories].sort(
        (a, b) =>
            priorityOrder.indexOf(a.slug) -
            priorityOrder.indexOf(b.slug)
    );
});

</script>
