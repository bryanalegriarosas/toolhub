<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">PDF Splitter</h2>

        <!-- Upload Area -->
        <div class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <div v-if="!file" class="space-y-4">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707L10.586 10H7a2 2 0 00-2 2v11a2 2 0 002 2z" />
                </svg>
                <p class="text-gray-600 dark:text-gray-400">Drop PDF here or click to upload</p>
                <input 
                    type="file" 
                    accept="application/pdf" 
                    @change="loadPDF" 
                    class="hidden" 
                    id="file-upload"
                />
                <label 
                    for="file-upload" 
                    class="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                    Choose PDF
                </label>
            </div>
            
            <div v-else class="space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600 dark:text-gray-400">{{ file.name }}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ formatFileSize(file.size) }}</span>
                </div>
                
                <div class="flex gap-2">
                    <button 
                        @click="clearPDF" 
                        class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Clear PDF
                    </button>
                </div>
            </div>
        </div>

        <!-- PDF Info & Page Selection -->
        <div v-if="pdfInfo" class="space-y-6">
            <!-- PDF Information -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">PDF Information</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">Total Pages:</span>
                        <span class="font-mono ml-2">{{ pdfInfo.numPages }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">File Size:</span>
                        <span class="font-mono ml-2">{{ formatFileSize(file.size) }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">Selected:</span>
                        <span class="font-mono ml-2">{{ selectedPages.length }} page(s)</span>
                    </div>
                    <div>
                        <span class="text-gray-600 dark:text-gray-400">Format:</span>
                        <span class="font-mono ml-2">PDF</span>
                    </div>
                </div>
            </div>
            
            <!-- Page Selection -->
            <div class="space-y-4">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Page Selection</h3>
                    <div class="flex items-center gap-4">
                        <label class="flex items-center space-x-2">
                            <input 
                                type="checkbox" 
                                v-model="selectAll" 
                                @change="toggleAllPages"
                                class="rounded"
                            />
                            <span class="text-sm text-gray-700 dark:text-gray-300">Select All Pages</span>
                        </label>
                        
                        <div class="text-sm text-gray-600 dark:text-gray-400">
                            {{ selectedPages.length }} of {{ pdfInfo.numPages }} pages selected
                        </div>
                    </div>
                </div>
                
                <!-- Page Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-64 overflow-y-auto">
                    <label 
                        v-for="page in pdfInfo.numPages" 
                        :key="page"
                        class="relative group cursor-pointer"
                    >
                        <input 
                            type="checkbox" 
                            :value="page" 
                            v-model="selectedPages"
                            class="sr-only"
                        />
                        <div class="aspect-square border-2 rounded-lg p-4 transition-colors"
                            :class="{
                                'border-blue-500 bg-blue-50': selectedPages.includes(page),
                                'border-gray-300 bg-white hover:bg-gray-50 dark:bg-gray-700': !selectedPages.includes(page)
                            }"
                        >
                            <div class="text-center">
                                <div class="text-lg font-semibold">{{ page }}</div>
                                <div class="text-xs text-gray-500 dark:text-gray-400">Page {{ page }}</div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            
            <!-- Split Options -->
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Split Options</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filename Prefix</label>
                        <input 
                            v-model="splitOptions.prefix" 
                            type="text" 
                            placeholder="page"
                            class="w-full px-3 py-2 border dark:border-gray-600 rounded-lg"
                        />
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Output Format</label>
                        <select v-model="splitOptions.format" class="w-full px-3 py-2 border dark:border-gray-600 rounded-lg">
                            <option value="individual">Individual PDFs</option>
                            <option value="zip">ZIP Archive</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- Split Button -->
            <div class="flex gap-4">
                <button 
                    @click="splitPDF" 
                    :disabled="selectedPages.length === 0 || processing"
                    class="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                    <span v-if="processing">Splitting...</span>
                    <span v-else>Split {{ selectedPages.length }} Page(s)</span>
                </button>
            </div>
        </div>

        <!-- Results -->
        <div v-if="splitPages.length > 0" class="space-y-6">
            <div class="bg-blue-50 rounded-lg p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-blue-700">Split Pages</h3>
                    <button 
                        v-if="splitOptions.format === 'individual' && splitPages.length > 1"
                        @click="downloadAll"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                        Download All as ZIP
                    </button>
                </div>
                
                <!-- Page List -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div 
                        v-for="(page, index) in splitPages" 
                        :key="index"
                        class="space-y-2"
                    >
                        <div class="border dark:border-gray-600 rounded-lg overflow-hidden bg-white">
                            <div class="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                <div class="text-2xl font-bold text-gray-600 dark:text-gray-400">{{ page.pageNumber }}</div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-600 dark:text-gray-400">Page {{ page.pageNumber }}</span>
                            <a 
                                :href="page.url" 
                                :download="page.filename"
                                class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                            >
                                Download
                            </a>
                        </div>
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
            title="PDF Splitter"
            description="Free online tool to split PDF into individual pages. Select specific pages, preview, and download as separate files or ZIP."
            :steps="steps"
            :examples="examples"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { PDFDocument } from "pdf-lib";
import JSZip from "jszip";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const examples = [
    {
        title: "Extract Specific Pages",
        description: "Extract chapters from a textbook PDF",
        code: "Input: textbook-2024.pdf (50 pages) | Select: Pages 1-15, 31-45",
        result: "Output: chapter1.pdf (15 pages), chapter2.pdf (15 pages)"
    },
    {
        title: "Split Invoice Bundle",
        description: "Separate individual invoices from batch PDF",
        code: "Input: monthly-invoices.pdf (30 pages) | Select: All pages",
        result: "Output: 30 individual invoice PDF files or ZIP bundle",
        steps: [
            "Upload invoice bundle PDF",
            "Select all pages or specific invoices",
            "Choose separate files or ZIP download",
            "Download individual invoice files"
        ]
    },
    {
        title: "Create Page Samples",
        description: "Extract sample pages from large document",
        code: "Input: annual-report.pdf (120 pages) | Select: Pages 1, 5, 10, 50",
        result: "Output: sample-pages.pdf (4 pages) or 4 individual files"
    }
];

const steps = [
    'Upload PDF file using drag & drop',
    'View PDF information and page thumbnails',
    'Select specific pages or split all pages',
    'Choose split options and filename format',
    'Download individual pages or as ZIP archive'
];

const faqs = [
    { 
        question: 'What PDF formats are supported?', 
        answer: 'We support standard PDF files. The tool will extract each page and convert it to a separate PDF document.' 
    },
    { 
        question: 'Can I select specific pages?', 
        answer: 'Yes! You can select individual pages or split all pages. Each selected page will become a separate PDF file.' 
    },
    { 
        question: 'What output formats are available?', 
        answer: 'You can download each page as an individual PDF file or all selected pages as a single ZIP archive for convenience.' 
    },
    { 
        question: 'How are filenames generated?', 
        answer: 'Each page is named with your chosen prefix followed by the page number (e.g., page-1.pdf, page-2.pdf).' 
    },
    { 
        question: 'Is there a file size limit?', 
        answer: 'PDF files should be under 50MB. The total size of split files will be similar to the original PDF.' 
    },
    { 
        question: 'Is my data secure?', 
        answer: 'All splitting happens directly in your browser. Your PDF files are never uploaded to our servers, ensuring complete privacy and security.' 
    }
];

const file = ref(null);
const pdfInfo = ref(null);
const selectedPages = ref([]);
const splitPages = ref([]);
const processing = ref(false);
const error = ref('');
const selectAll = ref(false);

const splitOptions = ref({
    prefix: 'page',
    format: 'individual'
});

watch(selectedPages, (newSelection) => {
    selectAll.value = newSelection.length === pdfInfo.value?.numPages;
});

const loadPDF = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    
    if (selectedFile.type !== 'application/pdf') {
        error.value = 'Please select a valid PDF file';
        clearPDF();
        return;
    }
    
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (selectedFile.size > maxSize) {
        error.value = 'PDF file is too large. Maximum size is 50MB.';
        clearPDF();
        return;
    }
    
    error.value = '';
    file.value = selectedFile;
    
    try {
        const arrayBuffer = await selectedFile.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        
        pdfInfo.value = {
            numPages: pdf.getPageCount(),
            pdf: pdf
        };
        
        // Auto-select all pages
        selectedPages.value = Array.from({ length: pdf.getPageCount() }, (_, i) => i + 1);
        
    } catch (err) {
        console.error('PDF loading error:', err);
        error.value = 'Failed to load PDF. Please try another file.';
        clearPDF();
    }
};

