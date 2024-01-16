(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function y(){const s=document.querySelector("body");let e="";e+=`
    <div class="container">
      <div class="game">
        <div class="section">
          <div class="section__image">
          <img src="./images/gallows.png" class="section__image_img" alt="gallows image" />
          </div>
          <div class="section__quiz">
           <div class="section__quiz_word"></div>
           <div class="section__quiz_hint"></div>
           <div class="section__quiz_count">Incorrect guesses: 0 / 6</div>
           </div>
          <div class="section__keyboard"></div>
        </div>
      </div>
    </div>
  `,s.innerHTML=e}const w={Cappuccino:"A coffee beverage that consists of equal parts espresso, steamed milk, and milk foam, often dusted with cocoa or cinnamon",Barista:"A person who works in a coffee shop and is skilled in making and serving coffee-based beverages",Espresso:"A strong, concentrated coffee beverage produced by forcing hot water under pressure through finely ground coffee beans",Caffeine:"A natural stimulant found in coffee beans, known for its ability to increase alertness and reduce drowsiness",Macchiato:"An espresso drink made with a small amount of milk, often topped with foamed milk or whipped cream",Latte:"A popular coffee beverage made with espresso and a generous amount of steamed milk, topped with a small amount of foam",Arabica:"A species of coffee plant known for producing high-quality coffee beans that are often used in specialty coffee drinks",Roastery:"A place where coffee beans are roasted, often found within or associated with a coffee shop",Mocha:"A type of coffee beverage that combines espresso with chocolate syrup or hot chocolate, topped with whipped cream",Frappuccino:"A blended coffee beverage made with ice, milk, coffee, and flavored syrups, typically served with whipped cream",Decaf:"Short for decaffeinated coffee, which has had most or all of its caffeine removed",Americano:"A coffee drink made by diluting espresso with hot water, creating a milder taste and larger volume"};y();const p=document.querySelector(".section__keyboard"),g=document.querySelector(".container");let m=0,f=0,h="",c="",i,a,l,d;const b=()=>{i=document.createElement("div"),i.classList.add("overlay"),g.append(i)};b();const v=()=>{for(let s=65;s<91;s++){let e=document.createElement("button");e.classList.add("section__keyboard_key"),e.innerText=String.fromCharCode(s),p.append(e),e.addEventListener("click",()=>{let n=c.split(""),r=document.getElementsByClassName("section__keyboard_dashes");n.includes(e.innerText)?n.forEach((t,o)=>{t===e.innerText&&(r[o].innerText=t,e.classList.add("disabled"),e.disabled=!0,m+=1,m==n.length&&(i.classList.add("show"),a.classList.add("show"),l.innerText="You Win!"))}):(e.classList.add("disabled"),e.disabled=!0,f+=1,document.querySelector(".section__quiz_count").innerText=`Incorrect guesses: ${f} / 6 `,f===6&&(i.classList.add("show"),a.classList.add("show"),l.innerText="You Lose!"))}),p.append(e)}},_=s=>{const e=Object.keys(s),n=[Math.floor(Math.random()*e.length)];h=s[e[n]],c=e[n].toUpperCase();let r=c.replace(/./g,'<span class="section__keyboard_dashes">_ </span>');document.querySelector(".section__quiz_word").innerHTML=r,document.querySelector(".section__quiz_hint").append(h)};_(w);const k=()=>{a=document.createElement("div"),a.classList.add("modal"),g.append(a),l=document.createElement("h2");let s=document.createElement("h3");s.innerHTML=`The word was: ${c}`,d=document.createElement("button"),d.innerText="New Game",d.classList.add("button-play"),a.append(l),a.append(s),a.append(d)};k();console.log(c);window.onload=v;console.log("Привет! Прости, ещё продолжаю выполнять задание. Если есть возможность, вернись, пожалуйста, к проверке ближе к концу кросс-чека. Спасибо!");console.log(`Total: 100
+ Responsive/adaptive UI from 1440px to 360px viewport: +10
+ Body in the index.html is empty: +20
+ The game starts with the correct default view and a random question: +5
+ The user can play the game by using the virtual keyboard: +20
+ When the letter is correct, it appears instead of the corresponding underscore. If the letter repeats in the word, all corresponding underscores must be replaced by it: +15
+ When the letter is incorrect: the incorrect guesses counter is updated: +5
+ The clicked/pressed letter is disabled: +5
+ When the user runs out of 6 attempts or wins the game, the modal window appears: +10
+ The modal window includes the message about the game's outcome (winning or losing), the secret word and the 'play again' button: +10
`);
