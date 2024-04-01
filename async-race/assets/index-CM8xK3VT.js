var c=Object.defineProperty;var d=(i,e,t)=>e in i?c(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var s=(i,e,t)=>(d(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();class u{constructor(){s(this,"winnersView",null)}setWinnersView(e){this.winnersView=e}displayGarage(){const e=document.createElement("div");e.classList.add("garage-container"),e.innerHTML=`
      <h2>Garage (0)</h2>
      <p>Page #1</p>
      <button id="button-winners">TO WINNERS</button>
      <p style="color: brown;">Garage page under development - Coming soon!</p>

    `,document.body.innerHTML="",document.body.append(e),document.getElementById("button-winners").addEventListener("click",()=>{this.winnersView&&this.winnersView.displayWinners()})}}class l{constructor(e){s(this,"garageView");this.garageView=e}displayWinners(){const e=document.createElement("div");e.classList.add("winners-container"),e.innerHTML=`
      <h2>Winners (0)</h2>
      <p>Page #1</p>
      <button id="button-garage">TO GARAGE</button>
      <p style="color: brown;">Winners page under development - Coming soon!</p>
    `,document.body.innerHTML="",document.body.append(e),document.getElementById("button-garage").addEventListener("click",()=>{this.garageView.displayGarage()})}}class g{constructor(){const e=new u,t=new l(e);e.setWinnersView(t),e.displayGarage()}}new g;
