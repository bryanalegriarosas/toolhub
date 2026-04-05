<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors pt-0">
        <!-- NAVBAR -->
        <header class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
                <div class="flex items-center gap-4 sm:gap-6 flex-1">
                    <a href="/" class="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                        {{ t('app.name') }}
                    </a>

                    <nav class="hidden md:flex gap-4 sm:gap-6 text-gray-600 dark:text-gray-300">
                        <a href="/" class="hover:text-blue-600 dark:hover:text-blue-400"> {{ t('nav.home') }} </a>

                        <a href="/tools" class="hover:text-blue-600 dark:hover:text-blue-400"> {{ t('nav.tools') }} </a>
                        <a href="/about" class="hover:text-blue-600 dark:hover:text-blue-400"> {{ t('nav.about') }} </a>
                        <a href="/contact" class="hover:text-blue-600 dark:hover:text-blue-400"> {{ t('nav.contact') }} </a>
                    </nav>
                </div>
                
                <div class="flex items-center gap-2 sm:gap-3">
                    <div class="hidden md:flex items-center gap-3" v-if="!$slots.sidebar">
                        <div class="relative">
                            <label for="layout-search" class="sr-only">{{ t('nav.search_placeholder') }}</label>
                            <input id="layout-search" v-model="search" @input="filterTools" type="text"
                                :placeholder="t('nav.search_placeholder')"
                                class="border dark:border-gray-600 rounded-lg px-3 py-2 w-32 sm:w-48 md:w-64 text-sm focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 dark:bg-gray-700 dark:text-white" />
                        </div>
                    </div>
                    <div>
                        <LanguageToggle @languageChanged="handleLanguageChange" />
                    </div>
                    <div>
                        <DarkModeToggle />
                    </div>
                </div>

                <!-- Mobile menu button -->
                <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors touch-target"
                    aria-label="Toggle menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </header>

        <!-- Mobile Navigation Menu -->
        <div v-show="mobileMenuOpen" class="fixed mt-3 top-16 left-0 right-0 z-40 md:hidden bg-white dark:bg-gray-800 shadow-lg px-6 py-4 transition-colors">
            <nav class="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
                <a href="/" class="hover:text-blue-600 dark:hover:text-blue-400"> {{ t('nav.home') }} </a>
                <a href="/tools" class="hover:text-blue-600 dark:hover:text-blue-400"> {{ t('nav.tools') }} </a>
                <a href="/about" class="hover:text-blue-600 dark:hover:text-blue-400"> {{ t('nav.about') }} </a>
                <a href="/contact" class="hover:text-blue-600 dark:hover:text-blue-400"> {{ t('nav.contact') }} </a>
            </nav>

            <!-- Mobile Search -->
            <div class="mt-4" v-if="!$slots.sidebar">
                <label for="mobile-search" class="sr-only">{{ t('nav.search_placeholder') }}</label>
                <input id="mobile-search" v-model="search" @input="filterTools" type="text"
                    :placeholder="t('nav.search_placeholder')"
                    class="border dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 dark:bg-gray-700 dark:text-white" />
            </div>

            <!-- Mobile Tools Sidebar -->
            <div class="mt-6" v-if="!$slots.sidebar && filteredTools.length > 0">
                <h2 class="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3">
                    {{ t('tools.title') }}
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
                            {{ t('tools.view_all') }} →
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex max-w-7xl mx-auto mt-20 gap-4 sm:gap-6 px-4 sm:px-6">
            <!-- SIDEBAR -->
            <aside v-if="!$slots.sidebar" class="hidden lg:block w-64 bg-white dark:bg-gray-800 rounded-xl shadow p-4 h-fit sticky mt-8 z-30 transition-colors">
                <h2 class="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3">
                    {{ t('tools.title') }}
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
            <main class="flex-1 min-w-0">
                <slot />
            </main>
        </div>

        <Footer :categories="page.props.categories"></Footer>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import ToolIcon from "@/Components/ToolIcon.vue";
import Footer from "@/Components/Footer.vue";
import DarkModeToggle from "@/Components/DarkModeToggle.vue";
import LanguageToggle from "@/Components/LanguageToggle.vue";
import { translate } from "@/translations.js";

const page = usePage();

const search = ref("");
const mobileMenuOpen = ref(false);
const currentLanguage = ref('en');

const t = (key, replacements = {}) => {
    return translate(key, currentLanguage.value, replacements);
};

const handleLanguageChange = (languageCode) => {
    currentLanguage.value = languageCode;
};

const initializeLanguage = () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage.value = savedLanguage;
    } else {
        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        currentLanguage.value = ['en', 'es'].includes(browserLang) ? browserLang : 'en';
    }
};

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

onMounted(() => {
    initializeLanguage();
});

</script>
