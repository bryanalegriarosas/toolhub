<template>
    <div class="relative">
        <button
            @click="toggleDropdown"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            :aria-label="`Current language: ${currentLanguage.name}. Click to change language`"
        >
            <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ currentLanguage.flag }} {{ currentLanguage.code.toUpperCase() }}
            </span>
            <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>

        <div
            v-show="isOpen"
            @click.away="closeDropdown"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
        >
            <div class="py-1">
                <button
                    v-for="language in languages"
                    :key="language.code"
                    @click="selectLanguage(language)"
                    class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 transition-colors"
                    :class="{
                        'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400': currentLanguage.code === language.code
                    }"
                >
                    <span class="text-lg">{{ language.flag }}</span>
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {{ language.name }}
                    </span>
                    <svg
                        v-if="currentLanguage.code === language.code"
                        class="w-4 h-4 text-blue-600 dark:text-blue-400 ml-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
]

const currentLanguage = ref(languages[0])
const isOpen = ref(false)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const closeDropdown = () => {
    isOpen.value = false
}

const selectLanguage = (language) => {
    currentLanguage.value = language
    localStorage.setItem('language', language.code)
    closeDropdown()
    
    // Emit event to notify parent component
    emit('languageChanged', language.code)
}

const emit = defineEmits(['languageChanged'])

const initializeLanguage = () => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
        const language = languages.find(lang => lang.code === savedLanguage)
        if (language) {
            currentLanguage.value = language
        }
    } else {
        // Check browser language
        const browserLang = navigator.language.split('-')[0]
        const language = languages.find(lang => lang.code === browserLang)
        if (language) {
            currentLanguage.value = language
        }
    }
}

onMounted(() => {
    initializeLanguage()
})
</script>
