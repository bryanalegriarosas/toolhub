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

        <!-- Examples -->
        <section v-if="examples?.length">
            <h2 class="text-2xl font-bold mb-4">Examples</h2>

            <div class="space-y-6">
                <div v-for="example in examples" :key="example.title" class="border rounded-lg p-4 bg-gray-50">
                    <h3 class="font-semibold text-lg mb-2">
                        {{ example.title }}
                    </h3>
                    
                    <p class="text-gray-600 mb-3" v-if="example.description">
                        {{ example.description }}
                    </p>

                    <div v-if="example.code" class="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm overflow-x-auto mb-3">
                        <pre>{{ example.code }}</pre>
                    </div>

                    <div v-if="example.result" class="bg-white border rounded-lg p-3">
                        <p class="text-sm font-medium text-gray-700 mb-1">Result:</p>
                        <p class="text-gray-600 font-mono text-sm">{{ example.result }}</p>
                    </div>

                    <div v-if="example.steps?.length" class="mt-3">
                        <p class="text-sm font-medium text-gray-700 mb-2">Steps:</p>
                        <ol class="list-decimal ml-6 space-y-1 text-sm text-gray-600">
                            <li v-for="step in example.steps">{{ step }}</li>
                        </ol>
                    </div>
                </div>
            </div>
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
    examples: Array,
    faqs: Array,
});
</script>