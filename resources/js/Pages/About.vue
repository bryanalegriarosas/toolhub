<template>
    <MainLayout :tools="$page.props.tools">
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>

        <div class="max-w-8xl mx-auto py-10 px-6 bg-white rounded-xl shadow p-6">
            <h1 class="text-3xl font-bold mb-6">
                About ToolHub
            </h1>

            <p class="mb-4">
                ToolHub is a collection of free online tools designed to help
                developers, students, and professionals work more efficiently.
            </p>

            <p class="mb-4">
                Our goal is to provide simple and powerful utilities that solve
                common problems such as formatting data, encoding text, generating
                identifiers, and analyzing web information.
            </p>

            <p class="mb-4">
                All tools available on ToolHub run directly in your browser
                whenever possible, ensuring fast results and improved privacy.
            </p>

            <p class="mb-4">
                We continuously improve the platform by adding new tools and
                features to make development and everyday tasks easier.
            </p>

            <h2 class="text-xl font-semibold mt-6 mb-2">
                Our Mission
            </h2>

            <p>
                To provide a fast, free, and accessible platform of useful
                online tools for everyone.
            </p>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
</script>
