export class Article {
  constructor({ id, name, urlToImage, description, price, category }) {
    this.id = id;
    this.name = name;
    this.urlToImage = urlToImage;
    this.description = description;
    this.price = price;
    this.category = category;
  }

  generateArticle() {
    let template = "";
    let article = document.createElement("article");
    article.className = "article";
    article.setAttribute("data-id", this.id);

    if (this.urlToImage) {
      template += `<div class="image__container">`;
      template += `<img src=${this.urlToImage} class="image" alt="Photo of ${this.name}" />`;
      template += `</div>`;
    }

    if (this.name || this.description || this.price || this.category) {
      template += `<div class="info__container">`;
      this.name && (template += `<h3 class="info__title">${this.name}</h3>`);
      this.description &&
        (template += `<p class="info__description">${this.description}</p>`);
      this.price && (template += `<p class="info__price">$${this.price}</p>`);
      this.category && (template += `<p class="tab">${this.category}</p>`);
      template += `</div>`;
    }

    article.innerHTML = template;
    return article;
  }
}
