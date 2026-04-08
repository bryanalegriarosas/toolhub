<template>
    <Head>
        <title>{{ t('disclaimer.title') }}</title>
        <meta name="description" content="{{ t('disclaimer.description') }}" />
        <meta property="og:title" content="{{ t('disclaimer.meta_title') }}" />
        <meta property="og:description" content="{{ t('disclaimer.meta_description') }}" />
    </Head>
    <MainLayout>
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>

        <div class="max-w-8xl mt-4 mx-auto px-6 py-12 bg-white dark:bg-gray-800 rounded-xl shadow text-gray-800 dark:text-gray-300">

            <!-- 🧠 Title -->
            <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ t('disclaimer.page_title') }}
            </h1>

            <!-- 📘 Intro -->
            <p class="mb-4">
                {{ t('disclaimer.intro') }}
            </p>

            <!-- ⚠️ No guarantees -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('disclaimer.guarantees_title') }}
            </h2>

            <p class="mb-4">
                {{ t('disclaimer.guarantees_description') }}
            </p>

            <!-- ⚠️ Professional disclaimer -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('disclaimer.professional_title') }}
            </h2>

            <p class="mb-4">
                {{ t('disclaimer.professional_description') }}
            </p>

            <!-- ⚠️ Risk -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('disclaimer.risk_title') }}
            </h2>

            <p class="mb-4">
                {{ t('disclaimer.risk_description') }}
            </p>

            <!-- ⚖️ Liability -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('disclaimer.liability_title') }}
            </h2>

            <p class="mb-4">
                {{ t('disclaimer.liability_description') }}
            </p>

            <!-- 📢 Ads -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('disclaimer.ads_title') }}
            </h2>

            <p class="mb-4">
                {{ t('disclaimer.ads_description') }}
            </p>

            <!-- 🔗 External -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('disclaimer.external_title') }}
            </h2>

            <p class="mb-4">
                {{ t('disclaimer.external_description') }}
            </p>

            <!-- 🔄 Changes -->
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                {{ t('disclaimer.changes_title') }}
            </h2>

            <p class="mb-4">
                {{ t('disclaimer.changes_description') }}
            </p>

            <!-- 📅 Date -->
            <p class="mt-8 text-sm text-gray-500">
                {{ t('disclaimer.last_updated', { date: date }) }}
            </p>

        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

const date = new Date().toISOString().split('T')[0];
</script>
