const template = document.createElement('template');

template.innerHTML = `
  <style>
    ::slotted(img) {
      height: 100%;
      width: 100%;
    }

    ::slotted(img.rounded) {
      border-radius: 50%;
    }

    ::slotted(img.square) {
      border-radius: 6px;
    }
  </style>

  <slot id="img" name="img"></slot>
`;

export default class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['size', 'variant'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'size': {
        this.style.height = newValue.concat('px');
        this.style.width = newValue.concat('px');

        break;
      }
      case 'variant': {
        const nodes = (
          this.shadowRoot?.getElementById('img') as HTMLSlotElement
        ).assignedNodes() as HTMLImageElement[];

        nodes?.forEach((node) => {
          if (oldValue !== newValue) {
            node.classList.remove(oldValue);
            node.classList.add(newValue ?? 'rounded');
          }
        });

        break;
      }
      default:
        break;
    }
  }
}
