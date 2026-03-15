<template>
    <Head>
        <title>Contact - WebToolStack</title>
    </Head>
    <MainLayout>
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>
        <div class="mx-auto min-h-screen py-16 bg-white rounded-xl shadow p-6">
            <div class="max-w-3xl mx-auto px-6">
                <!-- Title -->
                <div class="text-center mb-10">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Contact Us
                    </h1>
                    <p class="text-gray-600 mt-2">
                        Have a question or suggestion? Send us a message.
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
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input v-model="form.name" type="text"
                            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        <p v-if="form.errors.name" class="text-red-500 text-sm mt-1">
                            {{ form.errors.name }}
                        </p>
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input v-model="form.email" type="email"
                            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        <p v-if="form.errors.email" class="text-red-500 text-sm mt-1">
                            {{ form.errors.email }}
                        </p>
                    </div>

                    <!-- Subject -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Subject
                        </label>
                        <input v-model="form.subject" type="text"
                            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <!-- Message -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea v-model="form.message" rows="5"
                            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>

                        <p v-if="form.errors.message" class="text-red-500 text-sm mt-1">
                            {{ form.errors.message }}
                        </p>
                    </div>

                    <div class="absolute left-[-9999px]">
                        <input v-model="form.website" type="text" autocomplete="off" tabindex="-1" class="hidden">
                    </div>

                    <!-- Button -->
                    <div class="pt-2">
                        <button type="submit" :disabled="form.processing"
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
                            Send Message
                        </button>
                    </div>

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
                title: 'Message Sent!',
                text: 'Your message has been sent successfully. We will get back to you soon.',
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
