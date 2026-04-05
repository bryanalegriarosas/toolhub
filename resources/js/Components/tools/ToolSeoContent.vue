<template>
    <div class="max-w-4xl mx-auto mt-16 space-y-12">
        <!-- Description -->
        <section>
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.what_is', { title }) }}</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {{ description }}
            </p>
            
            <!-- Extended description if provided -->
            <div v-if="extendedDescription" class="mt-4 prose text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none">
                <div v-html="extendedDescription"></div>
            </div>
        </section>

        <!-- Key Features (NEW) -->
        <section v-if="features?.length">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.key_features') }}</h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div v-for="feature in features" :key="feature.title" 
                     class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">{{ feature.title }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Steps -->
        <section v-if="steps?.length">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.how_to_use') }}</h2>
            <ol class="space-y-4">
                <li v-for="(step, index) in steps" :key="index" class="flex gap-4">
                    <span class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {{ index + 1 }}
                    </span>
                    <div class="flex-1 pt-1">
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ step }}</p>
                    </div>
                </li>
            </ol>
        </section>

        <!-- Examples -->
        <section v-if="examples?.length">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.examples') }}</h2>
            <div class="space-y-6">
                <div v-for="example in examples" :key="example.title" 
                     class="border dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-700">
                    <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                        {{ example.title }}
                    </h3>
                    
                    <p class="text-gray-600 dark:text-gray-400 mb-3" v-if="example.description">
                        {{ example.description }}
                    </p>

                    <div v-if="example.code" class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-3">
                        <pre>{{ example.code }}</pre>
                    </div>

                    <div v-if="example.result" class="bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg p-4">
                        <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('seo.result') }}</p>
                        <p class="text-gray-600 dark:text-gray-400 font-mono text-sm">{{ example.result }}</p>
                    </div>

                    <div v-if="example.steps?.length" class="mt-4">
                        <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('seo.step_by_step') }}</p>
                        <ol class="list-decimal ml-6 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li v-for="step in example.steps" :key="step">{{ step }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Cases (NEW) -->
        <section v-if="useCases?.length">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.common_use_cases') }}</h2>
            <div class="space-y-6">
                <div v-for="useCase in useCases" :key="useCase.title" 
                     class="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                        {{ useCase.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        {{ useCase.description }}
                    </p>
                    <div v-if="useCase.example" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-sm">
                        <p class="text-gray-600 dark:text-gray-400 italic">{{ useCase.example }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technical Details (NEW) -->
        <section v-if="technicalDetails">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.how_it_works') }}</h2>
            <div class="prose text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none">
                <div v-html="technicalDetails"></div>
            </div>
        </section>

        <!-- Best Practices (NEW) -->
        <section v-if="bestPractices?.length">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.best_practices') }}</h2>
            <div class="grid gap-4">
                <div v-for="practice in bestPractices" :key="practice.title"
                     class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-5">
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                        </svg>
                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ practice.title }}</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ practice.tip }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Common Errors (NEW) -->
        <section v-if="commonErrors?.length">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.common_errors') }}</h2>
            <div class="space-y-4">
                <div v-for="error in commonErrors" :key="error.error"
                     class="border border-red-200 dark:border-red-800 rounded-lg p-5 bg-red-50 dark:bg-red-900/20">
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                        </svg>
                        <div class="flex-1">
                            <h3 class="font-semibold text-red-900 dark:text-red-200 mb-1">{{ error.error }}</h3>
                            <p class="text-red-700 dark:text-red-300 text-sm mb-2">{{ error.cause }}</p>
                            <div class="bg-white dark:bg-gray-800 rounded p-3 mt-2">
                                <p class="text-sm font-medium text-green-700 dark:text-green-400 mb-1">✓ {{ t('seo.solution') }}</p>
                                <p class="text-gray-700 dark:text-gray-300 text-sm">{{ error.solution }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Comparison/Alternatives (NEW) -->
        <section v-if="alternatives?.length">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.alternatives') }}</h2>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-gray-100 dark:bg-gray-700">
                            <th class="border dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">{{ t('seo.method') }}</th>
                            <th class="border dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">{{ t('seo.use_case') }}</th>
                            <th class="border dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">{{ t('seo.pros') }}</th>
                            <th class="border dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">{{ t('seo.cons') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="alt in alternatives" :key="alt.name" class="border-b dark:border-gray-600">
                            <td class="border dark:border-gray-600 px-4 py-3 font-semibold text-gray-900 dark:text-white">{{ alt.name }}</td>
                            <td class="border dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-400">{{ alt.useCase }}</td>
                            <td class="border dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-400">{{ alt.pros }}</td>
                            <td class="border dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-400">{{ alt.cons }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Related Tools (NEW) -->
        <section v-if="relatedTools?.length">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.related_tools') }}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a v-for="tool in relatedTools" :key="tool.name" 
                   :href="tool.url"
                   class="block p-4 border dark:border-gray-600 rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-700">
                    <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ tool.name }}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ tool.description }}</p>
                </a>
            </div>
        </section>

        <!-- FAQ -->
        <section v-if="faqs?.length">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('seo.faq') }}</h2>
            <div class="space-y-6">
                <div v-for="(faq, index) in faqs" :key="index"
                     class="border-b dark:border-gray-700 pb-6 last:border-b-0">
                    <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                        <span class="text-blue-600 dark:text-blue-400">Q:</span>
                        <span>{{ faq.question }}</span>
                    </h3>
                    <div class="ml-6">
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                            <span class="text-green-600 dark:text-green-400 font-semibold">A:</span>
                            {{ faq.answer }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Additional Content Section (NEW) - For HTML content -->
        <section v-if="additionalContent">
            <div class="prose text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none">
                <div v-html="additionalContent"></div>
            </div>
        </section>

        <!-- Security & Privacy (NEW) -->
        <section v-if="securityNote">
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                        <h3 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">{{ t('seo.security_privacy') }}</h3>
                        <p class="text-yellow-800 dark:text-yellow-300 text-sm">{{ securityNote }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones global
const { t } = useTranslations();

defineProps({
    title: String,
    description: String,
    extendedDescription: String,
    steps: Array,
    examples: Array,
    faqs: Array,
    features: Array,
    useCases: Array,
    technicalDetails: String,
    bestPractices: Array,
    commonErrors: Array,
    alternatives: Array,
    relatedTools: Array,
    additionalContent: String,
    securityNote: String
});
</script>
