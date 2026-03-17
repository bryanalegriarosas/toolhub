<template>
    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">Base64 to Image Converter</h2>

        <!-- Input Section -->
        <div class="space-y-4">
            <div class="flex justify-between items-center">
                <label class="block text-sm font-medium text-gray-700">Base64 Input</label>
                <div class="flex gap-2">
                    <button 
                        @click="pasteFromClipboard" 
                        class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors"
                    >
                        Paste
                    </button>
                    <button 
                        @click="clearInput" 
                        class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors"
                    >
                        Clear
                    </button>
                    <button 
                        @click="loadSample" 
                        class="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-sm transition-colors"
                    >
                        Load Sample
                    </button>
                </div>
            </div>
            
            <div class="relative">
                <textarea 
                    v-model="base64" 
                    rows="8" 
                    placeholder="Paste your Base64 string here..."
                    class="w-full px-3 py-2 border rounded-lg font-mono text-sm resize-none"
                    @input="validateBase64"
                />
                <div class="absolute top-2 right-2 text-xs text-gray-500">
                    {{ base64.length }} characters
                </div>
            </div>
            
            <!-- Format Detection -->
            <div v-if="detectedFormat" class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div class="flex justify-between items-center">
                    <span class="text-sm text-blue-700">
                        <strong>Detected Format:</strong> {{ detectedFormat }}
                    </span>
                    <span v-if="isValidBase64" class="text-sm text-green-600">
                        ✓ Valid Base64
                    </span>
                    <span v-else class="text-sm text-red-600">
                        ✗ Invalid Base64
                    </span>
                </div>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4">
            <button 
                @click="generateImage" 
                :disabled="!isValidBase64 || processing"
                class="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
                <span v-if="processing">Generating...</span>
                <span v-else>Generate Image</span>
            </button>
            
            <button 
                @click="resetAll" 
                class="px-6 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
                Reset All
            </button>
        </div>

        <!-- Results Section -->
        <div v-if="generatedImage" class="space-y-6">
            <!-- Image Preview -->
            <div class="bg-gray-50 rounded-lg p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-gray-700">Generated Image</h3>
                    <div class="flex gap-2">
                        <button 
                            @click="copyImageUrl" 
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                            {{ copied ? 'Copied!' : 'Copy URL' }}
                        </button>
                        <button 
                            @click="downloadImage" 
                            class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                            Download
                        </button>
                    </div>
                </div>
                
                <div class="border rounded-lg p-4 bg-white">
                    <img 
                        :src="generatedImage" 
                        :alt="'Generated image'" 
                        class="max-w-full h-auto mx-auto"
                        @load="onImageLoad"
                        @error="onImageError"
                    />
                </div>
                
                <!-- Image Info -->
                <div v-if="imageInfo" class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <span class="text-gray-600">Format:</span>
                        <span class="font-mono ml-2">{{ imageInfo.format }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Dimensions:</span>
                        <span class="font-mono ml-2">{{ imageInfo.width }} × {{ imageInfo.height }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Base64 Size:</span>
                        <span class="font-mono ml-2">{{ formatFileSize(base64.length) }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Est. Image Size:</span>
                        <span class="font-mono ml-2">{{ formatFileSize(imageInfo.size) }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {{ error }}
        </div>
        <!-- SEO Content -->
        <ToolSeoContent
            title="Base64 to Image Converter"
            description="Free online tool to convert Base64 strings back to images. Supports all image formats with validation, preview, and download options."
            :steps="steps"
            :faqs="faqs"
        />

    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    'Paste your Base64 string or load a sample',
    'The tool will automatically detect the image format',
    'Click "Generate Image" to convert Base64 to image',
    'Preview the generated image and download it',
    'Copy the image URL or reset to start over'
];

const faqs = [
    { 
        question: 'What Base64 formats are supported?', 
        answer: 'We support all Base64 image formats including data URLs (data:image/...;base64,) and clean Base64 strings for JPEG, PNG, GIF, WebP, BMP, and SVG.' 
    },
    { 
        question: 'How do I know if my Base64 is valid?', 
        answer: 'The tool automatically validates your Base64 input and shows the detected format. You\'ll see a green checkmark for valid Base64 and format information.' 
    },
    { 
        question: 'What if my Base64 doesn\'t have a data prefix?', 
        answer: 'The tool can handle both formats - with or without the data:image prefix. It will automatically detect the image type from the Base64 data.' 
    },
    { 
        question: 'Can I download the generated image?', 
        answer: 'Yes! Once the image is generated, you can download it in the detected format (JPEG, PNG, etc.) with just one click.' 
    },
    { 
        question: 'Is there a size limit for Base64 input?', 
        answer: 'While there\'s no strict limit, very large Base64 strings (over 50MB) may cause browser performance issues and are not recommended.' 
    },
    { 
        question: 'Is my data secure?', 
        answer: 'All conversion happens directly in your browser. Your Base64 strings are never uploaded to our servers, ensuring complete privacy and security.' 
    }
];

const base64 = ref('');
const generatedImage = ref('');
const processing = ref(false);
const error = ref('');
const copied = ref(false);
const imageInfo = ref(null);

// Sample Base64 for testing (small 1x1 pixel red dot)
const sampleBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';

const detectedFormat = computed(() => {
    if (!base64.value.trim()) return null;
    
    // Check for data URL format
    const dataUrlMatch = base64.value.match(/^data:(image\/[\w+-]+);base64,/i);
    if (dataUrlMatch) {
        return dataUrlMatch[1].split('/')[1].toUpperCase();
    }
    
    // Try to detect from clean Base64
    if (isValidBase64.value) {
        // Common image signatures in Base64
        const signatures = {
            '/9j/': 'JPEG',
            'iVBORw0': 'PNG',
            'R0lGOD': 'GIF',
            'UklGR': 'WebP',
            'Qk32': 'BMP'
        };
        
        for (const [signature, format] of Object.entries(signatures)) {
            if (base64.value.startsWith(signature)) {
                return format;
            }
        }
    }
    
    return 'Unknown';
});

const isValidBase64 = computed(() => {
    if (!base64.value.trim()) return false;
    
    try {
        const cleanBase64 = getCleanBase64(base64.value);
        // Check if it's valid Base64
        return btoa(atob(cleanBase64)) === cleanBase64;
    } catch {
        return false;
    }
});

const getCleanBase64 = (input) => {
    // Remove data URL prefix if present
    const commaIndex = input.indexOf(',');
    if (commaIndex !== -1) {
        return input.substring(commaIndex + 1);
    }
    return input;
};

const validateBase64 = () => {
    error.value = '';
};

const pasteFromClipboard = async () => {
    try {
        const text = await navigator.clipboard.readText();
        base64.value = text;
        validateBase64();
    } catch (err) {
        error.value = 'Failed to paste from clipboard';
    }
};

const clearInput = () => {
    base64.value = '';
    error.value = '';
};

const loadSample = () => {
    base64.value = `data:image/png;base64,${sampleBase64}`;
    error.value = '';
};

const generateImage = () => {
    if (!isValidBase64.value) {
        error.value = 'Please enter valid Base64 data';
        return;
    }
    
    processing.value = true;
    error.value = '';
    imageInfo.value = null;
    
    try {
        let imageSource = base64.value;
        
        // If it's clean Base64, add data prefix
        if (!base64.value.startsWith('data:')) {
            const format = detectedFormat.value.toLowerCase();
            if (format !== 'Unknown') {
                imageSource = `data:image/${format};base64,${base64.value}`;
            } else {
                // Default to PNG if format is unknown
                imageSource = `data:image/png;base64,${base64.value}`;
            }
        }
        
        generatedImage.value = imageSource;
        processing.value = false;
    } catch (err) {
        error.value = 'Failed to generate image. Please check your Base64 input.';
        processing.value = false;
    }
};

const onImageLoad = (event) => {
    const img = event.target;
    imageInfo.value = {
        format: detectedFormat.value,
        width: img.naturalWidth,
        height: img.naturalHeight,
        size: Math.round(base64.value.length * 0.75) // Estimated decoded size
    };
};

const onImageError = () => {
    error.value = 'Failed to load image. The Base64 data may be corrupted.';
    generatedImage.value = '';
};

const copyImageUrl = async () => {
    try {
        await navigator.clipboard.writeText(generatedImage.value);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        error.value = 'Failed to copy image URL';
    }
};

const downloadImage = () => {
    if (!generatedImage.value) return;
    
    try {
        const link = document.createElement('a');
        link.href = generatedImage.value;
        link.download = `generated-image.${detectedFormat.value.toLowerCase()}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (err) {
        error.value = 'Failed to download image';
    }
};

const resetAll = () => {
    base64.value = '';
    generatedImage.value = '';
    processing.value = false;
    error.value = '';
    copied.value = false;
    imageInfo.value = null;
};

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
</script>