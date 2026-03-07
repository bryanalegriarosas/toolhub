<template>
    <div class="min-h-screen bg-gray-100">
        <!-- NAVBAR -->
        <header class="bg-white border-b">
            <div
                class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
            >
                <div class="flex items-center gap-6">
                    <a href="/" class="text-2xl font-bold text-blue-600">
                        ToolHub
                    </a>

                    <nav class="hidden md:flex gap-6 text-gray-600">
                        <a href="/" class="hover:text-blue-600"> Home </a>

                        <a href="#" class="hover:text-blue-600"> Tools </a>
                    </nav>
                </div>

                <div class="flex items-center gap-3">
                    <input
                        type="text"
                        placeholder="Search tools..."
                        class="border rounded-lg px-4 py-2 w-64 focus:ring focus:ring-blue-200"
                    />
                </div>
            </div>
        </header>

        <div class="flex max-w-7xl mx-auto mt-6 gap-6 px-6">
            <!-- SIDEBAR -->
            <aside class="w-64 bg-white rounded-xl shadow p-4 h-fit">
                <h2 class="text-sm font-semibold text-gray-400 uppercase mb-3">
                    Tools
                </h2>

                <ul class="space-y-1">
                    <li v-for="tool in tools" :key="tool.id">
                        <Link
                            :href="'/tools/' + tool.slug"
                            class="flex items-center px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700"
                        >
                            <ToolIcon :name="tool.icon" class="mr-2" />

                            {{ tool.name }}
                        </Link>
                    </li>
                </ul>
            </aside>

            <!-- MAIN CONTENT -->
            <main class="flex-1">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import ToolIcon from "@/Components/ToolIcon.vue";

const props = defineProps({
    tools: Array,
});
</script>
