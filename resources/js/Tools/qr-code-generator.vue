<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">QR Code Generator</h1>

            <p class="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
                Advanced QR code generator with customization options, batch generation, and multiple formats.
            </p>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                <!-- Input Section -->
                <div class="space-y-4 sm:space-y-6">
                    <div>
                        <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Content Type</label>
                        <select v-model="contentType" class="form-select text-sm sm:text-base mb-4">
                            <option value="text">Plain Text</option>
                            <option value="url">URL</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="wifi">WiFi</option>
                            <option value="sms">SMS</option>
                        </select>
                    </div>

                    <div v-if="contentType === 'text' || contentType === 'url'">
                        <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">
                            {{ contentType === 'url' ? 'URL' : 'Text' }}
                        </label>
                        <textarea v-model="text"
                            :placeholder="contentType === 'url' ? 'https://example.com' : 'Enter your text here...'"
                            class="form-input resize-none h-32 text-sm sm:text-base" />
                    </div>

                    <div v-if="contentType === 'email'" class="space-y-3">
                        <div>
                            <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Email
                                Address</label>
                            <input v-model="emailData.address" type="email" class="form-input text-sm sm:text-base"
                                placeholder="email@example.com" />
                        </div>
                        <div>
                            <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Subject
                                (Optional)</label>
                            <input v-model="emailData.subject" type="text" class="form-input text-sm sm:text-base"
                                placeholder="Email subject" />
                        </div>
                        <div>
                            <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Message
                                (Optional)</label>
                            <textarea v-model="emailData.message"
                                class="form-input resize-none h-20 text-sm sm:text-base" placeholder="Email message" />
                        </div>
                    </div>

                    <div v-if="contentType === 'phone'">
                        <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Phone Number</label>
                        <input v-model="phone" type="tel" class="form-input text-sm sm:text-base"
                            placeholder="+1234567890" />
                    </div>

                    <div v-if="contentType === 'wifi'" class="space-y-3">
                        <div>
                            <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Network Name
                                (SSID)</label>
                            <input v-model="wifiData.ssid" type="text" class="form-input text-sm sm:text-base"
                                placeholder="WiFi Network Name" />
                        </div>
                        <div>
                            <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Password</label>
                            <input v-model="wifiData.password" type="password" class="form-input text-sm sm:text-base"
                                placeholder="WiFi Password" />
                        </div>
                        <div>
                            <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Security
                                Type</label>
                            <select v-model="wifiData.security" class="form-select text-sm sm:text-base">
                                <option value="WPA">WPA/WPA2</option>
                                <option value="WEP">WEP</option>
                                <option value="nopass">No Password</option>
                            </select>
                        </div>
                    </div>

                    <div v-if="contentType === 'sms'" class="space-y-3">
                        <div>
                            <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Phone
                                Number</label>
                            <input v-model="smsData.phone" type="tel" class="form-input text-sm sm:text-base"
                                placeholder="+1234567890" />
                        </div>
                        <div>
                            <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Message</label>
                            <textarea v-model="smsData.message" class="form-input resize-none h-20 text-sm sm:text-base"
                                placeholder="SMS message" />
                        </div>
                    </div>

                    <!-- QR Code Settings -->
                    <div class="space-y-3 sm:space-y-4">
                        <h3 class="text-lg font-semibold text-gray-700">QR Code Settings</h3>

                        <div class="grid grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Size</label>
                                <select v-model="size" class="form-select text-sm sm:text-base">
                                    <option value="200">Small (200px)</option>
                                    <option value="300">Medium (300px)</option>
                                    <option value="400">Large (400px)</option>
                                    <option value="500">Extra Large (500px)</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Error
                                    Correction</label>
                                <select v-model="errorCorrection" class="form-select text-sm sm:text-base">
                                    <option value="L">Low (7%)</option>
                                    <option value="M">Medium (15%)</option>
                                    <option value="Q">Quartile (25%)</option>
                                    <option value="H">High (30%)</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Foreground
                                    Color</label>
                                <div class="flex gap-2">
                                    <input v-model="darkColor" type="color" class="w-12 sm:w-16 h-10 border rounded" />
                                    <input v-model="darkColor" type="text"
                                        class="flex-1 form-input text-sm sm:text-base" placeholder="#000000" />
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm sm:text-base font-medium mb-2 text-gray-700">Background
                                    Color</label>
                                <div class="flex gap-2">
                                    <input v-model="lightColor" type="color" class="w-12 sm:w-16 h-10 border rounded" />
                                    <input v-model="lightColor" type="text"
                                        class="flex-1 form-input text-sm sm:text-base" placeholder="#FFFFFF" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-wrap gap-2 sm:gap-3">
                        <button @click="generate"
                            class="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                            Generate QR Code
                        </button>

                        <button @click="downloadQR"
                            class="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 text-sm sm:text-base"
                            :disabled="!qr">
                            Download
                        </button>

                        <button @click="copyQR"
                            class="px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 text-sm sm:text-base"
                            :disabled="!qr">
                            Copy Image
                        </button>

                        <button @click="reset"
                            class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
                            Reset
                        </button>
                    </div>
                </div>

                <!-- Preview Section -->
                <div class="space-y-4 sm:space-y-6">
                    <div v-if="qr" class="text-center">
                        <h3 class="text-lg font-semibold mb-4">QR Code Preview</h3>
                        <div class="bg-gray-50 rounded-lg p-4 sm:p-8 inline-block">
                            <img :src="qr" :style="`width: ${size}px; height: ${size}px;`" class="mx-auto" />
                        </div>

                        <div class="mt-4 text-xs sm:text-sm text-gray-600">
                            <p>Size: {{ size }}x{{ size }}px</p>
                            <p>Error Correction: {{ errorCorrectionLevel }}</p>
                            <p v-if="getContentPreview()">Content: {{ getContentPreview() }}</p>
                        </div>
                    </div>

                    <div v-else class="text-center py-8 sm:py-12 bg-gray-50 rounded-lg">
                        <div class="text-gray-400">
                            <svg class="w-16 sm:w-24 h-16 sm:h-24 mx-auto mb-4" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h2M4 12h2m0 0h.01M4 12v4m0-4v-4m16 0V8m0 4h.01M12 8h4.01M12 8v4m-8 4h2m0 0h.01M8 12v4m0-4V8m0 4h.01" />
                            </svg>
                            <p class="text-base sm:text-lg">QR Code Preview</p>
                            <p class="text-xs sm:text-sm mt-2">Enter content and click generate to see your QR code</p>
                        </div>
                    </div>

                    <!-- History -->
                    <div v-if="history.length > 0">
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                            <h3 class="text-lg font-semibold">Recent QR Codes</h3>
                            <button @click="clearHistory"
                                class="text-red-600 hover:text-red-800 text-xs sm:text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50 transition-colors">
                                Clear History
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div v-for="(item, index) in history.slice(-3).reverse()" :key="index"
                                class="bg-gray-50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <div class="flex items-center space-x-3 sm:space-x-4">
                                    <img :src="item.qr" class="w-12 h-12 sm:w-16 sm:h-16" />
                                    <div>
                                        <p class="font-medium text-xs sm:text-sm">{{ item.type }}</p>
                                        <p class="text-xs text-gray-500">{{ item.timestamp }}</p>
                                    </div>
                                </div>
                                <div class="flex gap-2">
                                    <button @click="loadFromHistory(item)"
                                        class="text-blue-600 hover:text-blue-800 text-xs sm:text-sm">
                                        Load
                                    </button>
                                    <button @click="downloadHistoryItem(item)"
                                        class="text-green-600 hover:text-green-800 text-xs sm:text-sm">
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToolSeoContent title="QR Code Generator" :description="seoDescription" :steps="seoSteps" :faqs="seoFaqs" />

        </div>
    </div>
