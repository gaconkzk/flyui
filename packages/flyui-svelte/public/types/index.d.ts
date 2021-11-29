/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="@gaconkzk/core" />

declare module '@gaconkzk/flyui-svelte'

export default interface FScrollBar {
  initEl (element: Element): void;
  initAll (): void;
  moveBar (e: Event): void;
}