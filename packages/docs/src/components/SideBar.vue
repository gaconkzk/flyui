<script setup lang="ts"></script>

<template>
  <div class="sidebar flat" v-scrollable>
    <slot />
  </div>
  <button class="halfshow fixed left-60 top-4 rounded-full w-8 h-8 pb-1">
    X
  </button>
</template>

<style lang="scss">
.sidebar {
  @apply fixed lg:left-0 h-screen w-64 z-1 lg:z-0 -left-64;
}

.halfshow {
  &::before {
    @apply -z-1 rounded-full;
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
    @apply -z-1;
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
    display: inline-block;
    content: '';
    width: 1.47rem;
    height: 3rem;
    background: var(--f-primary);
  }
}
</style>
