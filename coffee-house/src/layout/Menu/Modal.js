export class Modal {
  constructor(
    classes,
    { id, name, urlToImage, description, price, category, sizes, additives }
  ) {
    this.classes = classes;
    this.id = id;
    this.name = name;
    this.urlToImage = urlToImage;
    this.description = description;
    this.price = price;
    this.category = category;
    this.sizes = sizes;
    this.additives = additives;
    this.overlay = "";
    this.modal = "";
  }

  init(content) {
    this.overlay = this.createDomNode(this.overlay, "div", "overlay");
    this.modal = this.createDomNode(this.modal, "div", "modal", this.classes);
    document.body.append(this.overlay);
    this.overlay.append(this.modal);
    this.setContent(content);
    this.overlay.addEventListener("click", this.closeModal);

    this.openModal();
  }
  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }
  setContent(content) {
    if (typeof content === "string") {
      this.modal.innerHTML = content;
    } else {
      this.modal.innerHTML = "";
      this.modal.append(content);
    }
  }
  generateContent() {
    let template = "";
    let article = document.createElement("div");
    article.className = "modal__wrapper";

    template += `
    <div class="modal__image_container">
    <img
      src=${this.urlToImage}
      alt="Photo of ${this.name}"
      class="modal__image"
    />
  </div>
  <div class="modal__info_container">
    <div class="modal__info">
      <h3 class="modal__title">${this.name}</h3>
      <p class="modal__description">
      ${this.description}
      </p>
    </div>

    <p class="modal__title_size">Size</p>
    <form class="modal__size">
      <input type="radio" name="size" value="0.00" id="size-s" checked />
      <label for="size-s" class="modal__size_option checked">
        <span class="icon">S</span>
        <span class="size_title">200 ml</span>
      </label>
      <input type="radio" name="size" value="0.50" id="size-m" />
      <label for="size-m" class="modal__size_option">
        <span class="icon">M</span>
        <span class="size_title">300 ml</span>
      </label>
      <input type="radio" name="size" value="1.00" id="size-l" />
      <label for="size-l" class="modal__size_option">
        <span class="icon">L</span>
        <span class="size_title">400 ml</span>
      </label>
    </form>
    <p class="modal__title_add">Additives</p>
    <form class="modal__add">
      <input type="radio" name="add" value="0.50" id="add-1" />
      <label for="sadd-1" class="modal__add_option">
        <span class="icon">1</span>
        <span class="size_title">Sugar</span>
      </label>
      <input type="radio" name="add" value="0.50" id="add-2" />
      <label for="add-2" class="modal__add_option">
        <span class="icon">2</span>
        <span class="size_title">Cinnamon</span>
      </label>
      <input type="radio" name="add" value="0.50" id="add-2" />
      <label for="add-2" class="modal__add_option">
        <span class="icon">3</span>
        <span class="size_title">Syrup</span>
      </label>
    </form>
    <div class="modal__price">
      <h3 class="modal__title">Total:</h3>
      <div class="modal__price_total">$${this.price}</div>
    </div>
    <div class="modal__legend">
      <span class="icon-info"></span>
      <p class="modal__legend_text">
        The cost is not final. Download our mobile app to see the final
        price and place your <br />order. Earn loyalty points and enjoy
        your favorite coffee with up to 20% discount.
      </p>
    </div>
    <button class="modal__close">Close</button>
  </div>
  `;
    article.innerHTML = template;
    return article;
  }
  renderModal() {
    let content = this.generateContent();
    this.init(content);
  }
  openModal() {
    document.body.append(this.overlay);
    this.overlay.append(this.modal);
    document.querySelector("body").classList.add("no-scroll");
  }
  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains("overlay") || classes.contains("modal__close")) {
      document.querySelector(".overlay").remove();
      document.querySelector("body").classList.remove("no-scroll");
    }
  }
}
