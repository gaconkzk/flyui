<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let tag = 'button'
  export let disabled = false
  export let activated = false
  export let variant = ''
  export let variantType = 'normal'
  export let size = ''
  export let rounded = false
  export let type = ''
  export let nmType = 'flat'
  export { classes as class }
  let classes: string | string[] = ''

  function handleClick(e: Event) {
    if (!disabled) {
      dispatch('click')
    }
  }

  let btnClasses: string[] = []
  $: {
    btnClasses = [
      'button',
      nmType,
      activated ? 'activated' : '',
      rounded ? 'fround' : '',
      variant ?? '',
      disabled ? 'disabled' : '',
      size,
    ]
  }
</script>

<div class={btnClasses.join(' ')} tabindex="0" on:click={handleClick}>
  <slot />
</div>

<style lang="scss">
  @import '@gaconkzk/core/styles/components/fbutton.scss';
</style>
