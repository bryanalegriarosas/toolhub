<template>
    <Head>
        <title>{{ t('contact.title') }}</title>
        <meta name="description" content="{{ t('contact.description') }}" />
        <meta property="og:title" content="{{ t('contact.meta_title') }}" />
        <meta property="og:description" content="{{ t('contact.meta_description') }}" />
    </Head>
    <MainLayout>
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>
        <div class="mx-auto max-w-8xl mt-4 min-h-screen py-16 bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <div class="max-w-3xl mx-auto px-6">
                <!-- Title -->
                <div class="text-center mb-10">
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                        {{ t('contact.page_title') }}
                    </h1>
                    <p class="text-gray-600 dark:text-gray-400 mt-2">
                        {{ t('contact.page_description') }}
                    </p>

                    <!-- 👇 EXTRA IMPORTANTE -->
                    <p class="text-sm text-gray-500 mt-3">
                        {{ t('contact.direct_email_text') }}
                        <span class="font-medium">{{ t('contact.email_address') }}</span>
                    </p>
                </div>

                <!-- Success Message -->
                <div v-if="props.flash?.success"
                    class="mb-6 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded">
                    {{ props.flash.success }}
                </div>

                <form @submit.prevent="submit" class="space-y-6">

                    <!-- Name -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ t('contact.name_label') }}
                        </label>
                        <input v-model="form.name" required type="text"
                            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        <p v-if="form.errors.name" class="text-red-500 text-sm mt-1">
                            {{ form.errors.name }}
                        </p>
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ t('contact.email_label') }}
                        </label>
                        <input v-model="form.email" required type="email"
                            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        <p v-if="form.errors.email" class="text-red-500 text-sm mt-1">
                            {{ form.errors.email }}
                        </p>
                    </div>

                    <!-- Subject -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ t('contact.subject_label') }}
                        </label>
                        <input v-model="form.subject" type="text"
                            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <!-- Message -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ t('contact.message_label') }}
                        </label>
                        <textarea v-model="form.message" required rows="5"
                            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>

                        <p v-if="form.errors.message" class="text-red-500 text-sm mt-1">
                            {{ form.errors.message }}
                        </p>
                    </div>

                    <div class="absolute left-[-9999px]">
                        <input v-model="form.website" type="text" autocomplete="off" tabindex="-1" class="hidden">
                    </div>

                    <!-- Button -->
                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
                    >
                        <span v-if="!form.processing">{{ t('contact.send_button') }}</span>

                        <span v-else class="flex items-center gap-2">
                            <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24"></svg>
                            {{ t('contact.sending_button') }}
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { inject } from "vue";
import { useForm, usePage } from '@inertiajs/vue3';
import { Head } from "@inertiajs/vue3";
import MainLayout from '@/Layouts/MainLayout.vue';
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

const Swal = inject('Swal');
const { props } = usePage();

const form = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
});

const submit = () => {
    form.post(route('contact.store'), {
        onSuccess: () => {
            form.reset();
            Swal.fire({
                icon: 'success',
                title: t('contact.success_title'),
                text: t('contact.success_message'),
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        }
    });
};
</script>
