<template>
    <Head>
        <title>{{ category.name }} | ToolHub</title>
        <meta
            name="description"
            :content="'Free online ' + category.name + ' tools'"
        />
    </Head>

    <MainLayout>
        <div class="py-6">
            <h1 class="text-3xl font-bold mb-6">
                {{ category.name }}
            </h1>

            <p class="text-gray-600 mb-8">
                Browse our collection of {{ category.name.toLowerCase() }}.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div 
                    v-for="tool in category.tools" 
                    :key="tool.id"
                    class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                >
                    <div class="flex items-center mb-4">
                        <ToolIcon :name="tool.icon" class="mr-3 text-2xl" />
                        <h3 class="text-lg font-semibold">{{ tool.name }}</h3>
                    </div>
                    
                    <p class="text-gray-600 mb-4">{{ tool.description }}</p>
                    
                    <Link 
                        :href="'/tools/' + tool.slug"
                        class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Use Tool
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div v-if="!category.tools || category.tools.length === 0" class="text-center py-12">
                <p class="text-gray-500">No tools available in this category yet.</p>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";
import ToolIcon from "@/Components/ToolIcon.vue";

const props = defineProps({
    category: Object,
});
</script>
