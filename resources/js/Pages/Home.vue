<template>
    <Head>
        <title>ToolHub - Free Online Developer Tools</title>

        <!-- Standard SEO -->
        <meta name="description" content="Free online tools for developers including JSON formatter, UUID generator and password generator." />
        <meta name="keywords" content="developer tools, online tools, json formatter, uuid generator, password generator" />
        <link rel="canonical" href="https://toolhub.example.com/" />

        <!-- Open Graph / Social -->
        <meta
            property="og:title"
            content="ToolHub - Free Online Developer Tools"
        />
        <meta
            property="og:description"
            content="Free online tools for developers including JSON formatter, UUID generator and password generator."
        />
        <meta property="og:type" content="website" />
    </Head>
    <MainLayout :tools="tools">
        <div class="space-y-8">
            <!-- HERO -->
            <div
                class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-14 rounded-2xl shadow-xl text-center"
            >
                <h1 class="text-4xl font-bold mb-4">
                    Developer Tools in One Place
                </h1>

                <p class="opacity-90 mb-6">
                    Free online tools for developers, designers and creators.
                </p>

                <p class="opacity-90 mb-2">
                    Más de {{ props.tools.length }} herramientas disponibles
                </p>

                <div class="flex justify-center gap-6 text-sm opacity-90 mt-4">
                    <span>⚡ Fast</span>
                    <span>🔒 Secure</span>
                    <span>🆓 Free</span>
                </div>

                <!-- call to action -->
                <Link href="/tools" class="inline-block mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
                    Ver todas las herramientas
                </Link>

                <div class="mt-4 max-w-xl mx-auto">
                    <label for="search-input" class="sr-only">Buscar herramienta</label>
                    <input
                        id="search-input"
                        v-model="search"
                        @keydown.down.prevent="moveSelection(1)"
                        @keydown.up.prevent="moveSelection(-1)"
                        @keydown.enter.prevent="activateSelection"
                        placeholder="Search a tool..."
                        class="text-black border rounded-lg px-4 py-3 w-full"
                    />
                </div>

                <div
                    v-if="search.length > 0"
                    class="bg-white text-black rounded-xl shadow mt-4 max-w-xl mx-auto"
                    aria-live="polite"
                >
                    <div
                        v-for="(tool, index) in filteredTools"
                        :key="tool.id"
                        :class="['p-3 border-b hover:bg-gray-100 cursor-pointer', { 'bg-gray-200': index === selectedIndex }]"
                        @click="goToTool(tool.slug)"
                        @mouseenter="selectedIndex = index"
                    >
                        <Link :href="`/tools/${tool.slug}`">
                            {{ tool.name }}
                        </Link>
                    </div>

                    <div v-if="filteredTools.length === 0" class="p-3 text-gray-500">
                        No se encontraron herramientas.
                    </div>
                </div>
            </div>

            <div
                v-for="category in categories"
                :key="category.id"
                class="mb-10"
            >
                <Link
                    :href="'/category/' + category.slug"
                    :aria-label="`Categoría ${category.name}`"
                    class="text-2xl font-bold mb-4 flex items-center gap-2 hover:text-blue-600"
                >
                    <ToolIcon :name="category.icon" />

                    {{ category.name }}
                </Link>

                <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ToolCard
                        v-for="tool in category.tools"
                        :key="tool.id"
                        :tool="tool"
                    />
                </div>
            </div>

            <!-- ADS SPACE -->
            <div
                role="complementary"
                aria-label="Advertisement"
                class="bg-gray-100 border rounded-xl p-10 text-center text-gray-400"
            >
                Advertisement
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import MainLayout from "@/Layouts/MainLayout.vue";
import ToolCard from "@/Components/ToolCard.vue";
import ToolIcon from "@/Components/ToolIcon.vue";
import { Link } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";

const props = defineProps({
    tools: Array,
    categories: Array,
});

const search = ref("");
const selectedIndex = ref(-1);

const filteredTools = computed(() => {
    const q = search.value.trim().toLowerCase();
    if (!q) {
        selectedIndex.value = -1;
        return [];
    }

    const list = props.tools.filter((tool) =>
        tool.name.toLowerCase().includes(q),
    );
    // reset selection if list shrinks
    if (selectedIndex.value >= list.length) {
        selectedIndex.value = -1;
    }
    return list;
});

function moveSelection(delta) {
    if (filteredTools.value.length === 0) return;
    let newIndex = selectedIndex.value + delta;
    if (newIndex < 0) newIndex = filteredTools.value.length - 1;
    if (newIndex >= filteredTools.value.length) newIndex = 0;
    selectedIndex.value = newIndex;
}

function activateSelection() {
    if (
        selectedIndex.value >= 0 &&
        selectedIndex.value < filteredTools.value.length
    ) {
        const slug = filteredTools.value[selectedIndex.value].slug;
        goToTool(slug);
    }
}

function goToTool(slug) {
    // simple navigation; Inertia link already present on each item,
    // but this helps keyboard activate
    window.location.href = `/tools/${slug}`;
}
</script>