</template>

<script setup>
import { ref, inject, computed } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";
import QRCode from "qrcode";

const Swal = inject('Swal');

const contentType = ref('text');
const text = ref('');
const size = ref('300');
const errorCorrection = ref('M');
const darkColor = ref('#000000');
const lightColor = ref('#FFFFFF');
const qr = ref('');
const history = ref([]);

// Data for different content types
const emailData = ref({
    address: '',
    subject: '',
    message: ''
});

const phone = ref('');

const wifiData = ref({
    ssid: '',
    password: '',
    security: 'WPA'
});

const smsData = ref({
    phone: '',
    message: ''
});

const errorCorrectionLevel = computed(() => {
    const levels = {
        'L': 'Low (7%)',
        'M': 'Medium (15%)',
        'Q': 'Quartile (25%)',
        'H': 'High (30%)'
    };
    return levels[errorCorrection.value] || 'Medium (15%)';
});

const getContent = () => {
    switch (contentType.value) {
        case 'text':
            return text.value;
        case 'url':
            return text.value;
        case 'email':
            let emailContent = `mailto:${emailData.value.address}`;
            if (emailData.value.subject || emailData.value.message) {
                emailContent += '?';
                const params = [];
                if (emailData.value.subject) params.push(`subject=${encodeURIComponent(emailData.value.subject)}`);
                if (emailData.value.message) params.push(`body=${encodeURIComponent(emailData.value.message)}`);
                emailContent += params.join('&');
            }
            return emailContent;
        case 'phone':
            return `tel:${phone.value}`;
        case 'wifi':
            const wifiContent = `WIFI:T:${wifiData.value.security};S:${wifiData.value.ssid};P:${wifiData.value.password};;`;
            return wifiContent;
        case 'sms':
            return `sms:${smsData.value.phone}?body=${encodeURIComponent(smsData.value.message)}`;
        default:
            return text.value;
    }
};

