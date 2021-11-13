<template>
  <div class="flex flex-row items-center py-3 px-2 cursor-pointer">
    <f-icon name="fly_logo" original width="64px" height="48px" />
    <span class="brand pt-4">FlyUI</span>
  </div>
</template>

<style type="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Passions+Conflict&display=swap');

.brand {
  @apply text-5xl text-$t-primary;
  font-family: 'Passions Conflict', cursive;
}
</style>
