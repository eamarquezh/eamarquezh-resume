(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))k(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const C of i.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&k(C)}).observe(document,{childList:!0,subtree:!0});function T(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function k(t){if(t.ep)return;t.ep=!0;const i=T(t);fetch(t.href,i)}})();const a=document.getElementById("app");function q(){return document.createElement("br")}function P(){return document.createElement("a")}function o(){return document.createElement("i")}function z(){return document.createElement("h1")}function m(){return document.createElement("div")}function O(){return document.createElement("img")}function A(){return document.createElement("label")}function f(){return document.createElement("p")}function M(){return document.createElement("footer")}function e(n,c){return n.appendChild(c)}const d=P();d.tabIndex="0";d.href="#Eric";d.className="skip-link";d.textContent="Skip to main content";const b=O();b.src="https://avatars.githubusercontent.com/u/10810956?v=4";b.tabIndex="0";b.alt="Profile photo";b.className="logo vanilla";const p=z();p.id="Eric";p.tabIndex="0";p.ariaLabel="Hi I'm Eric Marquez this is a simply resume but if you use the option accesibility I hope you have the best user experience";p.textContent="Hi I'm Eric Marquez";const r=o();r.tabIndex="0";r.ariaLabel="go to my linkedin profile";r.className="bi bi-linkedin sobre";r.addEventListener("keydown",n=>{n.key==="Enter"&&window.open("https://www.linkedin.com/in/eamarquezh/","_blank")});r.addEventListener("click",()=>{window.open("https://www.linkedin.com/in/eamarquezh/","_blank")});const s=o();s.tabIndex="0";s.ariaLabel="go to my github profile";s.className="bi bi-github sobre";s.addEventListener("keydown",n=>{n.key==="Enter"&&window.open("https://github.com/eamarquezh/","_blank")});s.addEventListener("click",()=>{window.open("https://github.com/eamarquezh/","_blank")});const l=A();l.tabIndex="0";l.textContent="Download this resume";const v=o();v.className="bi bi-arrow-down-square-fill sobre";l.addEventListener("keydown",n=>{n.key==="Enter"&&window.open("./CV-Eric-Marquez.pdf","_blank")});l.addEventListener("click",()=>{window.open("./CV-Eric-Marquez.pdf","_blank")});e(l,v);const u=m();u.className="contenedor";const h=m();h.className="item";const y=m();y.className="item";const g=m();g.className="item";const x=o();x.tabIndex="0";x.ariaLabel="here is my carrer path";x.className="bi bi-person-vcard-fill tam";const w=o();w.tabIndex="0";w.ariaLabel="here is my educational History";w.className="bi bi-mortarboard-fill tam";const E=o();E.tabIndex="0";E.ariaLabel="here is my skills";E.className="bi bi-lightning-charge-fill tam";const I=f();I.innerHTML=`<h2 tabindex='0'>Career path</h2>
<section>
    <h3 tabindex='0'>Atento Servicios • 2009 until now</h3>
    <p tabindex='0'><strong>(Today) </strong>Soporte a desarrollo: Software Testing and Quality Assurance Lead.</p>
    <p tabindex='0'><strong>(Until 2016) </strong>Asignación y estrategias: Data Strategy Leader.</p>
    <p tabindex='0'><strong>(Until 2013) </strong>Medios alternos: Data analyst.</p>
    <p tabindex='0'><strong>(Until 2011) </strong>I started how telephone operator and headset maintenance and management.</p>`;const N=f();N.innerHTML=`<h2 tabindex='0'>Educational history</h2>
    <h3 tabindex='0'>University UNIDEH</h3>
    <p tabindex='0'>I'm currently in the process of graduation in Software Engineering.</p>
    <p tabindex='0'><strong>High school CECyTEH • 2006 - 2009</strong> Computer technician.</p>
    <p tabindex='0'><strong>Recent courses:</strong>
    Curso de Prompt Engineering con ChatGPT, Curso de Auditoría de Accesibilidad Web, Curso de Introducción a la Automatización de Pruebas, Curso Básico de JavaScript, Curso Básico de Python, Curso de Análisis de Negocios para Ciencia de Datos, Curso de SQL y MySQL, Fundamentos de pruebas de software, Scrum foundation
    profesional certificate(SFPC), Lenguaje no verbal para
    lideres, fundamentos de la gestión del tiempo, Curso
    Scrum, GCP essentials, Programador (Orientado a objetos
    python), Como dirigir el servicio de atención a clientes,
    programador con Java para aplicaciones Android, control
    de versiones,...</p>`;const S=f();S.innerHTML=`<h2 tabindex='0'>Skills</h4>
    <p tabindex='0'><i class="bi bi-bug"></i>QA Software.</p>
    <p tabindex='0'><i class="bi bi-database"></i>Data Science.</p>
    <p tabindex='0'><i class="bi bi-code-slash"></i>Software Developer.</p>
    <p>
        <i tabindex='0' aria-label='git' class="bi bi-git" style='color:#e74c3c;'></i>
        <i tabindex='0' aria-label='sql' class="bi bi-database-fill" style='color:#2980b9;'></i>
        <i tabindex='0' aria-label='html' class="bi bi-filetype-html" style='color:#e74c3c;'></i>
        <i tabindex='0' aria-label='css' class="bi bi-filetype-css" style='color:#3498db;'></i>
        <i tabindex='0' aria-label='javascript' class="bi bi-filetype-js" style='color:#f1c40f;'></i>
        <i tabindex='0' aria-label='php' class="bi bi-filetype-php" style='color:#8e44ad;'></i>
        <i tabindex='0' aria-label='python' class="bi bi-filetype-py" style='color:#27ae60;'></i>
    </p>
    <p tabindex='0'><i class="bi bi-file-earmark"></i>Office automation.</p>
    <p>
    <i tabindex='0' aria-label='spreadsheet' class="bi bi-file-earmark-excel-fill" style='color:#27ae60;'></i>
    <i tabindex='0' aria-label='presentation' class="bi bi-file-earmark-ppt-fill" style='color:#d35400;'></i>
    <i tabindex='0' aria-label='documents' class="bi bi-file-earmark-word-fill" style='color:#2980b9;'></i>
</p>
    `;const L=M();L.tabIndex="0";L.textContent="power by @eamarquezh";e(a,d);e(a,p);e(a,b);e(a,q());e(a,r);e(a,s);e(a,u);e(u,h);e(u,y);e(u,g);e(h,x);e(h,I);e(y,w);e(y,N);e(g,E);e(g,S);e(a,l);e(a,f());e(a,L);
