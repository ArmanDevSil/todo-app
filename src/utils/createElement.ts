export interface ElementOptions {
  text?: string;
  html?: string | HTMLElement[];
  id?: string;
  classes?: string[];
  type?: string;
}

/**
 * Create an element with multiple options.
 * options: text?: string, id?: string, classes?: string[], type?: string
 **/
export function createElement<T extends keyof HTMLElementTagNameMap>(
  tag: T,
  options: ElementOptions = {},
): HTMLElement {
  const el = document.createElement(tag);

  if (options.text) el.textContent = options.text;
  if (options.html) {
    if (typeof options.html === 'string') {
      el.innerHTML = options.html;
    } else {
      options.html.forEach(child => {
        el.appendChild(child);
      });
    }
  }
  if (options.id) el.id = options.id;
  if (options.classes) el.classList.add(...options.classes);
  if (
    options.type &&
    (el instanceof HTMLInputElement || el instanceof HTMLButtonElement)
  ) {
    el.type = options.type;
  }

  return el;
}
