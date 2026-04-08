<template>
    <Head>
        <title>{{ t('toolsIndex.title') }}</title>
        <meta name="description" content="{{ t('toolsIndex.description') }}" />
        <meta property="og:title" content="{{ t('toolsIndex.meta_title') }}" />
        <meta property="og:description" content="{{ t('toolsIndex.meta_description') }}" />
    </Head>

    <MainLayout>
        <div class="max-w-7xl mx-auto py-2 space-y-4">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mt-4">{{ t('toolsIndex.heading') }}</h1>

            <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ToolCard
                    v-for="tool in tools"
                    :key="tool.id"
                    :tool="tool"
                />
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { usePage } from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";
import ToolCard from "@/Components/ToolCard.vue";
import { Head } from "@inertiajs/vue3";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

const page = usePage();
const tools = page.props.tools;
</script>
