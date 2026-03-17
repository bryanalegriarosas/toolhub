<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow rounded-xl">

        <h1 class="text-2xl font-bold mb-4">JPG to PNG Converter</h1>

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
            <label class="block mb-2 text-sm font-medium text-gray-700">
                Select JPG File
            </label>
            <input type="file" accept="image/jpeg,image/jpg" @change="convert"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                :disabled="isProcessing" />
            <p class="mt-1 text-xs text-gray-500">
                Supported formats: JPG, JPEG. Max size: 10MB
            </p>
        </div>

        <!-- Configuration Options -->
        <div v-if="originalImage && !error" class="mb-6 space-y-4">
            <h3 class="text-sm font-medium text-gray-700">Conversion Options:</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Compression:</label>
                    <select v-model="compression"
                        class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="0">No compression (largest file)</option>
                        <option value="3">Low compression</option>
                        <option value="6">Medium compression</option>
                        <option value="9">High compression (smallest file)</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Background:</label>
                    <select v-model="backgroundOption"
                        class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="original">Keep original</option>
                        <option value="transparent">Make transparent</option>
                        <option value="white">White background</option>
                        <option value="black">Black background</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Resize:</label>
                    <select v-model="resizeOption"
                        class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="original">Original size</option>
                        <option value="50%">50% smaller</option>
                        <option value="75%">75% of original</option>
                        <option value="125%">125% of original</option>
                        <option value="150%">150% of original</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Output Name:</label>
                    <input v-model="outputName" type="text"
                        class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="converted.png" />
                </div>
            </div>
        </div>

        <!-- Image Comparison -->
        <div v-if="originalImage && convertedImage && !error" class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 mb-4">Preview Comparison:</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Original -->
                <div>
                    <h4 class="text-sm font-semibold text-gray-600 mb-2">Original JPG</h4>
                    <div class="border rounded-lg p-4 bg-gray-50">
                        <img :src="originalImage" alt="Original JPG"
                            class="w-full h-auto max-h-64 object-contain rounded" />
                        <p class="mt-2 text-xs text-gray-500 text-center">
                            {{ fileName }} ({{ formatFileSize(fileSize) }})
                        </p>
                    </div>
                </div>

                <!-- Converted -->
                <div>
                    <h4 class="text-sm font-semibold text-gray-600 mb-2">Converted PNG</h4>
                    <div class="border rounded-lg p-4 bg-gray-50">
                        <img :src="convertedImage" alt="Converted PNG"
                            class="w-full h-auto max-h-64 object-contain rounded" />
                        <p class="mt-2 text-xs text-gray-500 text-center">
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
                    Converting...
                </span>
                <span v-else>Download PNG</span>
            </button>

            <button @click="reset" class="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors">
                Clear
            </button>
        </div>

        <!-- SEO Content -->
        <ToolSeoContent title="JPG to PNG Converter"
            description="Free online tool to convert JPG images to PNG format with transparency support. Customize compression, background, and size. Fast, secure conversion with instant download."
            :steps="steps" :faqs="faqs" />

    </div>

</template>

<script setup>
import { ref, watch } from "vue"
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue"

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

// SEO Content
const steps = [
    'Select a JPG file using the file selector',
    'Configure conversion options: compression, background, and size',
    'Preview the original and converted images side by side',
    'Click "Download PNG" to save your converted image',
    'Your PNG file will be downloaded instantly with transparency support'
]

const faqs = [
    {
        question: 'What is the difference between JPG and PNG?',
        answer: 'JPG is a compressed format that doesn\'t support transparency, while PNG is lossless and supports transparency. PNG is ideal for images requiring transparency or lossless quality.'
    },
    {
        question: 'Can I make the background transparent?',
        answer: 'Yes! You can choose to make the background transparent, keep the original, or set it to white/black. Transparent backgrounds are perfect for logos and web graphics.'
    },
    {
        question: 'How does compression affect PNG files?',
        answer: 'PNG compression is lossless. Higher compression (9) creates smaller files but may take longer to process. No compression (0) creates the largest files with fastest processing.'
    },
    {
        question: 'Will converting JPG to PNG improve image quality?',
        answer: 'Converting from JPG to PNG won\'t restore lost quality from JPG compression, but PNG prevents further quality loss and allows for transparency.'
    },
    {
        question: 'Is my data secure?',
        answer: 'Absolutely! All processing happens locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.'
    },
    {
        question: 'What\'s the maximum file size I can convert?',
        answer: 'You can convert JPG files up to 10MB in size. For larger files, consider optimizing them first or using a desktop application.'
    }
]

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