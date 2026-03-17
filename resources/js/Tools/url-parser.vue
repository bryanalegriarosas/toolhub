<template>
    <div class="max-w-6xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold mb-6">URL Parser</h1>

        <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <button
                @click="copyUrl"
                :disabled="!inputUrl"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                Copy
            </button>
            <button
                @click="downloadUrl"
                :disabled="!inputUrl"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                Download URL
            </button>
            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
                Clear
            </button>
            <button
                @click="saveHistory"
                :disabled="!inputUrl"
                class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
            >
                Save
            </button>
        </div>

        <input
            v-model="inputUrl"
            placeholder="https://example.com:8080/path?name=john&id=1#top"
            class="w-full border rounded-lg p-3 mb-6"
        />

        <div v-if="parsed && !parsed.error" class="space-y-4">
            <div class="border rounded p-3">
                <strong>Protocol:</strong> {{ parsed.protocol }}
            </div>

            <div class="border rounded p-3">
                <strong>Host:</strong> {{ parsed.host }}
            </div>

            <div class="border rounded p-3">
                <strong>Hostname:</strong> {{ parsed.hostname }}
            </div>

            <div class="border rounded p-3">
                <strong>Port:</strong> {{ parsed.port || "—" }}
            </div>

            <div class="border rounded p-3">
                <strong>Path:</strong> {{ parsed.pathname }}
            </div>

            <div class="border rounded p-3">
                <strong>Hash:</strong> {{ parsed.hash || "—" }}
            </div>

            <div class="border rounded p-3">
                <strong>Query Parameters:</strong>

                <div v-if="Object.keys(parsed.params).length === 0">None</div>

                <ul v-else class="list-disc ml-6">
                    <li v-for="(value, key) in parsed.params" :key="key">
                        {{ key }} : {{ value }}
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="parsed && parsed.error" class="text-red-500">
            Invalid URL
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
                        <span class="font-mono break-words max-w-full">{{ h.url }}</span>
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
            title="URL Parser"
            description="Parse a URL into components and track lookups with history."
            :steps="steps"
            :examples="examples"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const inputUrl = ref("");
const history = ref([]);

const parsed = computed(() => {
    if (!inputUrl.value) return null;

    try {
        const url = new URL(inputUrl.value);

        const params = {};

        url.searchParams.forEach((value, key) => {
            params[key] = value;
        });

        return {
            protocol: url.protocol,
            host: url.host,
            hostname: url.hostname,
            port: url.port,
            pathname: url.pathname,
            hash: url.hash,
            params,
        };
    } catch {
        return { error: "Invalid URL" };
    }
});

const copyUrl = () => {
    if (!inputUrl.value) return;
    navigator.clipboard.writeText(inputUrl.value).catch(() => {});
};

const downloadUrl = () => {
    if (!inputUrl.value) return;
    const blob = new Blob([inputUrl.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `url.txt`;
    a.click();
    URL.revokeObjectURL(url);
};

const clearAll = () => {
    inputUrl.value = "";
};

const saveHistory = () => {
    if (!inputUrl.value) return;
    history.value.push({ url: inputUrl.value, date: new Date().toLocaleString() });
};

const restore = (entry) => {
    inputUrl.value = entry.url;
};

const downloadHistory = () => {
    const lines = history.value.map(h => `${h.url} (${h.date})`).join("\n");
    const blob = new Blob([lines], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "url-history.txt";
    a.click();
    URL.revokeObjectURL(url);
};

const clearHistory = () => {
    history.value = [];
};

const examples = [
    {
        title: "E-commerce Product URL",
        description: "Parse complex product URL with parameters",
        code: "Input: https://example.com/products/laptop?category=electronics&brand=dell&price=999&sort=rating",
        result: "Protocol: https | Host: example.com | Path: /products/laptop | Query: category=electronics&brand=dell&price=999&sort=rating"
    },
    {
        title: "API Endpoint URL",
        description: "Parse API endpoint with path parameters",
        code: "Input: https://api.example.com/v1/users/123/posts?limit=10&sort=created_at&order=desc",
        result: "Protocol: https | Host: api.example.com | Path: /v1/users/123/posts | Query: limit=10&sort=created_at&order=desc",
        steps: [
            "Enter API endpoint URL",
            "Extract path parameters (user ID: 123)",
            "Parse query parameters for filtering",
            "Use components for API requests"
        ]
    },
    {
        title: "Social Media Share URL",
        description: "Parse social media sharing URL",
        code: "Input: https://twitter.com/intent/tweet?text=Hello%20World&url=https://example.com&hashtags=web,development",
        result: "Protocol: https | Host: twitter.com | Path: /intent/tweet | Query: text=Hello World&url=https://example.com&hashtags=web,development"
    }
];

const steps = [
    "Type or paste a full URL into the input field.",
    "If the URL is valid it will be broken into protocol, host, path, etc.",
    "Use buttons to copy or download the URL, and save it to history for later."
];

const faqs = [
    {
        question: "What happens if I type an invalid URL?",
        answer: "You’ll see an \"Invalid URL\" message below the input."
    },
    {
        question: "Can I reuse a previous URL?",
        answer: "Yes, click Restore in the history section to refill the input."
    }
];
</script>
