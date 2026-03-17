<template>
    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">Image Resizer</h2>

        <!-- Upload Area -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <div v-if="!image" class="space-y-4">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
                
                <!-- Original Dimensions Display -->
                <div v-if="originalDimensions" class="bg-gray-50 rounded-lg p-4">
                    <h3 class="text-sm font-semibold text-gray-700 mb-2">Original Dimensions</h3>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Size:</span>
                        <span class="font-mono">{{ originalDimensions.width }} × {{ originalDimensions.height }}</span>
                    </div>
                </div>
                
                <!-- Resize Controls -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Width (px)</label>
                        <input 
                            v-model="newWidth" 
                            type="number" 
                            min="1"
                            class="w-full px-3 py-2 border rounded-lg"
                            @input="handleDimensionChange('width')"
                        />
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Height (px)</label>
                        <input 
                            v-model="newHeight" 
                            type="number" 
                            min="1"
                            class="w-full px-3 py-2 border rounded-lg"
                            @input="handleDimensionChange('height')"
                        />
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Scale (%)</label>
                        <input 
                            v-model="scale" 
                            type="number" 
                            min="1" 
                            max="200"
                            step="5"
                            class="w-full px-3 py-2 border rounded-lg"
                            @input="handleScaleChange"
                        />
                    </div>
                    
                    <div class="flex items-end">
                        <label class="flex items-center space-x-2">
                            <input 
                                type="checkbox" 
                                v-model="lockAspectRatio"
                                class="rounded"
                            />
                            <span class="text-sm text-gray-700">Lock Aspect Ratio</span>
                        </label>
                    </div>
                </div>
                
                <!-- Preset Sizes -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">Quick Presets</label>
                    <div class="flex flex-wrap gap-2">
                        <button 
                            v-for="preset in presets" 
                            :key="preset.name"
                            @click="applyPreset(preset)"
                            class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors"
                        >
                            {{ preset.name }}
                        </button>
                    </div>
                </div>
                
                <!-- Format Selection -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Output Format</label>
                    <select v-model="outputFormat" class="w-full px-3 py-2 border rounded-lg">
                        <option value="image/jpeg">JPEG</option>
                        <option value="image/png">PNG</option>
                        <option value="image/webp">WebP</option>
                    </select>
                </div>
                
                <button 
                    @click="resizeImage" 
                    :disabled="processing"
                    class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                    <span v-if="processing">Processing...</span>
                    <span v-else>Resize Image</span>
                </button>
                
                <button 
                    @click="resetImage" 
                    class="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors mt-2"
                >
                    Clear All
                </button>
            </div>
        </div>

        <!-- Preview and Download -->
        <div v-if="resizedImageUrl" class="space-y-6">
            <div class="bg-blue-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 text-blue-700">Resized Image</h3>
                <div class="space-y-4">
                    <div class="flex justify-between">
                        <span class="text-gray-600">New Dimensions:</span>
                        <span class="font-mono">{{ newWidth }} × {{ newHeight }}</span>
                    </div>
                    <div v-if="resizedSize" class="flex justify-between">
                        <span class="text-gray-600">File Size:</span>
                        <span class="font-mono">{{ formatFileSize(resizedSize) }}</span>
                    </div>
                    
                    <!-- Preview -->
                    <div class="border rounded-lg p-4 bg-white">
                        <img :src="resizedImageUrl" :alt="'Resized image'" class="max-w-full h-auto mx-auto" />
                    </div>
                    
                    <!-- Download Button -->
                    <a 
                        :href="resizedImageUrl" 
                        :download="getDownloadName()"
                        class="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Download Resized Image
                    </a>
                </div>
            </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {{ error }}
        </div>
        <!-- SEO Content -->
        <ToolSeoContent
            title="Image Resizer"
            description="Free online image resizer tool. Resize images to custom dimensions, use presets, maintain aspect ratio, and convert between formats. Perfect for web optimization."
            :steps="steps"
            :faqs="faqs"
        />

    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    'Upload your image using the file selector or drag and drop',
    'Set new dimensions manually or use preset sizes',
    'Enable aspect ratio lock to maintain proportions',
    'Choose output format (JPEG, PNG, or WebP)',
    'Click "Resize Image" and download your resized image'
];

const faqs = [
    { 
        question: 'What image formats are supported?', 
        answer: 'We support all major image formats including JPEG, PNG, GIF, WebP, BMP, and SVG files for input.' 
    },
    { 
        question: 'What does "Lock Aspect Ratio" do?', 
        answer: 'When enabled, changing one dimension automatically adjusts the other to maintain the original image proportions.' 
    },
    { 
        question: 'What are the preset sizes for?', 
        answer: 'Presets provide common dimensions for social media, web headers, thumbnails, and other standard use cases.' 
    },
    { 
        question: 'Can I resize multiple images at once?', 
        answer: 'Currently, this tool processes one image at a time to ensure quality control and precise dimension settings.' 
    },
    { 
        question: 'Is my data secure?', 
        answer: 'All image processing happens directly in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.' 
    }
];

