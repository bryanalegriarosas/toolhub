<template>
    <Head>
        <meta name="description" content="Crop images online with interactive selection, aspect ratios, and preset sizes." />
    </Head>

    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">Image Cropper</h2>

        <!-- Upload Area -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <div v-if="!image" class="space-y-4">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
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
                        @click="resetImage" 
                        class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Clear Image
                    </button>
                </div>
            </div>
        </div>

        <!-- Cropping Interface -->
        <div v-if="image" class="space-y-6">
            <!-- Crop Controls -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Width (px)</label>
                    <input 
                        v-model="cropWidth" 
                        type="number" 
                        min="1"
                        :max="originalDimensions.width"
                        class="w-full px-3 py-2 border rounded-lg"
                        @input="updateCropArea"
                    />
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Height (px)</label>
                    <input 
                        v-model="cropHeight" 
                        type="number" 
                        min="1"
                        :max="originalDimensions.height"
                        class="w-full px-3 py-2 border rounded-lg"
                        @input="updateCropArea"
                    />
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">X Position</label>
                    <input 
                        v-model="cropX" 
                        type="number" 
                        min="0"
                        :max="originalDimensions.width - cropWidth"
                        class="w-full px-3 py-2 border rounded-lg"
                        @input="updateCropArea"
                    />
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Y Position</label>
                    <input 
                        v-model="cropY" 
                        type="number" 
                        min="0"
                        :max="originalDimensions.height - cropHeight"
                        class="w-full px-3 py-2 border rounded-lg"
                        @input="updateCropArea"
                    />
                </div>
            </div>
            
            <!-- Aspect Ratio & Presets -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Aspect Ratio</label>
                    <select v-model="aspectRatio" @change="applyAspectRatio" class="w-full px-3 py-2 border rounded-lg">
                        <option value="free">Free</option>
                        <option value="1:1">Square (1:1)</option>
                        <option value="16:9">Widescreen (16:9)</option>
                        <option value="4:3">Standard (4:3)</option>
                        <option value="3:2">Photo (3:2)</option>
                        <option value="9:16">Portrait (9:16)</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Quick Presets</label>
                    <select v-model="selectedPreset" @change="applyPreset" class="w-full px-3 py-2 border rounded-lg">
                        <option value="">Custom</option>
                        <option value="instagram">Instagram Square (1080×1080)</option>
                        <option value="instagram-story">Instagram Story (1080×1920)</option>
                        <option value="facebook">Facebook Cover (1200×630)</option>
                        <option value="twitter">Twitter Header (1500×500)</option>
                        <option value="youtube">YouTube Thumbnail (1280×720)</option>
                        <option value="thumbnail">Thumbnail (300×300)</option>
                    </select>
                </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-4">
                <button 
                    @click="centerCrop" 
                    class="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Center Crop
                </button>
                
                <button 
                    @click="performCrop" 
                    :disabled="processing"
                    class="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                    <span v-if="processing">Processing...</span>
                    <span v-else>Crop Image</span>
                </button>
            </div>
        </div>

        <!-- Canvas and Preview -->
        <div v-if="image" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Original with Crop Overlay -->
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-gray-700">Original Image</h3>
                <div class="relative border rounded-lg overflow-hidden bg-gray-50">
                    <canvas 
                        ref="canvas" 
                        class="max-w-full h-auto"
                    />
                    <!-- Crop Overlay -->
                    <div 
                        class="absolute border-2 border-red-500 bg-red-500 bg-opacity-20"
                        :style="cropOverlayStyle"
                    >
                        <!-- Corner Handles -->
                        <div class="absolute w-3 h-3 bg-red-600 border-2 border-white -top-1 -left-1"></div>
                        <div class="absolute w-3 h-3 bg-red-600 border-2 border-white -top-1 -right-1"></div>
                        <div class="absolute w-3 h-3 bg-red-600 border-2 border-white -bottom-1 -left-1"></div>
                        <div class="absolute w-3 h-3 bg-red-600 border-2 border-white -bottom-1 -right-1"></div>
                    </div>
                </div>
                <div class="text-sm text-gray-600">
                    Original: {{ originalDimensions.width }} × {{ originalDimensions.height }}
                </div>
            </div>
            
            <!-- Cropped Result -->
            <div v-if="croppedImage" class="space-y-4">
                <h3 class="text-lg font-semibold text-gray-700">Cropped Result</h3>
                <div class="border rounded-lg overflow-hidden bg-gray-50">
                    <img :src="croppedImage" class="max-w-full h-auto" />
                </div>
                <div class="text-sm text-gray-600">
                    Cropped: {{ cropWidth }} × {{ cropHeight }}
                </div>
                
                <!-- Download Button -->
                <a 
                    :href="croppedImage" 
                    :download="getCroppedImageName()"
                    class="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Download Cropped Image
                </a>
            </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {{ error }}
        </div>
        <!-- SEO Content -->
        <ToolSeoContent
            title="Image Cropper"
            description="Free online image cropping tool with interactive selection, aspect ratios, preset sizes, and download options. Perfect for social media and web optimization."
            :steps="steps"
            :faqs="faqs"
        />

    </div>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    'Upload your image using the file selector or drag and drop',
    'Set crop dimensions manually or use aspect ratios and presets',
    'Adjust position (X, Y) or use center crop for perfect alignment',
    'Preview the crop area with visual overlay',
    'Click "Crop Image" and download your cropped image'
];

