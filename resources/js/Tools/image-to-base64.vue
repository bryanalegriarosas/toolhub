<template>
    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">Image to Base64 Converter</h2>

        <!-- Upload Area -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <div v-if="!image" class="space-y-4">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <p class="text-gray-600">Drop image here or click to upload</p>
                <input 
                    type="file" 
                    @change="handleFileUpload" 
                    accept="image/*"
                    class="hidden" 
                    id="file-upload"
                />
                <label 
                    for="file-upload" 
                    class="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                    Choose Image
                </label>
            </div>
            
            <div v-else class="space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600">{{ image.name }}</span>
                    <span class="text-sm text-gray-500">{{ formatFileSize(image.size) }}</span>
                </div>
                
                <div class="flex gap-2">
                    <button 
                        @click="convertToBase64" 
                        :disabled="processing"
                        class="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                    >
                        <span v-if="processing">Converting...</span>
                        <span v-else>Convert to Base64</span>
                    </button>
                    
                    <button 
                        @click="resetImage" 
                        class="px-6 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>

        <!-- Results Section -->
        <div v-if="base64" class="space-y-6">
            <!-- Image Preview -->
            <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 text-gray-700">Image Preview</h3>
                <div class="border rounded-lg p-4 bg-white">
                    <img :src="base64" :alt="'Converted image'" class="max-w-full h-auto mx-auto max-h-96" />
                </div>
                <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <span class="text-gray-600">Format:</span>
                        <span class="font-mono ml-2">{{ imageFormat }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Original Size:</span>
                        <span class="font-mono ml-2">{{ formatFileSize(image.size) }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Base64 Size:</span>
                        <span class="font-mono ml-2">{{ formatFileSize(base64.length) }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Size Increase:</span>
                        <span class="font-mono ml-2">{{ sizeIncrease }}%</span>
                    </div>
                </div>
            </div>

            <!-- Base64 Output -->
            <div class="bg-blue-50 rounded-lg p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-blue-700">Base64 Output</h3>
                    <div class="flex gap-2">
                        <button 
                            @click="copyBase64" 
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                            {{ copied ? 'Copied!' : 'Copy' }}
                        </button>
                        <button 
                            @click="downloadBase64" 
                            class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                            Download
                        </button>
                    </div>
                </div>
                
                <div class="relative">
                    <textarea 
                        v-model="base64" 
                        readonly
                        rows="8" 
                        class="w-full px-3 py-2 border border-blue-200 rounded-lg font-mono text-xs bg-white resize-none"
                    />
                    <div class="absolute top-2 right-2 text-xs text-gray-500">
                        {{ base64.length }} characters
                    </div>
                </div>
                
                <!-- Format Options -->
                <div class="mt-4 flex items-center gap-4">
                    <label class="flex items-center space-x-2">
                        <input 
                            type="checkbox" 
                            v-model="includeDataPrefix"
                            class="rounded"
                        />
                        <span class="text-sm text-gray-700">Include data prefix</span>
                    </label>
                    
                    <label class="flex items-center space-x-2">
                        <input 
                            type="checkbox" 
                            v-model="useCleanBase64"
                            class="rounded"
                        />
                        <span class="text-sm text-gray-700">Clean Base64 (no prefix)</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {{ error }}
        </div>
        <!-- SEO Content -->
        <ToolSeoContent
            title="Image to Base64 Converter"
            description="Free online tool to convert images to Base64 strings. Supports all image formats with preview, copy functionality, and download options."
            :steps="steps"
            :examples="examples"
            :faqs="faqs"
        />

    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const examples = [
    {
        title: "Logo for CSS Embedding",
        description: "Convert logo to Base64 for CSS background",
        code: "Input: company-logo.png (5KB) | Output: Base64 string starting with 'data:image/png;base64,iVBORw0KGgoAAAANS...'",
        result: "CSS usage: background-image: url('data:image/png;base64,iVBORw0KGgoAAAANS...');"
    },
    {
        title: "Icon for HTML Email",
        description: "Convert icon to Base64 for email templates",
        code: "Input: email-icon.jpg (2KB) | Output: Base64 string for email embedding",
        result: "HTML usage: <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABA...' alt='Email Icon'>",
        steps: [
            "Upload small icon or logo",
            "Copy generated Base64 string",
            "Paste in HTML email template",
            "Test email rendering across clients"
        ]
    },
    {
        title: "Profile Picture for API",
        description: "Convert profile image to Base64 for API payload",
        code: "Input: avatar.jpg (15KB) | Output: Base64 string for JSON API",
        result: "JSON payload: { 'profile_image': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABA...' }"
    }
];

const steps = [
    'Upload your image using the file selector or drag and drop',
    'Click "Convert to Base64" to process your image',
    'View the image preview and Base64 result',
    'Copy to clipboard or download as a text file',
    'Choose format options (with/without data prefix)'
];

const faqs = [
    { 
        question: 'What is Base64 encoding?', 
        answer: 'Base64 is an encoding scheme that converts binary data into text format, making it safe to embed images directly in HTML, CSS, or JavaScript.' 
    },
    { 
        question: 'Why would I use Base64 for images?', 
        answer: 'Base64 eliminates the need for separate image files, reduces HTTP requests, and is useful for embedding small icons, logos, or images in emails.' 
    },
    { 
        question: 'What image formats are supported?', 
        answer: 'We support all major image formats including JPEG, PNG, GIF, WebP, BMP, and SVG files.' 
    },
    { 
        question: 'Is there a size limit for Base64 conversion?', 
        answer: 'While there\'s no strict limit, very large images (over 10MB) may cause browser performance issues and are not recommended for Base64 encoding.' 
    },
    { 
        question: 'What\'s the difference between clean Base64 and with prefix?', 
        answer: 'Clean Base64 contains only the encoded data, while with prefix includes "data:image/[format];base64," which is needed for direct use in HTML/CSS.' 
    },
    { 
        question: 'Is my data secure?', 
        answer: 'All conversion happens directly in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.' 
    }
];

const image = ref(null);
const base64 = ref('');
const processing = ref(false);
const error = ref('');
const copied = ref(false);
const includeDataPrefix = ref(true);
const useCleanBase64 = ref(false);
const originalBase64 = ref('');

const imageFormat = computed(() => {
    if (!image.value) return '';
    return image.value.type.split('/')[1].toUpperCase();
});

const sizeIncrease = computed(() => {
    if (!image.value || !base64.value) return 0;
    const increase = ((base64.value.length - image.value.size) / image.value.size) * 100;
    return Math.round(increase);
});

watch([includeDataPrefix, useCleanBase64], () => {
    if (originalBase64.value) {
        updateBase64Display();
    }
});

const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        error.value = 'Please select a valid image file';
        resetImage();
        return;
    }
    
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
        error.value = 'Image size must be less than 10MB for optimal performance';
        resetImage();
        return;
    }
    
    error.value = '';
    image.value = file;
    base64.value = '';
    originalBase64.value = '';
};

