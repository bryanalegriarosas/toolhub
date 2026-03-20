<template>
    <Head>
        <title>Free Online Tools - SEO, PDF, Image & Developer Tools | WebToolStack</title>

        <meta name="description"
            content="Free online tools for SEO, PDF, image editing and developers. Format JSON, compress images, generate meta tags and more." />

        <meta name="keywords"
            content="free online tools, seo tools, pdf tools, image tools, developer tools, json formatter, image compressor" />

        <link rel="canonical" href="https://toolhub.example.com/" />

        <meta property="og:title" content="Free Online Tools | WebToolStack" />
        <meta property="og:description" content="All-in-one free tools for SEO, PDF, images and developers." />
        <meta property="og:type" content="website" />
    </Head>

    <MainLayout>
        <div class="space-y-10">

            <!-- HERO -->
            <div
                class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 md:p-14 rounded-2xl shadow-xl text-center">

                <h1 class="text-2xl md:text-4xl font-bold mb-4">
                    Free Online Tools for SEO, PDF, Images & Developers
                </h1>

                <p class="opacity-90 mb-4">
                    All-in-one platform with powerful and free tools for developers, designers and marketers.
                </p>

                <p class="opacity-90 mb-2">
                    More than {{ tools.length }} tools available
                </p>

                <div class="flex justify-center gap-6 text-sm opacity-90 mt-4">
                    <span>⚡ Fast</span>
                    <span>🔒 Secure</span>
                    <span>🆓 Free</span>
                </div>

                <Link href="/tools"
                    class="inline-block mt-6 px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    Explore All Tools
                </Link>

                <!-- SEARCH -->
                <div class="mt-4 max-w-xl mx-auto">
                    <input v-model="search" @keydown.down.prevent="moveSelection(1)"
                        @keydown.up.prevent="moveSelection(-1)" @keydown.enter.prevent="activateSelection"
                        placeholder="Search a tool..." class="text-black dark:text-white border dark:border-gray-600 rounded-lg px-4 py-3 w-full dark:bg-gray-800" />
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
                        No tools found.
                    </div>
                </div>
            </div>

            <!-- ADS (TOP) -->
            <div class="text-center">
                <div class="bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-6 text-gray-400 dark:text-gray-500">
                    <AdBanner />
                </div>
            </div>

            <!-- SEO TEXT -->
            <div class="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-400">
                <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">All-in-One Free Online Tools</h2>
                <p>
                    WebToolStack provides a collection of free online tools for developers, designers, and marketers.
                    From SEO tools and PDF converters to image editors and code utilities, everything is available in
                    one place.
                </p>
            </div>

            <!-- POPULAR TOOLS -->
            <div>
                <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🔥 Popular Tools</h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ToolCard v-for="tool in popularTools" :key="tool.id" :tool="tool" />
                </div>
            </div>

            <!-- CATEGORIES -->
            <div v-for="(category, index) in sortedCategories" :key="category.id" class="mb-10">

                <Link :href="'/category/' + category.slug"
                    class="text-2xl font-bold mb-4 flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 text-gray-900 dark:text-white">

                    <ToolIcon :name="category.icon" />
                    {{ category.name }}
                </Link>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    <ToolCard v-for="tool in category.tools" :key="tool.id" :tool="tool" />
                </div>

                <!-- ADS after 2nd category -->
                <div v-if="index === 1" class="mt-8 text-center">
                    <div class="bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-6 text-gray-400 dark:text-gray-500">
                        <AdBanner />
                    </div>
                </div>

            </div>

            <!-- ADS (BOTTOM) -->
            <div class="text-center">
                <div class="bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-6 text-gray-400 dark:text-gray-500">
                    <AdBanner />
                </div>
            </div>

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

const page = usePage();
const tools = page.props.tools;
const categories = page.props.categories;

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
