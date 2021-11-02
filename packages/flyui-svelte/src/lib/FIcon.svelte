<template>
  <svg-icon :data="icon" />
</template>

<script lang="ts">
  export let width: string
  export let height: string
  export let original: boolean = false
  export let name: string
  let classes = ''
  export { classes as class }
</script>

<svg class={classes}>
  <use href={`../assets/icons/svg/${name}.svg#${name}`} />
</svg>