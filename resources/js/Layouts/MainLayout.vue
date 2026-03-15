<template>
    <div class="min-h-screen bg-gray-100">
        <!-- NAVBAR -->
        <header class="bg-white border-b">
            <div
                class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
            >
                <div class="flex items-center gap-6">
                    <a href="/" class="text-2xl font-bold text-blue-600">
                        WebToolStack
                    </a>

                    <nav class="hidden md:flex gap-6 text-gray-600">
                        <a href="/" class="hover:text-blue-600"> Home </a>

                        <a href="/tools" class="hover:text-blue-600"> Tools </a>
                        <a href="/about" class="hover:text-blue-600"> About </a>
                        <a href="/contact" class="hover:text-blue-600"> Contact </a>
                    </nav>
                </div>
                <div class="flex items-center gap-3" v-if="!$slots.sidebar">
                    <div class="relative">
                        <label for="layout-search" class="sr-only">Buscar herramientas</label>
                        <input
                            id="layout-search"
                            v-model="search"
                            @input="filterTools"
                            type="text"
                            placeholder="Search tools..."
                            class="border rounded-lg px-4 py-2 w-64 focus:ring focus:ring-blue-200"
                        />
                    </div>
                </div>
            </div>
        </header>

        <div class="flex max-w-7xl mx-auto mt-6 gap-6 px-6">
            <!-- SIDEBAR -->
            <aside v-if="!$slots.sidebar" class="w-64 bg-white rounded-xl shadow p-4 h-fit">
                <h2 class="text-sm font-semibold text-gray-400 uppercase mb-3">
                    Tools
                </h2>

                <ul class="space-y-1">
                    <li v-for="tool in filteredTools" :key="tool.id">
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

        <Footer></Footer>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import ToolIcon from "@/Components/ToolIcon.vue";
import Footer from "@/Components/Footer.vue";

const props = defineProps({
    tools: Array,
});

const page = usePage();

const search = ref("");

// unify tools from prop or shared page props
const allTools = computed(() => {
    return props.tools ?? page.props.tools ?? [];
});

const filteredTools = computed(() => {
    if (!search.value.trim()) {
        return allTools.value;
    }
    const q = search.value.toLowerCase();
    return allTools.value.filter((t) =>
        t.name.toLowerCase().includes(q),
    );
});

</script>
