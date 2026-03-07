<template>
    <MainLayout :tools="tools">
        <div class="space-y-8">
            <!-- HERO -->
            <div class="bg-white p-2 rounded-xl shadow text-center">
                <h1 class="text-4xl font-bold text-gray-800 mb-3">
                    Online Developer Tools
                </h1>

                <p class="text-gray-500 mb-6">
                    Free tools for developers, designers and creators.
                </p>

                <input
                    v-model="search"
                    placeholder="Search a tool..."
                    class="border rounded-lg px-2 py-2 w-full max-w-xl"
                />
            </div>

            <!-- TOOLS GRID -->
            <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                <Link
                    v-for="tool in filteredTools"
                    :key="tool.id"
                    :href="'/tools/' + tool.slug"
                    class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                    <h3 class="font-bold text-lg mb-2">
                        {{ tool.name }}
                    </h3>

                    <p class="text-gray-500 text-sm">
                        {{ tool.description }}
                    </p>
                </Link>
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
import { Link } from "@inertiajs/vue3";

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