const faqs = [
    { 
        question: 'What image formats are supported?', 
        answer: 'We support all major image formats including JPEG, PNG, GIF, WebP, BMP, and SVG files for input.' 
    },
    { 
        question: 'Can I crop to custom dimensions?', 
        answer: 'Yes! You can set custom width and height, or choose from preset aspect ratios like 1:1, 16:9, 4:3, etc.' 
    },
    { 
        question: 'What are the preset sizes for?', 
        answer: 'Presets provide common dimensions for social media platforms like Instagram, Facebook, Twitter, YouTube, and more.' 
    },
    { 
        question: 'How does the crop overlay work?', 
        answer: 'The blue overlay shows exactly which part of the image will be cropped. You can adjust dimensions and position to see real-time preview.' 
    },
    { 
        question: 'Can I download the cropped image?', 
        answer: 'Yes! Once cropped, you can download the image in the same format as the original with just one click.' 
    },
    { 
        question: 'Is my data secure?', 
        answer: 'All cropping happens directly in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.' 
    }
];

const image = ref(null);
const canvas = ref(null);
const originalDimensions = ref({ width: 0, height: 0 });
const cropWidth = ref(200);
const cropHeight = ref(200);
const cropX = ref(0);
const cropY = ref(0);
const aspectRatio = ref('free');
const selectedPreset = ref('');
const processing = ref(false);
const error = ref('');
const croppedImage = ref('');

const presets = {
    'instagram': { width: 1080, height: 1080, ratio: '1:1' },
    'instagram-story': { width: 1080, height: 1920, ratio: '9:16' },
    'facebook': { width: 1200, height: 630, ratio: '16:9' },
    'twitter': { width: 1500, height: 500, ratio: '3:1' },
    'youtube': { width: 1280, height: 720, ratio: '16:9' },
    'thumbnail': { width: 300, height: 300, ratio: '1:1' }
};

