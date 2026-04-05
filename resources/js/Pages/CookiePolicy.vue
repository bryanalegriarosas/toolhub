<template>
    <MainLayout>
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>
        
        <div class="max-w-8xl mx-auto mt-4 py-10 bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Cookie Policy
            </h1>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                This Cookie Policy explains how ToolHub uses cookies and similar
                technologies when you visit our website.
            </p>

            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                What Are Cookies
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                Cookies are small text files stored on your device when you visit
                a website. They help improve the functionality and performance
                of the site.
            </p>

            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                How We Use Cookies
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                ToolHub uses cookies to understand how users interact with our
                tools and to improve the overall experience.
            </p>

            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                Third-Party Cookies
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                We may use third-party services such as analytics providers and
                advertising networks that may also place cookies on your device.
            </p>

            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                Managing Cookies
            </h2>

            <p class="text-gray-700 dark:text-gray-300">
                You can control or delete cookies through your browser settings.
                However, disabling cookies may affect the functionality of some
                features on this website.
            </p>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
</script>
