<template>
    <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Hash Generator</h1>

        <textarea
            v-model="text"
            @input="generateHashes"
            rows="4"
            placeholder="Enter text..."
            class="w-full border rounded-lg p-4 mb-6"
        />

        <div class="space-y-4">
            <div>
                <label class="text-sm text-gray-500">SHA-1</label>
                <input
                    :value="sha1"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>

            <div>
                <label class="text-sm text-gray-500">SHA-256</label>
                <input
                    :value="sha256"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>

            <div>
                <label class="text-sm text-gray-500">SHA-512</label>
                <input
                    :value="sha512"
                    readonly
                    class="w-full border rounded p-2"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
const md5 = ref("");
const sha1 = ref("");
const sha256 = ref("");
const sha512 = ref("");

async function generateHashes() {
    if (!text.value) {
        md5.value = "";
        sha1.value = "";
        sha256.value = "";
        sha512.value = "";
        return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text.value);

    async function hash(algo) {
        const buffer = await crypto.subtle.digest(algo, data);
        return Array.from(new Uint8Array(buffer))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
    }

    sha1.value = await hash("SHA-1");
    sha256.value = await hash("SHA-256");
    sha512.value = await hash("SHA-512");
}
</script>
