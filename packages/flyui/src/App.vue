<script setup lang="ts">
import { ref } from 'vue'
import FThemeColor from './FThemeColor.vue'
const toggleDrawer = ref<boolean>(false)
</script>

<template>
  <section>
    <h5>Theme</h5>
    <f-theme-color />
  </section>
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
  <section>
    <h5>Icons</h5>
    <div class="flex flex-row justify-center gap-4">
      <f-icon name="fly_logo" width="40px" height="40px" original />
      <f-icon name="s_fly" width="40px" height="40px" original />
      <f-icon
        name="fly_filled"
        width="40px"
        height="40px"
        class="!text-blue-500"
      />
    </div>
  </section>
</template>

<style lang="scss">
:root {
  --f-primary: theme('colors.prim.2');
  --f-primary-lighter: theme('colors.prim.2-lighter');
  --f-primary-shadow: theme('colors.prim.2-shadow');
  --f-primary-highlight: theme('colors.prim.2-highlight');
  --t-primary: theme('textColor.prim.2');
}

html {
  @apply text-$t-primary text-base;
}
body {
  position: relative;
}
#app {
  @apply font-sans antialiased text-center bg-$f-primary h-screen w-screen pt-60px;
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
