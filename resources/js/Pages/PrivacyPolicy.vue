<template>
    <Head>
        <title>{{ t('privacyPolicy.title') }}</title>
        <meta name="description" content="{{ t('privacyPolicy.description') }}" />
        <meta property="og:title" content="{{ t('privacyPolicy.meta_title') }}" />
        <meta property="og:description" content="{{ t('privacyPolicy.meta_description') }}" />
    </Head>
    <MainLayout>
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>
        
        <div class="max-w-8xl mx-auto mt-4 py-10 px-6 bg-white dark:bg-gray-800 rounded-xl shadow">

            <!-- 🧠 Title -->
            <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ t('privacyPolicy.page_title') }}
            </h1>

            <!-- 📘 Intro -->
            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.intro') }}
            </p>

            <!-- 📊 Info -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('privacyPolicy.information_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.information_description') }}
            </p>

            <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>{{ t('privacyPolicy.information_item_1') }}</li>
                <li>{{ t('privacyPolicy.information_item_2') }}</li>
                <li>{{ t('privacyPolicy.information_item_3') }}</li>
            </ul>

            <!-- ⚙️ Usage -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('privacyPolicy.usage_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.usage_description') }}
            </p>

            <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>{{ t('privacyPolicy.usage_item_1') }}</li>
                <li>{{ t('privacyPolicy.usage_item_2') }}</li>
                <li>{{ t('privacyPolicy.usage_item_3') }}</li>
            </ul>

            <!-- 🍪 Cookies -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('privacyPolicy.cookies_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.cookies_description') }}
            </p>

            <!-- 📢 AdSense (CLAVE) -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('privacyPolicy.adsense_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.adsense_description') }}
            </p>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.adsense_opt_out') }}
                <a :href="t('privacyPolicy.adsense_opt_out_url')" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 underline">
                    {{ t('privacyPolicy.adsense_opt_out_url') }}
                </a>
            </p>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.adsense_more_info') }}
                <a :href="t('privacyPolicy.adsense_more_info_url')" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 underline">
                    {{ t('privacyPolicy.adsense_more_info_url') }}
                </a>
            </p>

            <!-- 🔗 Third party -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('privacyPolicy.third_party_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.third_party_description') }}
            </p>

            <!-- Security -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('privacyPolicy.security_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.security_description') }}
            </p>

            <!-- Rights -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('privacyPolicy.rights_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.rights_description') }}
            </p>

            <!-- Changes -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('privacyPolicy.changes_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.changes_description') }}
            </p>

            <!-- 📩 Contact -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('privacyPolicy.contact_title') }}
            </h2>

            <p class="text-gray-700 dark:text-gray-300">
                {{ t('privacyPolicy.contact_description') }}
                <span class="font-medium">{{ t('privacyPolicy.contact_email') }}</span>
            </p>

        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import { Head } from '@inertiajs/vue3';
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();
</script>
