declare module '@gaconkzk/flyui-svelte'

export default interface FScrollBar {
  initEl (element: Element): void;
  initAll (): void;
  moveBar (e: Event): void;
}