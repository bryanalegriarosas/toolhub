<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">{{ t('loremIpsumGenerator.title') }}</h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ t('loremIpsumGenerator.description') }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                    <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('loremIpsumGenerator.paragraphs') }}</label>
                    <input v-model.number="paragraphs" type="number" min="1" max="20"
                        class="form-input text-sm sm:text-base" />
                </div>

                <div>
                    <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('loremIpsumGenerator.text_type') }}</label>
                    <select v-model="textType" class="form-select text-sm sm:text-base">
                        <option value="classic">{{ t('loremIpsumGenerator.classic_lorem_ipsum') }}</option>
                        <option value="modern">{{ t('loremIpsumGenerator.modern_tech') }}</option>
                        <option value="business">{{ t('loremIpsumGenerator.business') }}</option>
                        <option value="creative">{{ t('loremIpsumGenerator.creative') }}</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('loremIpsumGenerator.format') }}</label>
                    <select v-model="format" class="form-select text-sm sm:text-base">
                        <option value="paragraphs">{{ t('loremIpsumGenerator.paragraphs_format') }}</option>
                        <option value="sentences">{{ t('loremIpsumGenerator.sentences') }}</option>
                        <option value="words">{{ t('loremIpsumGenerator.words') }}</option>
                        <option value="mixed">{{ t('loremIpsumGenerator.mixed') }}</option>
                    </select>
                </div>
            </div>

            <div class="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                <button @click="generate"
                    class="px-3 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                    {{ t('loremIpsumGenerator.generate') }}
                </button>

                <button @click="copy"
                    class="px-3 sm:px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
                    {{ t('loremIpsumGenerator.copy') }}
                </button>

                <button @click="download"
                    class="px-3 sm:px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base">
                    {{ t('loremIpsumGenerator.download') }}
                </button>

                <button @click="clear"
                    class="px-3 sm:px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
                    {{ t('loremIpsumGenerator.clear') }}
                </button>
            </div>

            <div class="mb-4">
                <div class="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <span>{{ t('loremIpsumGenerator.words_count') }} {{ wordCount }}</span>
                    <span>{{ t('loremIpsumGenerator.characters') }} {{ characterCount }}</span>
                    <span>{{ t('loremIpsumGenerator.reading_time') }} {{ readingTime }} {{ t('loremIpsumGenerator.min') }}</span>
                </div>
            </div>

            <textarea v-model="text" rows="8" class="w-full border dark:border-gray-600 rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm"
                :placeholder="t('loremIpsumGenerator.generated_text_will_appear_here')" />

            <ToolSeoContentExpanded
            :title="title"
            :description="mainDescription"
            :extended-description="extendedDescription"
            :features="features"
            :steps="steps"
            :examples="examples"
            :use-cases="useCases"
            :technical-details="technicalDetails"
            :best-practices="bestPractices"
            :common-errors="commonErrors"
            :alternatives="alternatives"
            :related-tools="relatedTools"
            :faqs="faqs"
            :security-note="securityNote"
            :additional-content="additionalContent"
        />

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('loremIpsumGenerator.title'));
const mainDescription = computed(() => t('loremIpsumGenerator.mainDescription'));
const extendedDescription = computed(() => t('loremIpsumGenerator.extendedDescription'));
const features = computed(() => t('loremIpsumGenerator.features'));
const steps = computed(() => t('loremIpsumGenerator.steps'));
const examples = computed(() => t('loremIpsumGenerator.examples'));
const useCases = computed(() => t('loremIpsumGenerator.useCases'));
const technicalDetails = computed(() => t('loremIpsumGenerator.technicalDetails'));
const bestPractices = computed(() => t('loremIpsumGenerator.bestPractices'));
const commonErrors = computed(() => t('loremIpsumGenerator.commonErrors'));
const alternatives = computed(() => t('loremIpsumGenerator.alternatives'));
const relatedTools = computed(() => t('loremIpsumGenerator.relatedTools'));
const faqs = computed(() => t('loremIpsumGenerator.faqs'));
const securityNote = computed(() => t('loremIpsumGenerator.securityNote'));
const additionalContent = computed(() => t('loremIpsumGenerator.additionalContent'));

