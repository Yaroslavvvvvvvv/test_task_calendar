<script setup>

import LeftNavMenu from "../layouts/LeftNavMenu.vue";
import ButtonLeftNavMenu from "../components/ui/molecules/ButtonLeftNavMenu.vue";
</script>

<template>
  <ButtonLeftNavMenu/>
  <LeftNavMenu/>
  <router-view></router-view>
</template>

<style scoped>

</style>