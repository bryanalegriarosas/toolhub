<template>
    <Head>
        <title>ToolHub - Free Online Developer Tools</title>

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

                <div class="flex justify-center gap-6 text-sm opacity-90 mt-4">
                    <span>⚡ Fast</span>
                    <span>🔒 Secure</span>
                    <span>🆓 Free</span>
                </div>

                <input
                    v-model="search"
                    placeholder="Search a tool..."
                    class="text-black border rounded-lg px-4 py-3 w-full max-w-xl mt-3"
                />

                <div
                    v-if="search.length > 0"
                    class="bg-white text-black rounded-xl shadow mt-4 max-w-xl mx-auto"
                >
                    <div
                        v-for="tool in filteredTools"
                        :key="tool.id"
                        class="p-3 border-b hover:bg-gray-100"
                    >
                        <Link :href="`/tools/${tool.slug}`">
                            {{ tool.name }}
                        </Link>
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

const filteredTools = computed(() => {
    return props.tools.filter((tool) =>
        tool.name.toLowerCase().includes(search.value.toLowerCase()),
    );
});
</script>
