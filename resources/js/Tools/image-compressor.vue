<template>
    <Head>
        <meta name="description" content="Compress and optimize images online with quality control and format conversion." />
    </Head>

    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">Image Compressor</h2>

        <!-- Upload Area -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <div v-if="!image" class="space-y-4">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-8 0 4 4 0 018 8zm0 0c0 1.657 1.343 3 3 3 0 016-6 0-6z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a3 3 0 11-6 0 3 3 0 016 6z" />
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
                
                <!-- Compression Controls -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Quality</label>
                        <input 
                            v-model="quality" 
                            type="range" 
                            min="10" 
                            max="100" 
                            step="5"
                            class="w-full"
                        />
                        <div class="text-center text-sm text-gray-600">{{ quality }}%</div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Format</label>
                        <select v-model="outputFormat" class="w-full px-3 py-2 border rounded-lg">
                            <option value="image/jpeg">JPEG</option>
                            <option value="image/png">PNG</option>
                            <option value="image/webp">WebP</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Max Width (px)</label>
                        <input 
                            v-model="maxWidth" 
                            type="number" 
                            placeholder="No limit"
                            min="1"
                            class="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                </div>
                
                <button 
                    @click="compressImage" 
                    :disabled="processing"
                    class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                    <span v-if="processing">Processing...</span>
                    <span v-else>Compress Image</span>
                </button>
                
                <button 
                    @click="resetImage" 
                    class="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors mt-2"
                >
                    Clear All
                </button>
            </div>
        </div>

        <!-- Results -->
        <div v-if="originalSize && compressedSize" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 text-gray-700">Original</h3>
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span class="text-gray-600">Size:</span>
                        <span class="font-mono">{{ formatFileSize(originalSize) }}</span>
                    </div>
                    <div v-if="originalDimensions" class="flex justify-between">
                        <span class="text-gray-600">Dimensions:</span>
                        <span class="font-mono">{{ originalDimensions.width }} × {{ originalDimensions.height }}</span>
                    </div>
                </div>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 text-blue-700">Compressed</h3>
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span class="text-gray-600">Size:</span>
                        <span class="font-mono">{{ formatFileSize(compressedSize) }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Savings:</span>
                        <span class="font-mono text-green-600">{{ compressionRatio }}%</span>
                    </div>
                    <div v-if="compressedDimensions" class="flex justify-between">
                        <span class="text-gray-600">Dimensions:</span>
                        <span class="font-mono">{{ compressedDimensions.width }} × {{ compressedDimensions.height }}</span>
                    </div>
                </div>
                
                <!-- Download Button -->
                <a 
                    :href="compressedImageUrl" 
                    :download="getDownloadName()"
                    class="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4"
                >
                    Download Compressed Image
                </a>
            </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {{ error }}
        </div>

        <!-- SEO Content -->
        <ToolSeoContent
            title="Image Compressor"
            description="Free online image compressor tool that reduces image file size while maintaining quality. Compress JPG, PNG, and WebP images with adjustable quality settings and format conversion."
            :steps="steps"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    'Upload your image using the file selector or drag and drop',
    'Adjust compression quality (10-100%) and output format (JPEG, PNG, WebP)',
    'Set maximum width to resize images if needed',
    'Click "Compress Image" to process your image',
    'Download the compressed image with reduced file size'
];

const faqs = [
    { 
        question: 'What image formats are supported?', 
        answer: 'We support all major image formats including JPEG, PNG, GIF, WebP, BMP, and SVG files.' 
    },
    { 
        question: 'How does image compression work?', 
        answer: 'Image compression reduces file size by removing unnecessary data and optimizing how the image is stored. Quality settings control the balance between file size and image quality.' 
    },
    { 
        question: 'What is the difference between JPEG and PNG?', 
        answer: 'JPEG uses lossy compression for smaller file sizes, while PNG uses lossless compression for perfect quality. Use JPEG for photos and PNG for graphics with text.' 
    },
    { 
        question: 'Can I resize images while compressing?', 
        answer: 'Yes! You can set a maximum width and the tool will automatically maintain the aspect ratio while resizing.' 
    },
    { 
        question: 'Is my data secure?', 
        answer: 'All image processing happens directly in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.' 
    }
];

const image = ref(null);
const quality = ref(80);
const outputFormat = ref('image/jpeg');
const maxWidth = ref(null);
const processing = ref(false);
const error = ref('');
const originalSize = ref(0);
const compressedSize = ref(0);
const originalDimensions = ref(null);
const compressedDimensions = ref(null);
const compressedImageUrl = ref('');

const compressionRatio = computed(() => {
    if (!originalSize.value || !compressedSize.value) return 0;
    const savings = originalSize.value - compressedSize.value;
    return Math.round((savings / originalSize.value) * 100);
});

const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        error.value = 'Please select a valid image file';
        resetImage();
        return;
    }
    
    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
        error.value = 'Image size must be less than 10MB';
        resetImage();
        return;
    }
    
    error.value = '';
    image.value = file;
    originalSize.value = file.size;
    
    // Get original dimensions
    const img = new Image();
    img.onload = () => {
        originalDimensions.value = {
            width: img.width,
            height: img.height
        };
        URL.revokeObjectURL(img.src); // Clean up
    };
    img.onerror = () => {
        error.value = 'Failed to load image. Please try another file.';
        resetImage();
    };
    img.src = URL.createObjectURL(file);
};

const compressImage = async () => {
    if (!image.value) return;
    
    processing.value = true;
    error.value = '';
    
    try {
        const compressedImage = await createCompressedImage();
        compressedImageUrl.value = compressedImage.dataUrl;
        compressedSize.value = compressedImage.size;
        compressedDimensions.value = compressedImage.dimensions;
    } catch (err) {
        console.error('Compression error:', err);
        error.value = `Failed to compress image: ${err.message || 'Please try again.'}`;
    } finally {
        processing.value = false;
    }
};

const createCompressedImage = () => {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = () => {
            try {
                // Calculate new dimensions
                let { width, height } = calculateNewDimensions(img.width, img.height);
                
                canvas.width = width;
                canvas.height = height;
                
                // Draw and compress
                ctx.drawImage(img, 0, 0, width, height);
                
                canvas.toBlob((blob) => {
                    if (!blob) {
                        reject(new Error('Failed to create blob'));
                        return;
                    }
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve({
                            dataUrl: reader.result,
                            size: blob.size,
                            dimensions: { width, height }
                        });
                    };
                    reader.onerror = () => reject(new Error('Failed to read blob'));
                    reader.readAsDataURL(blob);
                }, outputFormat.value, quality.value / 100);
            } catch (error) {
                reject(error);
            }
        };
        
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = URL.createObjectURL(image.value);
    });
};

const calculateNewDimensions = (originalWidth, originalHeight) => {
    let width = originalWidth;
    let height = originalHeight;
    
    if (maxWidth.value && width > maxWidth.value) {
        const ratio = maxWidth.value / width;
        width = maxWidth.value;
        height = Math.round(originalHeight * ratio);
    }
    
    return { width, height };
};

const resetImage = () => {
    image.value = null;
    compressedImageUrl.value = '';
    originalSize.value = 0;
    compressedSize.value = 0;
    originalDimensions.value = null;
    compressedDimensions.value = null;
    error.value = '';
    processing.value = false;
    
    // Reset file input
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
    if (!image.value) return 'compressed-image';
    const originalName = image.value.name.split('.')[0];
    const extension = outputFormat.value.split('/')[1];
    return `${originalName}-compressed.${extension}`;
};
</script>