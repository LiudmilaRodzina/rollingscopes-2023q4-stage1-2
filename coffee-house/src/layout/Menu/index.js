import htmlToElement from "../../utils/htmlToElement";
import Menu from "./index.html";
// import * as images from "../../assets/images/menu-images.js";
import data from "./productsData.js";
import { Article } from "./Article.js";
import { Modal } from "./Modal.js";

import "./index.scss";

const menu = htmlToElement(Menu);

document.addEventListener("DOMContentLoaded", () => {
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
