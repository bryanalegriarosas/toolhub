<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('jpgToPdf.title') }}</h2>

        <!-- Upload Area -->
        <div class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <div v-if="images.length === 0" class="space-y-4">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0013.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p class="text-gray-600 dark:text-gray-400">{{ t('jpgToPdf.drop_images') }}</p>
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
                    {{ t('jpgToPdf.choose_images') }}
                </label>
            </div>
            
            <div v-else class="space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600 dark:text-gray-400">{{ images.length }} {{ t('jpgToPdf.images_selected') }}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ formatFileSize(totalSize) }}</span>
                </div>
                
                <!-- Image Preview List -->
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    <div 
                        v-for="(image, index) in images" 
                        :key="index"
                        class="relative group"
                    >
                        <div class="aspect-square border dark:border-gray-600 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-700">
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
                        {{ t('jpgToPdf.add_more_images') }}
                    </button>
                    <button 
                        @click="clearAll" 
                        class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        {{ t('jpgToPdf.clear_all') }}
                    </button>
                </div>
            </div>
        </div>

        <!-- PDF Options -->
        <div v-if="images.length > 0" class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('jpgToPdf.pdf_options') }}</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('jpgToPdf.page_size') }}</label>
                    <select v-model="pdfOptions.pageSize" class="w-full px-3 py-2 border dark:border-gray-600 rounded-lg">
                        <option value="a4">{{ t('jpgToPdf.a4_size') }}</option>
                        <option value="a3">{{ t('jpgToPdf.a3_size') }}</option>
                        <option value="letter">{{ t('jpgToPdf.letter_size') }}</option>
                        <option value="legal">{{ t('jpgToPdf.legal_size') }}</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('jpgToPdf.orientation') }}</label>
                    <select v-model="pdfOptions.orientation" class="w-full px-3 py-2 border dark:border-gray-600 rounded-lg">
                        <option value="portrait">{{ t('jpgToPdf.portrait') }}</option>
                        <option value="landscape">{{ t('jpgToPdf.landscape') }}</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('jpgToPdf.image_layout') }}</label>
                    <select v-model="pdfOptions.layout" class="w-full px-3 py-2 border dark:border-gray-600 rounded-lg">
                        <option value="fit">{{ t('jpgToPdf.fit_to_page') }}</option>
                        <option value="center">{{ t('jpgToPdf.center_on_page') }}</option>
                        <option value="stretch">{{ t('jpgToPdf.stretch_to_page') }}</option>
                        <option value="original">{{ t('jpgToPdf.original_size') }}</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('jpgToPdf.image_quality') }}</label>
                    <select v-model="pdfOptions.quality" class="w-full px-3 py-2 border dark:border-gray-600 rounded-lg">
                        <option value="high">{{ t('jpgToPdf.high_quality') }}</option>
                        <option value="medium">{{ t('jpgToPdf.medium_quality') }}</option>
                        <option value="low">{{ t('jpgToPdf.low_quality') }}</option>
                    </select>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('jpgToPdf.margin') }}</label>
                    <input 
                        v-model="pdfOptions.margin" 
                        type="number" 
                        min="0" 
                        max="50"
                        class="w-full px-3 py-2 border dark:border-gray-600 rounded-lg"
                    />
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('jpgToPdf.filename') }}</label>
                    <input 
                        v-model="pdfOptions.filename" 
                        type="text" 
                        placeholder="images.pdf"
                        class="w-full px-3 py-2 border dark:border-gray-600 rounded-lg"
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
                <span v-if="processing">{{ t('jpgToPdf.generating_pdf') }}</span>
                <span v-else>{{ t('jpgToPdf.generate_pdf') }}</span>
            </button>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {{ error }}
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
import { ref, computed } from "vue";
import jsPDF from "jspdf";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('jpgToPdf.title'));
const mainDescription = computed(() => t('jpgToPdf.mainDescription'));
const extendedDescription = computed(() => t('jpgToPdf.extendedDescription'));
const features = computed(() => t('jpgToPdf.features'));
const steps = computed(() => t('jpgToPdf.steps'));
const examples = computed(() => t('jpgToPdf.examples'));
const useCases = computed(() => t('jpgToPdf.useCases'));
const technicalDetails = computed(() => t('jpgToPdf.technicalDetails'));
const bestPractices = computed(() => t('jpgToPdf.bestPractices'));
const commonErrors = computed(() => t('jpgToPdf.commonErrors'));
const alternatives = computed(() => t('jpgToPdf.alternatives'));
const relatedTools = computed(() => t('jpgToPdf.relatedTools'));
const faqs = computed(() => t('jpgToPdf.faqs'));
const securityNote = computed(() => t('jpgToPdf.securityNote'));
const additionalContent = computed(() => t('jpgToPdf.additionalContent'));

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