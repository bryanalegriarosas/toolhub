<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">{{ t('mergePdf.title') }}</h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ t('mergePdf.description') }}
            </p>

            <!-- Upload Area -->
            <div
                class="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-8 text-center hover:border-blue-400 transition-colors">
                <div v-if="files.length === 0" class="space-y-3 sm:space-y-4">
                    <svg class="mx-auto h-8 sm:h-12 w-8 sm:w-12 text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707L10.586 10H7a2 2 0 00-2 2v11a2 2 0 002 2z" />
                    </svg>
                    <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{{ t('mergePdf.drop_files') }}</p>
                    <input type="file" multiple accept="application/pdf" @change="handleFiles" class="hidden"
                        id="file-upload" ref="fileInput" />
                    <label for="file-upload"
                        class="cursor-pointer bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block text-sm sm:text-base">
                        {{ t('mergePdf.choose_files') }}
                    </label>
                </div>

                <div v-else class="space-y-3 sm:space-y-4">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <span class="text-sm sm:text-base text-gray-600 dark:text-gray-400">{{ files.length }} {{ t('mergePdf.files_selected') }}</span>
                        <span class="text-sm sm:text-base text-gray-500 dark:text-gray-400">{{ formatFileSize(totalSize) }}</span>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-2">
                        <input type="file" multiple accept="application/pdf" @change="handleFiles"
                            class="px-2 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors file:mr-2 text-sm sm:text-base" />
                        <button @click="clearAll"
                            class="px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
                            {{ t('mergePdf.clear_all') }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- PDF Files List -->
            <div v-if="files.length > 0" class="space-y-4 sm:space-y-6">
                <!-- File Management -->
                <div class="space-y-3 sm:space-y-4">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('mergePdf.pdf_files') }}</h3>
                        <div class="flex items-center gap-2 sm:gap-4">
                            <button @click="moveUp" :disabled="selectedFileIndex === null || selectedFileIndex === 0"
                                class="px-2 sm:px-3 py-1 sm:py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50 text-xs sm:text-sm">
                                {{ t('mergePdf.move_up') }}
                            </button>
                            <button @click="moveDown"
                                :disabled="selectedFileIndex === null || selectedFileIndex === files.length - 1"
                                class="px-2 sm:px-3 py-1 sm:py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50 text-xs sm:text-sm">
                                {{ t('mergePdf.move_down') }}
                            </button>
                        </div>
                    </div>

                    <!-- File List -->
                    <div class="space-y-2">
                        <div v-for="(file, index) in files" :key="index" @click="selectFile(index)"
                            class="border dark:border-gray-600 rounded-lg p-3 sm:p-4 cursor-pointer transition-colors" :class="{
                                'border-blue-500 bg-blue-50': selectedFileIndex === index,
                                'border-gray-300 bg-white hover:bg-gray-50 dark:bg-gray-700': selectedFileIndex !== index
                            }">
                            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                                <div class="flex items-center gap-3">
                                    <div class="text-lg sm:text-xl font-semibold">{{ index + 1 }}</div>
                                    <div class="min-w-0 flex-1">
                                        <div class="font-medium text-sm sm:text-base truncate">{{ file.name }}</div>
                                        <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{{ formatFileSize(file.size) }}
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button @click.stop="removeFile(index)"
                                        class="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 text-white rounded-full hover:bg-red-600 flex items-center justify-center text-xs sm:text-sm">
                                        ×
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Merge Options -->
                <div class="space-y-3 sm:space-y-4">
                    <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('mergePdf.merge_options') }}</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                            <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('mergePdf.output_filename') }}</label>
                            <input v-model="mergeOptions.filename" type="text" placeholder="merged-document"
                                class="form-input text-sm sm:text-base" />
                        </div>

                        <div>
                            <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('mergePdf.page_size') }}</label>
                            <select v-model="mergeOptions.pageSize" class="form-select text-sm sm:text-base">
                                <option value="keep">{{ t('mergePdf.keep_original_sizes') }}</option>
                                <option value="a4">{{ t('mergePdf.a4') }}</option>
                                <option value="letter">{{ t('mergePdf.letter') }}</option>
                                <option value="legal">{{ t('mergePdf.legal') }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Merge Button -->
                <div class="flex gap-2 sm:gap-4">
                    <button @click="mergePDFs" :disabled="files.length === 0 || processing"
                        class="flex-1 bg-green-600 text-white py-2 sm:py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 text-sm sm:text-base">
                        <span v-if="processing">{{ t('mergePdf.merging_pdfs') }}</span>
                        <span v-else>{{ t('mergePdf.merge_pdfs') }}</span>
                    </button>
                </div>
            </div>

            <!-- Error Message -->
            <div v-if="error"
                class="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-3 rounded-lg text-sm sm:text-base">
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
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { PDFDocument } from "pdf-lib";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('mergePdf.title'));
const mainDescription = computed(() => t('mergePdf.mainDescription'));
const extendedDescription = computed(() => t('mergePdf.extendedDescription'));
const features = computed(() => t('mergePdf.features'));
const steps = computed(() => t('mergePdf.steps'));
const examples = computed(() => t('mergePdf.examples'));
const useCases = computed(() => t('mergePdf.useCases'));
const technicalDetails = computed(() => t('mergePdf.technicalDetails'));
const bestPractices = computed(() => t('mergePdf.bestPractices'));
const commonErrors = computed(() => t('mergePdf.commonErrors'));
const alternatives = computed(() => t('mergePdf.alternatives'));
const relatedTools = computed(() => t('mergePdf.relatedTools'));
const faqs = computed(() => t('mergePdf.faqs'));
const securityNote = computed(() => t('mergePdf.securityNote'));
const additionalContent = computed(() => t('mergePdf.additionalContent'));

