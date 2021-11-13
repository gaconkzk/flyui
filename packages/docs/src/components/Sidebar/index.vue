<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import FlyUIBrand from '../FlyUIBrand.vue'

const sidebar = ref(null)
const toggleButton = ref(null)
const display = ref(false)

onClickOutside(sidebar, (e) => {
  if (display.value && e.target !== toggleButton.value) {
    toggle()
  }
})

function toggle() {
  display.value = !display.value
}
</script>

<template>
  <div
    :class="`sidebar flat ${display ? 'display' : ''}`"
    v-scrollable
    ref="sidebar"
  >
    <div class="flex flex-col justify-center items-center">
      <FlyUIBrand class="w-full" />
      <brandico-github class="ghi" />
    </div>
  </div>
  <button
    :class="`halfshow ${display ? 'display' : ''}`"
    @click="toggle"
    ref="toggleButton"
  >
    <fe-close />
  </button>
</template>

<style lang="scss">
.sidebar {
  @apply fixed lg:(z-0 transition-transform transform translate-x-64) w-64 z-999 -left-64 transition-transform transform translate-x-0;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  &.display {
    @apply transition-transform transform translate-x-64;
  }

  .ghi {
    @apply text-$t-primary opacity-50;
    &:hover {
      @apply opacity-100 cursor-pointer;
    }
  }
}

.halfshow {
  @apply outline-none fixed -left-2 top-4 rounded-full w-10 h-8 lg:(hidden) flex justify-center items-center z-1000;

  &:focus {
    @apply outline-none;
  }

  &::before {
    @apply -z-1 rounded-r-full outline-none w-10 -l-2;
    position: absolute;
    top: 0;
    display: inline-block;
    content: '';
    height: 100%;
    border: 1px solid var(--f-primary-lighter);
    background: var(--f-primary);
    box-shadow: 0.2em 0.2em calc(0.2em * 2) var(--f-primary-shadow);
  }
  &::after {
    @apply -z-1 outline-none w-20px h-30px top-1px -left-16px;
    position: absolute;
    display: inline-block;
    content: '';
    background: var(--f-primary);
  }

  &.display {
    @apply z-999 transition-transform transform translate-x-66;
  }
}
</style>
