<script setup lang="ts">
import Sidebar from '../components/Sidebar/index.vue'
</script>
<template>
  <sidebar />
  <div class="page" v-scrollable>
    <router-view v-slot="{ Component }">
      <transition
        name="page_transition"
        enter-active-class="animate-animated animate-delay-1s animate-bounceIn"
        leave-active-class="animate-animated animate-bounceOut"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.page {
  @apply h-screen w-full;
}
</style>
