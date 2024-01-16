(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();function p(){const r=document.querySelector("body");let e="";e+=`
    <div class="container">
      <div class="game">
        <div class="section">
          <div class="section__image">
          <img src="./images/gallows.png" class="section__image_img" alt="gallows image" />
          </div>
          <div class="section__quiz">
           <div class="section__quiz_word"></div>
          </div>
          <div class="section__keyboard"></div>
        </div>
      </div>
    </div>
  `,r.innerHTML=e}const u={Cappuccino:"A coffee beverage that consists of equal parts espresso, steamed milk, and milk foam, often dusted with cocoa or cinnamon",Barista:"A person who works in a coffee shop and is skilled in making and serving coffee-based beverages",Espresso:"A strong, concentrated coffee beverage produced by forcing hot water under pressure through finely ground coffee beans",Caffeine:"A natural stimulant found in coffee beans, known for its ability to increase alertness and reduce drowsiness",Macchiato:"An espresso drink made with a small amount of milk, often topped with foamed milk or whipped cream",Latte:"A popular coffee beverage made with espresso and a generous amount of steamed milk, topped with a small amount of foam",Arabica:"A species of coffee plant known for producing high-quality coffee beans that are often used in specialty coffee drinks",Roastery:"A place where coffee beans are roasted, often found within or associated with a coffee shop",Mocha:"A type of coffee beverage that combines espresso with chocolate syrup or hot chocolate, topped with whipped cream",Frappuccino:"A blended coffee beverage made with ice, milk, coffee, and flavored syrups, typically served with whipped cream",Decaf:"Short for decaffeinated coffee, which has had most or all of its caffeine removed",Americano:"A coffee drink made by diluting espresso with hot water, creating a milder taste and larger volume"};p();const d=document.querySelector(".section__keyboard");let l=0,c=0,f="",a="";const m=r=>{const e=Object.keys(r),s=[Math.floor(Math.random()*e.length)];f=r[e[s]],a=e[s].toUpperCase();let n=a.replace(/./g,'<span class="section__keyboard_dashes">_ </span>');document.querySelector(".section__quiz_word").innerHTML=n,document.querySelector(".section__quiz").append(f)};m(u);const h=()=>{c=0;for(let r=65;r<91;r++){let e=document.createElement("button");e.classList.add("section__keyboard_key"),e.innerText=String.fromCharCode(r),d.append(e),e.addEventListener("click",()=>{let s=a.split(""),n=document.getElementsByClassName("section__keyboard_dashes");s.includes(e.innerText)?s.forEach((o,t)=>{o===e.innerText&&(n[t].innerText=o,l+=1,l==s.length&&console.log("YOU WIN!"))}):(c+=1,c==6&&console.log("YOU LOSE!"))}),d.append(e)}};console.log(a);window.onload=h;console.log("Привет! Прости, не успела закончить задание. Если есть возможность, вернись, пожалуйста, к проверке ближе к концу кросс-чека. Спасибо!");console.log(`Total: 70:
+ Responsive/adaptive UI from 1440px to 360px viewport: +10
+ Body in the index.html is empty: +20
+ The game starts with the correct default view and a random question: +5
+ The user can play the game by using the virtual keyboard: +20
+ When the letter is correct, it appears instead of the corresponding underscore. If the letter repeats in the word, all corresponding underscores must be replaced by it: +15
`);
