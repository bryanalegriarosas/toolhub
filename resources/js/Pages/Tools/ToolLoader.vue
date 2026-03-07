<template>
    <MainLayout :tools="tools">
      <component :is="component" />
    </MainLayout>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import MainLayout from "@/Layouts/MainLayout.vue";

const props = defineProps({
  tool: Object,
  tools: Array,
});

const component = defineAsyncComponent(
    () => import(`../../Tools/${props.tool.slug}.vue`),
);
</script>