const toggleAllPages = () => {
    if (selectAll.value) {
        selectedPages.value = Array.from({ length: pdfInfo.value.numPages }, (_, i) => i + 1);
    } else {
        selectedPages.value = [];
    }
};

const splitPDF = async () => {
    if (selectedPages.value.length === 0) {
        error.value = 'Please select at least one page to split';
        return;
    }
    
    processing.value = true;
    error.value = '';
    splitPages.value = [];
    
    try {
        const pages = [];
        
        for (const pageNum of selectedPages.value) {
            const newPdf = await PDFDocument.create();
            const [page] = await newPdf.copyPages(pdfInfo.value.pdf, [pageNum - 1]);
            newPdf.addPage(page);
            
            const pdfBytes = await newPdf.save();
            const filename = `${splitOptions.value.prefix}-${pageNum}.pdf`;
            const url = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
            
            pages.push({
                pageNumber: pageNum,
                filename: filename,
                url: url,
                blob: new Blob([pdfBytes], { type: 'application/pdf' })
            });
        }
        
        splitPages.value = pages;
        
        // If ZIP format, download immediately
        if (splitOptions.value.format === 'zip') {
            await downloadAll();
        }
        
        processing.value = false;
        
    } catch (err) {
        console.error('Split error:', err);
        error.value = 'Failed to split PDF. Please try again.';
        processing.value = false;
    }
};

const downloadAll = async () => {
    if (splitPages.value.length === 0) return;
    
    try {
        const zip = new JSZip();
        
        splitPages.value.forEach((page) => {
            zip.file(page.filename, page.blob);
        });
        
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        const zipUrl = URL.createObjectURL(zipBlob);
        
        const link = document.createElement('a');
        link.href = zipUrl;
        link.download = `${file.value.name.replace('.pdf', '')}-split-pages.zip`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up
        setTimeout(() => URL.revokeObjectURL(zipUrl), 1000);
        
    } catch (err) {
        console.error('ZIP creation error:', err);
        error.value = 'Failed to create ZIP file. Please try downloading individually.';
    }
};

const clearPDF = () => {
    file.value = null;
    pdfInfo.value = null;
    selectedPages.value = [];
    splitPages.value = [];
    processing.value = false;
    error.value = '';
    selectAll.value = false;
    
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