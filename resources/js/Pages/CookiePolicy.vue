<template>
    <MainLayout>
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>
        
        <div class="max-w-8xl mx-auto py-10 bg-white rounded-xl shadow p-6">
            <h1 class="text-3xl font-bold mb-6">
                Cookie Policy
            </h1>

            <p class="mb-4">
                This Cookie Policy explains how ToolHub uses cookies and similar
                technologies when you visit our website.
            </p>

            <h2 class="text-xl font-semibold mt-6 mb-2">
                What Are Cookies
            </h2>

            <p class="mb-4">
                Cookies are small text files stored on your device when you visit
                a website. They help improve the functionality and performance
                of the site.
            </p>

            <h2 class="text-xl font-semibold mt-6 mb-2">
                How We Use Cookies
            </h2>

            <p class="mb-4">
                ToolHub uses cookies to understand how users interact with our
                tools and to improve the overall experience.
            </p>

            <h2 class="text-xl font-semibold mt-6 mb-2">
                Third-Party Cookies
            </h2>

            <p class="mb-4">
                We may use third-party services such as analytics providers and
                advertising networks that may also place cookies on your device.
            </p>

            <h2 class="text-xl font-semibold mt-6 mb-2">
                Managing Cookies
            </h2>

            <p>
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
