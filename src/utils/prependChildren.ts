export function prependChildren(
  parent: HTMLElement,
  ...children: HTMLElement[]
): void {
  children.forEach(child => {
    parent.prepend(child);
  });
}