const cropOverlayStyle = computed(() => {
    if (!canvas.value) return {};
    
    const canvasRect = canvas.value.getBoundingClientRect();
    const scaleX = canvasRect.width / originalDimensions.value.width;
    const scaleY = canvasRect.height / originalDimensions.value.height;
    
    return {
        left: `${cropX.value * scaleX}px`,
        top: `${cropY.value * scaleY}px`,
        width: `${cropWidth.value * scaleX}px`,
        height: `${cropHeight.value * scaleY}px`
    };
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
    loadImageToCanvas(file);
};

const loadImageToCanvas = (file) => {
    const reader = new FileReader();
    const img = new Image();
    
    reader.onload = () => {
        img.src = reader.result;
        
        img.onload = () => {
            originalDimensions.value = {
                width: img.width,
                height: img.height
            };
            
            // Set initial crop dimensions (center 200x200 or smaller if image is smaller)
            const maxSize = Math.min(img.width, img.height, 200);
            cropWidth.value = maxSize;
            cropHeight.value = maxSize;
            cropX.value = Math.floor((img.width - maxSize) / 2);
            cropY.value = Math.floor((img.height - maxSize) / 2);
            
            drawImageToCanvas(img);
        };
        
        img.onerror = () => {
            error.value = 'Failed to load image. Please try another file.';
            resetImage();
        };
    };
    
    reader.readAsDataURL(file);
};

const drawImageToCanvas = (img) => {
    if (!canvas.value) return;
    
    const ctx = canvas.value.getContext('2d');
    canvas.value.width = img.width;
    canvas.value.height = img.height;
    ctx.drawImage(img, 0, 0);
};

const updateCropArea = () => {
    // Validate crop dimensions
    cropWidth.value = Math.min(Math.max(1, cropWidth.value), originalDimensions.value.width - cropX.value);
    cropHeight.value = Math.min(Math.max(1, cropHeight.value), originalDimensions.value.height - cropY.value);
    cropX.value = Math.min(Math.max(0, cropX.value), originalDimensions.value.width - cropWidth.value);
    cropY.value = Math.min(Math.max(0, cropY.value), originalDimensions.value.height - cropHeight.value);
};

const applyAspectRatio = () => {
    if (aspectRatio.value === 'free') return;
    
    const [w, h] = aspectRatio.value.split(':').map(Number);
    const currentRatio = cropWidth.value / cropHeight.value;
    const targetRatio = w / h;
    
    if (currentRatio > targetRatio) {
        cropWidth.value = Math.round(cropHeight.value * targetRatio);
    } else {
        cropHeight.value = Math.round(cropWidth.value / targetRatio);
    }
    
    updateCropArea();
};

const applyPreset = () => {
    if (!selectedPreset.value) return;
    
    const preset = presets[selectedPreset.value];
    cropWidth.value = preset.width;
    cropHeight.value = preset.height;
    aspectRatio.value = preset.ratio;
    
    // Center the crop area
    cropX.value = Math.floor((originalDimensions.value.width - preset.width) / 2);
    cropY.value = Math.floor((originalDimensions.value.height - preset.height) / 2);
    
    updateCropArea();
};

const centerCrop = () => {
    cropX.value = Math.floor((originalDimensions.value.width - cropWidth.value) / 2);
    cropY.value = Math.floor((originalDimensions.value.height - cropHeight.value) / 2);
    updateCropArea();
};

const performCrop = async () => {
    if (!canvas.value) return;
    
    processing.value = true;
    error.value = '';
    
    try {
        const sourceCanvas = canvas.value;
        const sourceCtx = sourceCanvas.getContext('2d');
        
        // Get the image data from the crop area
        const imageData = sourceCtx.getImageData(
            cropX.value, 
            cropY.value, 
            cropWidth.value, 
            cropHeight.value
        );
        
        // Create a new canvas for the cropped image
        const cropCanvas = document.createElement('canvas');
        const cropCtx = cropCanvas.getContext('2d');
        cropCanvas.width = cropWidth.value;
        cropCanvas.height = cropHeight.value;
        
        // Put the cropped image data
        cropCtx.putImageData(imageData, 0, 0);
        
        // Convert to blob then to data URL
        const blob = await new Promise((resolve) => {
            cropCanvas.toBlob(resolve, 'image/png', 0.9);
        });
        
        croppedImage.value = URL.createObjectURL(blob);
        processing.value = false;
    } catch (err) {
        error.value = 'Failed to crop image. Please try again.';
        processing.value = false;
    }
};

const getCroppedImageName = () => {
    if (!image.value) return 'cropped-image.png';
    const originalName = image.value.name.split('.')[0];
    return `${originalName}-cropped.png`;
};

const resetImage = () => {
    image.value = null;
    croppedImage.value = '';
    originalDimensions.value = { width: 0, height: 0 };
    cropWidth.value = 200;
    cropHeight.value = 200;
    cropX.value = 0;
    cropY.value = 0;
    aspectRatio.value = 'free';
    selectedPreset.value = '';
    processing.value = false;
    error.value = '';
    
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