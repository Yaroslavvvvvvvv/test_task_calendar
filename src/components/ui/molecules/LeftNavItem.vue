<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li class="px-3 py-2 text-white hover:bg-sidebarDark group cursor-pointer border-l-2 border-sidebar hover:border-sidebarNav">
    <a href="#" class="flex items-center p-2">
      <slot name="icon"></slot>
      <span class="flex-1 ms-3 whitespace-nowrap">{{ label }}</span>
    </a>
  </li>
</template>

<style scoped>
</style>