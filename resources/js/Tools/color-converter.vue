<template>
    <div class="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ t('colorConverter.title') }}</h1>

        <div class="flex flex-wrap gap-4 mb-8">
            <button
                @click="randomColor"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
                {{ t('colorConverter.random_color') }}
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition"
            >
                {{ t('colorConverter.clear') }}
            </button>
            <button
                @click="saveHistory"
                :disabled="!hex"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                {{ t('colorConverter.save_to_history') }}
            </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('colorConverter.hex') }}</label>
                    <div class="flex gap-2">
                        <input
                            v-model="hex"
                            :placeholder="t('colorConverter.placeholder_hex')"
                            class="w-full border dark:border-gray-600 rounded-lg p-3 font-mono uppercase"
                            maxlength="7"
                        />
                        <button @click="copyToClipboard(hex)" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200">
                            📋
                        </button>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('colorConverter.rgb') }}</label>
                    <div class="flex gap-2">
                        <input
                            :value="rgbResult"
                            readonly
                            class="w-full border dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-700 font-mono"
                        />
                        <button @click="copyToClipboard(rgbResult)" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200">
                            📋
                        </button>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('colorConverter.hsl') }}</label>
                    <div class="flex gap-2">
                        <input
                            :value="hslResult"
                            readonly
                            class="w-full border dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-700 font-mono"
                        />
                        <button @click="copyToClipboard(hslResult)" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200">
                            📋
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl p-6">
                <div 
                    class="w-full h-40 rounded-lg shadow-inner transition-colors duration-300 mb-4"
                    :style="{ backgroundColor: isValidHex ? hex : '#f3f4f6' }"
                ></div>
                <p class="text-sm text-gray-500 dark:text-gray-400 font-mono" v-if="isValidHex">
                    {{ hex.toUpperCase() }}
                </p>
                <p class="text-sm text-red-400" v-else-if="hex.length > 0">
                    {{ t('colorConverter.invalid_hex_format') }}
                </p>
            </div>
        </div>

        <div v-if="history.length" class="mt-12 border-t pt-6">
            <h3 class="font-semibold mb-4 text-lg">{{ t('colorConverter.recent_colors') }}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                <div
                    v-for="(item, idx) in history"
                    :key="idx"
                    class="group relative cursor-pointer"
                    @click="restore(item)"
                >
                    <div 
                        class="w-full h-16 rounded-md shadow-sm border group-hover:ring-2 ring-indigo-400 transition"
                        :style="{ backgroundColor: item.hex }"
                    ></div>
                    <p class="text-[10px] mt-1 font-mono text-center">{{ item.hex }}</p>
                </div>
            </div>
            <button @click="history = []" class="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600 transition">
                {{ t('colorConverter.clear_history') }}
            </button>
        </div>

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
const title = computed(() => t('colorConverter.title'));
const mainDescription = computed(() => t('colorConverter.mainDescription'));
const extendedDescription = computed(() => t('colorConverter.extendedDescription'));
const features = computed(() => t('colorConverter.features'));
const steps = computed(() => t('colorConverter.steps'));
const examples = computed(() => t('colorConverter.examples'));
const useCases = computed(() => t('colorConverter.useCases'));
const technicalDetails = computed(() => t('colorConverter.technicalDetails'));
const bestPractices = computed(() => t('colorConverter.bestPractices'));
const commonErrors = computed(() => t('colorConverter.commonErrors'));
const alternatives = computed(() => t('colorConverter.alternatives'));
const relatedTools = computed(() => t('colorConverter.relatedTools'));
const faqs = computed(() => t('colorConverter.faqs'));
const securityNote = computed(() => t('colorConverter.securityNote'));
const additionalContent = computed(() => t('colorConverter.additionalContent'));

const hex = ref("#4F46E5");
const history = ref([]);

// Validación de HEX
const isValidHex = computed(() => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex.value);
});

// Lógica de Conversión HEX -> RGB
const hexToRgb = (hexValue) => {
    let clean = hexValue.replace("#", "");
    if (clean.length === 3) {
        clean = clean.split('').map(s => s + s).join('');
    }
    if (clean.length !== 6) return null;

    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);

    return { r, g, b, str: `rgb(${r}, ${g}, ${b})` };
};

// Lógica de Conversión RGB -> HSL
const rgbToHsl = (r, g, b) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
};

const rgbResult = computed(() => {
    const res = hexToRgb(hex.value);
    return res ? res.str : "—";
});

const hslResult = computed(() => {
    const res = hexToRgb(hex.value);
    return res ? rgbToHsl(res.r, res.g, res.b) : "—";
});

// Acciones
const copyToClipboard = (text) => {
    if (!text || text === "—") return;
    navigator.clipboard.writeText(text);
    // Aquí podrías disparar una notificación de Toast
};

const randomColor = () => {
    const random = Math.floor(Math.random()*16777215).toString(16);
    hex.value = "#" + random.padStart(6, '0');
};

const clearAll = () => {
    hex.value = "";
};

const saveHistory = () => {
    if (isValidHex.value && !history.value.some(h => h.hex === hex.value)) {
        history.value.unshift({ hex: hex.value, date: new Date().toLocaleString() });
        if (history.value.length > 12) history.value.pop();
    }
};

const restore = (item) => {
    hex.value = item.hex;
};
</script>
