<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('youtubeThumbnailDownloader.title') }}</h2>

        <!-- URL Input -->
        <div class="space-y-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('youtubeThumbnailDownloader.youtube_video_url') }}</label>
            <div class="flex gap-4">
                <input 
                    v-model="url" 
                    @input="validateUrl"
                    placeholder="https://www.youtube.com/watch?v=..."
                    class="flex-1 px-4 py-3 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button 
                    @click="generateThumbnail" 
                    :disabled="!isValidUrl || processing"
                    class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                    <span v-if="processing">{{ t('youtubeThumbnailDownloader.generating') }}</span>
                    <span v-else>{{ t('youtubeThumbnailDownloader.get_thumbnail') }}</span>
                </button>
            </div>
            
            <!-- URL Validation -->
            <div v-if="url && !isValidUrl" class="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg text-sm">
                {{ t('youtubeThumbnailDownloader.please_enter_valid_url') }}
            </div>
        </div>

        <!-- Video Info -->
        <div v-if="videoInfo" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">{{ t('youtubeThumbnailDownloader.video_information') }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                    <span class="text-gray-600 dark:text-gray-400">{{ t('youtubeThumbnailDownloader.title_label') }}:</span>
                    <span class="font-medium ml-2">{{ videoInfo.title }}</span>
                </div>
                <div>
                    <span class="text-gray-600 dark:text-gray-400">{{ t('youtubeThumbnailDownloader.channel_label') }}:</span>
                    <span class="font-medium ml-2">{{ videoInfo.channel }}</span>
                </div>
                <div>
                    <span class="text-gray-600 dark:text-gray-400">{{ t('youtubeThumbnailDownloader.duration_label') }}:</span>
                    <span class="font-medium ml-2">{{ formatDuration(videoInfo.duration) }}</span>
                </div>
                <div>
                    <span class="text-gray-600 dark:text-gray-400">{{ t('youtubeThumbnailDownloader.video_id_label') }}:</span>
                    <span class="font-mono ml-2">{{ videoInfo.id }}</span>
                </div>
            </div>
        </div>

        <!-- Quality Selection -->
        <div v-if="videoInfo" class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('youtubeThumbnailDownloader.thumbnail_quality') }}</h3>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button 
                    v-for="quality in availableQualities" 
                    :key="quality.id"
                    @click="selectQuality(quality)"
                    class="p-4 border-2 rounded-lg transition-colors"
                    :class="{
                        'border-blue-500 bg-blue-50': selectedQuality.id === quality.id,
                        'border-gray-300 bg-white hover:bg-gray-50 dark:bg-gray-700': selectedQuality.id !== quality.id
                    }"
                >
                    <div class="text-center">
                        <div class="text-lg font-semibold">{{ quality.name }}</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">{{ quality.resolution }}</div>
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
                <span v-if="processing">{{ t('youtubeThumbnailDownloader.downloading') }}</span>
                <span v-else>Download {{ selectedQuality.name }} {{ t('youtubeThumbnailDownloader.download_image') }}</span>
            </button>
        </div>

        <!-- Thumbnail Preview -->
        <div v-if="thumbnail" class="space-y-6">
            <div class="bg-blue-50 rounded-lg p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-blue-700">{{ t('youtubeThumbnailDownloader.thumbnail_preview') }}</h3>
                    <div class="flex gap-2">
                        <button 
                            @click="copyUrl"
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                            {{ copied ? t('youtubeThumbnailDownloader.copied') : t('youtubeThumbnailDownloader.copy_url') }}
                        </button>
                        <button 
                            @click="clearAll"
                            class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                        >
                            {{ t('youtubeThumbnailDownloader.clear') }}
                        </button>
                    </div>
                </div>
                
                <div class="border dark:border-gray-600 rounded-lg overflow-hidden bg-white">
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
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('youtubeThumbnailDownloader.title'));
const mainDescription = computed(() => t('youtubeThumbnailDownloader.mainDescription'));
const extendedDescription = computed(() => t('youtubeThumbnailDownloader.extendedDescription'));
const features = computed(() => t('youtubeThumbnailDownloader.features'));
const steps = computed(() => t('youtubeThumbnailDownloader.steps'));
const examples = computed(() => t('youtubeThumbnailDownloader.examples'));
const useCases = computed(() => t('youtubeThumbnailDownloader.useCases'));
const technicalDetails = computed(() => t('youtubeThumbnailDownloader.technicalDetails'));
const bestPractices = computed(() => t('youtubeThumbnailDownloader.bestPractices'));
const commonErrors = computed(() => t('youtubeThumbnailDownloader.commonErrors'));
const alternatives = computed(() => t('youtubeThumbnailDownloader.alternatives'));
const relatedTools = computed(() => t('youtubeThumbnailDownloader.relatedTools'));
const faqs = computed(() => t('youtubeThumbnailDownloader.faqs'));
const securityNote = computed(() => t('youtubeThumbnailDownloader.securityNote'));
const additionalContent = computed(() => t('youtubeThumbnailDownloader.additionalContent'));

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