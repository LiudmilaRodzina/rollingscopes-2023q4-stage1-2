export default class ElementCreator {
  private element: HTMLElement | null;

  constructor(
    params: { tag: string; classNames: string[]; textContent: string } = {
      tag: '',
      classNames: [],
      textContent: '',
    },
  ) {
    this.element = null;
    this.createElement(params);
  }

  private createElement(params: {
    tag: string;
    classNames: string[];
    textContent: string;
  }): void {
    this.element = document.createElement(params.tag);
    this.setCSSClasses(params.classNames);
    this.setTextContent(params.textContent);
  }

  private setCSSClasses(cssClasses: string[]): void {
    cssClasses.forEach((className: string) => {
      if (this.element) {
        this.element.classList.add(className);
      }
    });
  }

  private setTextContent(text: string): void {
    if (this.element) {
      this.element.textContent = text;
    }
  }

  public getElement(): HTMLElement | null {
    return this.element;
  }
}
