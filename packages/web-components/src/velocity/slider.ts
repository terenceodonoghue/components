import { rgba } from 'polished';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    ::slotted(input) {
      appearance: none;
      background-color: ${rgba('#2E5BFF', 0.15)};
      border-radius: 7px;
      cursor: pointer;
      height: 4px;
      outline: none;
      transition: opacity 300ms cubic-bezier(0.4, 0, 0.6, 1);
      width: 100%;
    }

    ::slotted(input::-moz-range-progress) {
      background-color: #2E5BFF;
    }

    ::slotted(input::-moz-range-thumb) {
      border: solid 4px #2E5BFF;
      border-radius: 50%;
      height: 8px;
      width: 8px;
    }
    
    ::slotted(input::-webkit-slider-thumb) {
      appearance: none;
      border: solid 4px #2E5BFF;
      border-radius: 50%;
      cursor: pointer;
      height: 16px;
      width: 16px;
    }

    ::slotted(input:disabled) {
      opacity: 0.3;
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
  }
}
