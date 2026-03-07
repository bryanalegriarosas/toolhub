<template>
    <TextTool title="Base64 Encoder" :transform="encode" />
</template>

<script setup>
import TextTool from "@/Components/TextTool.vue";

const encode = (text) => {
    return btoa(text);
};
</script>
