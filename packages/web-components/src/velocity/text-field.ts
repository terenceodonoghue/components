import { rem, rgba } from 'polished';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    label {
      color: #B0BAC9;
      display: inline-block;
      font-family: Rubik, sans-serif;
      font-size: ${rem(12)};
      font-weight: 500;
      letter-spacing: 1.2px;
      margin: 0 12px;
      text-transform: uppercase;
    }

    span:empty {
      display: none;
    }

    ::slotted(input) {
      display: block;
      background-color: ${rgba('#E0E7FF', 0.2)};
      border: solid 1px #E0E7FF;
      border-radius: 5px;
      color: #2E384D;
      font-size: ${rem(15)};
      margin: 8px 0;
      padding: 10px 16px;
      transition: border 300ms cubic-bezier(0.4, 0, 0.6, 1), opacity 300ms cubic-bezier(0.4, 0, 0.6, 1);
    }

    ::slotted(input:disabled) {
      opacity: 0.3;
    }

    ::slotted(input:focus) {
      border: solid 1px #2E5BFF;
      outline: 0;
    }

    ::slotted(input::placeholder) {
      color: ##8798AD;
    }
  </style>

  <label>
    <span id="label"></span>
    <slot name="input"></slot>
  </label>
`;

export default class extends HTMLElement {
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

  static get observedAttributes() {
    return ['label'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'label': {
        const label = this.shadowRoot?.getElementById('label');

        if (label) {
          label.innerText = newValue;
        }

        break;
      }
      default:
        break;
    }
  }
}
