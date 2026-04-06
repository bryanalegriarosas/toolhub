<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('imageToBase64.title') }}</h2>

        <!-- Upload Area -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <div v-if="!image" class="space-y-4">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <p class="text-gray-600 dark:text-gray-400">{{ t('imageToBase64.drop_image_here') }}</p>
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
                    {{ t('imageToBase64.choose_image') }}
                </label>
            </div>
            
            <div v-else class="space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600 dark:text-gray-400">{{ image.name }}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ formatFileSize(image.size) }}</span>
                </div>
                
                <div class="flex gap-2">
                    <button 
                        @click="convertToBase64" 
                        :disabled="processing"
                        class="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                    >
                        <span v-if="processing">{{ t('imageToBase64.converting') }}</span>
                        <span v-else>{{ t('imageToBase64.convert_to_base64') }}</span>
                    </button>
                    
                    <button 
                        @click="resetImage" 
                        class="px-6 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        {{ t('imageToBase64.clear') }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Results Section -->
        <div v-if="base64" class="space-y-6">
            <!-- Image Preview -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">{{ t('imageToBase64.image_preview') }}</h3>
                <div class="border dark:border-gray-600 rounded-lg p-4 bg-white">
                    <img :src="base64" :alt="'Converted image'" class="max-w-full h-auto mx-auto max-h-96" />
                </div>
                <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">{{ t('imageToBase64.format') }}</span>
                        <span class="font-mono ml-2">{{ imageFormat }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">{{ t('imageToBase64.original_size') }}</span>
                        <span class="font-mono ml-2">{{ formatFileSize(image.size) }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">{{ t('imageToBase64.base64_size') }}</span>
                        <span class="font-mono ml-2">{{ formatFileSize(base64.length) }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">{{ t('imageToBase64.size_increase') }}</span>
                        <span class="font-mono ml-2">{{ sizeIncrease }}%</span>
                    </div>
                </div>
            </div>

            <!-- Base64 Output -->
            <div class="bg-blue-50 rounded-lg p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-blue-700">{{ t('imageToBase64.base64_output') }}</h3>
                    <div class="flex gap-2">
                        <button 
                            @click="copyBase64" 
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                            {{ copied ? t('imageToBase64.copied') : t('imageToBase64.copy') }}
                        </button>
                        <button 
                            @click="downloadBase64" 
                            class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                            {{ t('imageToBase64.download') }}
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
                    <div class="absolute top-2 right-2 text-xs text-gray-500 dark:text-gray-400">
                        {{ t('imageToBase64.characters') }}
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
                        <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('imageToBase64.include_data_prefix') }}</span>
                    </label>
                    
                    <label class="flex items-center space-x-2">
                        <input 
                            type="checkbox" 
                            v-model="useCleanBase64"
                            class="rounded"
                        />
                        <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('imageToBase64.clean_base64') }}</span>
                    </label>
                </div>
            </div>
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
import { ref, computed, watch } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('imageToBase64.title'));
const mainDescription = computed(() => t('imageToBase64.mainDescription'));
const extendedDescription = computed(() => t('imageToBase64.extendedDescription'));
const features = computed(() => t('imageToBase64.features'));
const steps = computed(() => t('imageToBase64.steps'));
const examples = computed(() => t('imageToBase64.examples'));
const useCases = computed(() => t('imageToBase64.useCases'));
const technicalDetails = computed(() => t('imageToBase64.technicalDetails'));
const bestPractices = computed(() => t('imageToBase64.bestPractices'));
const commonErrors = computed(() => t('imageToBase64.commonErrors'));
const alternatives = computed(() => t('imageToBase64.alternatives'));
const relatedTools = computed(() => t('imageToBase64.relatedTools'));
const faqs = computed(() => t('imageToBase64.faqs'));
const securityNote = computed(() => t('imageToBase64.securityNote'));
const additionalContent = computed(() => t('imageToBase64.additionalContent'));

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