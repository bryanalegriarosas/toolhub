<template>
    <div class="bg-white shadow rounded-xl p-6 space-y-4">
        <h2 class="text-xl font-bold">
            {{ title }}
        </h2>

        <textarea
            v-model="input"
            class="w-full h-40 border rounded-lg p-3 font-mono"
            placeholder="Enter text..."
        ></textarea>

        <div class="flex gap-3">
            <button
                @click="process"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
                Process
            </button>

            <button
                @click="copy"
                class="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
                Copy
            </button>
        </div>

        <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
            {{ output }}
        </pre>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    title: String,
    transform: Function,
});

const input = ref("");
const output = ref("");

const process = () => {
  output.value = props.transform(input.value);
}

const copy = () => {
  navigator.clipboard.writeText(output.value);
};
</script>
