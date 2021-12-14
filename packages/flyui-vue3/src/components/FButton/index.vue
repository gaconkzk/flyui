<template>
  <div :class="['button', btnClass, classes]" tabindex="0" @click="callback">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FButton',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activated: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: '',
    },
    variantType: {
      type: String,
      default: 'normal',
    },
    size: {
      type: String,
      default: '',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    nmType: {
      type: String,
      default: 'flat',
    },
    classes: {
      type: [String, Array, Object],
      default: '',
    },
  },
  emits: ['click'],
  data() {
    return {
      loading: false,
      disableButton: this.disabled,
    }
  },
  computed: {
    btnClass(): string[] {
      return [
        this.nmType,
        this.activated ? 'activated' : '',
        this.rounded ? 'fround' : '',
        this.variant ?? '',
        this.disabled ? 'disabled' : '',
        this.size,
      ]
    },
  },
  methods: {
    startLoading() {
      this.loading = true
      this.disableButton = true
    },
    stopLoading() {
      this.loading = false
      this.disableButton = false
    },
    callback(e: Event): void {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '$lib/core/styles/components/fbutton.scss';
</style>
