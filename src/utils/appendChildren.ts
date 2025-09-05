export function appendChildren(
  parent: HTMLElement,
  ...children: HTMLElement[]
): void {
  children.forEach(child => {
    parent.appendChild(child);
  });
}
