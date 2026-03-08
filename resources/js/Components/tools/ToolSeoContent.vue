<template>
    <div class="max-w-4xl mx-auto mt-16 space-y-12">
        <!-- Description -->

        <section>
            <h2 class="text-2xl font-bold mb-4">What is {{ title }}?</h2>

            <p class="text-gray-600 leading-relaxed">
                {{ description }}
            </p>
        </section>

        <!-- Steps -->

        <section v-if="steps?.length">
            <h2 class="text-2xl font-bold mb-4">How to use this tool</h2>

            <ol class="list-decimal ml-6 space-y-2 text-gray-600">
                <li v-for="step in steps">
                    {{ step }}
                </li>
            </ol>
        </section>

        <!-- FAQ -->

        <section v-if="faqs?.length">
            <h2 class="text-2xl font-bold mb-4">FAQ</h2>

            <div class="space-y-6">
                <div v-for="faq in faqs">
                    <h3 class="font-semibold text-lg">
                        {{ faq.question }}
                    </h3>

                    <p class="text-gray-600 mt-1">
                        {{ faq.answer }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    steps: Array,
    faqs: Array,
});
</script>