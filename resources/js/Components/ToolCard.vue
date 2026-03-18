<template>
    <Link :href="'/tools/' + tool.slug"
        class="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition group block">
        <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 p-2 rounded-lg flex-shrink-0">
                <ToolIcon :name="tool.icon" />
            </div>

            <h3 class="font-bold text-base sm:text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                {{ tool.name }}
            </h3>
        </div>

        <p class="text-gray-500 dark:text-gray-400 text-sm line-clamp-3">
            {{ tool.description }}
        </p>
    </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import ToolIcon from "@/Components/ToolIcon.vue";

const props = defineProps({
    tool: Object,
});
</script>