const convertToBase64 = () => {
    if (!image.value) return;
    
    processing.value = true;
    error.value = '';
    copied.value = false;
    
    const reader = new FileReader();
    
    reader.onload = () => {
        originalBase64.value = reader.result;
        updateBase64Display();
        processing.value = false;
    };
    
    reader.onerror = () => {
        error.value = 'Failed to convert image to Base64';
        processing.value = false;
    };
    
    reader.readAsDataURL(image.value);
};

const updateBase64Display = () => {
    if (!originalBase64.value) return;
    
    if (useCleanBase64.value) {
        // Remove data prefix
        const commaIndex = originalBase64.value.indexOf(',');
        base64.value = originalBase64.value.substring(commaIndex + 1);
    } else if (includeDataPrefix.value) {
        // Use full data URL
        base64.value = originalBase64.value;
    } else {
        // Just the Base64 part without data prefix
        const commaIndex = originalBase64.value.indexOf(',');
        base64.value = originalBase64.value.substring(commaIndex + 1);
    }
};

const copyBase64 = async () => {
    try {
        await navigator.clipboard.writeText(base64.value);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        error.value = 'Failed to copy to clipboard';
    }
};

const downloadBase64 = () => {
    if (!base64.value) return;
    
    const blob = new Blob([base64.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    const originalName = image.value ? image.value.name.split('.')[0] : 'image';
    a.download = `${originalName}-base64.txt`;
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

const resetImage = () => {
    image.value = null;
    base64.value = '';
    originalBase64.value = '';
    processing.value = false;
    error.value = '';
    copied.value = false;
    
    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
        fileInput.value = '';
    }
};

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
</script>