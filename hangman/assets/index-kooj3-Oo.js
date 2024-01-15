(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function p(){const r=document.querySelector("body");let e="";e+=`
    <div class="container">
      <p class="request"><-- Привет! Прости, не успела закончить задание. Если есть возможность, вернись, пожалуйста, к проверке ближе к концу кросс-чека. Спасибо! --> </p>
      <div class="game">
        <div class="section">
          <div class="section-left">
          <img src="./public/images/gallows.png" class="image" alt="gallows image" />
          </div>
          <div class="section-right">
          <div class="section-right__word"></div>
          </div>
        </div>
        <div class="keyboard"></div>
      </div>
    </div>
  `,r.innerHTML=e}const u={Cappuccino:"A coffee beverage that consists of equal parts espresso, steamed milk, and milk foam, often dusted with cocoa or cinnamon",Barista:"A person who works in a coffee shop and is skilled in making and serving coffee-based beverages",Espresso:"A strong, concentrated coffee beverage produced by forcing hot water under pressure through finely ground coffee beans",Caffeine:"A natural stimulant found in coffee beans, tea leaves, and other substances, known for its ability to increase alertness and reduce drowsiness",Macchiato:"An espresso drink made with a small amount of milk, often topped with foamed milk or whipped cream",Latte:"A popular coffee beverage made with espresso and a generous amount of steamed milk, topped with a small amount of foam",Arabica:"A species of coffee plant known for producing high-quality coffee beans that are often used in specialty coffee drinks",Roastery:"A place where coffee beans are roasted, often found within or associated with a coffee shop",Mocha:"A type of coffee beverage that combines espresso with chocolate syrup or hot chocolate, topped with whipped cream",Frappuccino:"A blended coffee beverage made with ice, milk, coffee, and flavored syrups, typically served with whipped cream",Decaf:"Short for decaffeinated coffee, which has had most or all of its caffeine removed",Americano:"A coffee drink made by diluting espresso with hot water, creating a milder taste and larger volume"};p();const d=document.querySelector(".keyboard");let l=0,c=0,f="",n="";const h=r=>{const e=Object.keys(r),s=[Math.floor(Math.random()*e.length)];f=r[e[s]],n=e[s].toUpperCase();let a=n.replace(/./g,'<span class="dashes">_ </span>');document.querySelector(".section-right__word").innerHTML=a,document.querySelector(".section-right").append(f)};h(u);const m=()=>{c=0;for(let r=65;r<91;r++){let e=document.createElement("button");e.classList.add("key"),e.innerText=String.fromCharCode(r),d.append(e),e.addEventListener("click",()=>{let s=n.split(""),a=document.getElementsByClassName("dashes");s.includes(e.innerText)?s.forEach((t,o)=>{t===e.innerText&&(a[o].innerText=t,l+=1,l==s.length&&console.log("YOU WIN!"))}):(c+=1,c==6&&console.log("YOU LOSE!"))}),d.append(e)}};console.log(n);window.onload=m;console.log(`Total: 60:
+ Body in the index.html is empty: +20
+ The game starts with the correct default view and a random question: +5
+ The user can play the game by using the virtual keyboard: +20
+ When the letter is correct, it appears instead of the corresponding underscore. If the letter repeats in the word, all corresponding underscores must be replaced by it: +15
`);
