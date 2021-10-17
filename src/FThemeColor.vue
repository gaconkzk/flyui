<template>
  <input type="color" :value="themeColor" class="test" @input="handleInput" />
</template>

<script lang="ts">
import { watch, defineComponent, ref } from 'vue'
import { theme, updateTheme } from './index'

export default defineComponent({
  name: 'FThemeColor',
  setup(props) {
    const themeColor = ref(theme.colors.prim[2])

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
