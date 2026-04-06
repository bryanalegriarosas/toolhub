<template>
    <div class="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded-xl">

        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ t('pngToJpg.title') }}</h1>

        <!-- Error Message -->
        <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {{ error }}
        </div>

        <!-- Success Message -->
        <div v-if="success" class="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {{ success }}
        </div>

        <!-- File Input Area -->
        <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ t('pngToJpg.select_png_file') }}
            </label>
            <input type="file" accept="image/png" @change="convert"
                class="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                :disabled="isProcessing" />
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {{ t('pngToJpg.supported_format') }}
            </p>
        </div>

        <!-- Configuration Options -->
        <div v-if="originalImage && !error" class="mb-6 space-y-4">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('pngToJpg.conversion_options') }}</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('pngToJpg.quality') }}:</label>
                    <select v-model="quality"
                        class="w-full p-2 border dark:border-gray-600 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="1.0">{{ t('pngToJpg.maximum_100') }}</option>
                        <option value="0.9">{{ t('pngToJpg.high_90') }}</option>
                        <option value="0.8">{{ t('pngToJpg.good_80') }}</option>
                        <option value="0.7">{{ t('pngToJpg.medium_70') }}</option>
                        <option value="0.6">{{ t('pngToJpg.low_60') }}</option>
                        <option value="0.5">{{ t('pngToJpg.minimum_50') }}</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('pngToJpg.background_color') }}:</label>
                    <select v-model="backgroundColor"
                        class="w-full p-2 border dark:border-gray-600 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="#ffffff">{{ t('pngToJpg.white') }}</option>
                        <option value="#000000">{{ t('pngToJpg.black') }}</option>
                        <option value="transparent">{{ t('pngToJpg.transparent_as_white') }}</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('pngToJpg.resize') }}:</label>
                    <select v-model="resizeOption"
                        class="w-full p-2 border dark:border-gray-600 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="original">{{ t('pngToJpg.original_size') }}</option>
                        <option value="50%">{{ t('pngToJpg.smaller_50') }}</option>
                        <option value="75%">{{ t('pngToJpg.of_original_75') }}</option>
                        <option value="125%">{{ t('pngToJpg.of_original_125') }}</option>
                        <option value="150%">{{ t('pngToJpg.of_original_150') }}</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('pngToJpg.output_name') }}:</label>
                    <input v-model="outputName" type="text"
                        class="w-full p-2 border dark:border-gray-600 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="converted.jpg" />
                </div>
            </div>
        </div>

        <!-- Image Comparison -->
        <div v-if="originalImage && convertedImage && !error" class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Preview Comparison:</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Original -->
                <div>
                    <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{{ t('pngToJpg.original_png') }}</h4>
                    <div class="border dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                        <img :src="originalImage" alt="Original PNG"
                            class="w-full h-auto max-h-64 object-contain rounded" />
                        <p class="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                            {{ fileName }} ({{ formatFileSize(fileSize) }})
                        </p>
                    </div>
                </div>

                <!-- Converted -->
                <div>
                    <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{{ t('pngToJpg.converted_jpg') }}</h4>
                    <div class="border dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                        <img :src="convertedImage" alt="Converted JPG"
                            class="w-full h-auto max-h-64 object-contain rounded" />
                        <p class="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                            {{ outputName || 'converted.jpg' }} ({{ formatFileSize(convertedSize) }})
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Action Buttons -->
        <div v-if="originalImage && !error" class="flex gap-4">
            <button @click="download" :disabled="isProcessing || !convertedImage"
                class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                <span v-if="isProcessing" class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    {{ t('pngToJpg.converting') }}
                </span>
                <span v-else>{{ t('pngToJpg.download_jpg') }}</span>
            </button>

            <button @click="reset" class="bg-gray-50 dark:bg-gray-7000 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors">
                {{ t('pngToJpg.clear') }}
            </button>
        </div>

        <!-- SEO Content -->
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

</template>

<script setup>
import { ref, watch, computed } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('pngToJpg.title'));
const mainDescription = computed(() => t('pngToJpg.mainDescription'));
const extendedDescription = computed(() => t('pngToJpg.extendedDescription'));
const features = computed(() => t('pngToJpg.features'));
const steps = computed(() => t('pngToJpg.steps'));
const examples = computed(() => t('pngToJpg.examples'));
const useCases = computed(() => t('pngToJpg.useCases'));
const technicalDetails = computed(() => t('pngToJpg.technicalDetails'));
const bestPractices = computed(() => t('pngToJpg.bestPractices'));
const commonErrors = computed(() => t('pngToJpg.commonErrors'));
const alternatives = computed(() => t('pngToJpg.alternatives'));
const relatedTools = computed(() => t('pngToJpg.relatedTools'));
const faqs = computed(() => t('pngToJpg.faqs'));
const securityNote = computed(() => t('pngToJpg.securityNote'));
const additionalContent = computed(() => t('pngToJpg.additionalContent'));

