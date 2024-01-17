(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function T(){const e=document.querySelector("body");let t="";t+=`
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
  `,e.innerHTML=t}const k={Cappuccino:"A coffee beverage that consists of equal parts espresso, steamed milk, and milk foam, often dusted with cocoa or cinnamon",Barista:"A person who works in a coffee shop and is skilled in making and serving coffee-based beverages",Espresso:"A strong, concentrated coffee beverage produced by forcing hot water under pressure through finely ground coffee beans",Caffeine:"A natural stimulant found in coffee beans, known for its ability to increase alertness and reduce drowsiness",Macchiato:"An espresso drink made with a small amount of milk, often topped with foamed milk or whipped cream",Latte:"A popular coffee beverage made with espresso and a generous amount of steamed milk, topped with a small amount of foam",Arabica:"A species of coffee plant known for producing high-quality coffee beans that are often used in specialty coffee drinks",Roastery:"A place where coffee beans are roasted, often found within or associated with a coffee shop",Mocha:"A type of coffee beverage that combines espresso with chocolate syrup or hot chocolate, topped with whipped cream",Frappuccino:"A blended coffee beverage made with ice, milk, coffee, and flavored syrups, typically served with whipped cream",Decaf:"Short for decaffeinated coffee, which has had most or all of its caffeine removed",Americano:"A coffee drink made by diluting espresso with hot water, creating a milder taste and larger volume"};T();const q=document.querySelector(".container"),v=document.querySelector(".section__keyboard"),L=document.querySelector(".section__image_img");let p=0,a=0,h=6,f=-1,w="",d="",u,r,g,i,y=new Set;const _=()=>{p=0,a=0,d="",r.classList.remove("show"),u.classList.remove("show"),L.src=`./images/hangman-${a}.svg`,document.querySelector(".section__quiz_count").innerText=`Incorrect guesses: ${a} / ${h} `,v.querySelectorAll("button").forEach(e=>e.disabled=!1),y.clear(),document.querySelector(".section__quiz_word").innerHTML="",document.querySelector(".section__quiz_hint").innerHTML="",i.removeEventListener("click",_),S(k),E(),i.addEventListener("click",_)},M=()=>{u=document.createElement("div"),u.classList.add("overlay"),q.append(u)};M();const b=e=>{setTimeout(()=>{u.classList.add("show"),r.classList.add("show"),g.innerText=e?"You Win!":"You Lose!"},400)},A=(e,t)=>{if(y.has(t))return;y.add(t);let s=d.split(""),c=document.getElementsByClassName("section__keyboard_dashes");if(s.includes(t)?s.forEach((o,n)=>{o===e.innerText&&(c[n].innerText=o,p+=1)}):(a+=1,L.src=`./images/hangman-${a}.svg`,document.querySelector(".section__quiz_count").innerText=`Incorrect guesses: ${a} / ${h} `),e.disabled=!0,a===h)return b(!1);if(p==s.length)return b(!0)};document.addEventListener("keypress",e=>{const t=e.key.toUpperCase();if(/^[A-Z]$/.test(t)){const s=v.querySelector(`.section__keyboard_key:nth-child(${t.charCodeAt(0)-64})`);A(s,t)}});let l;for(let e=65;e<91;e++)l=document.createElement("button"),l.classList.add("section__keyboard_key"),l.innerText=String.fromCharCode(e),v.append(l),l.addEventListener("click",t=>A(t.target,String.fromCharCode(e)));const S=e=>{const t=Object.keys(e);let s=f;for(;s===f;)s=[Math.floor(Math.random()*t.length)];f=s,w=e[t[s]],d=t[s].toUpperCase();let c=d.replace(/./g,'<span class="section__keyboard_dashes">_ </span>');document.querySelector(".section__quiz_word").innerHTML=c,document.querySelector(".section__quiz_hint").append(w),console.log(d)},E=()=>{r=document.createElement("div"),r.classList.add("modal"),q.append(r),g=document.createElement("h2");let e=document.createElement("h3");e.innerHTML=`The word was: ${d}`,i=document.createElement("button"),i.innerText="New Game",i.classList.add("button-play"),r.append(g),r.append(e),r.append(i)};S(k);E();i.addEventListener("click",_);
