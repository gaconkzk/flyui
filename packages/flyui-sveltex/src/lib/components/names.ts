const icons: { [key: string]: Promise<typeof import('*.svg?raw')> } = {
  flies_bag: import('../core/assets/icons/svg/flies_bag.svg?raw'),
  fly_filled: import('../core/assets/icons/svg/fly_filled.svg?raw'),
  fly_logo: import('../core/assets/icons/svg/fly_logo.svg?raw'),
  fly_outline: import('../core/assets/icons/svg/fly_outline.svg?raw'),
  fly: import('../core/assets/icons/svg/fly.svg?raw'),
  s_fly_filled: import('../core/assets/icons/svg/s_fly_filled.svg?raw'),
  s_fly: import('../core/assets/icons/svg/s_fly.svg?raw'),
  'chevron-down': import('../core/assets/icons/svg/chevron-down.svg?raw'),
}
export const get = (name: string): Promise<typeof import('*?raw')> => {
  return icons[name] ?? icons.flies_bag
}