const paragraphs = ref(3);
const textType = ref('classic');
const format = ref('paragraphs');
const text = ref("");

const textTemplates = {
    classic: {
        words: ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo", "consequat"],
        sentences: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ]
    },
    modern: {
        words: ["digital", "innovation", "technology", "platform", "solution", "framework", "algorithm", "interface", "user", "experience", "design", "development", "cloud", "data", "analytics", "automation", "integration", "scalability", "performance", "optimization"],
        sentences: [
            "Our innovative digital platform leverages cutting-edge technology to deliver seamless user experiences across multiple devices.",
            "The advanced algorithm processes real-time data analytics to optimize performance and scalability.",
            "Cloud-based integration enables automated workflows that enhance productivity and collaboration."
        ]
    },
    business: {
        words: ["strategy", "growth", "market", "revenue", "profit", "investment", "customer", "service", "quality", "excellence", "leadership", "management", "operations", "efficiency", "productivity", "innovation", "competitive", "advantage", "synergy", "alignment"],
        sentences: [
            "Our strategic approach focuses on sustainable growth and market expansion through innovative solutions.",
            "Customer service excellence drives revenue growth and strengthens our competitive advantage.",
            "Operational efficiency and productivity improvements directly impact our bottom line results."
        ]
    },
    creative: {
        words: ["inspiration", "creativity", "imagination", "artistic", "vision", "design", "aesthetic", "harmony", "balance", "composition", "color", "texture", "form", "space", "rhythm", "movement", "emotion", "expression", "beauty", "style"],
        sentences: [
            "Creative inspiration flows through artistic vision, transforming imagination into beautiful expressions.",
            "The aesthetic harmony of design elements creates a perfect balance of form and function.",
            "Artistic expression captures emotion through thoughtful composition and creative use of space."
        ]
    }
};

const wordCount = computed(() => text.value.split(/\s+/).filter(word => word.length > 0).length);
const characterCount = computed(() => text.value.length);
const readingTime = computed(() => Math.ceil(wordCount.value / 200));

const generate = () => {
    const template = textTemplates[textType.value];
    let result = [];

    if (format.value === 'sentences') {
        const sentencesPerParagraph = Math.ceil(paragraphs.value * 3 / paragraphs.value);
        for (let i = 0; i < paragraphs.value; i++) {
            const paragraphSentences = [];
            for (let j = 0; j < sentencesPerParagraph; j++) {
                const randomSentence = template.sentences[Math.floor(Math.random() * template.sentences.length)];
                paragraphSentences.push(randomSentence);
            }
            result.push(paragraphSentences.join(' '));
        }
    } else if (format.value === 'words') {
        const wordsPerParagraph = Math.ceil(50 / paragraphs.value);
        for (let i = 0; i < paragraphs.value; i++) {
            const paragraphWords = [];
            for (let j = 0; j < wordsPerParagraph; j++) {
                const randomWord = template.words[Math.floor(Math.random() * template.words.length)];
                paragraphWords.push(randomWord);
            }
            result.push(paragraphWords.join(' ') + '.');
        }
    } else if (format.value === 'mixed') {
        for (let i = 0; i < paragraphs.value; i++) {
            const mixedContent = [];
            const randomSentence = template.sentences[Math.floor(Math.random() * template.sentences.length)];
            mixedContent.push(randomSentence);

            const wordCount = Math.floor(Math.random() * 20) + 10;
            const randomWords = [];
            for (let j = 0; j < wordCount; j++) {
                randomWords.push(template.words[Math.floor(Math.random() * template.words.length)]);
            }
            mixedContent.push(randomWords.join(' ') + '.');

            result.push(mixedContent.join(' '));
        }
    } else {
        for (let i = 0; i < paragraphs.value; i++) {
            const randomSentence = template.sentences[Math.floor(Math.random() * template.sentences.length)];
            result.push(randomSentence);
        }
    }

    text.value = result.join("\n\n");
};

const copy = async () => {
    try {
        await navigator.clipboard.writeText(text.value);
        alert('Text copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};

const download = () => {
    const blob = new Blob([text.value], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lorem-ipsum.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
};

const clear = () => {
    text.value = '';
};

</script>
