<template>

    <footer class="bg-gray-900 dark:bg-black text-gray-300 mt-16 transition-colors">

        <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

            <!-- Brand -->

            <div>

                <h2 class="text-xl font-semibold text-white mb-2">
                    WebToolStack
                </h2>

                <p class="text-sm text-gray-400">
                    A collection of free online tools for developers,
                    students and professionals.
                </p>

                <p class="text-sm text-gray-400 mt-3">
                    WebToolStack offers a growing collection of free online tools including formatters, converters, generators and developer utilities.
                </p>

            </div>

            <!-- Tools -->

            <div>

                <h3 class="text-white font-semibold mb-3">
                    Tools
                </h3>

                <ul class="space-y-2 text-sm">
                    <li v-for="category in categories" :key="category.id">
                        <a :href="'/category/' + category.slug" class="hover:text-white">
                            {{ category.name }}
                        </a>
                    </li>
                </ul>

            </div>

            <!-- Legal -->

            <div>

                <h3 class="text-white font-semibold mb-3">
                    Legal
                </h3>

                <ul class="space-y-2 text-sm">

                    <li>
                        <a href="/privacy-policy" class="hover:text-white">
                            Privacy Policy
                        </a>
                    </li>

                    <li>
                        <a href="/terms-of-service" class="hover:text-white">
                            Terms of Service
                        </a>
                    </li>

                    <li>
                        <a href="/cookie-policy" class="hover:text-white">
                            Cookie Policy
                        </a>
                    </li>

                    <li>
                        <a href="/about" class="hover:text-white">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="/contact" class="hover:text-white">
                            Contact
                        </a>
                    </li>

                    <li>
                        <a href="/disclaimer" class="hover:text-white">
                            Disclaimer
                        </a>
                    </li>

                </ul>

            </div>

        </div>

        <!-- Bottom -->

        <div class="border-t border-gray-800 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400 py-4">

            © {{ year }} WebToolStack. All rights reserved.

        </div>

    </footer>

</template>

<script setup>

const props = defineProps({
    categories: Array,
});
const year = new Date().getFullYear()

</script>
