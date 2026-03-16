<template>
    <Head>
        <meta name="description" content="Convert images to PDF online." />
    </Head>

    <div class="max-w-4xl mx-auto p-6 bg-white shadow rounded-xl">

        <h1 class="text-2xl font-bold mb-4">Image to PDF</h1>

        <!-- Error Message -->
        <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {{ error }}
        </div>

        <!-- Success Message -->
        <div v-if="success" class="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {{ success }}
        </div>

        <!-- File Input Area -->
        <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-700">
                Select Image File
            </label>
            <input type="file" accept="image/*" @change="generate"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                :disabled="isProcessing" />
            <p class="mt-1 text-xs text-gray-500">
                Supported formats: JPG, PNG, GIF, BMP, WebP. Max size: 10MB
            </p>
        </div>

        <!-- Image Preview -->
        <div v-if="image && !error" class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 mb-2">Preview:</h3>
            <div class="border rounded-lg p-4 bg-gray-50">
                <img :src="image" alt="Preview" class="max-w-full h-auto max-h-64 mx-auto rounded" />
                <p class="mt-2 text-xs text-gray-500 text-center">
                    {{ fileName }} ({{ formatFileSize(fileSize) }})
                </p>
            </div>
        </div>

        <!-- Configuration Options -->
        <div v-if="image && !error" class="mb-6 space-y-4">
            <h3 class="text-sm font-medium text-gray-700">PDF Options:</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Page Size:</label>
                    <select v-model="pageSize"
                        class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="a4">A4</option>
                        <option value="letter">Letter</option>
                        <option value="legal">Legal</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Orientation:</label>
                    <select v-model="orientation"
                        class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="portrait">Portrait</option>
                        <option value="landscape">Landscape</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Image Fit:</label>
                    <select v-model="imageFit"
                        class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="contain">Contain (fit to page)</option>
                        <option value="cover">Cover (fill page)</option>
                        <option value="actual">Actual size</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Quality:</label>
                    <select v-model="quality"
                        class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Action Buttons -->
        <div v-if="image && !error" class="flex gap-4">
            <button @click="download" :disabled="isProcessing"
                class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                <span v-if="isProcessing" class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    Generating PDF...
                </span>
                <span v-else>Download PDF</span>
            </button>

            <button @click="reset" class="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors">
                Clear
            </button>
        </div>

        <!-- SEO Content -->
        <ToolSeoContent title="Image to PDF Converter"
            description="Free online tool to convert images to PDF. Supports JPG, PNG, GIF, BMP, WebP formats with custom page sizes, orientations, and quality settings. Fast, secure, and no registration required."
            :steps="steps" :faqs="faqs" />

    </div>

</template>

<script setup>

import { ref } from "vue"
import { Head } from "@inertiajs/vue3"
import { jsPDF } from "jspdf"
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue"

const image = ref(null);
const error = ref(null);
const success = ref(null);
const isProcessing = ref(false);
const fileName = ref(null);
const fileSize = ref(null);

// Configuration options
const pageSize = ref('a4');
const orientation = ref('portrait');
const imageFit = ref('contain');
const quality = ref('high');

// SEO Content
const steps = [
    'Select an image file using the file selector or drag and drop',
    'Preview your image to confirm it\'s the correct file',
    'Configure PDF options: page size, orientation, image fit, and quality',
    'Click "Download PDF" to generate and download your converted file',
    'Your PDF will be saved with the original filename plus "_converted.pdf"'
];

const faqs = [
    {
        question: 'What image formats are supported?',
        answer: 'We support all major image formats including JPG, JPEG, PNG, GIF, BMP, and WebP. Files can be up to 10MB in size.'
    },
    {
        question: 'What page sizes are available?',
        answer: 'You can choose between A4 (210×297mm), Letter (216×279mm), and Legal (216×356mm) page sizes. Each can be oriented as portrait or landscape.'
    },
    {
        question: 'What\'s the difference between image fit options?',
        answer: '"Contain" fits the entire image within the page margins, "Cover" fills the entire page (may crop edges), and "Actual size" maintains the original image dimensions.'
    },
    {
        question: 'How does quality affect the PDF?',
        answer: 'High quality preserves maximum image detail but creates larger files. Medium and low settings reduce file size but may decrease image clarity. Choose based on your needs.'
    },
    {
        question: 'Is my data secure?',
        answer: 'Yes! All processing happens locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.'
    },
    {
        question: 'Can I convert multiple images to one PDF?',
        answer: 'Currently, this tool converts one image per PDF. For multiple images, you would need to use our PDF merge tool after converting each image individually.'
    }
];

