<template>
    <Head>
        <title>{{ t('termsOfService.title') }}</title>
        <meta name="description" content="{{ t('termsOfService.description') }}" />
        <meta property="og:title" content="{{ t('termsOfService.meta_title') }}" />
        <meta property="og:description" content="{{ t('termsOfService.meta_description') }}" />
    </Head>
    <MainLayout>
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>
        
        <div class="max-w-8xl mx-auto py-10 mt-4 px-6 bg-white dark:bg-gray-800 rounded-xl shadow">

            <!-- 🧠 Title -->
            <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ t('termsOfService.page_title') }}
            </h1>

            <!-- 📘 Intro -->
            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('termsOfService.intro') }}
            </p>

            <!-- ⚙️ Use -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('termsOfService.use_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('termsOfService.use_description') }}
            </p>

            <!-- 🚫 Prohibited -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('termsOfService.prohibited_title') }}
            </h2>

            <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
                <li>{{ t('termsOfService.prohibited_item_1') }}</li>
                <li>{{ t('termsOfService.prohibited_item_2') }}</li>
                <li>{{ t('termsOfService.prohibited_item_3') }}</li>
            </ul>

            <!-- 📊 Tools -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('termsOfService.tools_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('termsOfService.tools_description') }}
            </p>

            <!-- ⚠️ Availability -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('termsOfService.availability_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('termsOfService.availability_description') }}
            </p>

            <!-- ❌ No warranty -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('termsOfService.warranty_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('termsOfService.warranty_description') }}
            </p>

            <!-- ⚖️ Liability -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('termsOfService.liability_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('termsOfService.liability_description') }}
            </p>

            <!-- 📢 Third party -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('termsOfService.third_party_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('termsOfService.third_party_description') }}
            </p>

            <!-- 🧠 IP -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('termsOfService.intellectual_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('termsOfService.intellectual_description') }}
            </p>

            <!-- 🔄 Changes -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('termsOfService.changes_title') }}
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ t('termsOfService.changes_description') }}
            </p>

            <!-- 📩 Contact -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                {{ t('termsOfService.contact_title') }}
            </h2>

            <p class="text-gray-700 dark:text-gray-300">
                {{ t('termsOfService.contact_description') }}
                <span class="font-medium">{{ t('termsOfService.contact_email') }}</span>
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
