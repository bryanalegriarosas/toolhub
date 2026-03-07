<template>
    <MainLayout :tools="tools">
        <div class="space-y-8">
            <!-- HERO -->
            <div
                class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-xl shadow text-center"
            >
                <h1 class="text-4xl font-bold mb-4">
                    Developer Tools in One Place
                </h1>

                <p class="opacity-90 mb-6">
                    Free online tools for developers, designers and creators.
                </p>

                <input
                    v-model="search"
                    placeholder="Search a tool..."
                    class="text-black border rounded-lg px-4 py-3 w-full max-w-xl"
                />
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
            <div class="bg-gray-200 rounded-xl p-8 text-center text-gray-500">
                Ad Space
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
