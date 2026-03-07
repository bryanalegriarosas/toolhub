<template>
    <div class="min-h-screen bg-gray-100">
        <!-- NAVBAR -->
        <header class="bg-white shadow">
            <div
                class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
            >
                <Link href="/" class="text-2xl font-bold text-blue-600">
                    ToolHub
                </Link>

                <input
                    type="text"
                    placeholder="Search tools..."
                    class="border rounded-lg px-4 py-2 w-64"
                />
            </div>
        </header>

        <div class="flex max-w-7xl mx-auto mt-6 gap-6 px-6">
            <!-- SIDEBAR -->
            <aside class="w-64 bg-white rounded-xl shadow p-4 h-fit">
                <h2 class="font-bold mb-4 text-gray-700">Tools</h2>

                <ul class="space-y-2">
                    <li v-for="tool in tools" :key="tool.id">
                        <Link
                            :href="'/tools/' + tool.slug"
                            class="block px-3 py-2 rounded hover:bg-blue-50"
                        >
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

const props = defineProps({
    tools: Array,
});
</script>
