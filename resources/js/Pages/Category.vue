<template>
    <MainLayout>
        <div class="space-y-8">
            <div class="flex items-center gap-3">
                <div class="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <ToolIcon :name="category.icon" />
                </div>

                <h1 class="text-3xl font-bold">
                    {{ category.name }}
                </h1>
            </div>

            <div
                class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <ToolCard
                    v-for="tool in category.tools"
                    :key="tool.id"
                    :tool="tool"
                />
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import ToolCard from "@/Components/ToolCard.vue";
import ToolIcon from "@/Components/ToolIcon.vue";

const props = defineProps({
    category: Object,
});
</script>
