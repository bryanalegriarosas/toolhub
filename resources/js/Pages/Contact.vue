<template>
    <MainLayout :tools="$page.props.tools">
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>

        <div class="max-w-8xl mx-auto py-10 px-6 bg-white rounded-xl shadow p-6">
            <h1 class="text-3xl font-bold mb-6">
                Contact
            </h1>

            <p class="mb-6">
                If you have questions, suggestions, or feedback about ToolHub,
                please send us a message using the form below.
            </p>

            <form @submit.prevent="submitForm" class="space-y-4">
                <input v-model="name" placeholder="Your Name" class="w-full border rounded-lg p-3" />

                <input v-model="email" placeholder="Your Email" class="w-full border rounded-lg p-3" />

                <textarea v-model="message" placeholder="Your Message" rows="5" class="w-full border rounded-lg p-3" />

                <button class="bg-blue-600 text-white px-6 py-3 rounded-lg">
                    Send Message
                </button>
            </form>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref } from "vue"
import MainLayout from "@/Layouts/MainLayout.vue"

const name = ref("")
const email = ref("")
const message = ref("")

const submitForm = () => {
    alert("Message sent (demo). Backend can be implemented later.")
};
</script>