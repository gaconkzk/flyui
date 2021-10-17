<template>
  <svg-icon :data="icon" />
</template>

<script lang="ts">
import { defineComponent, ref, App } from 'vue'
import { get } from './names'

const FIcon = defineComponent({
  name: 'FIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const icon = ref<string | null>(null)
    get(props.name).then((r) => {
      icon.value = r.default
    })

    return {
      icon,
    }
  },
})

export default FIcon
</script>

<style lang="scss">
@import '@yzfe/svgicon/lib/svgicon.css';
</style>
