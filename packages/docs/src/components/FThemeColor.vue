<template>
  <input type="color" :value="themeColor" class="test" @input="handleInput" />
</template>

<script lang="ts">
import { watch, defineComponent, inject, ref, Ref } from 'vue'
import { theme, updateTheme, currentTheme } from '@gaconkzk/flyui-vue3'

export default defineComponent({
  name: 'FThemeColor',
  setup(props) {
    const themeColor = ref(currentTheme())

    function handleInput(e: any) {
      themeColor.value = e.target.value
    }

    watch(
      () => themeColor.value,
      (v) => {
        updateTheme(v)
      },
    )

    return {
      themeColor,
      handleInput,
    }
  },
})
</script>

<style lang="scss">
.test {
  color: v-bind(themeColor);
}
</style>