// Page dimensions in mm
const pageSizes = {
    a4: { width: 210, height: 297 },
    letter: { width: 216, height: 279 },
    legal: { width: 216, height: 356 }
};

const validateFile = (file) => {
    // Check file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
    if (!validTypes.includes(file.type)) {
        throw new Error('Invalid file type. Please select a valid image file (JPG, PNG, GIF, BMP, WebP).');
    }

    // Check file size (10MB max)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
        throw new Error('File size too large. Maximum size is 10MB.');
    }

    return true;
};

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const getImageDimensions = (imgSrc) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            resolve({ width: img.width, height: img.height });
        };
        img.src = imgSrc;
    });
};

const calculateImageDimensions = (imgWidth, imgHeight, pageWidth, pageHeight, fit) => {
    const pageRatio = pageWidth / pageHeight;
    const imgRatio = imgWidth / imgHeight;

    let width, height;

    switch (fit) {
        case 'contain':
            if (imgRatio > pageRatio) {
                width = pageWidth - 20; // 10mm margin on each side
                height = width / imgRatio;
            } else {
                height = pageHeight - 20; // 10mm margin on top and bottom
                width = height * imgRatio;
            }
            break;
        case 'cover':
            if (imgRatio > pageRatio) {
                height = pageHeight - 20;
                width = height * imgRatio;
            } else {
                width = pageWidth - 20;
                height = width / imgRatio;
            }
            break;
        case 'actual':
            // Convert pixels to mm (approximate: 1px = 0.264583mm at 96dpi)
            width = imgWidth * 0.264583;
            height = imgHeight * 0.264583;
            break;
    }

    return { x: 10, y: 10, width, height };
};

const generate = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
        // Reset states
        error.value = null;
        success.value = null;
        isProcessing.value = true;

        // Validate file
        validateFile(file);

        // Store file info
        fileName.value = file.name;
        fileSize.value = file.size;

        // Read file
        const reader = new FileReader();

        reader.onload = async (ev) => {
            image.value = ev.target.result;
            success.value = 'Image loaded successfully! You can now configure PDF options and download.';
            isProcessing.value = false;
        };

        reader.onerror = () => {
            throw new Error('Failed to read the image file.');
        };

        reader.readAsDataURL(file);

    } catch (err) {
        error.value = err.message;
        image.value = null;
        fileName.value = null;
        fileSize.value = null;
        isProcessing.value = false;
    }
};

const download = async () => {
    if (!image.value) return;

    try {
        isProcessing.value = true;
        error.value = null;

        // Get page dimensions
        const pageDim = pageSizes[pageSize.value];
        let pageWidth = pageDim.width;
        let pageHeight = pageDim.height;

        // Swap dimensions for landscape
        if (orientation.value === 'landscape') {
            [pageWidth, pageHeight] = [pageHeight, pageWidth];
        }

        // Get image dimensions
        const imgDim = await getImageDimensions(image.value);

        // Calculate image position and size
        const imgPos = calculateImageDimensions(
            imgDim.width,
            imgDim.height,
            pageWidth,
            pageHeight,
            imageFit.value
        );

        // Create PDF
        const pdf = new jsPDF({
            orientation: orientation.value,
            unit: 'mm',
            format: pageSize.value
        });

        // Add image to PDF
        pdf.addImage(
            image.value,
            'JPEG',
            imgPos.x,
            imgPos.y,
            imgPos.width,
            imgPos.height,
            undefined,
            quality.value === 'high' ? 'NONE' : quality.value === 'medium' ? 'FAST' : 'MEDIUM'
        );

        // Generate filename
        const baseName = fileName.value.replace(/\.[^/.]+$/, '');
        const filename = `${baseName}_converted.pdf`;

        // Save PDF
        pdf.save(filename);

        success.value = 'PDF generated and downloaded successfully!';

    } catch (err) {
        error.value = 'Failed to generate PDF: ' + err.message;
    } finally {
        isProcessing.value = false;
    }
};

const reset = () => {
    image.value = null;
    error.value = null;
    success.value = null;
    fileName.value = null;
    fileSize.value = null;
    isProcessing.value = false;

    // Reset file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
        fileInput.value = '';
    }
};

</script>
