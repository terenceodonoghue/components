import { rem, rgba } from 'polished';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      background-color: white;
      border: solid 1px ${rgba('#2E5BFF', 0.08)};
      border-radius: 1px;
      box-shadow: 0 10px 20px 0 ${rgba('#2E5BFF', 0.07)};
      color: #2E384D;
      display: block;
      font-family: Rubik, sans-serif;
      margin: 6px;
      padding: 32px 24px;
    }

    h3 {
      color: #8798AD;
      font-size: ${rem(13)};
      font-weight: 400;
      margin: 0 0 24px;
      letter-spacing: 1.2px;
      line-height: ${rem(15)};
      text-transform: uppercase;
    }

    h3:empty {
      display: none;
    }

    @media (min-width: 768px) {
      :host {
          margin: 12px;
      }
    }
  </style>

  <h3 id="heading"></h3>
  <slot name="content"></slot>
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
      'https://fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap';

    [gstatic, googleapis, stylesheet].forEach((link) =>
      document.head.appendChild(link),
    );
  }

  static get observedAttributes() {
    return ['heading'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'heading': {
        const heading = this.shadowRoot?.getElementById('heading');

        if (heading) {
          heading.innerText = newValue;
        }

        break;
      }
      default:
        break;
    }
  }
}
