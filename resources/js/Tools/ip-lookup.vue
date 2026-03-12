<template>
    <Head>
        <meta
            name="description"
            content="Lookup IP address information including location, ISP, and other details."
        />
    </Head>

    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">IP Lookup</h2>

        <!-- IP Input -->
        <div class="space-y-4">
            <div class="flex flex-col sm:flex-row gap-4">
                <div class="flex-1">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        IP Address
                    </label>
                    <div class="flex gap-2">
                        <input
                            v-model="ipAddress"
                            @keyup.enter="lookupIP"
                            placeholder="Enter IP address (e.g., 8.8.8.8)"
                            class="flex-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                        />
                        <button
                            @click="lookupIP"
                            :disabled="!ipAddress || loading"
                            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            <span v-if="loading">Loading...</span>
                            <span v-else>Lookup</span>
                        </button>
                    </div>
                </div>
                <div class="flex gap-2" style="margin-top: 28px;">
                    <button
                        @click="getMyIP"
                        :disabled="loading"
                        class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 min-w-[100px]"
                        style="height: 40px;"
                    >
                        <span v-if="loading">Loading...</span>
                        <span v-else>My IP</span>
                    </button>
                    <button
                        @click="clearResults"
                        class="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition min-w-[100px]"
                        style="height: 40px;"
                    >
                        Clear
                    </button>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="flex flex-wrap gap-2">
                <span class="text-sm text-gray-600">Quick IPs:</span>
                <button
                    v-for="quickIP in quickIPs"
                    :key="quickIP.ip"
                    @click="ipAddress = quickIP.ip; lookupIP()"
                    class="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition text-sm"
                    :title="quickIP.desc"
                >
                    {{ quickIP.ip }}
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

        <!-- IP Information -->
        <div v-if="ipInfo" class="space-y-6">
            <!-- Basic Info -->
            <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Basic Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-gray-600">IP Address:</span>
                            <span class="font-mono font-semibold">{{ ipInfo.ip }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Type:</span>
                            <span class="font-semibold">{{ ipInfo.type || 'Unknown' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Continent:</span>
                            <span class="font-semibold">{{ ipInfo.continent || 'Unknown' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Country:</span>
                            <span class="font-semibold">{{ ipInfo.country || 'Unknown' }}</span>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-gray-600">Region:</span>
                            <span class="font-semibold">{{ ipInfo.region || 'Unknown' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">City:</span>
                            <span class="font-semibold">{{ ipInfo.city || 'Unknown' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Latitude:</span>
                            <span class="font-mono font-semibold">{{ ipInfo.latitude || 'Unknown' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Longitude:</span>
                            <span class="font-mono font-semibold">{{ ipInfo.longitude || 'Unknown' }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Network Info -->
            <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                    Network Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-gray-600">ISP:</span>
                            <span class="font-semibold">{{ ipInfo.org || ipInfo.isp || 'Unknown' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">AS Number:</span>
                            <span class="font-mono font-semibold">{{ ipInfo.as || 'Unknown' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Timezone:</span>
                            <span class="font-semibold">{{ ipInfo.timezone || 'Unknown' }}</span>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-gray-600">Postal Code:</span>
                            <span class="font-semibold">{{ ipInfo.postal || 'Unknown' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Calling Code:</span>
                            <span class="font-semibold">{{ ipInfo.calling_code || 'Unknown' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Currency:</span>
                            <span class="font-semibold">{{ ipInfo.currency || 'Unknown' }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Map -->
            <div v-if="ipInfo.latitude && ipInfo.longitude" class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    Location Map
                </h3>
                <div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div class="text-center">
                        <svg class="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        <p class="text-gray-600">Map Preview</p>
                        <p class="text-sm text-gray-500 mt-1">{{ ipInfo.city }}, {{ ipInfo.country }}</p>
                        <p class="text-xs text-gray-400 mt-2">Lat: {{ ipInfo.latitude }}, Lng: {{ ipInfo.longitude }}</p>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-3">
                <button
                    @click="copyIPInfo"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Copy Info
                </button>
                <button
                    @click="downloadIPInfo"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    Download Info
                </button>
                <button
                    @click="lookupIP"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                    Refresh
                </button>
            </div>
        </div>

        <!-- Recent Lookups -->
        <div v-if="recentLookups.length" class="border-t pt-6">
            <h3 class="font-semibold mb-3">Recent Lookups</h3>
            <div class="space-y-2">
                <div
                    v-for="lookup in recentLookups"
                    :key="lookup.ip"
                    @click="ipAddress = lookup.ip; lookupIP()"
                    class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                    <div class="flex items-center gap-3">
                        <span class="font-mono font-semibold">{{ lookup.ip }}</span>
                        <span class="text-gray-600">{{ lookup.location }}</span>
                    </div>
                    <span class="text-sm text-gray-500">{{ lookup.time }}</span>
                </div>
            </div>
        </div>

        <ToolSeoContent
            title="IP Lookup - IP Address Information"
            description="Get detailed information about any IP address including location, ISP, and network details."
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
    "Enter an IP address or click 'My IP' for your current IP",
    "Click 'Lookup' to get detailed information",
    "View location, ISP, and network details",
    "Copy or download the information"
];

const faqs = [
    { 
        question: "What information can I get from an IP address?", 
        answer: "You can get location (country, region, city), ISP details, timezone, and network information." 
    },
    { 
        question: "Is this service free?", 
        answer: "Yes, this IP lookup service is completely free to use." 
    },
    { 
        question: "How accurate is the location data?", 
        answer: "Location accuracy varies by IP address type and ISP. Generally accurate to city level." 
    }
];

const ipAddress = ref("");
const ipInfo = ref(null);
const loading = ref(false);
const error = ref("");
const recentLookups = ref([]);

const quickIPs = [
    { ip: "8.8.8.8", desc: "Google DNS" },
    { ip: "1.1.1.1", desc: "Cloudflare DNS" },
    { ip: "208.67.222.222", desc: "OpenDNS" },
    { ip: "9.9.9.9", desc: "Quad9 DNS" }
];

const isValidIP = (ip) => {
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv4Regex.test(ip) || ipv6Regex.test(ip);
};

const getApiUrl = (endpoint) => {
    // Check if we're in production (HTTPS) or local development (HTTP)
    const isProduction = window.location.protocol === 'https:';
    const protocol = isProduction ? 'https://' : 'http://';
    return `${protocol}ip-api.com/json${endpoint}`;
};

const lookupIP = async () => {
    if (!ipAddress.value.trim()) {
        error.value = "Please enter an IP address";
        return;
    }

    if (!isValidIP(ipAddress.value.trim())) {
        error.value = "Please enter a valid IP address";
        return;
    }

    loading.value = true;
    error.value = "";

    try {
        // Using ip-api.com free API with dynamic protocol
        const response = await fetch(getApiUrl(`/${ipAddress.value.trim()}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`));
        const data = await response.json();

        if (data.status === 'success') {
            ipInfo.value = {
                ip: data.query,
                type: data.query.includes('.') ? 'IPv4' : 'IPv6',
                country: data.country,
                countryCode: data.countryCode,
                region: data.regionName,
                city: data.city,
                postal: data.zip,
                latitude: data.lat,
                longitude: data.lon,
                timezone: data.timezone,
                isp: data.isp,
                org: data.org,
                as: data.as,
            };

            // Add to recent lookups
            addToRecentLookups(data.query, `${data.city}, ${data.country}`);
        } else {
            error.value = data.message || "Failed to lookup IP address";
        }
    } catch (err) {
        error.value = "Network error. Please try again.";
    } finally {
        loading.value = false;
    }
};

const getMyIP = async () => {
    loading.value = true;
    error.value = "";

    try {
        const response = await fetch(getApiUrl('/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query'));
        const data = await response.json();

        if (data.status === 'success') {
            ipAddress.value = data.query;
            ipInfo.value = {
                ip: data.query,
                type: data.query.includes('.') ? 'IPv4' : 'IPv6',
                country: data.country,
                countryCode: data.countryCode,
                region: data.regionName,
                city: data.city,
                postal: data.zip,
                latitude: data.lat,
                longitude: data.lon,
                timezone: data.timezone,
                isp: data.isp,
                org: data.org,
                as: data.as,
            };

            addToRecentLookups(data.query, `${data.city}, ${data.country}`);
        } else {
            error.value = data.message || "Failed to get your IP address";
        }
    } catch (err) {
        error.value = "Network error. Please try again.";
    } finally {
        loading.value = false;
    }
};

const addToRecentLookups = (ip, location) => {
    const existing = recentLookups.value.findIndex(lookup => lookup.ip === ip);
    if (existing !== -1) {
        recentLookups.value.splice(existing, 1);
    }

    recentLookups.value.unshift({
        ip,
        location,
        time: new Date().toLocaleTimeString()
    });

    if (recentLookups.value.length > 5) {
        recentLookups.value.pop();
    }
};

const copyIPInfo = () => {
    if (!ipInfo.value) return;

    const info = `IP Address Information:
IP: ${ipInfo.value.ip}
Type: ${ipInfo.value.type}
Location: ${ipInfo.value.city}, ${ipInfo.value.region}, ${ipInfo.value.country}
Coordinates: ${ipInfo.value.latitude}, ${ipInfo.value.longitude}
ISP: ${ipInfo.value.isp}
Organization: ${ipInfo.value.org}
AS: ${ipInfo.value.as}
Timezone: ${ipInfo.value.timezone}
Postal Code: ${ipInfo.value.postal}`;

    navigator.clipboard.writeText(info);
};

const downloadIPInfo = () => {
    if (!ipInfo.value) return;

    const info = `IP Address Information
=====================
IP: ${ipInfo.value.ip}
Type: ${ipInfo.value.type}
Country: ${ipInfo.value.country} (${ipInfo.value.countryCode})
Region: ${ipInfo.value.region}
City: ${ipInfo.value.city}
Postal Code: ${ipInfo.value.postal}
Coordinates: ${ipInfo.value.latitude}, ${ipInfo.value.longitude}
Timezone: ${ipInfo.value.timezone}

Network Information
==================
ISP: ${ipInfo.value.isp}
Organization: ${ipInfo.value.org}
AS: ${ipInfo.value.as}

Generated on: ${new Date().toLocaleString()}`;

    const blob = new Blob([info], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ip-info-${ipInfo.value.ip}.txt`;
    a.click();
    URL.revokeObjectURL(url);
};

const clearResults = () => {
    ipAddress.value = "";
    ipInfo.value = null;
    error.value = "";
};
</script>