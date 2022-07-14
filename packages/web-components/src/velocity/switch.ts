import { rgba } from 'polished';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    label {
      align-items: center;
      display: flex;
      justify-content: center;
      user-select: none;
    }

    span {
      background-color: ${rgba('#8798AD', 0.4)};
      border-radius: 10px;
      cursor: pointer;
      height: 20px;
      position: relative;
      transition: background-color 300ms cubic-bezier(0.4, 0, 0.6, 1), opacity 300ms cubic-bezier(0.4, 0, 0.6, 1);
      width: 36px;
    }

    span::before {
      background-color: white;
      border-radius: 50%;
      content: '';
      height: 16px;
      left: 2px;
      position: absolute;
      top: 2px;
      transition: transform 300ms cubic-bezier(0.4, 0, 0.6, 1);
      width: 16px;
    }

    ::slotted(input) {
      height: 0;
      margin: 0;
      opacity: 0;
      width: 0;
    }

    ::slotted(input:checked) + span::before {
      transform: translateX(16px);
    }

    ::slotted(input:checked:enabled) + span {
      background-color: #33AC2E;
    }

    ::slotted(input:disabled) + span {
      opacity: 0.4;
    }
  </style>

  <label>
    <slot name="input"></slot>
    <span></span>
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
}
