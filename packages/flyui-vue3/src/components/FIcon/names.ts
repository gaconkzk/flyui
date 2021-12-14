const icons: { [key: string]: Promise<typeof import('*.svg')> } = {
  flies_bag: import('$lib/core/assets/icons/svg/flies_bag.svg'),
  fly_filled: import('$lib/core/assets/icons/svg/fly_filled.svg'),
  fly_logo: import('$lib/core/assets/icons/svg/fly_logo.svg'),
  fly_outline: import('$lib/core/assets/icons/svg/fly_outline.svg'),
  fly: import('$lib/core/assets/icons/svg/fly.svg'),
  s_fly_filled: import('$lib/core/assets/icons/svg/s_fly_filled.svg'),
  s_fly: import('$lib/core/assets/icons/svg/s_fly.svg'),
  'chevron-down': import('$lib/core/assets/icons/svg/chevron-down.svg'),
}
export const get = (name: string) => {
  return icons[name] ?? icons.flies_bag
}
