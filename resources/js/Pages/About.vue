<template>
    <Head>
        <title>{{ t('about.title') }}</title>
        <meta name="description" content="{{ t('about.description') }}" />
        <meta property="og:title" content="{{ t('about.meta_title') }}" />
        <meta property="og:description" content="{{ t('about.meta_description') }}" />
    </Head>
    
    <MainLayout>
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>

        <div class="max-w-8xl mx-auto mt-4 py-10 px-6 bg-white dark:bg-gray-800 rounded-xl shadow">

            <!-- 🧠 Title -->
            <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ t('about.page_title') }}
            </h1>

            <!-- 📘 Intro -->
            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('about.intro_paragraph_1') }}
            </p>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('about.intro_paragraph_2') }}
            </p>

            <!-- 🎯 Mission -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('about.mission_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('about.mission_description') }}
            </p>

            <!-- ⚙️ What We Offer -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('about.features_title') }}
            </h2>

            <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
                <li>{{ t('about.feature_1') }}</li>
                <li>{{ t('about.feature_2') }}</li>
                <li>{{ t('about.feature_3') }}</li>
                <li>{{ t('about.feature_4') }}</li>
                <li>{{ t('about.feature_5') }}</li>
            </ul>

            <!-- 🔒 Privacy -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('about.privacy_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('about.privacy_description') }}
            </p>

            <!-- 🚀 Future -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('about.future_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('about.future_description') }}
            </p>

            <!-- 👤 About creator (MUY IMPORTANTE) -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('about.creator_title') }}
            </h2>

            <p class="text-gray-700 dark:text-gray-300">
                {{ t('about.creator_description') }}
            </p>

        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import { Head } from "@inertiajs/vue3";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();
</script>
