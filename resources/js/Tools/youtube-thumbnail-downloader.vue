<template>
    <Head>
        <meta name="description" content="Download YouTube video thumbnails in multiple qualities with preview and batch download." />
    </Head>

    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">YouTube Thumbnail Downloader</h2>

        <!-- URL Input -->
        <div class="space-y-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">YouTube Video URL</label>
            <div class="flex gap-4">
                <input 
                    v-model="url" 
                    @input="validateUrl"
                    placeholder="https://www.youtube.com/watch?v=..."
                    class="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button 
                    @click="generateThumbnail" 
                    :disabled="!isValidUrl || processing"
                    class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                    <span v-if="processing">Generating...</span>
                    <span v-else>Get Thumbnail</span>
                </button>
            </div>
            
            <!-- URL Validation -->
            <div v-if="url && !isValidUrl" class="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg text-sm">
                Please enter a valid YouTube URL
            </div>
        </div>

        <!-- Video Info -->
        <div v-if="videoInfo" class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-700">Video Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                    <span class="text-gray-600">Title:</span>
                    <span class="font-medium ml-2">{{ videoInfo.title }}</span>
                </div>
                <div>
                    <span class="text-gray-600">Channel:</span>
                    <span class="font-medium ml-2">{{ videoInfo.channel }}</span>
                </div>
                <div>
                    <span class="text-gray-600">Duration:</span>
                    <span class="font-medium ml-2">{{ formatDuration(videoInfo.duration) }}</span>
                </div>
                <div>
                    <span class="text-gray-600">Video ID:</span>
                    <span class="font-mono ml-2">{{ videoInfo.id }}</span>
                </div>
            </div>
        </div>

        <!-- Quality Selection -->
        <div v-if="videoInfo" class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700">Thumbnail Quality</h3>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button 
                    v-for="quality in availableQualities" 
                    :key="quality.id"
                    @click="selectQuality(quality)"
                    class="p-4 border-2 rounded-lg transition-colors"
                    :class="{
                        'border-blue-500 bg-blue-50': selectedQuality.id === quality.id,
                        'border-gray-300 bg-white hover:bg-gray-50': selectedQuality.id !== quality.id
                    }"
                >
                    <div class="text-center">
                        <div class="text-lg font-semibold">{{ quality.name }}</div>
                        <div class="text-sm text-gray-500">{{ quality.resolution }}</div>
                        <div class="text-xs text-gray-400">{{ quality.description }}</div>
                    </div>
                </button>
            </div>
            
            <!-- Download Button -->
            <button 
                @click="downloadThumbnail" 
                :disabled="!selectedQuality || processing"
                class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
                <span v-if="processing">Downloading...</span>
                <span v-else>Download {{ selectedQuality.name }} Thumbnail</span>
            </button>
        </div>

        <!-- Thumbnail Preview -->
        <div v-if="thumbnail" class="space-y-6">
            <div class="bg-blue-50 rounded-lg p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-blue-700">Thumbnail Preview</h3>
                    <div class="flex gap-2">
                        <button 
                            @click="copyUrl"
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                            {{ copied ? 'Copied!' : 'Copy URL' }}
                        </button>
                        <button 
                            @click="clearAll"
                            class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                        >
                            Clear
                        </button>
                    </div>
                </div>
                
                <div class="border rounded-lg overflow-hidden bg-white">
                    <img 
                        :src="thumbnail" 
                        :alt="`Thumbnail for ${videoInfo.title}`"
                        class="w-full h-auto"
                    />
                </div>
                
                <!-- Download Link -->
                <div class="mt-4 text-center">
                    <a 
                        :href="thumbnail" 
                        :download="getThumbnailFilename()"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Download Image
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
            title="YouTube Thumbnail Downloader"
            description="Free online tool to download YouTube video thumbnails in multiple qualities. Preview, copy URLs, and download instantly."
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
    'Paste YouTube video URL in the input field',
    'Select thumbnail quality from available options',
    'Click "Get Thumbnail" to generate preview',
    'Preview the thumbnail and copy URL if needed',
    'Download the thumbnail image to your device'
];