const image = ref(null);
const originalDimensions = ref(null);
const newWidth = ref(800);
const newHeight = ref(600);
const scale = ref(100);
const lockAspectRatio = ref(true);
const outputFormat = ref('image/jpeg');
const processing = ref(false);
const error = ref('');
const resizedImageUrl = ref('');
const resizedSize = ref(0);

const presets = [
    { name: 'Instagram Square', width: 1080, height: 1080 },
    { name: 'Instagram Story', width: 1080, height: 1920 },
    { name: 'Facebook Cover', width: 1200, height: 630 },
    { name: 'Twitter Header', width: 1500, height: 500 },
    { name: 'YouTube Thumbnail', width: 1280, height: 720 },
    { name: 'Web Banner', width: 1920, height: 1080 },
    { name: 'Thumbnail', width: 300, height: 300 },
    { name: 'Small', width: 150, height: 150 }
];

const aspectRatio = computed(() => {
    if (!originalDimensions.value) return 1;
    return originalDimensions.value.width / originalDimensions.value.height;
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
        error.value = 'Image size must be less than 10MB';
        resetImage();
        return;
    }
    
    error.value = '';
    image.value = file;
    
    const img = new Image();
    img.onload = () => {
        originalDimensions.value = {
            width: img.width,
            height: img.height
        };
        newWidth.value = img.width;
        newHeight.value = img.height;
        scale.value = 100;
        URL.revokeObjectURL(img.src);
    };
    img.onerror = () => {
        error.value = 'Failed to load image. Please try another file.';
        resetImage();
    };
    img.src = URL.createObjectURL(file);
};

const handleDimensionChange = (dimension) => {
    if (!lockAspectRatio.value || !originalDimensions.value) return;
    
    if (dimension === 'width') {
        newHeight.value = Math.round(newWidth.value / aspectRatio.value);
    } else {
        newWidth.value = Math.round(newHeight.value * aspectRatio.value);
    }
    
    updateScale();
};

const handleScaleChange = () => {
    if (!originalDimensions.value) return;
    
    newWidth.value = Math.round(originalDimensions.value.width * (scale.value / 100));
    newHeight.value = Math.round(originalDimensions.value.height * (scale.value / 100));
};

const updateScale = () => {
    if (!originalDimensions.value) return;
    
    const widthScale = (newWidth.value / originalDimensions.value.width) * 100;
    const heightScale = (newHeight.value / originalDimensions.value.height) * 100;
    scale.value = Math.round((widthScale + heightScale) / 2);
};

const applyPreset = (preset) => {
    newWidth.value = preset.width;
    newHeight.value = preset.height;
    
    if (lockAspectRatio.value) {
        updateScale();
    }
};

const resizeImage = async () => {
    if (!image.value || !originalDimensions.value) return;
    
    processing.value = true;
    error.value = '';
    
    try {
        const resizedImage = await createResizedImage();
        resizedImageUrl.value = resizedImage.dataUrl;
        resizedSize.value = resizedImage.size;
    } catch (err) {
        console.error('Resize error:', err);
        error.value = `Failed to resize image: ${err.message || 'Please try again.'}`;
    } finally {
        processing.value = false;
    }
};

const createResizedImage = () => {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = () => {
            try {
                canvas.width = newWidth.value;
                canvas.height = newHeight.value;
                
                ctx.drawImage(img, 0, 0, newWidth.value, newHeight.value);
                
                canvas.toBlob((blob) => {
                    if (!blob) {
                        reject(new Error('Failed to create blob'));
                        return;
                    }
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve({
                            dataUrl: reader.result,
                            size: blob.size
                        });
                    };
                    reader.onerror = () => reject(new Error('Failed to read blob'));
                    reader.readAsDataURL(blob);
                }, outputFormat.value, 0.9);
            } catch (error) {
                reject(error);
            }
        };
        
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = URL.createObjectURL(image.value);
    });
};

const resetImage = () => {
    image.value = null;
    resizedImageUrl.value = '';
    resizedSize.value = 0;
    originalDimensions.value = null;
    newWidth.value = 800;
    newHeight.value = 600;
    scale.value = 100;
    error.value = '';
    processing.value = false;
    
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

const getDownloadName = () => {
    if (!image.value) return 'resized-image';
    const originalName = image.value.name.split('.')[0];
    const extension = outputFormat.value.split('/')[1];
    return `${originalName}-resized.${extension}`;
};
</script>