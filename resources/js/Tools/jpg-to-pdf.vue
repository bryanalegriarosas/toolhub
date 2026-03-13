<template>
    <Head>
        <meta name="description" content="Convert JPG and other images to PDF with custom layout, page size, and quality settings." />
    </Head>

    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">JPG to PDF Converter</h2>

        <!-- Upload Area -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <div v-if="images.length === 0" class="space-y-4">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0013.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p class="text-gray-600">Drop images here or click to upload</p>
                <input 
                    type="file" 
                    multiple 
                    accept="image/*" 
                    @change="handleFiles" 
                    class="hidden" 
                    id="file-upload"
                />
                <label 
                    for="file-upload" 
                    class="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                    Choose Images
                </label>
            </div>
            
            <div v-else class="space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600">{{ images.length }} image(s) selected</span>
                    <span class="text-sm text-gray-500">{{ formatFileSize(totalSize) }}</span>
                </div>
                
                <!-- Image Preview List -->
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    <div 
                        v-for="(image, index) in images" 
                        :key="index"
                        class="relative group"
                    >
                        <div class="aspect-square border rounded-lg overflow-hidden bg-gray-50">
                            <img 
                                :src="image.preview" 
                                :alt="`Image ${index + 1}`"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <button 
                            @click="removeImage(index)"
                            class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            ×
                        </button>
                        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center">
                            {{ image.name }}
                        </div>
                    </div>
                </div>
                
                <div class="flex gap-2">
                    <button 
                        @click="addMoreImages" 
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add More Images
                    </button>
                    <button 
                        @click="clearAll" 
                        class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Clear All
                    </button>
                </div>
            </div>
        </div>

        <!-- PDF Options -->
        <div v-if="images.length > 0" class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700">PDF Options</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Page Size</label>
                    <select v-model="pdfOptions.pageSize" class="w-full px-3 py-2 border rounded-lg">
                        <option value="a4">A4 (210×297 mm)</option>
                        <option value="a3">A3 (297×420 mm)</option>
                        <option value="letter">Letter (216×279 mm)</option>
                        <option value="legal">Legal (216×356 mm)</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Orientation</label>
                    <select v-model="pdfOptions.orientation" class="w-full px-3 py-2 border rounded-lg">
                        <option value="portrait">Portrait</option>
                        <option value="landscape">Landscape</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Image Layout</label>
                    <select v-model="pdfOptions.layout" class="w-full px-3 py-2 border rounded-lg">
                        <option value="fit">Fit to Page</option>
                        <option value="center">Center on Page</option>
                        <option value="stretch">Stretch to Page</option>
                        <option value="original">Original Size</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Image Quality</label>
                    <select v-model="pdfOptions.quality" class="w-full px-3 py-2 border rounded-lg">
                        <option value="high">High (300 DPI)</option>
                        <option value="medium">Medium (200 DPI)</option>
                        <option value="low">Low (150 DPI)</option>
                    </select>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Margin (mm)</label>
                    <input 
                        v-model="pdfOptions.margin" 
                        type="number" 
                        min="0" 
                        max="50"
                        class="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Filename</label>
                    <input 
                        v-model="pdfOptions.filename" 
                        type="text" 
                        placeholder="images.pdf"
                        class="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
            </div>
        </div>

        <!-- Generate Button -->
        <div v-if="images.length > 0" class="flex gap-4">
            <button 
                @click="generatePDF" 
                :disabled="processing"
                class="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
                <span v-if="processing">Generating PDF...</span>
                <span v-else>Generate PDF</span>
            </button>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {{ error }}
        </div>

        <!-- SEO Content -->
        <ToolSeoContent
            title="JPG to PDF Converter"
            description="Free online tool to convert JPG and other images to PDF. Multiple images, custom layouts, page sizes, and quality settings."
            :steps="steps"
            :faqs="faqs"
        />

    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Head } from "@inertiajs/vue3";
import jsPDF from "jspdf";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    'Upload multiple JPG or image files using drag & drop',
    'Preview your images and arrange their order',
    'Configure PDF options (page size, orientation, layout)',
    'Set filename and quality preferences',
    'Generate and download your PDF document'
];

const faqs = [
    { 
        question: 'What image formats are supported?', 
        answer: 'We support all major image formats including JPG, JPEG, PNG, GIF, WebP, BMP, and SVG files for conversion to PDF.' 
    },
    { 
        question: 'Can I convert multiple images at once?', 
        answer: 'Yes! You can upload multiple images and they will be converted to a single PDF with each image on a separate page.' 
    },
    { 
        question: 'What page sizes are available?', 
        answer: 'We support standard page sizes including A4, A3, Letter, and Legal. You can also choose between portrait and landscape orientation.' 
    },
    { 
        question: 'How does image layout work?', 
        answer: 'Layout options include Fit to Page (scales to fit), Center on Page, Stretch to Page, and Original Size (maintains actual dimensions).' 
    },
    { 
        question: 'What is image quality in PDF?', 
        answer: 'Quality refers to DPI (dots per inch). High (300 DPI) for best quality, Medium (200 DPI) for balance, Low (150 DPI) for smaller file size.' 
    },
    { 
        question: 'Is my data secure?', 
        answer: 'All conversion happens directly in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.' 
    }
];

