<script lang="ts">
  // due to scss import error in style - recommend import all in ts script :D :D :D
  import '@gaconkzk/core/styles/variables.scss'

  import FButton from './lib/FButton.svelte'
  
  import FIcon from './lib/FIcon.svelte'
</script>

<div>
  <div v-scrollable="scrollable" class="h-screen">
    <div>
      <section>
        <h5>Theme</h5>
        <f-theme-color />
      </section>
      <section>
        <h5>Buttons</h5>
        <FButton>Primary</FButton>
      </section>
      <section>
        <h5>Icons</h5>
        <div class="flex flex-row justify-center gap-4">
          <FIcon name="fly_logo" width="40px" height="40px" original />
          <FIcon name="s_fly" width="40px" height="40px" original />
          <FIcon
            name="fly_filled"
            width="40px"
            height="40px"
            class="!text-blue-500"
          />
        </div>
      </section>
    </div>
  </div>
</div>
