<template>
    <Link
        :href="'/tools/' + tool.slug"
        class="bg-white p-6 rounded-xl shadow hover:shadow-xl transition group"
    >
        <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 text-blue-600 p-2 rounded-lg">🧰</div>

            <h3 class="font-bold text-lg group-hover:text-blue-600">
                {{ tool.name }}
            </h3>
        </div>

        <p class="text-gray-500 text-sm">
            {{ tool.description }}
        </p>
    </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    tool: Object,
});
</script>


