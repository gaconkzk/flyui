<script lang="ts">
  // due to scss import error in style - recommend import all in ts script :D :D :D
  import '@gaconkzk/core/styles/variables.scss'
  import '@gaconkzk/core/styles/neumophism.scss'
  import '@gaconkzk/core/styles/components/fscrollable.scss'

  import FButton from './lib/FButton.svelte'
  
  import FIcon from './lib/FIcon.svelte'

  import scrollable from './lib/useScrollable'
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
            class="!fill-blue-500"
          />
        </div>
      </section>
      <section>
        <h5>Scrollable</h5>
        <div class="flex flex-row justify-center">
          <div class="flat w-80 h-40" use:scrollable dir="rtl">
            <div class="h-80">
              hello inside
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
