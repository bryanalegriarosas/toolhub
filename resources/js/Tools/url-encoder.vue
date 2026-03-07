<template>
    <TextTool title="URL Encoder" :transform="encode" />
</template>

<script setup>
import TextTool from "@/Components/TextTool.vue";

const encode = (text) => {
    return encodeURIComponent(text);
};
</script>
