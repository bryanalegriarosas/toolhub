<template>
    <Head>
        <title>Cookie Policy - WebToolStack</title>
    </Head>
    <MainLayout>
        <template #sidebar></template>
        
        <div class="max-w-6xl mx-auto mt-4 py-10 px-6 bg-white dark:bg-gray-800 rounded-xl shadow">

            <!-- 🧠 Title -->
            <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Cookie Policy
            </h1>

            <!-- 📘 Intro -->
            <p class="mb-4 text-gray-700 dark:text-gray-300">
                This Cookie Policy explains how WebToolStack uses cookies and similar
                technologies when you visit our website. By using this site, you agree
                to the use of cookies as described in this policy.
            </p>

            <!-- 🍪 What are cookies -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                What Are Cookies
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                Cookies are small text files stored on your device when you visit a website.
                They help websites function properly, improve user experience, and provide
                analytical information about how users interact with the site.
            </p>

            <!-- ⚙️ Types -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                Types of Cookies We Use
            </h2>

            <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for basic functionality of the website.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the site.</li>
                <li><strong>Advertising Cookies:</strong> Used to display relevant ads to users.</li>
            </ul>

            <!-- 📊 How we use -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                How We Use Cookies
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                We use cookies to improve website performance, analyze traffic, and enhance
                user experience. Cookies help us understand which tools are most useful and
                how visitors navigate the site.
            </p>

            <!-- 📢 AdSense (MUY IMPORTANTE) -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                Advertising and Third-Party Cookies
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                We may use third-party advertising services such as Google AdSense. These services
                may use cookies to show ads based on your previous visits to this or other websites.
                Google's use of advertising cookies enables it and its partners to serve ads based
                on your browsing behavior.
            </p>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                You can learn more about how Google uses data by visiting:
                https://policies.google.com/technologies/ads
            </p>

            <!-- 🔒 Consent -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                Your Consent
            </h2>

            <p class="mb-4 text-gray-700 dark:text-gray-300">
                By continuing to use our website, you consent to the use of cookies as described
                in this policy. You can manage or disable cookies at any time through your browser settings.
            </p>

            <!-- ⚙️ Manage -->
            <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                Managing Cookies
            </h2>

            <p class="text-gray-700 dark:text-gray-300">
                You can control or delete cookies through your browser settings. However, disabling
                cookies may affect the functionality of some features on this website.
            </p>

        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import { Head } from '@inertiajs/vue3';
</script>
