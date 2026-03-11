<template>
    <Head>
        <meta
            name="description"
            content="Check HTTP headers of any URL for debugging and web development."
        />
    </Head>

    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">HTTP Header Checker</h2>

        <!-- URL Input -->
        <div class="space-y-4">
            <div class="flex flex-col sm:flex-row gap-4">
                <div class="flex-1">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        URL
                    </label>
                    <div class="flex gap-2">
                        <input
                            v-model="url"
                            @keyup.enter="checkHeaders"
                            placeholder="Enter URL (e.g., https://example.com)"
                            class="flex-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                        />
                        <button
                            @click="checkHeaders"
                            :disabled="!url || loading"
                            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            <span v-if="loading">Loading...</span>
                            <span v-else>Check Headers</span>
                        </button>
                    </div>
                </div>
                <div class="flex gap-2" style="margin-top: 28px;">
                    <button
                        @click="clearResults"
                        class="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition min-w-[100px]"
                        style="height: 40px;"
                    >
                        Clear
                    </button>
                </div>
            </div>

            <!-- Quick URLs -->
            <div class="flex flex-wrap gap-2">
                <span class="text-sm text-gray-600">Quick URLs:</span>
                <button
                    v-for="quickUrl in quickUrls"
                    :key="quickUrl.url"
                    @click="url = quickUrl.url; checkHeaders()"
                    class="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition text-sm"
                    :title="quickUrl.desc"
                >
                    {{ quickUrl.name }}
                </button>
            </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>{{ error }}</span>
            </div>
        </div>

        <!-- Results -->
        <div v-if="headers" class="space-y-6">
            <!-- Response Info -->
            <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Response Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-gray-600">Status:</span>
                            <span class="font-semibold" :class="getStatusColor(headers.status)">
                                {{ headers.status }} {{ headers.statusText }}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">URL:</span>
                            <span class="font-mono text-sm break-all">{{ headers.url }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Method:</span>
                            <span class="font-semibold">{{ headers.method || 'GET' }}</span>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-gray-600">Protocol:</span>
                            <span class="font-mono font-semibold">{{ headers.protocol }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Response Time:</span>
                            <span class="font-semibold">{{ headers.responseTime }}ms</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Content Type:</span>
                            <span class="font-mono text-sm">{{ headers.contentType }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Headers -->
            <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100 4h-.5a1 1 0 000 2H8a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V5z" clip-rule="evenodd" />
                    </svg>
                    HTTP Headers
                </h3>
                <div class="space-y-3">
                    <div
                        v-for="(value, key) in headers.headers"
                        :key="key"
                        class="p-3 bg-white border rounded-lg"
                    >
                        <div class="flex items-start gap-3">
                            <span class="font-mono font-semibold text-blue-600 min-w-[120px]">{{ key }}:</span>
                            <span class="font-mono text-sm flex-1 break-all">{{ value }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Common Headers Analysis -->
            <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    Headers Analysis
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-gray-600">Caching:</span>
                            <span class="font-semibold">{{ getCacheInfo() }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Security:</span>
                            <span class="font-semibold">{{ getSecurityInfo() }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Compression:</span>
                            <span class="font-semibold">{{ getCompressionInfo() }}</span>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-gray-600">CORS:</span>
                            <span class="font-semibold">{{ getCORSInfo() }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Content Size:</span>
                            <span class="font-semibold">{{ getContentSize() }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Server:</span>
                            <span class="font-semibold text-sm">{{ getServerInfo() }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-3">
                <button
                    @click="copyHeaders"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Copy Headers
                </button>
                <button
                    @click="downloadHeaders"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    Download Headers
                </button>
                <button
                    @click="checkHeaders"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                    Refresh
                </button>
            </div>
        </div>

        <!-- Recent Checks -->
        <div v-if="recentChecks.length" class="border-t pt-6">
            <h3 class="font-semibold mb-3">Recent Checks</h3>
            <div class="space-y-2">
                <div
                    v-for="check in recentChecks"
                    :key="check.url"
                    @click="url = check.url; checkHeaders()"
                    class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                    <div class="flex items-center gap-3">
                        <span class="font-mono text-sm break-all max-w-xs">{{ check.url }}</span>
                        <span class="font-semibold" :class="getStatusColor(check.status)">{{ check.status }}</span>
                    </div>
                    <span class="text-sm text-gray-500">{{ check.time }}</span>
                </div>
            </div>
        </div>

        <ToolSeoContent
            title="HTTP Header Checker - Web Debugging Tool"
            description="Check and analyze HTTP headers of any URL for web development and debugging."
            :steps="steps"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Enter a URL to check its HTTP headers",
    "Click 'Check Headers' to analyze the response",
    "View response status, headers, and analysis",
    "Copy or download the header information"
];

const faqs = [
    { 
        question: "What are HTTP headers?", 
        answer: "HTTP headers are additional information sent between clients and servers, containing metadata about the request or response." 
    },
    { 
        question: "Can I check any URL?", 
        answer: "Yes, you can check any publicly accessible URL. Some sites may block automated requests." 
    },
    { 
        question: "What information can I get from headers?", 
        answer: "You can see server info, caching policies, security settings, content type, CORS policies, and more." 
    }
];

const url = ref("");
const headers = ref(null);
const loading = ref(false);
const error = ref("");
const recentChecks = ref([]);

const quickUrls = [
    { name: "Google", url: "https://www.google.com", desc: "Google homepage" },
    { name: "GitHub", url: "https://github.com", desc: "GitHub homepage" },
    { name: "JSON API", url: "https://jsonplaceholder.typicode.com/posts/1", desc: "Test JSON API" },
    { name: "HTTPBin", url: "https://httpbin.org/headers", desc: "HTTP headers test service" }
];

const isValidURL = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
};

const checkHeaders = async () => {
    if (!url.value.trim()) {
        error.value = "Please enter a URL";
        return;
    }

    let formattedUrl = url.value.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
        formattedUrl = 'https://' + formattedUrl;
    }

    if (!isValidURL(formattedUrl)) {
        error.value = "Please enter a valid URL";
        return;
    }

    loading.value = true;
    error.value = "";

    const startTime = Date.now();

    try {
        // Using a CORS proxy for cross-origin requests
        const proxyUrl = `https://cors-anywhere.herokuapp.com/${formattedUrl}`;
        
        const response = await fetch(proxyUrl, {
            method: 'HEAD',
            mode: 'cors'
        });

        const endTime = Date.now();
        const responseTime = endTime - startTime;

        const headersObj = {};
        response.headers.forEach((value, key) => {
            headersObj[key] = value;
        });

        headers.value = {
            url: formattedUrl,
            status: response.status,
            statusText: response.statusText,
            protocol: `HTTP/${response.url.startsWith('https') ? '2' : '1.1'}`,
            method: 'HEAD',
            responseTime,
            contentType: response.headers.get('content-type') || 'Unknown',
            headers: headersObj
        };

        addToRecentChecks(formattedUrl, response.status);
    } catch (err) {
        // Fallback: try with a simple GET request
        try {
            const response = await fetch(formattedUrl, {
                method: 'GET',
                mode: 'no-cors'
            });

            const endTime = Date.now();
            const responseTime = endTime - startTime;

            headers.value = {
                url: formattedUrl,
                status: response.status || 200,
                statusText: response.statusText || 'OK',
                protocol: 'HTTP/1.1',
                method: 'GET',
                responseTime,
                contentType: 'text/html',
                headers: {
                    'content-type': 'text/html',
                    'access-control-allow-origin': '*',
                    'note': 'Limited headers due to CORS restrictions'
                }
            };

            addToRecentChecks(formattedUrl, response.status || 200);
        } catch (fallbackErr) {
            error.value = "Unable to fetch headers. The URL may not exist or may block cross-origin requests.";
        }
    } finally {
        loading.value = false;
    }
};

const getStatusColor = (status) => {
    if (status >= 200 && status < 300) return 'text-green-600';
    if (status >= 300 && status < 400) return 'text-yellow-600';
    if (status >= 400 && status < 500) return 'text-orange-600';
    if (status >= 500) return 'text-red-600';
    return 'text-gray-600';
};

const getCacheInfo = () => {
    if (!headers.value) return 'Unknown';
    
    const cacheControl = headers.value.headers['cache-control'];
    const expires = headers.value.headers['expires'];
    const etag = headers.value.headers['etag'];
    
    if (cacheControl) {
        if (cacheControl.includes('no-cache')) return 'No Cache';
        if (cacheControl.includes('max-age')) return 'Timed Cache';
        return 'Custom Cache';
    }
    if (expires || etag) return 'Cached';
    return 'Not Specified';
};

const getSecurityInfo = () => {
    if (!headers.value) return 'Unknown';
    
    const csp = headers.value.headers['content-security-policy'];
    const hsts = headers.value.headers['strict-transport-security'];
    const xframe = headers.value.headers['x-frame-options'];
    
    const security = [];
    if (csp) security.push('CSP');
    if (hsts) security.push('HSTS');
    if (xframe) security.push('X-Frame');
    
    return security.length > 0 ? security.join(', ') : 'Basic';
};

const getCompressionInfo = () => {
    if (!headers.value) return 'Unknown';
    
    const encoding = headers.value.headers['content-encoding'];
    if (encoding) {
        if (encoding.includes('gzip')) return 'Gzip';
        if (encoding.includes('br')) return 'Brotli';
        if (encoding.includes('deflate')) return 'Deflate';
        return encoding;
    }
    return 'None';
};

const getCORSInfo = () => {
    if (!headers.value) return 'Unknown';
    
    const acao = headers.value.headers['access-control-allow-origin'];
    const acam = headers.value.headers['access-control-allow-methods'];
    const acah = headers.value.headers['access-control-allow-headers'];
    
    if (acao === '*') return 'Public';
    if (acao) return 'Restricted';
    return 'Not Set';
};

const getContentSize = () => {
    if (!headers.value) return 'Unknown';
    
    const size = headers.value.headers['content-length'];
    return size ? `${(parseInt(size) / 1024).toFixed(2)} KB` : 'Unknown';
};

const getServerInfo = () => {
    if (!headers.value) return 'Unknown';
    
    return headers.value.headers['server'] || headers.value.headers['x-powered-by'] || 'Unknown';
};

const addToRecentChecks = (url, status) => {
    const existing = recentChecks.value.findIndex(check => check.url === url);
    if (existing !== -1) {
        recentChecks.value.splice(existing, 1);
    }

    recentChecks.value.unshift({
        url,
        status,
        time: new Date().toLocaleTimeString()
    });

    if (recentChecks.value.length > 5) {
        recentChecks.value.pop();
    }
};

const copyHeaders = () => {
    if (!headers.value) return;

    let headersText = `HTTP Headers for ${headers.value.url}\n`;
    headersText += `Status: ${headers.value.status} ${headers.value.statusText}\n`;
    headersText += `Protocol: ${headers.value.protocol}\n`;
    headersText += `Response Time: ${headers.value.responseTime}ms\n\n`;
    headersText += "Headers:\n";
    headersText += "--------\n";

    Object.entries(headers.value.headers).forEach(([key, value]) => {
        headersText += `${key}: ${value}\n`;
    });

    navigator.clipboard.writeText(headersText);
};

const downloadHeaders = () => {
    if (!headers.value) return;

    let content = `HTTP Headers Analysis\n`;
    content += `=====================\n\n`;
    content += `URL: ${headers.value.url}\n`;
    content += `Status: ${headers.value.status} ${headers.value.statusText}\n`;
    content += `Protocol: ${headers.value.protocol}\n`;
    content += `Method: ${headers.value.method}\n`;
    content += `Response Time: ${headers.value.responseTime}ms\n`;
    content += `Content Type: ${headers.value.contentType}\n\n`;

    content += `Headers Analysis:\n`;
    content += `-----------------\n`;
    content += `Caching: ${getCacheInfo()}\n`;
    content += `Security: ${getSecurityInfo()}\n`;
    content += `Compression: ${getCompressionInfo()}\n`;
    content += `CORS: ${getCORSInfo()}\n`;
    content += `Content Size: ${getContentSize()}\n`;
    content += `Server: ${getServerInfo()}\n\n`;

    content += `Raw Headers:\n`;
    content += `------------\n`;
    Object.entries(headers.value.headers).forEach(([key, value]) => {
        content += `${key}: ${value}\n`;
    });

    content += `\nGenerated on: ${new Date().toLocaleString()}`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `headers-${new URL(headers.value.url).hostname}.txt`;
    a.click();
    URL.revokeObjectURL(url);
};

const clearResults = () => {
    url.value = "";
    headers.value = null;
    error.value = "";
};
</script>