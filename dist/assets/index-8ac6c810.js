(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))v(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const E of i.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&v(E)}).observe(document,{childList:!0,subtree:!0});function w(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function v(n){if(n.ep)return;n.ep=!0;const i=w(n);fetch(n.href,i)}})();const a=document.getElementById("app");function H(){return document.createElement("br")}function M(){return document.createElement("a")}function b(){return document.createElement("i")}function N(){return document.createElement("h1")}function c(){return document.createElement("div")}function I(){return document.createElement("img")}function C(){return document.createElement("p")}function O(){return document.createElement("footer")}function r(e,t){return e.appendChild(t)}const k=c();k.id="loader-container";a.appendChild(k);const x=c();x.id="loader";k.appendChild(x);document.addEventListener("DOMContentLoaded",function(){document.getElementById("loader-container").style.display="flex",setTimeout(function(){document.getElementById("loader-container").style.display="none"},500)});const d=M();d.tabIndex="0";d.href="#Eric";d.className="skip-link";d.textContent="Skip to main content";d.ariaLabel="you can to go by main content or you can change the language hwen pressing tab";const h=I();h.src="https://avatars.githubusercontent.com/u/10810956?v=4";h.tabIndex="0";h.alt="Profile photo";h.className="logo vanilla";const p=N();p.id="Eric";p.tabIndex="0";p.ariaLabel="Hi I'm Eric Marquez this is a simply resume but if you use the option accesibility I hope you have the best user experience";p.textContent="Hi I'm Eric Marquez";const m=b();m.tabIndex="0";m.ariaLabel="go to my linkedin profile";m.className="bi bi-linkedin sobre";m.addEventListener("keydown",e=>{e.key==="Enter"&&window.open("https://www.linkedin.com/in/eamarquezh/","_blank")});m.addEventListener("click",()=>{window.open("https://www.linkedin.com/in/eamarquezh/","_blank")});const u=b();u.tabIndex="0";u.ariaLabel="go to my github profile";u.className="bi bi-github sobre";u.addEventListener("keydown",e=>{e.key==="Enter"&&window.open("https://github.com/eamarquezh/","_blank")});u.addEventListener("click",()=>{window.open("https://github.com/eamarquezh/","_blank")});const f=c();f.className="contenedor";const s=c();s.className="item";const o=c();o.className="item";const l=c();l.className="item";const g=b();g.tabIndex="0";g.ariaLabel="here is my carrer path";g.className="bi bi-person-vcard-fill tam";const y=b();y.tabIndex="0";y.ariaLabel="here is my educational History";y.className="bi bi-mortarboard-fill tam";const L=b();L.tabIndex="0";L.ariaLabel="here is my skills";L.className="bi bi-lightning-charge-fill tam";const T=O();T.tabIndex="0";T.textContent="power by @eamarquezh";r(a,d);r(a,p);r(a,h);r(a,H());r(a,m);r(a,u);r(a,f);r(f,s);r(f,o);r(f,l);r(s,g);r(o,y);r(l,L);r(a,C());r(a,T);const $=async()=>await fetch("https://api.github.com/gists/7fb8e7d73918c944743c317eca633ec6").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{const t=Object.values(e.files).find(w=>w.language==="JSON");if(t)return fetch(t.raw_url);throw new Error("El Gist no contiene un archivo JSON")}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).catch(e=>{console.error("Hubo un problema con la operación fetch:",e)});$().then(e=>{z(e[0].work),q(e[0].education),D(e[0].certificates),P(e[0].skills)}).catch(e=>{console.error(e)});const z=e=>{s.innerHTML=s.innerHTML+'<h2 tabindex="0">Carrer path<h2>',e.map(t=>{s.innerHTML=s.innerHTML+`
        <div class="card" tabindex="0">
            <strong class="title">${t.name}</strong>(<small><strong>From </strong>${t.startDate} <strong>to</strong> ${t.endDate!=""?t.endDate:"Now"}</small>)<br>
            <small><strong>Position</small></strong>: ${t.position}<br>
            <strong><small>Responsibilities</small></strong>: ${t.summary}
        </div>
        `})},q=e=>{o.innerHTML=o.innerHTML+'<h2 tabindex="0">Educational history<h2>',e.map(t=>{o.innerHTML=o.innerHTML+`
        <div class="card" tabindex="0">
            <small class="title"><strong>${t.institution}</small><strong><br>
            <small><strong>From </strong>${t.startDate} <strong>to</strong> ${t.endDate!=""?t.endDate:"Now"}</small><br>
            <strong><small>Area</small></strong>: ${t.area}
        </div>
        `})},D=e=>{o.innerHTML=o.innerHTML+"<small><strong>Recent Certificates:<small><strong>",e.map(t=>{o.innerHTML=o.innerHTML+`
        <a href="${t.url}" target="_blank"><small><small>${t.name}</small></small></a><strong>,</strong>
        `}),o.innerHTML=o.innerHTML+"<small><small>...</small></small>"},P=e=>{l.innerHTML=l.innerHTML+'<h2 tabindex="0">Skills<h2>',e.map(t=>{l.innerHTML=l.innerHTML+`
        <div class="card" tabindex="0">
            <i class="bi bi-bookmark-plus-fill" style="font-size: 16px;"></i>
            <small class="title"><strong>${t.name}</small><strong><br>
        </div>
        `})};
