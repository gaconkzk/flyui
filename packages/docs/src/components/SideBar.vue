<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

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
    <slot />
  </div>
  <button
    :class="`halfshow ${display ? 'display' : ''}`"
    @click="toggle"
    ref="toggleButton"
  >
    X
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
}

.halfshow {
  @apply outline-none fixed -left-4 top-4 rounded-full w-8 h-8 pb-1 lg:(hidden);

  &:focus {
    @apply outline-none;
  }

  &::before {
    @apply -z-1 rounded-full  outline-none;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    content: '';
    width: 100%;
    height: 100%;
    border: 1px solid var(--f-primary-lighter);
    background: var(--f-primary);
    box-shadow: 0.2em 0.2em calc(0.2em * 2) var(--f-primary-shadow),
      calc(-0.2em) calc(-0.2em) calc(0.2em * 2) var(--f-primary-highlight);
  }
  &::after {
    @apply -z-1 outline-none w-5 h-10;
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
    display: inline-block;
    content: '';
    background: var(--f-primary);
  }

  &.display {
    @apply z-999 transition-transform transform translate-x-64;
  }
}
</style>
