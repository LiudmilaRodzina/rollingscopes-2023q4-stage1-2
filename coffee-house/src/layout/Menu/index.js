import htmlToElement from "../../utils/htmlToElement";
import Menu from "./index.html";
import * as images from "../../assets/images/menu-images.js";
import { Article } from "./Article.js";
import { Modal } from "./Modal.js";

import "./index.scss";

const menu = htmlToElement(Menu);

document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      id: 1,
      name: "Irish coffee",
      urlToImage: images.imgCoffee1,
      description:
        "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      price: "7.00",
      category: "coffee",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Cinnamon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 2,
      name: "Kahlua coffee",
      urlToImage: images.imgCoffee2,
      description:
        "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      price: "7.00",
      category: "coffee",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Cinnamon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 3,
      name: "Honey raf",
      urlToImage: images.imgCoffee3,
      description: "Espresso with frothed milk, cream and aromatic honey",
      price: "5.50",
      category: "coffee",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Cinnamon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 4,
      name: "Ice cappuccino",
      urlToImage: images.imgCoffee4,
      description: "Cappuccino with soft thick foam in summer version with ice",
      price: "5.00",
      category: "coffee",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Cinnamon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 5,
      name: "Espresso",
      urlToImage: images.imgCoffee5,
      description: "Classic black coffee",
      price: "4.50",
      category: "coffee",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Cinnamon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 6,
      name: "Latte",
      urlToImage: images.imgCoffee6,
      description:
        "Espresso coffee with the addition of steamed milk and dense milk foam",
      price: "5.50",
      category: "coffee",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Cinnamon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 7,
      name: "Latte macchiato",
      urlToImage: images.imgCoffee7,
      description: "Espresso with frothed milk and chocolate",
      price: "5.50",
      category: "coffee",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Cinnamon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 8,
      name: "Coffee with cognac",
      urlToImage: images.imgCoffee8,
      description: "Fragrant black coffee with cognac and whipped cream",
      price: "6.50",
      category: "coffee",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Cinnamon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 9,
      name: "Moroccan",
      urlToImage: images.imgTea1,
      description:
        "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: "4.50",
      category: "tea",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Lemon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 10,
      name: "Ginger",
      urlToImage: images.imgTea2,
      description: "Original black tea with fresh ginger, lemon and honey",
      price: "5.00",
      category: "tea",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Lemon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 11,
      name: "Cranberry",
      urlToImage: images.imgTea3,
      description: "Invigorating black tea with cranberry and honey",
      price: "5.00",
      category: "tea",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Lemon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 12,
      name: "Sea buckthorn",
      urlToImage: images.imgTea4,
      description:
        "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      price: "5.50",
      category: "tea",
      sizes: {
        s: {
          size: "200 ml",
          "add-price": "0.00",
        },
        m: {
          size: "300 ml",
          "add-price": "0.50",
        },
        l: {
          size: "400 ml",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Sugar",
          "add-price": "0.50",
        },
        {
          name: "Lemon",
          "add-price": "0.50",
        },
        {
          name: "Syrup",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 13,
      name: "Marble cheesecake",
      urlToImage: images.imgDessert1,
      description:
        "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      price: "3.50",
      category: "dessert",
      sizes: {
        s: {
          size: "50 g",
          "add-price": "0.00",
        },
        m: {
          size: "100 g",
          "add-price": "0.50",
        },
        l: {
          size: "200 g",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Berries",
          "add-price": "0.50",
        },
        {
          name: "Nuts",
          "add-price": "0.50",
        },
        {
          name: "Jam",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 14,
      name: "Red velvet",
      urlToImage: images.imgDessert2,
      description: "Layer cake with cream cheese frosting",
      price: "4.00",
      category: "dessert",
      sizes: {
        s: {
          size: "50 g",
          "add-price": "0.00",
        },
        m: {
          size: "100 g",
          "add-price": "0.50",
        },
        l: {
          size: "200 g",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Berries",
          "add-price": "0.50",
        },
        {
          name: "Nuts",
          "add-price": "0.50",
        },
        {
          name: "Jam",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 15,
      name: "Cheesecakes",
      urlToImage: images.imgDessert3,
      description:
        "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: "4.50",
      category: "dessert",
      sizes: {
        s: {
          size: "50 g",
          "add-price": "0.00",
        },
        m: {
          size: "100 g",
          "add-price": "0.50",
        },
        l: {
          size: "200 g",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Berries",
          "add-price": "0.50",
        },
        {
          name: "Nuts",
          "add-price": "0.50",
        },
        {
          name: "Jam",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 16,
      name: "Creme brulee",
      urlToImage: images.imgDessert4,
      description:
        "Delicate creamy dessert in a caramel basket with wild berries",
      price: "4.00",
      category: "dessert",
      sizes: {
        s: {
          size: "50 g",
          "add-price": "0.00",
        },
        m: {
          size: "100 g",
          "add-price": "0.50",
        },
        l: {
          size: "200 g",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Berries",
          "add-price": "0.50",
        },
        {
          name: "Nuts",
          "add-price": "0.50",
        },
        {
          name: "Jam",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 17,
      name: "Pancakes",
      urlToImage: images.imgDessert5,
      description: "Tender pancakes with strawberry jam and fresh strawberries",
      price: "4.50",
      category: "dessert",
      sizes: {
        s: {
          size: "50 g",
          "add-price": "0.00",
        },
        m: {
          size: "100 g",
          "add-price": "0.50",
        },
        l: {
          size: "200 g",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Berries",
          "add-price": "0.50",
        },
        {
          name: "Nuts",
          "add-price": "0.50",
        },
        {
          name: "Jam",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 18,
      name: "Honey cake",
      urlToImage: images.imgDessert6,
      description: "Classic honey cake with delicate custard",
      price: "4.50",
      category: "dessert",
      sizes: {
        s: {
          size: "50 g",
          "add-price": "0.00",
        },
        m: {
          size: "100 g",
          "add-price": "0.50",
        },
        l: {
          size: "200 g",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Berries",
          "add-price": "0.50",
        },
        {
          name: "Nuts",
          "add-price": "0.50",
        },
        {
          name: "Jam",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 19,
      name: "Chocolate cake",
      urlToImage: images.imgDessert7,
      description:
        "Cake with hot chocolate filling and nuts with dried apricots",
      price: "5.50",
      category: "dessert",
      sizes: {
        s: {
          size: "50 g",
          "add-price": "0.00",
        },
        m: {
          size: "100 g",
          "add-price": "0.50",
        },
        l: {
          size: "200 g",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Berries",
          "add-price": "0.50",
        },
        {
          name: "Nuts",
          "add-price": "0.50",
        },
        {
          name: "Jam",
          "add-price": "0.50",
        },
      ],
    },

    {
      id: 20,
      name: "Black forest",
      urlToImage: images.imgDessert8,
      description:
        "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      price: "6.50",
      category: "dessert",
      sizes: {
        s: {
          size: "50 g",
          "add-price": "0.00",
        },
        m: {
          size: "100 g",
          "add-price": "0.50",
        },
        l: {
          size: "200 g",
          "add-price": "1.00",
        },
      },
      additives: [
        {
          name: "Berries",
          "add-price": "0.50",
        },
        {
          name: "Nuts",
          "add-price": "0.50",
        },
        {
          name: "Jam",
          "add-price": "0.50",
        },
      ],
    },
  ];

  const renderArticlesToDom = () => {
    let articlesWrapper = getArticlesWrapper();
    generateArticles(data).forEach((article) => {
      articlesWrapper.append(article.generateArticle());
    });
  };

  const getArticlesWrapper = () => {
    const articlesContainer = document.querySelector(".articles__container");
    articlesContainer.innerHTML = "";
    return articlesContainer;
  };

  const generateArticles = (data) => {
    let articles = [];
    data.forEach((article) => {
      articles.push(new Article(article));
    });
    return articles;
  };

  if (data) {
    renderArticlesToDom();
  }

  const addTabsClickHandler = () => {
    document
      .querySelector(".tabs__container")
      .addEventListener("click", (e) => {
        if (e.target.classList.contains("tab")) {
          let clickedTab = e.target;
          removeSelectedTabs();
          selectClickedTab(clickedTab);
          filterMenuBySelectedTab(clickedTab.innerText.toLowerCase());
        }
      });
  };
  addTabsClickHandler();

  const removeSelectedTabs = () => {
    let tabs = document.querySelectorAll(".tabs__container .tab");
    tabs.forEach((tab) => {
      tab.classList.remove("tab--active");
    });
  };
  const selectClickedTab = (clickedTab) => {
    clickedTab.classList.add("tab--active");
  };

  const filterMenuBySelectedTab = (clickedTab) => {
    let articles = document.querySelectorAll(".article");
    articles.forEach((article) => {
      article.classList.add("article_hidden");
      article.querySelectorAll(".tab").forEach((tab) => {
        if (tab.innerHTML === clickedTab) {
          console.log(true);
          article.classList.remove("article_hidden");
        }
      });
    });
  };

  const addArticleClickHandler = () => {
    document
      .querySelector(".articles__container")
      .addEventListener("click", (e) => {
        if (e.target.closest(".article")) {
          let clickedArticleId = e.target
            .closest(".article")
            .getAttribute("data-id");
          let clickedArticleData = getClickedData(clickedArticleId);

          renderArticleModalWindow(clickedArticleData);
        }
      });
  };
  addArticleClickHandler();

  const getClickedData = (id) => {
    return data.find((article) => article.id == id);
  };

  const renderArticleModalWindow = (content) => {
    let modal = new Modal("modal__wrapper", content);
    modal.renderModal();
  };
});

export default menu;
