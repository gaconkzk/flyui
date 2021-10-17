const icons: { [key: string]: Promise<typeof import('*.svg')> } = {
  flies_bag: import('@/assets/icons/svg/flies_bag.svg'),
  fly_filled: import('@/assets/icons/svg/fly_filled.svg'),
  fly_logo: import('@/assets/icons/svg/fly_logo.svg'),
  fly_outline: import('@/assets/icons/svg/fly_outline.svg'),
  fly: import('@/assets/icons/svg/fly.svg'),
  s_fly_filled: import('@/assets/icons/svg/s_fly_filled.svg'),
  s_fly: import('@/assets/icons/svg/s_fly.svg'),
}
export const get = (name: string) => {
  return icons[name] ?? icons.flies_bag
}
