<template>
    <Head>
        <meta
            name="description"
            content="Lookup descriptions for HTTP status codes. Includes history support."
        />
    </Head>
    <div class="max-w-6xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6">HTTP Status Code Lookup</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <button
                @click="copyCode"
                :disabled="!code"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                Copy
            </button>
            <button
                @click="downloadCode"
                :disabled="!code"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                Download Code
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
                Clear
            </button>
            <button
                @click="saveHistory"
                :disabled="!code"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                Save
            </button>
        </div>

        <input
            v-model="code"
            type="number"
            placeholder="Enter status code (e.g. 404)"
            class="w-full border rounded-lg p-3 mb-6"
        />

        <div v-if="code" class="border rounded-lg p-4 bg-gray-50">
            <p class="text-lg font-semibold">
                {{ code }}
            </p>

            <p class="text-gray-600">
                {{ result }}
            </p>
        </div>

        <div v-if="history.length" class="mt-6">
            <h3 class="font-semibold mb-2">History</h3>
            <ul class="list-disc pl-5 space-y-1 font-mono text-sm">
                <li
                    v-for="(h, idx) in history"
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items-center justify-between"
                >
                    <div>
                        <span class="font-mono break-words max-w-full">{{ h.code }} → {{ h.desc }}</span>
                        <p class="text-xs text-gray-500">{{ h.date }}</p>
                    </div>
                    <button
                        @click="restore(h)"
                        class="mt-1 sm:mt-0 text-xs text-blue-600 hover:underline"
                    >
                        Restore
                    </button>
                </li>
            </ul>
            <div class="mt-3 flex gap-2">
                <button
                    @click="downloadHistory"
                    :disabled="!history.length"
                    class="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    Download History
                </button>
                <button
                    @click="clearHistory"
                    class="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                    Clear History
                </button>
            </div>
        </div>

        <ToolSeoContent
            title="HTTP Status Code Lookup"
            description="Lookup HTTP status code meanings with history support."
            :steps="steps"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const code = ref("");
const history = ref([]);

const statuses = {
    200: "OK – The request succeeded.",
    201: "Created – The request succeeded and a resource was created.",
    204: "No Content – Request successful but no content returned.",

    301: "Moved Permanently – Resource moved to a new URL.",
    302: "Found – Temporary redirect.",

    400: "Bad Request – Invalid request.",
    401: "Unauthorized – Authentication required.",
    403: "Forbidden – Server understood request but refuses to authorize.",
    404: "Not Found – Resource not found.",

    500: "Internal Server Error – Generic server error.",
    502: "Bad Gateway – Invalid response from upstream server.",
    503: "Service Unavailable – Server temporarily unavailable.",
};

const result = computed(() => {
    if (!code.value) return "";

    return statuses[code.value] || "Unknown status code";
});

const copyCode = () => {
    if (!code.value) return;
    navigator.clipboard.writeText(code.value).catch(() => {});
};

const downloadCode = () => {
    if (!code.value) return;
    const blob = new Blob([code.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `status-${code.value}.txt`;
    a.click();
    URL.revokeObjectURL(url);
};

const clearAll = () => {
    code.value = "";
};

const saveHistory = () => {
    if (!code.value) return;
    history.value.push({
        code: code.value,
        desc: result.value,
        date: new Date().toLocaleString(),
    });
};

const restore = (entry) => {
    code.value = entry.code;
};

const downloadHistory = () => {
    const lines = history.value.map(h => `${h.code} - ${h.desc} (${h.date})`).join("\n");
    const blob = new Blob([lines], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "status-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearHistory = () => {
    history.value = [];
};

const steps = [
    "Enter an HTTP status code in the input box.",
    "If known, the corresponding description will appear below.",
    "Use the buttons to copy, download, or save the code to history.",
];

const faqs = [
    {
        question: "What if I enter an unknown code?",
        answer: "The tool will say \"Unknown status code\". Add to your own notes if needed.",
    },
    {
        question: "Can I retrieve a past lookup?",
        answer: "Yes, use the history section and click \"Restore\" on any entry.",
    },
];
</script>
