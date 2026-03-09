<template>
    <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">JWT Decoder</h1>

        <textarea
            v-model="token"
            @input="decodeJWT"
            rows="4"
            placeholder="Paste JWT token here..."
            class="w-full border rounded-lg p-4 mb-6"
        />

        <div class="space-y-6">
            <div>
                <label class="text-sm text-gray-500">Header</label>
                <pre class="bg-gray-100 p-4 rounded overflow-auto">{{
                    header
                }}</pre>
            </div>

            <div>
                <label class="text-sm text-gray-500">Payload</label>
                <pre class="bg-gray-100 p-4 rounded overflow-auto">{{
                    payload
                }}</pre>
            </div>

            <div>
                <label class="text-sm text-gray-500">Signature</label>
                <pre class="bg-gray-100 p-4 rounded overflow-auto">{{
                    signature
                }}</pre>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const token = ref("");

const header = ref("");
const payload = ref("");
const signature = ref("");

const decodeJWT = () => {
    if (!token.value) {
        header.value = "";
        payload.value = "";
        signature.value = "";
        return;
    }

    try {
        const parts = token.value.split(".");

        if (parts.length !== 3) return;

        header.value = JSON.stringify(JSON.parse(atob(parts[0])), null, 2);

        payload.value = JSON.stringify(JSON.parse(atob(parts[1])), null, 2);

        signature.value = parts[2];
    } catch (e) {
        header.value = "Invalid token";
        payload.value = "";
        signature.value = "";
    }
};
</script>
