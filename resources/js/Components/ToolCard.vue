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

        <div class="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <span class="text-xs text-gray-400 dark:text-gray-500">
                👁️ {{ formatVisitCount(tool.visit_counter || 0) }}
            </span>
        </div>
    </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import ToolIcon from "@/Components/ToolIcon.vue";

const props = defineProps({
    tool: Object,
});

const formatVisitCount = (count) => {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
};
</script>