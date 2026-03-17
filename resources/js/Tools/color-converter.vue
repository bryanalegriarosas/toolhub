<template>
    <div class="max-w-6xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6">Color Converter</h1>

        <div class="flex flex-wrap gap-4 mb-8">
            <button
                @click="randomColor"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
                Random Color
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
                Clear
            </button>
            <button
                @click="saveHistory"
                :disabled="!hex"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                Save to History
            </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">HEX</label>
                    <div class="flex gap-2">
                        <input
                            v-model="hex"
                            placeholder="#000000"
                            class="w-full border rounded-lg p-3 font-mono uppercase"
                            maxlength="7"
                        />
                        <button @click="copyToClipboard(hex)" class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
                            📋
                        </button>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">RGB</label>
                    <div class="flex gap-2">
                        <input
                            :value="rgbResult"
                            readonly
                            class="w-full border rounded-lg p-3 bg-gray-50 font-mono"
                        />
                        <button @click="copyToClipboard(rgbResult)" class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
                            📋
                        </button>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">HSL</label>
                    <div class="flex gap-2">
                        <input
                            :value="hslResult"
                            readonly
                            class="w-full border rounded-lg p-3 bg-gray-50 font-mono"
                        />
                        <button @click="copyToClipboard(hslResult)" class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
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
                <p class="text-sm text-gray-500 font-mono" v-if="isValidHex">
                    {{ hex.toUpperCase() }}
                </p>
                <p class="text-sm text-red-400" v-else-if="hex.length > 0">
                    Formato HEX inválido
                </p>
            </div>
        </div>

        <div v-if="history.length" class="mt-12 border-t pt-6">
            <h3 class="font-semibold mb-4 text-lg">Colores Recientes</h3>
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
                Clear history
            </button>
        </div>

        <ToolSeoContent
            title="HEX to RGB/HSL Color Converter"
            description="Convert colors between HEX, RGB, and HSL formats instantly with visual preview."
            :steps="steps"
            :examples="examples"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

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

// Datos para SEO
const steps = [
    "Enter a color code in HEX format (e.g., #ff5733).",
    "See the automatic preview and conversions to RGB and HSL.",
    "Copy the format you need or save the color to your local history."
];

const examples = [
    {
        title: "Convert Brand Color",
        description: "Convert brand color from HEX to RGB and HSL for web development",
        code: "Input HEX: #3498db",
        result: "RGB: rgb(52, 152, 219) | HSL: hsl(204, 70%, 53%)"
    },
    {
        title: "Material Design Colors",
        description: "Convert Material Design color palette",
        code: "Input HEX: #f44336",
        result: "RGB: rgb(244, 67, 54) | HSL: hsl(4, 90%, 58%)",
        steps: [
            "Enter HEX color code",
            "View RGB for CSS opacity",
            "Use HSL for color variations",
            "Copy desired format for your project"
        ]
    },
    {
        title: "CSS Custom Properties",
        description: "Convert colors for CSS variables",
        code: "Input HEX: #2ecc71",
        result: "RGB: rgb(46, 204, 113) | HSL: hsl(145, 63%, 49%)"
    }
];

const faqs = [
    {
        question: "What formats does this tool support?",
        answer: "Currently it allows input of HEX codes and converts them to RGB and HSL."
    },
    {
        question: "Is the history saved permanently?",
        answer: "The history is maintained during the current browsing session."
    }
];
</script>
