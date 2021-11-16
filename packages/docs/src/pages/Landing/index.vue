<template>
  <div>
    <div
      class="
        flex flex-col
        justify-start
        items-start
        pt-10
        pl-20
        pb-10
        shadow-md
      "
    >
      <section>
        <f-icon name="fly_logo" width="120px" height="120px" original />
      </section>
      <p class="pt-8 text-lg">
        <strong>FlyUI</strong> – open-source components system for your next
        project based on TypeScript
      </p>
      <div class="flex flex-row justify-center gap-4 pt-4">
        <f-button>Get started</f-button>
        <a
          class="
            convex
            rounded-full
            w-20
            flex
            justify-center
            items-center
            cursor-pointer
            hover:nm-concave-$f-primary
          "
          href="https://github.com/gaconkzk/flyui"
          target="_blank"
        >
          <fe-github /> Github
        </a>
      </div>
    </div>
    <div class="flex flex-col justify-start items-start pl-20">
      <section>
        <h4>Colors</h4>
      </section>
      <section>
        <h4>Typography</h4>
      </section>
      <section class="flex flex-col items-start w-full flex-grow-1">
        <h4>Components</h4>
        <h5>Base</h5>
        <div class="inline-grid grid-cols-3 gap-4 w-full pt-3 pb-2">
          <div class="flat h-30 rounded-lg p-3">button</div>
          <div class="flat h-30 rounded-lg p-3">icon</div>
        </div>
        <h5>Form</h5>
        <div class="inline-grid grid-cols-3 gap-4 w-full pt-3 pb-2">
          <div class="flat h-30 rounded-lg p-3">checkbox</div>
        </div>
      </section>
    </div>
  </div>
</template>
