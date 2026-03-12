<template>

    <footer class="bg-gray-900 text-gray-300 mt-16">

        <div class="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

            <!-- Brand -->

            <div>

                <h2 class="text-xl font-semibold text-white mb-2">
                    ToolHub
                </h2>

                <p class="text-sm text-gray-400">
                    A collection of free online tools for developers,
                    students and professionals.
                </p>

            </div>

            <!-- Tools -->

            <div>

                <h3 class="text-white font-semibold mb-3">
                    Tools
                </h3>

                <ul class="space-y-2 text-sm">

                    <li>
                        <a href="/developer-tools" class="hover:text-white">
                            Developer Tools
                        </a>
                    </li>

                    <li>
                        <a href="/encoding-tools" class="hover:text-white">
                            Encoding Tools
                        </a>
                    </li>

                    <li>
                        <a href="/security-tools" class="hover:text-white">
                            Security Tools
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

                </ul>

            </div>

        </div>

        <!-- Bottom -->

        <div class="border-t border-gray-800 text-center text-sm text-gray-500 py-4">

            © {{ year }} ToolHub. All rights reserved.

        </div>

    </footer>

</template>

<script setup>

const year = new Date().getFullYear()

</script>
