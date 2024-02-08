(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const O=()=>{const e=document.querySelector("body");let t="";return t+=`
  <div class="container">
    <div class="overlay"></div>
    <div class="modal">Great! You have solved the nonogram!
      <button class="button close crossed"></button>
    </div>

    <div class="grid-container">
    </div>
    <div class="buttons-container">
      <button class="button theme"></button>
      <button class="button easy">Easy</button>
      <button class="button medium">Medium</button>
      <button class="button hard">Hard</button>
      <button class="button sound"></button>
    </div>
    <div class="buttons-container">
      <button class="button restart">Restart Game</button>
      <button class="button solution">Solution</button>
      <button class="button random">Random Game</button>
    </div>
    <h3>Nonograms Game</h3>
  </div>
`,e.innerHTML=t,document.querySelector(".grid-container")},S=(e,t,n)=>{const o=localStorage.getItem("darkMode")==="true"?t:n;document.documentElement.style.setProperty(e,o)},q=()=>{S("--color-black","#eee","#222"),S("--color-dark-grey","#ddd","#555"),S("--color-light-grey","#555","#ddd"),S("--color-white","#222","#eee")},T=()=>{const e=localStorage.getItem("darkMode")==="true";localStorage.setItem("darkMode",!e),document.querySelector("body").classList.toggle("dark",!e),q()},I=()=>{const e=localStorage.getItem("darkMode")==="true";document.body.classList.toggle("dark",e),q();const t="⚫",n="⚪",l=document.querySelector(".theme");l.innerText=e?n:t,l.addEventListener("click",()=>{T();const o=localStorage.getItem("darkMode")==="true";l.innerText=o?n:t;const s=new Audio;s.src="audio/switch.mp3",localStorage.getItem("isSoundOn")==="true"?s.play():s.pause()})};document.addEventListener("DOMContentLoaded",I);let d=!0;const f=new Audio,b=()=>{const e=document.querySelector(".sound");e.innerText=d?"🔊":"🔇"},u=e=>{const t={"left-click":"audio/left-click.mp3","right-click":"audio/right-click.mp3",win:"audio/win.mp3",reset:"audio/reset.mp3",switch:"audio/switch.mp3"};f.src=t[e],localStorage.getItem("isSoundOn")==="true"?f.play():f.pause(),b()},A=()=>{d=!d,d?(f.currentTime=0,f.play()):(f.pause(),f.currentTime=0),b(),localStorage.setItem("isSoundOn",d)},C=()=>{const e=localStorage.getItem("isSoundOn");return e!==null?d=JSON.parse(e):d=!1,b(),d},P=()=>{const e=document.querySelector(".overlay"),t=document.querySelector(".modal");e.classList.add("show"),t.classList.add("show")},M=()=>{const e=document.querySelector(".overlay"),t=document.querySelector(".modal");e.classList.remove("show"),t.classList.remove("show")},v=[{matrix:[[0,1,1,1,0],[1,0,1,0,1],[0,1,1,1,0],[0,1,0,1,0],[1,0,0,0,1]],title:"space invader",size:"5x5"},{matrix:[[0,1,0,0,0],[1,1,1,0,1],[1,1,1,1,0],[1,0,1,0,0],[1,0,1,0,0]],title:"camel",size:"5x5"},{matrix:[[0,1,1,1,0],[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,0,0]],title:"umbrella",size:"5x5"},{matrix:[[0,1,0,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]],title:"heart",size:"5x5"},{matrix:[[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,1,1,1,1]],title:"hourglass",size:"5x5"},{matrix:[[0,0,1,1,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,1],[0,0,1,1,1,0,0,0,0,1],[0,0,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,0],[0,0,0,1,1,1,1,1,0,0],[0,0,0,0,1,1,1,0,0,0]],title:"bird",size:"10x10"},{matrix:[[0,1,1,1,1,1,1,1,0,0],[0,1,1,1,0,0,1,0,0,0],[0,1,1,1,0,0,1,0,0,0],[0,1,1,1,0,0,1,0,0,0],[0,1,1,1,0,0,1,0,0,0],[1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,1],[0,1,1,0,0,0,0,1,1,0]],title:"car",size:"10x10"},{matrix:[[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,0,0,0,1,0],[1,1,1,1,0,0,0,1,0,1],[1,1,1,1,1,1,1,1,1,1],[0,0,0,1,1,0,1,0,0,0],[0,0,1,1,1,0,0,1,0,0],[0,0,1,1,0,0,0,1,0,0],[1,0,1,1,0,0,0,1,0,1],[1,1,0,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1]],title:"mushroom",size:"10x10"},{matrix:[[1,0,1,0,0,0,0,1,0,1],[1,1,1,0,0,0,0,1,1,1],[0,1,0,0,0,0,0,0,1,0],[0,1,0,1,0,0,1,0,1,0],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,0,0],[1,1,0,1,1,1,1,0,1,1],[1,0,0,0,0,0,0,0,0,1]],title:"crab",size:"10x10"},{matrix:[[0,0,0,0,0,0,1,1,1,0],[1,0,0,0,1,0,1,0,1,1],[1,1,0,1,1,0,0,0,0,1],[1,1,1,1,1,0,0,0,0,1],[1,0,1,0,1,0,0,0,0,1],[1,1,1,1,1,0,0,1,1,1],[0,1,1,1,0,0,1,1,1,1],[0,0,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1],[0,0,0,1,1,1,1,0,1,1]],title:"cat",size:"10x10"},{matrix:[[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,1,1,1,1,0,1,1,1],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],[1,0,0,0,0,0,1,1,1,1,1,1,1,1,0],[1,1,1,0,0,1,1,1,0,0,0,1,1,1,0],[1,1,1,1,1,1,1,0,1,1,1,0,1,1,0],[0,1,1,1,1,1,0,1,1,1,1,0,1,1,0],[0,0,1,1,1,1,1,1,1,0,0,1,1,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,1,1,0,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1,0,0,0]],title:"duck",size:"15x15"},{matrix:[[0,0,0,0,0,1,1,0,1,1,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,1,1,1,0,1,1,1,1,1,0,1,1,1,0],[1,1,1,1,1,0,1,1,1,0,1,1,1,1,1],[1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],[0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],[1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,0,0,1,1,1,1,1],[0,1,1,1,0,0,0,1,0,0,0,1,1,1,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0]],title:"clover leaf",size:"15x15"},{matrix:[[0,1,1,1,1,0,0,0,0,0,1,1,0,0,0],[1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,0,0,1,1,1,0,0,0,1,1,1,0,0,1],[1,0,0,0,0,1,1,1,1,1,0,0,0,0,1],[1,0,0,0,0,1,0,0,1,0,0,0,0,0,1],[1,0,0,1,1,1,0,0,1,1,1,0,0,0,1],[1,0,0,0,0,1,0,0,1,0,0,0,0,0,1],[1,0,0,0,1,1,1,1,1,1,0,0,0,0,1],[1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],[0,0,1,1,1,0,0,1,0,0,1,1,0,0,0],[1,1,1,1,0,0,0,1,0,0,0,1,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,1],[1,0,0,0,0,0,1,1,1,0,0,0,0,1,1],[1,1,1,0,0,1,1,1,1,1,0,0,0,0,1],[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1]],title:"bow",size:"15x15"},{matrix:[[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,0,1,1,0,0,1,0],[0,1,0,0,1,1,0,0,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,0,0,1,1,0],[0,1,1,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,1,1,1,1,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0]],title:"paw",size:"15x15"},{matrix:[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],[1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,1,0,1,0,0,1,1,1,1],[1,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],[1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],title:"sun",size:"15x15"}],a=O();let i=0,p=-1,r,y;const G=()=>{for(r=p;r===p;)r=Math.floor(Math.random()*v.length);return p=r,console.log(v[r]),v[r].matrix},x=(e,t)=>{for(let n=0;n<i;n++){const l=document.createElement("div");l.classList.add("row");for(let o=0;o<i;o++){const s=document.createElement("div");s.classList.add("cell"),e[n][o]===1&&s.classList.add("solid"),l.append(s)}t.append(l)}},k=(e,t,n)=>{const l=document.createElement("div");l.classList.add("clues-top"),n.append(l);for(let s=0;s<i;s++){const c=document.createElement("div");c.classList.add("clues-top-cell");const L=e[s];for(const h of L){const m=document.createElement("span");m.className="clue-text",m.innerText=h,c.append(m)}l.append(c)}const o=document.createElement("div");o.classList.add("clues-left"),n.prepend(o);for(let s=0;s<i;s++){const c=document.createElement("div");c.classList.add("clues-left-cell");const L=t[s];for(const h of L){const m=document.createElement("span");m.className="clue-text",m.innerText=h,c.append(m)}o.append(c)}},H=()=>{a.innerHTML="";const e=document.createElement("div");e.classList.add("grid"),a.append(e);const t=G();i=t.length;const n=g(t,"top"),l=g(t,"left");x(t,e),k(n,l,a),y=Array.from(e.querySelectorAll(".cell")),z()},g=(e,t)=>{const n=[];for(let l=0;l<i;l++){let o=0;const s=[];for(let c=0;c<i;c++)(t==="top"?e[c][l]:e[l][c])===1?o++:o!==0&&(s.push(o),o=0);o!==0&&s.push(o),n.push(s)}return n},N=e=>{const t=e.target;t.classList.contains("filled")?t.classList.remove("filled"):t.classList.contains("crossed")?t.classList.remove("crossed"):t.classList.add("filled"),u("left-click"),w()},R=e=>{e.preventDefault();const t=e.target;t.classList.contains("filled")?(t.classList.remove("filled"),t.classList.add("crossed")):t.classList.contains("crossed")?t.classList.remove("crossed"):t.classList.add("crossed"),u("right-click"),w()},w=()=>{const e=Array.from(a.querySelectorAll(".cell.filled")),t=Array.from(a.querySelectorAll(".cell.solid"));e.length===t.length&&t.every(n=>n.classList.contains("filled"))&&(u("win"),document.querySelector(".grid").classList.add("lock"),P())},z=()=>{y.forEach(e=>{e.addEventListener("click",N),e.addEventListener("contextmenu",R)})};C();const D=document.querySelector(".random");D.addEventListener("click",()=>{H(),u("reset")});const V=document.querySelector(".sound");V.addEventListener("click",()=>{C(),A(),u("switch")});const j=document.querySelector(".close"),F=document.querySelector(".overlay");j.addEventListener("click",()=>{M()});F.addEventListener("click",()=>{M()});const B=document.querySelector(".solution");B.addEventListener("click",()=>{y.forEach(e=>{e.classList.contains("crossed")&&e.classList.remove("crossed"),e.classList.contains("solid")&&e.classList.add("filled"),e.classList.contains("filled")&&!e.classList.contains("solid")&&e.classList.remove("filled")}),document.querySelector(".grid").classList.add("lock"),u("reset")});const J=document.querySelector(".restart");J.addEventListener("click",()=>{u("reset"),y.forEach(e=>{(e.classList.contains("crossed")||e.classList.contains("filled"))&&(e.classList.remove("crossed"),e.classList.remove("filled"))}),document.querySelector(".grid").classList.remove("lock")});const E=e=>{u("reset");const t=v.filter(c=>c.size===e);for(r=p;r===p;)r=Math.floor(Math.random()*t.length);p=r;const n=t[r].matrix;console.log(t[r]);const l=document.querySelector(".grid");l.innerHTML="",i=e==="5x5"?5:e==="10x10"?10:15,x(n,l),a.querySelector(".clues-top").remove(),a.querySelector(".clues-left").remove();const o=g(n,"top"),s=g(n,"left");k(o,s,a),y=Array.from(l.querySelectorAll(".cell")),z(),document.querySelector(".grid").classList.remove("lock")},K=document.querySelector(".easy");K.addEventListener("click",()=>{E("5x5")});const W=document.querySelector(".medium");W.addEventListener("click",()=>{E("10x10")});const Y=document.querySelector(".hard");Y.addEventListener("click",()=>{E("15x15")});document.addEventListener("DOMContentLoaded",()=>{a.innerHTML="";const e=document.createElement("div");e.classList.add("grid"),a.append(e);const t=v.filter(s=>s.size==="5x5");r=Math.floor(Math.random()*5);const n=t[r].matrix;console.log(t[r]),i=5,x(n,e);const l=g(n,"top"),o=g(n,"left");k(l,o,a),y=Array.from(e.querySelectorAll(".cell")),z()});
