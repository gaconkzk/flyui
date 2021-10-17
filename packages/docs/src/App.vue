<script setup lang="ts">
import { provide, ref } from 'vue'

import FThemeColor from './components/FThemeColor.vue'

const toggleDrawer = ref<boolean>(false)
</script>

<template>
<div>
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
        class="!text-$f-primary-shadow"
      />
    </div>
  </section>
</div>
</template>

<style lang="scss">
#app {
  @apply mx-auto flex flex-col items-center;
}
</style>