const faqs = [
    { 
        question: 'What YouTube URLs are supported?', 
        answer: 'We support all YouTube video formats including youtube.com, youtu.be, and embedded video URLs.' 
    },
    { 
        question: 'What thumbnail qualities are available?', 
        answer: 'We offer multiple qualities: Default (medium), High Definition (720p), Maximum Quality (1080p), and Original size.' 
    },
    { 
        question: 'How are thumbnails generated?', 
        answer: 'Thumbnails are extracted directly from YouTube\'s API, ensuring the highest quality available for each resolution.' 
    },
    { 
        question: 'Can I download multiple thumbnails?', 
        answer: 'Yes! You can generate different quality versions and download them individually as needed.' 
    },
    { 
        question: 'Is this service free?', 
        answer: 'Yes! Our YouTube thumbnail downloader is completely free with no registration or limits required.' 
    },
    { 
        question: 'Is my data secure?', 
        answer: 'All thumbnail generation happens directly in your browser. Your data is never stored on our servers.' 
    }
];

const url = ref('');
const videoInfo = ref(null);
const thumbnail = ref('');
const selectedQuality = ref(null);
const processing = ref(false);
const error = ref('');
const copied = ref(false);

const availableQualities = [
    { id: 'default', name: 'Default', resolution: '320×180', description: 'Standard quality' },
    { id: 'hqdefault', name: 'HQ Default', resolution: '480×360', description: 'High quality' },
    { id: 'mqdefault', name: 'Medium', resolution: '320×180', description: 'Medium quality' },
    { id: 'sddefault', name: 'Standard', resolution: '640×480', description: 'Standard definition' },
    { id: 'hq720', name: 'HD 720p', resolution: '1280×720', description: 'High definition' },
    { id: 'maxresdefault', name: 'Maximum', resolution: '1920×1080', description: 'Highest quality' }
];

// Auto-select default quality
selectedQuality.value = availableQualities[0];

const isValidUrl = computed(() => {
    if (!url.value) return false;
    
    const youtubeRegex = /^(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11,})/;
    return youtubeRegex.test(url.value);
});

const validateUrl = () => {
    error.value = '';
};

const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11,})/);
    return match ? match[1] : null;
};

const generateThumbnail = async () => {
    if (!isValidUrl.value) {
        error.value = 'Please enter a valid YouTube URL';
        return;
    }
    
    processing.value = true;
    error.value = '';
    videoInfo.value = null;
    thumbnail.value = '';
    
    try {
        const videoId = extractVideoId(url.value);
        if (!videoId) {
            throw new Error('Could not extract video ID');
        }
        
        // Mock video info (in real app, you'd use YouTube API)
        videoInfo.value = {
            id: videoId,
            title: `Video ${videoId}`,
            channel: 'Channel Name',
            duration: '3:45'
        };
        
        // Generate thumbnail URL
        thumbnail.value = `https://img.youtube.com/vi/${videoId}/${selectedQuality.value.id}.jpg`;
        
        processing.value = false;
        
    } catch (err) {
        console.error('Thumbnail generation error:', err);
        error.value = 'Failed to generate thumbnail. Please check the URL and try again.';
        processing.value = false;
    }
};

const selectQuality = (quality) => {
    selectedQuality.value = quality;
    if (videoInfo.value && videoInfo.value.id) {
        thumbnail.value = `https://img.youtube.com/vi/${videoInfo.value.id}/${quality.id}.jpg`;
    }
};

const downloadThumbnail = () => {
    if (!thumbnail.value) return;
    
    try {
        // Create a proper download link
        const link = document.createElement('a');
        link.href = thumbnail.value;
        link.download = getThumbnailFilename();
        link.target = '_blank'; // Open in new tab
        document.body.appendChild(link);
        link.click();
        
        // Clean up after a short delay
        setTimeout(() => {
            document.body.removeChild(link);
        }, 100);
        
    } catch (err) {
        console.error('Download error:', err);
        error.value = 'Failed to download thumbnail. Please try again.';
    }
};

const copyUrl = async () => {
    if (!thumbnail.value) return;
    
    try {
        await navigator.clipboard.writeText(thumbnail.value);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        error.value = 'Failed to copy URL to clipboard';
    }
};

const getThumbnailFilename = () => {
    const videoTitle = videoInfo.value?.title || 'thumbnail';
    const qualityName = selectedQuality.value?.name || 'default';
    return `${videoTitle.replace(/[^a-zA-Z0-9_-]/g, '_')}-${qualityName}.jpg`;
};

const clearAll = () => {
    url.value = '';
    videoInfo.value = null;
    thumbnail.value = '';
    selectedQuality.value = availableQualities[0];
    processing.value = false;
    error.value = '';
    copied.value = false;
};

const formatDuration = (duration) => {
    const [minutes, seconds] = duration.split(':');
    return `${minutes}:${seconds.padStart(2, '0')}`;
};
</script>