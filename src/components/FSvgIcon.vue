<template>
  <svg :width="width" :height="height">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed, App } from 'vue'

const FSvgIcon = defineComponent({
  name: 'FSvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  },
})

FSvgIcon.install = (Vue: App) => {
  Vue.component(FSvgIcon.name, FSvgIcon)
}

export default FSvgIcon
</script>
