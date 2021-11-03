const icons: { [key: string]: Promise<typeof import('*.svg?raw')> } = {
  flies_bag: import('@/assets/icons/svg/flies_bag.svg?raw'),
  fly_filled: import('@/assets/icons/svg/fly_filled.svg?raw'),
  fly_logo: import('@/assets/icons/svg/fly_logo.svg?raw'),
  fly_outline: import('@/assets/icons/svg/fly_outline.svg?raw'),
  fly: import('@/assets/icons/svg/fly.svg?raw'),
  s_fly_filled: import('@/assets/icons/svg/s_fly_filled.svg?raw'),
  s_fly: import('@/assets/icons/svg/s_fly.svg?raw'),
  'chevron-down': import('@/assets/icons/svg/chevron-down.svg?raw'),
}
export const get = (name: string) => {
  return icons[name] ?? icons.flies_bag
}
