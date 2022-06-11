import { darken, rem } from 'polished';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    ::slotted(button) {
      background-color: #2E5BFF;
      border: none;
      border-radius: 8px;
      color: white;
      cursor: pointer;
      font-family: Rubik, sans-serif;
      font-size: ${rem(15)};
      font-weight: 500;
      line-height: ${rem(21)};
      padding: 12px;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    ::slotted(button:hover) {
      background-color: ${darken(0.2, '#2E5BFF')};
    }
  </style>

  <slot name="button"></slot>
`;

customElements.define(
  'wc-button',
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot?.appendChild(template.content.cloneNode(true));

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
  },
);
