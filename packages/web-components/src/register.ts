export default (name: string, element: CustomElementConstructor) => {
  if (!window.customElements.get(name)) {
    window.customElements.define(name, element);
  }
};
