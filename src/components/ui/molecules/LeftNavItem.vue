<script setup>
defineProps({
  iconSrc: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li class="px-3 py-2 text-white hover:bg-sidebarDark group cursor-pointer border-l-2 border-sidebar hover:border-sidebarNav">
    <a href="#" class="flex items-center p-2">
      <img :src="iconSrc" alt="logo" class="flex-shrink-0 w-5 h-5 transition duration-75">
      <span class="flex-1 ms-3 whitespace-nowrap">{{ label }}</span>
    </a>
  </li>
</template>

<style scoped>

</style>