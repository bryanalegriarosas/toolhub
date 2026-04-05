<template>
    <MainLayout>
        <template #sidebar>
            <!-- Empty sidebar to hide it -->
        </template>
        <div class="max-w-8 mt-4 px-6 py-12 bg-white dark:bg-gray-800 rounded-xl shadow text-gray-800 dark:text-gray-300">
    
            <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Disclaimer
            </h1>
    
            <p class="mb-4">
                The information and tools provided on this website ("ToolHub" / "WebToolStack")
                are for general informational and educational purposes only.
            </p>
    
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                No Guarantees
            </h2>
    
            <p class="mb-4">
                While we strive to provide accurate and up-to-date tools, we make no warranties
                or guarantees of any kind, express or implied, about the completeness, accuracy,
                reliability, or availability of any tools or information on this website.
            </p>
    
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                Use at Your Own Risk
            </h2>
    
            <p class="mb-4">
                Any use of the tools provided on this website is strictly at your own risk.
                You are responsible for verifying any output before relying on it.
            </p>
    
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                Limitation of Liability
            </h2>
    
            <p class="mb-4">
                Under no circumstances shall we be liable for any loss or damage, including
                without limitation indirect or consequential loss or damage, arising from
                the use of this website or its tools.
            </p>
    
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                External Links
            </h2>
    
            <p class="mb-4">
                This website may contain links to external websites that are not provided or
                maintained by us. We do not guarantee the accuracy or reliability of any
                external content.
            </p>
    
            <h2 class="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                Changes
            </h2>
    
            <p class="mb-4">
                We may update this Disclaimer at any time without prior notice. By using this
                website, you agree to this Disclaimer and any future modifications.
            </p>
    
            <p class="mt-8 text-sm text-gray-500">
                Last updated: {{ date }}
            </p>
    
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';

const date = new Date().toLocaleDateString()
</script>