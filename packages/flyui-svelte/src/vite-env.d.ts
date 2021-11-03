/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="@gaconkzk/core" />

export default interface FScrollBar {
  initEl (element: Element): void;
  initAll (): void;
  moveBar (e: Event): void;
}