import { darken, rgba, rem } from 'polished';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      display: inline-block;
    }

    ::slotted(button), ::slotted(button.contained) {
      background-color: #2E5BFF;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      font-family: Rubik, sans-serif;
      font-size: ${rem(15)};
      font-weight: 500;
      line-height: ${rem(21)};
      min-width: 100px;
      padding: 10px;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      width: 100%;
    }

    ::slotted(button:enabled:hover), ::slotted(button.contained:enabled:hover) {
      background-color: ${darken(0.2, '#2E5BFF')};
    }

    ::slotted(button.outlined) {
      background-color: ${rgba('#2E5BFF', 0.2)};
      color: #2E5BFF;
    }

    ::slotted(button.outlined:enabled:hover) {
      background-color: ${rgba('#2E5BFF', 0.4)};
    }

    ::slotted(button.text) {
      background: none;
      color: #2E5BFF;
    }

    ::slotted(button.text:enabled:hover) {
      background-color: ${rgba('#2E5BFF', 0.2)};
    }

    ::slotted(button:disabled) {
      opacity: 0.3;
      pointer-events: none;
    }
  </style>

  <slot id="button" name="button"></slot>
`;

export default class extends HTMLElement {
  /** Renders the parent element of the component */
  private $nodes?: HTMLButtonElement[];

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    this.$nodes = (
      this.shadowRoot?.getElementById('button') as HTMLSlotElement
    ).assignedNodes() as HTMLButtonElement[];

    const gstatic = document.createElement('link');
    const googleapis = document.createElement('link');
    const stylesheet = document.createElement('link');

    gstatic.rel = 'preconnect';
    gstatic.href = 'https://fonts.gstatic.com';
    gstatic.crossOrigin = 'true';

    googleapis.rel = 'preconnect';
    googleapis.href = 'https://fonts.googleapis.com';

    stylesheet.rel = 'stylesheet';
    stylesheet.href =
      'https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap';

    [gstatic, googleapis, stylesheet].forEach((link) =>
      document.head.appendChild(link),
    );
  }

  static get observedAttributes() {
    return ['variant'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'variant': {
        const nodes = (
          this.shadowRoot?.getElementById('button') as HTMLSlotElement
        ).assignedNodes() as HTMLButtonElement[];

        nodes?.forEach((node) => {
          if (oldValue !== newValue) {
            node.classList.remove(oldValue);
            node.classList.add(newValue ?? 'contained');
          }
        });

        break;
      }
      default:
        break;
    }
  }
}
