<script setup lang="ts">
import Sidebar from '../components/Sidebar/index.vue'
</script>
<template>
  <sidebar />
  <div class="page" v-scrollable>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.page {
  @apply h-screen w-full;
}
</style>
