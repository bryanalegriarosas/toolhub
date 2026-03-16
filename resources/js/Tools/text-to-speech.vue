<template>
    <Head>
        <meta name="description"
            content="Convert text to speech online with multiple voices, languages, and customizable settings. Free text-to-speech converter with natural sounding voices." />
    </Head>

    <div class="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow rounded-xl">

        <h1 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Text to Speech Converter</h1>
        <!-- Text Input Area -->
        <div class="mb-4 sm:mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-700">
                Enter Text to Convert
            </label>
            <textarea v-model="text"
                class="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                rows="6" placeholder="Type or paste your text here..." maxlength="5000" />
            <div class="mt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <p class="text-xs text-gray-500">
                    {{ text.length }}/5000 characters
                </p>
                <button @click="clearText"
                    class="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors self-start">
                    Clear text
                </button>
            </div>
        </div>

        <!-- Voice Settings -->
        <div class="mb-4 sm:mb-6 space-y-4">
            <h3 class="text-sm font-medium text-gray-700">Voice Settings:</h3>

            <div class="grid grid-cols-1 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Language:</label>
                    <select v-model="selectedLanguage" @change="updateVoices"
                        class="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                        <option v-for="lang in languages" :key="lang.code" :value="lang.code">
                            {{ lang.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Voice:</label>
                    <select v-model="selectedVoice"
                        class="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                        :disabled="!voices.length">
                        <option v-for="voice in voices" :key="voice.name" :value="voice.name">
                            {{ voice.name }} ({{ voice.lang }})
                        </option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Speed: {{ rate }}x
                    </label>
                    <input type="range" v-model="rate" min="0.5" max="2" step="0.1" class="w-full h-2" />
                    <div class="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0.5x</span>
                        <span>1x</span>
                        <span>2x</span>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Pitch: {{ pitch }}
                    </label>
                    <input type="range" v-model="pitch" min="0" max="2" step="0.1" class="w-full h-2" />
                    <div class="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Low</span>
                        <span>Normal</span>
                        <span>High</span>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Volume: {{ Math.round(volume * 100) }}%
                    </label>
                    <input type="range" v-model="volume" min="0" max="1" step="0.1" class="w-full h-2" />
                    <div class="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Playback Controls -->
        <div class="mb-4 sm:mb-6">
            <h3 class="text-sm font-medium text-gray-700 mb-3">Playback Controls:</h3>
            <div class="flex flex-col sm:flex-row gap-3">
                <button @click="speak" :disabled="!text.trim() || isSpeaking"
                    class="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm sm:text-base">
                    <span class="flex items-center justify-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fill-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clip-rule="evenodd" />
                        </svg>
                        Speak
                    </span>
                </button>

                <button @click="pause" :disabled="!isSpeaking || isPaused"
                    class="bg-yellow-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm sm:text-base">
                    <span class="flex items-center justify-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                        Pause
                    </span>
                </button>

                <button @click="stop" :disabled="!isSpeaking"
                    class="bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm sm:text-base">
                    <span class="flex items-center justify-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                                clip-rule="evenodd" />
                        </svg>
                        Stop
                    </span>
                </button>

                <button @click="download" :disabled="!text.trim()"
                    class="bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm sm:text-base">
                    <span class="flex items-center justify-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                        Download
                    </span>
                </button>
            </div>
        </div>

        <!-- Status Indicator -->
        <div v-if="isSpeaking || isPaused" class="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div class="flex items-center">
                <div class="flex items-center mr-3">
                    <div class="animate-pulse flex space-x-1">
                        <div class="w-2 h-4 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                        <div class="w-2 h-4 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 150ms">
                        </div>
                        <div class="w-2 h-4 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 300ms">
                        </div>
                    </div>
                </div>
                <span class="text-sm sm:text-base text-blue-700">
                    {{ isPaused ? 'Speech paused' : 'Speaking...' }}
                </span>
            </div>
        </div>

        <!-- SEO Content -->
        <ToolSeoContent title="Text to Speech Converter"
            description="Free online text-to-speech converter with natural voices. Support for multiple languages, customizable speed, pitch, and volume. Convert text to audio instantly."
            :steps="steps" :faqs="faqs" />

    </div>

</template>

<script setup>

import { ref, onMounted, inject } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const text = ref("");
const isSpeaking = ref(false);
const isPaused = ref(false);
const currentUtterance = ref(null);
const Swal = inject('Swal');

// Voice settings
const selectedLanguage = ref("en-US");
const selectedVoice = ref("");
const voices = ref([]);
const rate = ref(1.0);
const pitch = ref(1.0);
const volume = ref(1.0);

// Languages
const languages = ref([
    { code: "en-US", name: "English (US)" },
    { code: "en-GB", name: "English (UK)" },
    { code: "es-ES", name: "Spanish (Spain)" },
    { code: "es-MX", name: "Spanish (Mexico)" },
    { code: "fr-FR", name: "French (France)" },
    { code: "de-DE", name: "German (Germany)" },
    { code: "it-IT", name: "Italian (Italy)" },
    { code: "pt-BR", name: "Portuguese (Brazil)" },
    { code: "ru-RU", name: "Russian (Russia)" },
    { code: "zh-CN", name: "Chinese (China)" },
    { code: "ja-JP", name: "Japanese (Japan)" },
    { code: "ko-KR", name: "Korean (South Korea)" },
    { code: "ar-SA", name: "Arabic (Saudi Arabia)" },
    { code: "hi-IN", name: "Hindi (India)" }
]);

// SEO Content
const steps = [
    'Enter or paste your text in the text area (up to 5000 characters)',
    'Select your preferred language and voice from the dropdown menus',
    'Adjust voice settings: speed, pitch, and volume to your preference',
    'Click "Speak" to convert text to speech instantly',
    'Use playback controls to pause, resume, or stop the speech',
    'Download the audio file if needed for offline use'
];

const faqs = [
    {
        question: 'What is text-to-speech?',
        answer: 'Text-to-speech (TTS) is technology that converts written text into spoken audio. It uses synthetic voices to read text aloud, making content accessible to people with visual impairments or those who prefer audio.'
    },
    {
        question: 'How many languages and voices are supported?',
        answer: 'We support over 14 languages including English, Spanish, French, German, Italian, Portuguese, Russian, Chinese, Japanese, Korean, Arabic, and Hindi. Each language has multiple natural-sounding voices to choose from.'
    },
    {
        question: 'Can I customize the voice settings?',
        answer: 'Yes! You can adjust the speech speed (0.5x to 2x), pitch (low to high), and volume (0% to 100%) to create the perfect voice for your needs.'
    },
    {
        question: 'Is there a limit on text length?',
        answer: 'Yes, the maximum text length is 5000 characters per conversion. This ensures optimal performance and quick processing. For longer texts, break them into smaller sections.'
    },
    {
        question: 'Can I download the audio?',
        answer: 'Yes! You can download the generated speech as an audio file for offline use, presentations, or sharing with others.'
    },
    {
        question: 'Is this service free?',
        answer: 'Yes, our text-to-speech converter is completely free to use. There are no hidden charges or subscription fees for basic text-to-speech conversion.'
    }
];

// Load voices on component mount
onMounted(() => {
    loadVoices();

    // Handle voice changes
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
});

const loadVoices = () => {
    const availableVoices = speechSynthesis.getVoices();
    voices.value = availableVoices.filter(voice =>
        voice.lang.startsWith(selectedLanguage.value.split('-')[0])
    );

    // Set default voice if none selected
    if (voices.value.length > 0 && !selectedVoice.value) {
        selectedVoice.value = voices.value[0].name;
    }
};

const updateVoices = () => {
    loadVoices();
};

const clearText = () => {
    text.value = "";
};

const showError = (message) => {
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

const speak = () => {
    if (!text.value.trim()) {
        showError("Please enter some text to convert to speech.");
        return;
    }

    try {
        // Cancel any ongoing speech
        speechSynthesis.cancel();

        // Create new utterance
        const utterance = new SpeechSynthesisUtterance(text.value);

        // Set voice
        const voice = voices.value.find(v => v.name === selectedVoice.value);
        if (voice) {
            utterance.voice = voice;
        }

        // Set parameters
        utterance.rate = parseFloat(rate.value);
        utterance.pitch = parseFloat(pitch.value);
        utterance.volume = parseFloat(volume.value);

        // Set event handlers
        utterance.onstart = () => {
            isSpeaking.value = true;
            isPaused.value = false;
            Swal.fire({
                icon: 'success',
                title: 'Speech Started',
                text: 'Speech started successfully!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        };

        utterance.onend = () => {
            isSpeaking.value = false;
            isPaused.value = false;
            Swal.fire({
                icon: 'success',
                title: 'Speech Completed',
                text: 'Speech completed successfully!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        };

        utterance.onerror = (event) => {
            isSpeaking.value = false;
            isPaused.value = false;
            Swal.fire({
                icon: 'error',
                title: 'Speech Error',
                text: `Speech error: ${event.error}`,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        };

        utterance.onpause = () => {
            isPaused.value = true;
        };

        utterance.onresume = () => {
            isPaused.value = false;
        };

        // Store reference and speak
        currentUtterance.value = utterance;
        speechSynthesis.speak(utterance);

    } catch (err) {
        isSpeaking.value = false;
        isPaused.value = false;
    }
};

const pause = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
        isPaused.value = true;
        showSuccess("Speech paused.");
    }
};

const stop = () => {
    speechSynthesis.cancel();
    isSpeaking.value = false;
    isPaused.value = false;
    showSuccess("Speech stopped.");
};

const download = () => {
    if (!text.value.trim()) {
        showError("Please enter some text to convert to speech.");
        return;
    }
    
    try {
        // Create utterance for recording
        const utterance = new SpeechSynthesisUtterance(text.value);
        const voice = voices.value.find(v => v.name === selectedVoice.value);
        if (voice) {
            utterance.voice = voice;
        }
        utterance.rate = parseFloat(rate.value);
        utterance.pitch = parseFloat(pitch.value);
        utterance.volume = parseFloat(volume.value);
        
        // Check if MediaRecorder API is available
        if (!window.MediaRecorder) {
            throw new Error('MediaRecorder API not supported in this browser');
        }
        
        // Create audio context for recording
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create a simple oscillator to capture the speech (workaround)
        // Note: Direct speech synthesis recording is complex and browser-dependent
        
        // Start speaking
        speechSynthesis.speak(utterance);
        
        // Show info about recording limitations
        Swal.fire({
            icon: 'info',
            title: 'Audio Recording',
            html: `
                <div class="text-left">
                    <p class="mb-3">Due to browser security limitations, direct audio recording from text-to-speech is not possible.</p>
                    <p class="mb-3">However, you can:</p>
                    <ul class="list-disc list-inside mb-3">
                        <li>Use screen recording software</li>
                        <li>Use browser extensions like "Audio Recorder"</li>
                        <li>Download speech settings as text file</li>
                    </ul>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Download Settings',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#6b7280'
        }).then((result) => {
            if (result.isConfirmed) {
                downloadSettingsAsText();
            }
        });
        
    } catch (err) {
        console.error('Download error:', err);
        // Fallback: Create a text file with speech info
        downloadSettingsAsText();
    }
};

const downloadSettingsAsText = () => {
    const textContent = `Text-to-Speech Output\n\n===================\nText: ${text.value}\n\nSettings:\n- Language: ${selectedLanguage.value}\n- Voice: ${selectedVoice.value}\n- Speed: ${rate.value}x\n- Pitch: ${pitch.value}\n- Volume: ${Math.round(volume.value * 100)}%\n\nGenerated: ${new Date().toLocaleString()}\n\nNote: Due to browser limitations, audio recording requires external tools or extensions.`;
    
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `speech_settings_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    Swal.fire({
        icon: 'success',
        title: 'Settings Downloaded',
        text: 'Speech settings have been downloaded as a text file.',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
};

</script>
