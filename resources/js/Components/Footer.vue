<template>
    <footer class="bg-gray-900 dark:bg-black text-gray-300 mt-16 transition-colors">

        <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

            <!-- Brand -->
            <div>
                <h2 class="text-xl font-semibold text-white mb-2">
                    <a href="/" class="hover:text-gray-300">
                        {{ t('footer.brand_title') }}
                    </a>
                </h2>

                <p class="text-sm text-gray-400">
                    {{ t('footer.brand_description') }}
                </p>

                <p class="text-sm text-gray-400 mt-3">
                    {{ t('footer.brand_built_for') }}
                </p>

                <!-- 👇 confianza -->
                <p class="text-xs text-gray-500 mt-4">
                    {{ t('footer.brand_privacy_note') }}
                </p>

                <p class="text-xs text-gray-500 mt-3">
                    {{ t('footer.brand_contact') }}
                    <a href="mailto:eliotanderson189@gmail.com" class="hover:text-gray-300">
                        {{ t('footer.brand_email') }}
                    </a>
                </p>
            </div>

            <!-- Tools -->
            <div>
                <h3 class="text-white font-semibold mb-3">
                    {{ t('footer.tools_title') }}
                </h3>

                <ul class="space-y-2 text-sm">
                    <li v-for="category in categories" :key="category.id">
                        <a :href="'/category/' + category.slug" class="hover:text-white">
                            {{ category.name }}
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Legal -->
            <div>
                <h3 class="text-white font-semibold mb-3">
                    {{ t('footer.legal_title') }}
                </h3>

                <ul class="space-y-2 text-sm">
                    <li><a href="/privacy-policy" class="hover:text-white">{{ t('footer.legal_privacy_policy') }}</a></li>
                    <li><a href="/terms-of-service" class="hover:text-white">{{ t('footer.legal_terms_of_service') }}</a></li>
                    <li><a href="/cookie-policy" class="hover:text-white">{{ t('footer.legal_cookie_policy') }}</a></li>
                    <li><a href="/disclaimer" class="hover:text-white">{{ t('footer.legal_disclaimer') }}</a></li>
                    <li><a href="/about" class="hover:text-white">{{ t('footer.legal_about') }}</a></li>
                    <li><a href="/contact" class="hover:text-white">{{ t('footer.legal_contact') }}</a></li>
                </ul>
            </div>

        </div>

        <!-- 🔥 Mini disclaimer -->
        <div class="text-center text-xs text-gray-500 px-6 pb-4">
            {{ t('footer.mini_disclaimer') }}
        </div>

        <!-- Bottom -->
        <div class="border-t border-gray-800 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400 py-4">
            {{ t('footer.copyright', { year: year }) }}
        </div>

    </footer>

</template>

<script setup>
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

const props = defineProps({
    categories: Array,
});

const year = new Date().getFullYear();

</script>
