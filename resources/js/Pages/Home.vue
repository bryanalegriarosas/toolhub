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
                class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <ToolCard
                    v-for="tool in filteredTools"
                    :key="tool.id"
                    :tool="tool"
                />
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

const props = defineProps({
    tools: Array,
});

const search = ref("");

const filteredTools = computed(() => {
    return props.tools.filter((tool) =>
        tool.name.toLowerCase().includes(search.value.toLowerCase()),
    );
});
</script>