const images = ref([]);
const processing = ref(false);
const error = ref('');

const pdfOptions = ref({
    pageSize: 'a4',
    orientation: 'portrait',
    layout: 'fit',
    quality: 'high',
    margin: 10,
    filename: 'images.pdf'
});

const totalPages = computed(() => {
    return images.value.length;
});

const totalSize = computed(() => {
    return images.value.reduce((total, image) => total + image.size, 0);
});

const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
        if (!file.type.startsWith('image/')) {
            error.value = `Please select only image files. ${file.name} is not an image.`;
            return;
        }
        
        const maxSize = 10 * 1024 * 1024; // 10MB per image
        if (file.size > maxSize) {
            error.value = `Image ${file.name} is too large. Maximum size is 10MB per image.`;
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            images.value.push({
                file: file,
                name: file.name,
                size: file.size,
                preview: e.target.result
            });
        };
        reader.readAsDataURL(file);
    });
    
    error.value = '';
};

const addMoreImages = () => {
    document.getElementById('file-upload').click();
};

const removeImage = (index) => {
    images.value.splice(index, 1);
};

const clearAll = () => {
    images.value = [];
    error.value = '';
    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
        fileInput.value = '';
    }
};

const getPageDimensions = () => {
    const sizes = {
        a4: { width: 210, height: 297 },
        a3: { width: 297, height: 420 },
        letter: { width: 216, height: 279 },
        legal: { width: 216, height: 356 }
    };
    
    let { width, height } = sizes[pdfOptions.value.pageSize];
    
    if (pdfOptions.value.orientation === 'landscape') {
        [width, height] = [height, width];
    }
    
    return { width, height };
};

const calculateImageDimensions = (imgWidth, imgHeight) => {
    const pageDim = getPageDimensions();
    const margin = pdfOptions.value.margin;
    const availableWidth = pageDim.width - (margin * 2);
    const availableHeight = pageDim.height - (margin * 2);
    
    let finalWidth = imgWidth;
    let finalHeight = imgHeight;
    
    switch (pdfOptions.value.layout) {
        case 'fit':
            const scale = Math.min(
                availableWidth / imgWidth,
                availableHeight / imgHeight
            );
            finalWidth = imgWidth * scale;
            finalHeight = imgHeight * scale;
            break;
        case 'center':
            // Keep original size but ensure it fits
            if (imgWidth > availableWidth || imgHeight > availableHeight) {
                const fitScale = Math.min(
                    availableWidth / imgWidth,
                    availableHeight / imgHeight
                );
                finalWidth = imgWidth * fitScale;
                finalHeight = imgHeight * fitScale;
            }
            break;
        case 'stretch':
            finalWidth = availableWidth;
            finalHeight = availableHeight;
            break;
        case 'original':
            // Keep original size, might overflow page
            break;
    }
    
    return { width: finalWidth, height: finalHeight };
};

const getQualitySettings = () => {
    const qualityMap = {
        high: { dpi: 300, jpegQuality: 0.9 },
        medium: { dpi: 200, jpegQuality: 0.7 },
        low: { dpi: 150, jpegQuality: 0.5 }
    };
    return qualityMap[pdfOptions.value.quality];
};

const generatePDF = async () => {
    if (images.value.length === 0) {
        error.value = 'Please add at least one image';
        return;
    }
    
    processing.value = true;
    error.value = '';
    
    try {
        const pdf = new jsPDF({
            orientation: pdfOptions.value.orientation,
            unit: 'mm',
            format: pdfOptions.value.pageSize
        });
        
        const quality = getQualitySettings();
        
        for (let i = 0; i < images.value.length; i++) {
            const imageData = images.value[i];
            
            // Load image to get dimensions
            const img = new Image();
            await new Promise((resolve) => {
                img.onload = () => {
                    const { width, height } = calculateImageDimensions(img.width, img.height);
                    
                    // Convert pixels to mm (assuming 96 DPI as reference)
                    const mmPerPx = 25.4 / quality.dpi;
                    const widthMm = width * mmPerPx;
                    const heightMm = height * mmPerPx;
                    
                    // Center image on page
                    const pageDim = getPageDimensions();
                    const x = (pageDim.width - widthMm) / 2;
                    const y = (pageDim.height - heightMm) / 2;
                    
                    pdf.addImage(
                        imageData.preview,
                        'JPEG',
                        x,
                        y,
                        widthMm,
                        heightMm,
                        undefined,
                        undefined,
                        quality.jpegQuality
                    );
                    
                    if (i < images.value.length - 1) {
                        pdf.addPage();
                    }
                    
                    resolve();
                };
                img.src = imageData.preview;
            });
        }
        
        // Save PDF
        const filename = pdfOptions.value.filename.endsWith('.pdf') 
            ? pdfOptions.value.filename 
            : `${pdfOptions.value.filename}.pdf`;
        
        pdf.save(filename);
        processing.value = false;
        
    } catch (err) {
        console.error('PDF generation error:', err);
        error.value = 'Failed to generate PDF. Please try again.';
        processing.value = false;
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