const fileInput = ref(null);
const files = ref([]);
const selectedFileIndex = ref(null);
const processing = ref(false);
const error = ref('');

const mergeOptions = ref({
    filename: 'merged-document',
    pageSize: 'keep'
});

const totalSize = computed(() => {
    return files.value.reduce((total, file) => total + file.size, 0);
});

const handleFiles = (e) => {
    const newFiles = Array.from(e.target.files);

    // Clear previous errors
    let hasError = false;

    newFiles.forEach(file => {
        if (file.type !== 'application/pdf') {
            error.value = `Please select only PDF files. ${file.name} is not a PDF.`;
            hasError = true;
            return;
        }

        const maxSize = 50 * 1024 * 1024; // 50MB per file
        if (file.size > maxSize) {
            error.value = `File ${file.name} is too large. Maximum size is 50MB per file.`;
            hasError = true;
            return;
        }

        files.value.push(file);
    });

    if (!hasError) {
        error.value = '';
    }
};

const selectFile = (index) => {
    selectedFileIndex.value = index;
};

const removeFile = (index) => {
    files.value.splice(index, 1);
    if (selectedFileIndex.value === index) {
        selectedFileIndex.value = null;
    } else if (selectedFileIndex.value > index) {
        selectedFileIndex.value--;
    }
};

const moveUp = () => {
    if (selectedFileIndex.value > 0) {
        const index = selectedFileIndex.value;
        const file = files.value.splice(index, 1)[0];
        files.value.splice(index - 1, 0, file);
        selectedFileIndex.value = index - 1;
    }
};

const moveDown = () => {
    if (selectedFileIndex.value < files.value.length - 1) {
        const index = selectedFileIndex.value;
        const file = files.value.splice(index, 1)[0];
        files.value.splice(index + 1, 0, file);
        selectedFileIndex.value = index + 1;
    }
};

const clearAll = () => {
    files.value = [];
    selectedFileIndex.value = null;
    error.value = '';
    if (fileInput.value) {
        fileInput.value.value = '';
    }
};

const mergePDFs = async () => {
    if (files.value.length === 0) {
        error.value = 'Please add at least one PDF file';
        return;
    }

    processing.value = true;
    error.value = '';

    try {
        const merged = await PDFDocument.create();

        for (const file of files.value) {
            const bytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(bytes);

            const pages = await merged.copyPages(pdf, pdf.getPageIndices());
            pages.forEach(page => merged.addPage(page));
        }

        // Apply page size if specified
        if (mergeOptions.value.pageSize !== 'keep') {
            // Note: pdf-lib doesn't directly support page size changes
            // This would require more complex implementation
        }

        const pdfBytes = await merged.save();
        downloadPDF(pdfBytes);

        processing.value = false;

    } catch (err) {
        console.error('Merge error:', err);
        error.value = 'Failed to merge PDFs. Please try again.';
        processing.value = false;
    }
};

const downloadPDF = (bytes) => {
    const filename = mergeOptions.value.filename.endsWith('.pdf')
        ? mergeOptions.value.filename
        : `${mergeOptions.value.filename}.pdf`;

    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Clean up
    setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
</script>