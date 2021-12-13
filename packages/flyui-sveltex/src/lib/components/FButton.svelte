<script lang="ts">
  import '../core/styles/components/fbutton.scss'
  import { createEventDispatcher } from 'svelte'

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

  function handleClick(e: Event) {
    if (!disabled) {
      dispatch('click', e)
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

<div class={btnClasses.join(' ')} tabindex="0" on:click={handleClick}>
  <slot />
</div>