const originalImage = ref(null)
const convertedImage = ref(null)
const error = ref(null)
const success = ref(null)
const isProcessing = ref(false)
const fileName = ref(null)
const fileSize = ref(null)
const convertedSize = ref(null)

// Configuration options
const quality = ref('0.9')
const backgroundColor = ref('#ffffff')
const resizeOption = ref('original')
const outputName = ref('')

const validateFile = (file) => {
    // Check file type
    if (file.type !== 'image/png') {
        throw new Error('Invalid file type. Please select a PNG file.')
    }

    // Check file size (10MB max)
    const maxSize = 10 * 1024 * 1024 // 10MB in bytes
    if (file.size > maxSize) {
        throw new Error('File size too large. Maximum size is 10MB.')
    }

    return true
}

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const calculateDimensions = (originalWidth, originalHeight, resizeOption) => {
    switch (resizeOption) {
        case '50%':
            return { width: originalWidth * 0.5, height: originalHeight * 0.5 }
        case '75%':
            return { width: originalWidth * 0.75, height: originalHeight * 0.75 }
        case '125%':
            return { width: originalWidth * 1.25, height: originalHeight * 1.25 }
        case '150%':
            return { width: originalWidth * 1.5, height: originalHeight * 1.5 }
        default:
            return { width: originalWidth, height: originalHeight }
    }
}

const convertImage = async () => {
    if (!originalImage.value) return

    try {
        isProcessing.value = true
        error.value = null

        const img = new Image()
        img.src = originalImage.value

        await new Promise((resolve, reject) => {
            img.onload = resolve
            img.onerror = reject
        })

        // Calculate new dimensions
        const newDimensions = calculateDimensions(img.width, img.height, resizeOption.value)

        // Create canvas
        const canvas = document.createElement('canvas')
        canvas.width = newDimensions.width
        canvas.height = newDimensions.height

        const ctx = canvas.getContext('2d')

        // Set background color
        const bgColor = backgroundColor.value === 'transparent' ? '#ffffff' : backgroundColor.value
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw image
        ctx.drawImage(img, 0, 0, newDimensions.width, newDimensions.height)

        // Convert to JPG
        const dataURL = canvas.toDataURL('image/jpeg', parseFloat(quality.value))
        convertedImage.value = dataURL

        // Calculate converted file size (approximate)
        const base64Length = dataURL.split(',')[1].length
        convertedSize.value = Math.round(base64Length * 0.75) // Approximate size in bytes

        success.value = 'Image converted successfully! You can now download your JPG file.'

    } catch (err) {
        error.value = 'Failed to convert image: ' + err.message
        convertedImage.value = null
    } finally {
        isProcessing.value = false
    }
}

const convert = async (e) => {
    const file = e.target.files[0]

    if (!file) return

    try {
        // Reset states
        error.value = null
        success.value = null
        convertedImage.value = null
        isProcessing.value = true

        // Validate file
        validateFile(file)

        // Store file info
        fileName.value = file.name
        fileSize.value = file.size

        // Generate output name
        const baseName = file.name.replace(/\.[^/.]+$/, '')
        outputName.value = `${baseName}.jpg`

        // Read file
        const reader = new FileReader()

        reader.onload = async (ev) => {
            originalImage.value = ev.target.result
            success.value = 'PNG file loaded successfully! Configuring conversion options...'
            isProcessing.value = false
        }

        reader.onerror = () => {
            throw new Error('Failed to read the PNG file.')
        }

        reader.readAsDataURL(file)

    } catch (err) {
        error.value = err.message
        originalImage.value = null
        fileName.value = null
        fileSize.value = null
        isProcessing.value = false
    }
}

const download = () => {
    if (!convertedImage.value) return

    try {
        const link = document.createElement('a')
        link.href = convertedImage.value
        link.download = outputName.value || 'converted.jpg'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        success.value = 'JPG file downloaded successfully!'
    } catch (err) {
        error.value = 'Failed to download file: ' + err.message
    }
}

const reset = () => {
    originalImage.value = null
    convertedImage.value = null
    error.value = null
    success.value = null
    fileName.value = null
    fileSize.value = null
    convertedSize.value = null
    isProcessing.value = false
    outputName.value = ''

    // Reset configuration
    quality.value = '0.9'
    backgroundColor.value = '#ffffff'
    resizeOption.value = 'original'

    // Reset file input
    const fileInput = document.querySelector('input[type="file"]')
    if (fileInput) {
        fileInput.value = ''
    }
}

// Watch for configuration changes and auto-convert
watch([quality, backgroundColor, resizeOption], () => {
    if (originalImage.value && !error.value) {
        convertImage()
    }
}, { immediate: false })

</script>