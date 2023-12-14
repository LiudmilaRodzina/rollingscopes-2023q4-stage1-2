import htmlToElement from "../../utils/htmlToElement";
import Menu from "./index.html";
import data from "./productsData.js";
import { Product } from "./Product.js";
import { Modal } from "./Modal.js";

import "./index.scss";

const menu = htmlToElement(Menu);

document.addEventListener("DOMContentLoaded", () => {
  const tab1 = document.getElementById("coffee");
  const tab2 = document.getElementById("tea");
  const tab3 = document.getElementById("dessert");
  const products = document.querySelectorAll(".article");

  function generateProducts(data) {
    let products = [];
    data.forEach((product) => {
      products.push(new Product(product));
    });
    return products;
  }
  function getProductsWrapper() {
    const productsContainer = document.querySelector(".articles__container");
    productsContainer.innerHTML = "";
    return productsContainer;
  }

  // const mediaDesktop = window.matchMedia("(min-width: 769px)");
  // const mediaModile = window.matchMedia("(max-width: 768px)");

  function renderDefault() {
    let productsWrapper = getProductsWrapper();
    generateProducts(data.slice(0, 8)).forEach((product) => {
      productsWrapper.append(product.generateProduct());
    });
  }
  renderDefault();

  tab1.addEventListener("click", () => {
    products.forEach((product) => {
      product.classList.add("article_hidden");
    });
    let productsWrapper = getProductsWrapper();
    generateProducts(data.slice(0, 8)).forEach((product) => {
      productsWrapper.append(product.generateProduct());
    });
  });
  tab2.addEventListener("click", () => {
    products.forEach((product) => {
      product.classList.add("article_hidden");
    });
    let productsWrapper = getProductsWrapper();
    generateProducts(data.slice(8, 12)).forEach((product) => {
      productsWrapper.append(product.generateProduct());
    });
  });
  tab3.addEventListener("click", () => {
    products.forEach((product) => {
      product.classList.add("article_hidden");
    });
    let productsWrapper = getProductsWrapper();
    generateProducts(data.slice(12, 21)).forEach((product) => {
      productsWrapper.append(product.generateProduct());
    });
  });

  const addTabsClickHandler = () => {
    document
      .querySelector(".tabs__container")
      .addEventListener("click", (e) => {
        if (e.target.classList.contains("tab")) {
          let clickedTab = e.target.closest(".tab");
          removeTabSelection();
          addTabSelection(clickedTab);
          // filterMenuBySelectedTab(clickedTab.innerText.toLowerCase());
        }
      });
  };
  addTabsClickHandler();

  const removeTabSelection = () => {
    let tabs = document.querySelectorAll(".tabs__container .tab");
    tabs.forEach((tab) => {
      tab.classList.remove("tab--active");
    });
  };
  const addTabSelection = (clickedTab) => {
    clickedTab.classList.add("tab--active");
  };

  // modal handlers
  const addProductClickHandler = () => {
    document
      .querySelector(".articles__container")
      .addEventListener("click", (e) => {
        if (e.target.closest(".article")) {
          let clickedProductId = e.target
            .closest(".article")
            .getAttribute("data-id");
          let clickedProductData = getClickedData(clickedProductId);

          renderProductModalWindow(clickedProductData);
        }
      });
  };
  addProductClickHandler();

  const getClickedData = (id) => {
    return data.find((product) => product.id == id);
  };

  const renderProductModalWindow = (content) => {
    let modal = new Modal("modal__wrapper", content);
    modal.renderModal();
  };
});

export default menu;
