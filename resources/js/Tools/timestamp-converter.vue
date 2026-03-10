<template>
    <Head>
        <title>Unix Timestamp Converter – ToolHub</title>
        <meta
            name="description"
            content="Convert between UNIX timestamp and a human-readable date. Supports seconds and milliseconds."
        />
        <meta property="og:title" content="Unix Timestamp Converter" />
        <meta
            property="og:description"
            content="Convert between UNIX timestamp and a human-readable date. Supports seconds and milliseconds."
        />
        <meta property="og:type" content="article" />
    </Head>

    <div class="max-w-6xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6">Unix Timestamp Converter</h1>

        <div class="space-y-6">
            <div>
                <label class="block text-sm mb-2"> Unix Timestamp </label>

                <input
                    v-model="timestamp"
                    type="number"
                    placeholder="1710000000"
                    class="w-full border rounded-lg p-3"
                />
            </div>

            <div>
                <label class="block text-sm mb-2"> Date </label>

                <input
                    v-model="date"
                    :type="dateOnly ? 'date' : 'datetime-local'"
                    class="w-full border rounded-lg p-3"
                />
            </div>

            <div class="flex items-center gap-4">
                <label class="flex items-center gap-2">
                    <input type="radio" value="seconds" v-model="unit" />
                    <span>Seconds</span>
                </label>
                <label class="flex items-center gap-2">
                    <input type="radio" value="milliseconds" v-model="unit" />
                    <span>Milliseconds</span>
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="dateOnly" />
                    <span>Use date-only input</span>
                </label>
            </div>

            <div class="flex gap-3">
                <button
                    @click="convert"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Convert
                </button>

                <button
                    @click="copyTimestamp"
                    :disabled="!timestamp"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                    Copy Timestamp
                </button>

                <button
                    @click="copyDate"
                    :disabled="!date"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                    Copy Date
                </button>

                <button
                    @click="clearAll"
                    class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                    Clear
                </button>
            </div>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">History</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li v-for="(h, idx) in history" :key="idx" class="flex items-center justify-between">
                    <span>{{ h }}</span>
                    <button @click="copyOne(h)" class="text-xs text-blue-600 hover:underline">Copy</button>
                </li>
            </ul>
            <button @click="clearHistory" class="mt-3 px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition">Clear History</button>
        </div>

        <ToolSeoContent
            title="Unix Timestamp Converter"
            description="A simple converter to switch between UNIX timestamps and human-readable dates. Supports seconds and milliseconds."
            :steps="steps"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Enter or generate a timestamp (seconds or milliseconds) or select a date",
    "Toggle 'Use date-only input' to switch between date and date+time",
    "Choose seconds or milliseconds",
    "Click Convert to update the other field",
    "Copy values or clear using the buttons",
];

const faqs = [
    {
        question: "What is a UNIX timestamp?",
        answer: "It represents the number of seconds (or milliseconds) that have elapsed since January 1, 1970 UTC.",
    },
    {
        question: "Can I use different time zones?",
        answer: "Conversion is performed in UTC; the date field will display the local time based on your browser's timezone.",
    },
    {
        question: "Does the date field include time?",
        answer: "Yes, you can specify both date and time. The converter uses your local time when calculating the timestamp.",
    },
    {
        question: "What does the date-only toggle do?",
        answer: "When 'Use date-only input' is enabled, the right-hand input switches to a simple date picker and the converter treats time as 00:00; when disabled it accepts both date and time.",
    },
];

const timestamp = ref("");
const date = ref("");
const unit = ref("seconds");
const dateOnly = ref(false);
const history = ref([]);

const timestampToDate = () => {
    if (!timestamp.value) return;
    const factor = unit.value === "milliseconds" ? 1 : 1000;
    const d = new Date(parseInt(timestamp.value) * factor);
    // format as local datetime-local string
    const pad = (n) => n.toString().padStart(2, "0");
    if (dateOnly.value) {
        date.value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T00:00:00`;
    } else {
        date.value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
            d.getHours()
        )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    }
};

const dateToTimestamp = () => {
    if (!date.value) return;
    let d;
    if (dateOnly.value) {
        // ignore time component
        const parts = date.value.split("T")[0];
        d = new Date(parts);
    } else {
        d = new Date(date.value);
    }
    const ms = d.getTime();
    timestamp.value = unit.value === "milliseconds" ? ms : Math.floor(ms / 1000);
};

const convert = () => {
    if (timestamp.value && !date.value) {
        timestampToDate();
    } else if (date.value && !timestamp.value) {
        dateToTimestamp();
    } else if (timestamp.value && date.value) {
        timestampToDate();
    }
    if (timestamp.value && date.value) {
        history.value.unshift(`${timestamp.value} ↔ ${date.value}`);
    }
};

const copyTimestamp = () => {
    if (timestamp.value) navigator.clipboard.writeText(timestamp.value);
};

const copyOne = (h) => {
    navigator.clipboard.writeText(h);
};

const clearHistory = () => {
    history.value = [];
};

const copyDate = () => {
    if (date.value) navigator.clipboard.writeText(date.value);
};

const clearAll = () => {
    timestamp.value = "";
    date.value = "";
};
</script>
