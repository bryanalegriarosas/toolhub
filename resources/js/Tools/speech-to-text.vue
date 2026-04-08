<template>
    <div class="max-w-6xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-800 shadow rounded-xl">
        <h1 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{{ t('speechToText.title') }}</h1>
        <!-- Recording Controls -->
        <div class="mb-4 sm:mb-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{{ t('speechToText.recording_controls') }}</h3>
            <div class="flex flex-col sm:flex-row gap-3">
                <button @click="startRecording" :disabled="isRecording"
                    class="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm sm:text-base">
                    <span class="flex items-center justify-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M7 4a3 3 0 00-3 3v10a3 3 0 003 3h3a3 3 0 003-3V7zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                        {{ t('speechToText.start_recording') }}
                    </span>
                </button>

                <button @click="stopRecording" :disabled="!isRecording"
                    class="bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm sm:text-base">
                    <span class="flex items-center justify-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                                clip-rule="evenodd" />
                        </svg>
                        {{ t('speechToText.stop_recording') }}
                    </span>
                </button>

                <button @click="clearText"
                    class="bg-gray-500 dark:bg-gray-400 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded transition-colors text-sm sm:text-base">
                    <span class="flex items-center justify-center">
                        <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6L18 18M6 18L18 6" />
                        </svg>
                        {{ t('speechToText.clear_text') }}
                    </span>
                </button>

                <button @click="downloadText" :disabled="!text.trim()"
                    class="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm sm:text-base">
                    <span class="flex items-center justify-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                        {{ t('speechToText.download_text') }}
                    </span>
                </button>
            </div>
        </div>

        <!-- Voice Settings -->
        <div class="mb-4 sm:mb-6 space-y-4">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('speechToText.voice_settings') }}</h3>

            <div class="grid grid-cols-1 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('speechToText.language') }}</label>
                    <select v-model="selectedLanguage" @change="updateLanguage"
                        class="w-full p-2 sm:p-3 border dark:border-gray-600 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                        <option value="en-US">English (US)</option>
                        <option value="en-GB">English (UK)</option>
                        <option value="es-ES">Spanish (Spain)</option>
                        <option value="es-MX">Spanish (Mexico)</option>
                        <option value="fr-FR">French (France)</option>
                        <option value="de-DE">German (Germany)</option>
                        <option value="it-IT">Italian (Italy)</option>
                        <option value="pt-BR">Portuguese (Brazil)</option>
                        <option value="zh-CN">Chinese (China)</option>
                        <option value="ja-JP">Japanese (Japan)</option>
                        <option value="ko-KR">Korean (South Korea)</option>
                        <option value="ar-SA">Arabic (Saudi Arabia)</option>
                        <option value="hi-IN">Hindi (India)</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('speechToText.confidence_threshold') }}</label>
                    <input type="range" v-model="confidenceThreshold" min="0" max="1" step="0.1" class="w-full h-2" />
                    <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span>{{ t('speechToSpeech.low') }} (0)</span>
                        <span>{{ t('speechToSpeech.medium') }} (0.5)</span>
                        <span>{{ t('speechToSpeech.high') }} (1)</span>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('speechToText.max_recording_time') }}</label>
                    <select v-model="maxRecordingTime"
                        class="w-full p-2 sm:p-3 border dark:border-gray-600 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                        <option value="30">30 {{ t('speechToText.seconds') }}</option>
                        <option value="60">{{ t('speechToText.minute') }}</option>
                        <option value="120">{{ t('speechToText.minutes_2') }}</option>
                        <option value="300">{{ t('speechToText.minutes_5') }}</option>
                        <option value="0">{{ t('speechToText.unlimited') }}</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Text Output Area -->
        <div class="mb-4 sm:mb-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{{ t('speechToText.transcribed_text') }}</h3>
            <div class="relative">
                <textarea v-model="text"
                    class="w-full p-3 sm:p-4 border dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                    :placeholder="t('speechToText.transcribed_text_placeholder')" readonly />
                <div class="absolute top-2 right-2 flex gap-2">
                    <button @click="copyText" :disabled="!text.trim()"
                        class="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                        {{ t('speechToText.copy') }}
                    </button>
                    <button @click="downloadText" :disabled="!text.trim()"
                        class="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                        {{ t('speechToText.download') }}
                    </button>
                </div>
            </div>
            <div class="mt-2 flex justify-between items-center">
                <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ text.length }} {{ t('speechToText.characters') }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ isRecording ? t('speechToText.recording') : t('speechToText.not_recording') }}
                </p>
            </div>
        </div>

        <!-- Status Indicator -->
        <div v-if="isRecording" class="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
            <div class="flex items-center">
                <div class="flex items-center mr-3">
                    <div class="animate-pulse flex space-x-1">
                        <div class="w-2 h-4 bg-red-500 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                        <div class="w-2 h-4 bg-red-500 rounded-full animate-bounce" style="animation-delay: 150ms">
                        </div>
                        <div class="w-2 h-4 bg-red-500 rounded-full animate-bounce" style="animation-delay: 300ms">
                        </div>
                    </div>
                </div>
                <span class="text-sm sm:text-base text-red-700">
                    {{ t('speechToText.recording_in_progress') }}
                </span>
            </div>
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
import { ref, onMounted, inject, computed } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('speechToText.title'));
const mainDescription = computed(() => t('speechToText.mainDescription'));
const extendedDescription = computed(() => t('speechToText.extendedDescription'));
const features = computed(() => t('speechToText.features'));
const steps = computed(() => t('speechToText.steps'));
const examples = computed(() => t('speechToText.examples'));
const useCases = computed(() => t('speechToText.useCases'));
const technicalDetails = computed(() => t('speechToText.technicalDetails'));
const bestPractices = computed(() => t('speechToText.bestPractices'));
const commonErrors = computed(() => t('speechToText.commonErrors'));
const alternatives = computed(() => t('speechToText.alternatives'));
const relatedTools = computed(() => t('speechToText.relatedTools'));
const faqs = computed(() => t('speechToText.faqs'));
const securityNote = computed(() => t('speechToText.securityNote'));
const additionalContent = computed(() => t('speechToText.additionalContent'));

