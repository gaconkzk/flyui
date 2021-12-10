<script lang="ts">
  import '@gaconkzk/core/styles/components/fbutton.scss';

  import { createEventDispatcher } from 'svelte'
import { get_current_component } from 'svelte/internal';

  const dispatch = createEventDispatcher()

  export let disabled = false
  export let activated = false
  export let variant = ''
  export let variantType = 'normal'
  export let size = ''
  export let rounded = false
  export let nmType = 'flat'
  export { classes as class }
  let classes: string = ''

  const component = get_current_component()

  function handleClick(e: Event) {
    if (!disabled) {
      dispatch('click', e)
      component?.dispatchEvent?.(new CustomEvent('click', e))
    }
  }

  let btnClasses: string[] = []
  $: {
    btnClasses = [
      'button',
      nmType ?? 'flat',
      activated ? 'activated' : '',
      rounded ? 'fround' : '',
      variant ?? '',
      variantType,
      disabled ? 'disabled' : '',
      size,
      classes ?? '',
    ]
  }
</script>

<svelte:options tag="f-button" />

<div class={btnClasses.join(' ')} tabindex="0" on:click={handleClick}>
  <slot />
</div>
