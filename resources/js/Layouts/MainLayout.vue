<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <!-- NAVBAR -->
        <header class="bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors">
            <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div class="flex items-center gap-6">
                    <a href="/" class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        WebToolStack
                    </a>

                    <nav class="hidden md:flex gap-6 text-gray-600 dark:text-gray-300">
                        <a href="/" class="hover:text-blue-600 dark:hover:text-blue-400"> Home </a>

                        <a href="/tools" class="hover:text-blue-600 dark:hover:text-blue-400"> Tools </a>
                        <a href="/about" class="hover:text-blue-600 dark:hover:text-blue-400"> About </a>
                        <a href="/contact" class="hover:text-blue-600 dark:hover:text-blue-400"> Contact </a>
                    </nav>
                    <div>
                        <DarkModeToggle />
                    </div>
                </div>

                <!-- Mobile menu button -->
                <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div class="hidden md:flex items-center gap-3" v-if="!$slots.sidebar">
                    <div class="relative">
                        <label for="layout-search" class="sr-only">Buscar herramientas</label>
                        <input id="layout-search" v-model="search" @input="filterTools" type="text"
                            placeholder="Search tools..."
                            class="border dark:border-gray-600 rounded-lg px-4 py-2 w-full md:w-64 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 dark:bg-gray-700 dark:text-white" />
                    </div>
                </div>
            </div>
        </header>

        <!-- Mobile Navigation Menu -->
        <div v-show="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 transition-colors">
            <nav class="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
                <a href="/" class="hover:text-blue-600 dark:hover:text-blue-400"> Home </a>
                <a href="/tools" class="hover:text-blue-600 dark:hover:text-blue-400"> Tools </a>
                <a href="/about" class="hover:text-blue-600 dark:hover:text-blue-400"> About </a>
                <a href="/contact" class="hover:text-blue-600 dark:hover:text-blue-400"> Contact </a>
            </nav>

            <!-- Mobile Search -->
            <div class="mt-4" v-if="!$slots.sidebar">
                <label for="mobile-search" class="sr-only">Buscar herramientas</label>
                <input id="mobile-search" v-model="search" @input="filterTools" type="text"
                    placeholder="Search tools..."
                    class="border dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 dark:bg-gray-700 dark:text-white" />
            </div>

            <!-- Mobile Tools Sidebar -->
            <div class="mt-6" v-if="!$slots.sidebar && filteredTools.length > 0">
                <h2 class="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3">
                    Tools
                </h2>
                <div class="max-h-64 overflow-y-auto">
                    <ul class="space-y-1">
                        <li v-for="tool in filteredTools.slice(0, 10)" :key="tool.id">
                            <Link :href="'/tools/' + tool.slug"
                                class="flex items-center px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                @click="mobileMenuOpen = false">
                                <ToolIcon :name="tool.icon" class="mr-2" />
                                {{ tool.name }}
                            </Link>
                        </li>
                    </ul>
                    <div v-if="filteredTools.length > 10" class="mt-3 text-center">
                        <Link href="/tools" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                            @click="mobileMenuOpen = false">
                            View all tools →
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex max-w-7xl mx-auto mt-6 gap-6 px-6">
            <!-- SIDEBAR -->
            <aside v-if="!$slots.sidebar" class="hidden lg:block w-64 bg-white dark:bg-gray-800 rounded-xl shadow p-4 h-fit transition-colors">
                <h2 class="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3">
                    Tools
                </h2>

                <ul class="space-y-1">
                    <li v-for="tool in filteredTools" :key="tool.id">
                        <Link :href="'/tools/' + tool.slug"
                            class="flex items-center px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
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

        <Footer :categories="page.props.categories"></Footer>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import ToolIcon from "@/Components/ToolIcon.vue";
import Footer from "@/Components/Footer.vue";
import DarkModeToggle from "@/Components/DarkModeToggle.vue";

const page = usePage();

const search = ref("");
const mobileMenuOpen = ref(false);

const allTools = computed(() => {
    return page.props.tools ?? [];
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