const getContentPreview = () => {
    const content = getContent();
    if (content.length > 50) {
        return content.substring(0, 50) + '...';
    }
    return content;
};

const generate = async () => {
    const content = getContent();

    if (!content || content.trim() === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Missing Content',
            text: 'Please enter content to generate QR code',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
        return;
    }

    try {
        const options = {
            width: parseInt(size.value),
            errorCorrectionLevel: errorCorrection.value,
            color: {
                dark: darkColor.value,
                light: lightColor.value
            },
            margin: 1
        };

        qr.value = await QRCode.toDataURL(content, options);

        // Add to history
        history.value.push({
            qr: qr.value,
            type: contentType.value,
            content: content,
            timestamp: new Date().toLocaleTimeString(),
            size: size.value,
            darkColor: darkColor.value,
            lightColor: lightColor.value
        });

        Swal.fire({
            icon: 'success',
            title: 'QR Code Generated!',
            text: 'Your QR code has been created successfully',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });
    } catch (error) {
        console.error('Error generating QR code:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to generate QR code. Please check your input.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }
};

const downloadQR = () => {
    if (!qr.value) return;

    const link = document.createElement('a');
    link.download = `qrcode-${Date.now()}.png`;
    link.href = qr.value;
    link.click();

    Swal.fire({
        icon: 'success',
        title: 'Downloaded!',
        text: 'QR code downloaded successfully',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    });
};

const copyQR = async () => {
    if (!qr.value) return;

    try {
        // Convert data URL to blob
        const response = await fetch(qr.value);
        const blob = await response.blob();

        await navigator.clipboard.write([
            new ClipboardItem({
                'image/png': blob
            })
        ]);

        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'QR code copied to clipboard',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });
    } catch (error) {
        console.error('Error copying QR code:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to copy QR code to clipboard',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }
};

const reset = () => {
    qr.value = '';
    text.value = '';
    emailData.value = { address: '', subject: '', message: '' };
    phone.value = '';
    wifiData.value = { ssid: '', password: '', security: 'WPA' };
    smsData.value = { phone: '', message: '' };
};

const loadFromHistory = (item) => {
    qr.value = item.qr;
    size.value = item.size;
    darkColor.value = item.darkColor;
    lightColor.value = item.lightColor;
    contentType.value = item.type;
};

const downloadHistoryItem = (item) => {
    const link = document.createElement('a');
    link.download = `qrcode-${item.timestamp.replace(/:/g, '-')}.png`;
    link.href = item.qr;
    link.click();
};

const clearHistory = () => {
    history.value = [];
};

const seoDescription = "Advanced QR code generator with multiple content types, customization options, and batch generation. Create QR codes for URLs, text, email, phone, WiFi, and SMS with custom colors and sizes.";

const seoSteps = [
    "Choose your content type (Text, URL, Email, Phone, WiFi, or SMS)",
    "Enter the required information for your selected content type",
    "Customize QR code settings (size, colors, error correction)",
    "Click 'Generate QR Code' to create your QR code",
    "Download the image or copy it to clipboard",
    "View and manage your QR code history"
];

const seoFaqs = [
    {
        question: "What types of content can I encode in QR codes?",
        answer: "You can encode plain text, URLs, email addresses, phone numbers, WiFi credentials, and SMS messages. Each type has specific formatting for optimal functionality."
    },
    {
        question: "What are the error correction levels?",
        answer: "Error correction levels determine how much damage a QR code can withstand while remaining readable: Low (7%), Medium (15%), Quartile (25%), and High (30%). Higher levels allow more damage but create denser codes."
    },
    {
        question: "Can I customize the colors of QR codes?",
        answer: "Yes! You can choose custom foreground and background colors. For best readability, ensure high contrast between colors and avoid very light colors for the foreground."
    },
    {
        question: "What sizes are available for QR codes?",
        answer: "You can generate QR codes in four sizes: Small (200px), Medium (300px), Large (400px), and Extra Large (500px). Larger sizes are better for printing."
    },
    {
        question: "Can I copy QR codes directly to clipboard?",
        answer: "Yes! You can copy QR codes as images to your clipboard for easy pasting into other applications. This works in modern browsers that support the Clipboard API."
    }
];
</script>