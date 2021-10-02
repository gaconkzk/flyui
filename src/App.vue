<script setup lang="ts">
import { ref } from 'vue'

const toggleDrawer = ref<boolean>(false)
</script>

<template>
  <section>
    <h5>Buttons</h5>
    <f-button>Primary</f-button>
  </section>
  <section>
    <h5>Modals</h5>
    <f-button rounded nm-type="convex" @click="toggleDrawer = !toggleDrawer"
      >show</f-button
    >
    <f-drawer
      :show="toggleDrawer"
      :toggle="() => (toggleDrawer = !toggleDrawer)"
      bg-drawer="w-60 top-1/2 left-1/2 p-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2"
      position="fixed"
    >
      drawer body hello world confluence hello
    </f-drawer>
  </section>
</template>

<style>
html {
  @apply text-gray-100 text-base;
}
body {
  position: relative;
}
#app {
  @apply font-sans antialiased text-center bg-blue-500 h-screen w-screen pt-60px;
  h1,
  h2,
  h3,
  h4,
  h5 {
    @apply my-4;
  }

  h1 {
    @apply text-5xl;
  }
  h2 {
    @apply text-4xl;
  }
  h3 {
    @apply text-3xl;
  }
  h4 {
    @apply text-2xl;
  }
  h5 {
    @apply text-xl;
  }
}
</style>
