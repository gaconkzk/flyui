<script setup lang="ts">
import { ref } from 'vue'
import FThemeColor from './FThemeColor.vue'
const toggleDrawer = ref<boolean>(false)

const scrollable = {
  thin: true,
  scrollClasses: [
    '!scrollbar-track-prim-2',
    '!scrollbar-thumb-prim-2-highlight',
  ],
}
</script>

<template>
  <div v-scrollable="scrollable" class="h-screen">
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
        <h5>Text Field</h5>
        <div class="flex justify-center mx-4">
          <div class="grid grid-cols-2 gap-4">
            <f-text-field label="Hello world" />
            <f-text-field label="Hello world" required message="ahihi" />
            <f-text-field
              label="Text field disabled"
              disabled
              required
              message="ahihi"
              value="ahihi"
            />
            <f-text-field
              label="Text field read only"
              read-only
              required
              message="ahihi"
            />
            <f-text-field label="Append Icon">
              <template #append>
                <f-icon
                  name="fly_filled"
                  width="15px"
                  height="15px"
                  class="!text-blue-500"
                />
              </template>
            </f-text-field>
            <f-text-field label="prepend Icon">
              <template #prepend>
                <f-icon
                  name="fly_filled"
                  width="15px"
                  height="15px"
                  class="!text-blue-500"
                />
              </template>
            </f-text-field>
            <f-text-field label="prepend Icon" invalid message="invalid!">
              <template #prepend>
                <f-icon
                  name="fly_filled"
                  width="15px"
                  height="15px"
                  class="!text-blue-500"
                />
              </template>
            </f-text-field>
            <f-text-field
              label="prepend Icon and append icon - invalid"
              invalid
              message="invalid!"
            >
              <template #prepend>
                <f-icon
                  name="fly_filled"
                  width="15px"
                  height="15px"
                  class="!text-blue-500"
                />
              </template>
              <template #append>
                <f-icon
                  name="fly_filled"
                  width="15px"
                  height="15px"
                  class="!text-blue-500"
                />
              </template>
            </f-text-field>
          </div>
        </div>
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
    </div>
  </div>
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
  @apply font-sans antialiased text-center bg-$f-primary;
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
