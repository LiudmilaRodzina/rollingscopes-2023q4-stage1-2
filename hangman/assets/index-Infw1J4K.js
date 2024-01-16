(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function v(){const e=document.querySelector("body");let o="";o+=`
    <div class="container">
      <div class="game">
        <div class="section">
          <div class="section__image">
          <h1>Hangman Game</h1>
          <img src="./images/hangman-0.svg" class="section__image_img" alt="gallows image" />
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
  `,e.innerHTML=o}const b={Cappuccino:"A coffee beverage that consists of equal parts espresso, steamed milk, and milk foam, often dusted with cocoa or cinnamon",Barista:"A person who works in a coffee shop and is skilled in making and serving coffee-based beverages",Espresso:"A strong, concentrated coffee beverage produced by forcing hot water under pressure through finely ground coffee beans",Caffeine:"A natural stimulant found in coffee beans, known for its ability to increase alertness and reduce drowsiness",Macchiato:"An espresso drink made with a small amount of milk, often topped with foamed milk or whipped cream",Latte:"A popular coffee beverage made with espresso and a generous amount of steamed milk, topped with a small amount of foam",Arabica:"A species of coffee plant known for producing high-quality coffee beans that are often used in specialty coffee drinks",Roastery:"A place where coffee beans are roasted, often found within or associated with a coffee shop",Mocha:"A type of coffee beverage that combines espresso with chocolate syrup or hot chocolate, topped with whipped cream",Frappuccino:"A blended coffee beverage made with ice, milk, coffee, and flavored syrups, typically served with whipped cream",Decaf:"Short for decaffeinated coffee, which has had most or all of its caffeine removed",Americano:"A coffee drink made by diluting espresso with hot water, creating a milder taste and larger volume"};v();const _=document.querySelector(".container"),w=document.querySelector(".section__keyboard"),k=document.querySelector(".section__image_img");let p=0,d=0,h=6,g="",c="",u,a,m,l;const q=()=>{u=document.createElement("div"),u.classList.add("overlay"),_.append(u)};q();const y=e=>{setTimeout(()=>{u.classList.add("show"),a.classList.add("show"),m.innerText=e?"You Win!":"You Lose!"},400)},L=(e,o)=>{let n=c.split(""),r=document.getElementsByClassName("section__keyboard_dashes");if(n.includes(o)?n.forEach((t,s)=>{t===e.innerText&&(r[s].innerText=t,p+=1)}):(d+=1,k.src=`./images/hangman-${d}.svg`,document.querySelector(".section__quiz_count").innerText=`Incorrect guesses: ${d} / ${h} `),e.disabled=!0,d===h)return y(!1);if(p==n.length)return y(!0)};let i;for(let e=65;e<91;e++)i=document.createElement("button"),i.classList.add("section__keyboard_key"),i.innerText=String.fromCharCode(e),w.append(i),i.addEventListener("click",o=>L(o.target,String.fromCharCode(e)));const A=e=>{const o=Object.keys(e),n=[Math.floor(Math.random()*o.length)];g=e[o[n]],c=o[n].toUpperCase();let r=c.replace(/./g,'<span class="section__keyboard_dashes">_ </span>');document.querySelector(".section__quiz_word").innerHTML=r,document.querySelector(".section__quiz_hint").append(g)},T=()=>{a=document.createElement("div"),a.classList.add("modal"),_.append(a),m=document.createElement("h2");let e=document.createElement("h3");e.innerHTML=`The word was: ${c}`,l=document.createElement("button"),l.innerText="New Game",l.classList.add("button-play"),a.append(m),a.append(e),a.append(l)};A(b);T();console.log(c);console.log(`Привет! Ещё продолжаю выполнять задание.

  Пока total 115 баллов (150 - 35). Не выполнено:
  - The user can play the game by using the physical keyboard: -20
  - When the user clicks the 'play again' button, the game starts over: -15.

  Если есть возможность, вернись, пожалуйста, к проверке ближе к концу кросс-чека. Спасибо!`);
