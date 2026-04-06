<template>
    <div class="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded-xl">

        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ t('jpgToPng.title') }}</h1>

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
                {{ t('jpgToPng.select_jpg_file') }}
            </label>
            <input type="file" accept="image/jpeg,image/jpg" @change="convert"
                class="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                :disabled="isProcessing" />
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {{ t('jpgToPng.supported_formats') }}
            </p>
        </div>

            {{ t('jpgToPng.conversion_options') }}
        <div v-if="originalImage && !error" class="mb-6 space-y-4">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Conversion Options:</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('jpgToPng.compression') }}:</label>
                    <select v-model="compression"
                        class="w-full p-2 border dark:border-gray-600 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="0">{{ t('jpgToPng.no_compression') }}</option>
                        <option value="3">{{ t('jpgToPng.low_compression') }}</option>
                        <option value="6">{{ t('jpgToPng.medium_compression') }}</option>
                        <option value="9">{{ t('jpgToPng.high_compression') }}</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('jpgToPng.background') }}:</label>
                    <select v-model="backgroundOption"
                        class="w-full p-2 border dark:border-gray-600 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="original">{{ t('jpgToPng.keep_original') }}</option>
                        <option value="transparent">{{ t('jpgToPng.make_transparent') }}</option>
                        <option value="white">{{ t('jpgToPng.white_background') }}</option>
                        <option value="black">{{ t('jpgToPng.black_background') }}</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('jpgToPng.resize') }}:</label>
                    <select v-model="resizeOption"
                        class="w-full p-2 border dark:border-gray-600 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="original">{{ t('jpgToPng.original_size') }}</option>
                        <option value="50%">{{ t('jpgToPng.smaller_50') }}</option>
                        <option value="75%">{{ t('jpgToPng.of_original_75') }}</option>
                        <option value="125%">{{ t('jpgToPng.of_original_125') }}</option>
                        <option value="150%">{{ t('jpgToPng.of_original_150') }}</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('jpgToPng.output_name') }}:</label>
                    <input v-model="outputName" type="text"
                        class="w-full p-2 border dark:border-gray-600 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="converted.png" />
                </div>
            </div>
        </div>

        <!-- Image Comparison -->
        <div v-if="originalImage && convertedImage && !error" class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Preview Comparison:</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Original -->
                <div>
                    <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{{ t('jpgToPng.original_jpg') }}</h4>
                    <div class="border dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                        <img :src="originalImage" alt="Original JPG"
                            class="w-full h-auto max-h-64 object-contain rounded" />
                        <p class="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                            {{ fileName }} ({{ formatFileSize(fileSize) }})
                        </p>
                    </div>
                </div>

                <!-- Converted -->
                <div>
                    <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{{ t('jpgToPng.converted_png') }}</h4>
                    <div class="border dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                        <img :src="convertedImage" alt="Converted PNG"
                            class="w-full h-auto max-h-64 object-contain rounded" />
                        <p class="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                            {{ outputName || 'converted.png' }} ({{ formatFileSize(convertedSize) }})
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
                    {{ t('jpgToPng.converting') }}
                </span>
                <span v-else>{{ t('jpgToPng.download_png') }}</span>
            </button>

            <button @click="reset" class="bg-gray-50 dark:bg-gray-7000 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors">
                {{ t('jpgToPng.clear') }}
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
const title = computed(() => t('jpgToPng.title'));
const mainDescription = computed(() => t('jpgToPng.mainDescription'));
const extendedDescription = computed(() => t('jpgToPng.extendedDescription'));
const features = computed(() => t('jpgToPng.features'));
const steps = computed(() => t('jpgToPng.steps'));
const examples = computed(() => t('jpgToPng.examples'));
const useCases = computed(() => t('jpgToPng.useCases'));
const technicalDetails = computed(() => t('jpgToPng.technicalDetails'));
const bestPractices = computed(() => t('jpgToPng.bestPractices'));
const commonErrors = computed(() => t('jpgToPng.commonErrors'));
const alternatives = computed(() => t('jpgToPng.alternatives'));
const relatedTools = computed(() => t('jpgToPng.relatedTools'));
const faqs = computed(() => t('jpgToPng.faqs'));
const securityNote = computed(() => t('jpgToPng.securityNote'));
const additionalContent = computed(() => t('jpgToPng.additionalContent'));

const originalImage = ref(null)
const convertedImage = ref(null)
const error = ref(null)
const success = ref(null)
const isProcessing = ref(false)
const fileName = ref(null)
const fileSize = ref(null)
const convertedSize = ref(null)

// Configuration options
const compression = ref('6')
const backgroundOption = ref('original')
const resizeOption = ref('original')
const outputName = ref('')

const validateFile = (file) => {
    // Check file type
    const validTypes = ['image/jpeg', 'image/jpg']
    if (!validTypes.includes(file.type)) {
        throw new Error('Invalid file type. Please select a JPG or JPEG file.')
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

        // Handle background
        if (backgroundOption.value === 'transparent') {
            // For transparent, we need to handle it differently
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        } else if (backgroundOption.value === 'white') {
            ctx.fillStyle = '#ffffff'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        } else if (backgroundOption.value === 'black') {
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
        // 'original' keeps the canvas transparent by default

        // Draw image
        ctx.drawImage(img, 0, 0, newDimensions.width, newDimensions.height)

        // Convert to PNG with compression
        const dataURL = canvas.toDataURL('image/png')
        convertedImage.value = dataURL

        // Calculate converted file size (approximate)
        const base64Length = dataURL.split(',')[1].length
        convertedSize.value = Math.round(base64Length * 0.75) // Approximate size in bytes

        success.value = 'Image converted successfully! You can now download your PNG file.'

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
        outputName.value = `${baseName}.png`

        // Read file
        const reader = new FileReader()

        reader.onload = async (ev) => {
            originalImage.value = ev.target.result
            success.value = 'JPG file loaded successfully! Configuring conversion options...'
            isProcessing.value = false
        }

        reader.onerror = () => {
            throw new Error('Failed to read the JPG file.')
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
        link.download = outputName.value || 'converted.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        success.value = 'PNG file downloaded successfully!'
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
    compression.value = '6'
    backgroundOption.value = 'original'
    resizeOption.value = 'original'

    // Reset file input
    const fileInput = document.querySelector('input[type="file"]')
    if (fileInput) {
        fileInput.value = ''
    }
}

// Watch for configuration changes and auto-convert
watch([compression, backgroundOption, resizeOption], () => {
    if (originalImage.value && !error.value) {
        convertImage()
    }
}, { immediate: false })

</script>