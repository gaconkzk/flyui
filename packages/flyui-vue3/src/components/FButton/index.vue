<template>
  <div :class="['fbutton', btnClass, classes]" tabindex="0" @click="callback">
    <slot />
  </div>
</template>

<script setup lang="ts">
// import { defineComponent } from 'vue'

import { computed, defineComponent, ref } from 'vue'

const props = defineProps({
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
    validator: (value: string) => ['flat', 'convex'].includes(value),
    default: 'flat',
  },
  classes: {
    type: [String, Array, Object],
    default: '',
  },
  noborder: {
    type: Boolean,
    default: false,
  },
})

const loading = ref(false)
const disableButton = ref(props.disabled)

const emit = defineEmits(['click'])

const btnClass = computed(() => {
  const nmType = `${props.nmType}${!!props.noborder ? '-noborder' : ''}`
  return [
    nmType,
    props.activated ? 'activated' : '',
    props.rounded ? 'fround' : '',
    props.variant ?? '',
    props.disabled ? 'disabled' : '',
    props.size,
  ]
})

const startLoading = () => {
  loading.value = true
  disableButton.value = true
}

const stopLoading = () => {
  loading.value = false
  disableButton.value = props.disabled
}
// expose those function outside
defineExpose({
  startLoading,
  stopLoading,
})

function callback(e: Event): void {
  if (!props.disabled) {
    emit('click', e)
  }
}
</script>
<script lang="ts">
export default defineComponent({
  name: 'FButton',
})
</script>