const text = ref("");
const error = ref(null);
const success = ref(null);
const isRecording = ref(false);
const recognition = ref(null);
const selectedLanguage = ref("en-US");
const confidenceThreshold = ref(0.5);
const maxRecordingTime = ref(60);
const recordingTimer = ref(null);
const recordingStartTime = ref(null);
const Swal = inject('Swal');

// Initialize speech recognition
onMounted(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition.value = new SpeechRecognition();

        // Configure recognition
        recognition.value.continuous = true;
        recognition.value.interimResults = true;
        recognition.value.lang = selectedLanguage.value;

        // Event handlers
        recognition.value.onstart = () => {
            isRecording.value = true;
            recordingStartTime.value = Date.now();
            startRecordingTimer();
            showSuccess("Recording started. Speak clearly!");
        };

        recognition.value.onresult = (event) => {
            let finalTranscript = '';
            let interimTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                if (result.isFinal && result[0].confidence >= confidenceThreshold.value) {
                    finalTranscript += result[0].transcript + ' ';
                } else if (!result.isFinal) {
                    interimTranscript = result[0].transcript;
                }
            }

            if (finalTranscript) {
                text.value = text.value + finalTranscript;
            }

            // Show interim results
            if (interimTranscript && !finalTranscript) {
                // You could show this in a separate UI element if needed
            }
        };

        recognition.value.onerror = (event) => {
            isRecording.value = false;
            stopRecordingTimer();
            showError(`Recognition error: ${event.error}`);
        };

        recognition.value.onend = () => {
            isRecording.value = false;
            stopRecordingTimer();
            showSuccess("Recording stopped.");
        };

    } else {
        showError('Speech recognition is not supported in this browser.');
    }
});

const startRecordingTimer = () => {
    if (maxRecordingTime.value > 0) {
        recordingTimer.value = setTimeout(() => {
            if (isRecording.value) {
                stopRecording();
                showSuccess(`Recording stopped after ${maxRecordingTime.value} seconds.`);
            }
        }, maxRecordingTime.value * 1000);
    }
};

const stopRecordingTimer = () => {
    if (recordingTimer.value) {
        clearTimeout(recordingTimer.value);
        recordingTimer.value = null;
    }
};

const showError = (message) => {
    error.value = message;
    if (Swal) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }
};

const showSuccess = (message) => {
    success.value = message;
    if (Swal) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: message,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }
};

const startRecording = () => {
    if (!recognition.value) {
        showError('Speech recognition is not available.');
        return;
    }

    try {
        // Reset text for new recording
        text.value = '';

        // Update recognition settings
        recognition.value.lang = selectedLanguage.value;

        // Start recognition
        recognition.value.start();

    } catch (err) {
        showError(`Failed to start recording: ${err.message}`);
    }
};

const stopRecording = () => {
    if (!recognition.value || !isRecording.value) {
        return;
    }

    try {
        recognition.value.stop();
        stopRecordingTimer();

    } catch (err) {
        showError(`Failed to stop recording: ${err.message}`);
    }
};

const clearText = () => {
    text.value = '';
    error.value = null;
    success.value = null;
    showSuccess('Text cleared.');
};

const copyText = () => {
    if (!text.value.trim()) {
        showError('No text to copy.');
        return;
    }

    try {
        navigator.clipboard.writeText(text.value).then(() => {
            showSuccess('Text copied to clipboard!');
        }).catch(err => {
            showError('Failed to copy text.');
        });
    } catch (err) {
        showError('Clipboard not available.');
    }
};

const downloadText = () => {
    if (!text.value.trim()) {
        showError('No text to download.');
        return;
    }

    try {
        const content = `Speech-to-Text Transcription\n\n===================\nLanguage: ${selectedLanguage.value}\nConfidence Threshold: ${confidenceThreshold.value}\nRecording Time Limit: ${maxRecordingTime.value}s\n\nTranscribed Text:\n${text.value}\n\nGenerated: ${new Date().toLocaleString()}\n\nNote: This transcription was generated using real-time speech recognition.`;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `transcription_${Date.now()}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showSuccess('Text downloaded successfully!');

    } catch (err) {
        showError('Failed to download text.');
    }
};

const updateLanguage = () => {
    if (recognition.value) {
        recognition.value.lang = selectedLanguage.value;
        showSuccess(`Language changed to ${selectedLanguage.value}`);
    }
};

</script>
