<template>
    <div class="max-w-3xl mx-auto">
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
                    type="datetime-local"
                    class="w-full border rounded-lg p-3"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";

const timestamp = ref("");
const date = ref("");

const timestampToDate = () => {
    if (!timestamp.value) return;

    const d = new Date(parseInt(timestamp.value) * 1000);
    date.value = d.toISOString().slice(0, 19);
};

const dateToTimestamp = () => {
    if (!date.value) return;

    const d = new Date(date.value);
    timestamp.value = Math.floor(d.getTime() / 1000);
};

watch(timestamp, timestampToDate);
watch(date, dateToTimestamp);
</script>
