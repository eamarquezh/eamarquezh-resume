(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&y(p)}).observe(document,{childList:!0,subtree:!0});function A(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function y(t){if(t.ep)return;t.ep=!0;const i=A(t);fetch(t.href,i)}})();const n=document.getElementById("app");function O(){return document.createElement("br")}function o(){return document.createElement("i")}function q(){return document.createElement("h1")}function a(){return document.createElement("div")}function D(){return document.createElement("img")}function M(){return document.createElement("label")}function c(){return document.createElement("p")}function z(){return document.createElement("footer")}function e(g,r){return g.appendChild(r)}const m=D();m.src="https://avatars.githubusercontent.com/u/10810956?v=4";m.className="logo vanilla";const w=q();w.textContent="Hi I'm Eric Marquez";const b=o();b.className="bi bi-linkedin sobre";b.addEventListener("click",()=>{window.open("https://www.linkedin.com/in/eamarquezh/","_blank")});const f=o();f.className="bi bi-github sobre";f.addEventListener("click",()=>{window.open("https://github.com/eamarquezh/","_blank")});const C=M();C.textContent="Download this resume";const h=o();h.className="bi bi-arrow-down-square-fill sobre";h.addEventListener("click",()=>{window.open("./CV-Eric-Marquez.pdf","_blank")});const s=a();s.className="contenedor";const l=a();l.className="item";const d=a();d.className="item";const u=a();u.className="item";const v=o();v.className="bi bi-person-vcard-fill tam";const E=o();E.className="bi bi-mortarboard-fill tam";const L=o();L.className="bi bi-lightning-charge-fill tam";const N=c();N.innerHTML=`<h2>Career path</h2>
<section>
    <h3>Atento Servicios • 2009 until now</h3>
    <p><strong>(Today) </strong>Soporte a desarrollo: Software Testing and Quality Assurance Lead.</p>
    <p><strong>(Until 2016) </strong>Asignación y estrategias: Data Strategy Leader.</p>
    <p><strong>(Until 2013) </strong>Medios alternos: Data analyst.</p>
    <p><strong>(Until 2011) </strong>I started how telephone operator and headset maintenance and management.</p>`;const S=c();S.innerHTML=`<h2>Educational history</h2>
    <h3>University UNIDEH</h3>
    <p>I'm currently in the process of graduation in Software Engineering.</p>
    <p><strong>High school CECyTEH • 2006 - 2009</strong> Computer technician.</p>
    <p><strong>Recent courses:</strong>
    Curso de Prompt Engineering con ChatGPT, Curso de Auditoría de Accesibilidad Web, Curso de Introducción a la Automatización de Pruebas, Curso Básico de JavaScript, Curso Básico de Python, Curso de Análisis de Negocios para Ciencia de Datos, Curso de SQL y MySQL, Fundamentos de pruebas de software, Scrum foundation
    profesional certificate(SFPC), Lenguaje no verbal para
    lideres, fundamentos de la gestión del tiempo, Curso
    Scrum, GCP essentials, Programador (Orientado a objetos
    python), Como dirigir el servicio de atención a clientes,
    programador con Java para aplicaciones Android, control
    de versiones,...</p>`;const T=c();T.innerHTML=`<h2>Skills</h4>
    <p><i class="bi bi-bug"></i>QA Software.</p>
    <p><i class="bi bi-database"></i>Data Science.</p>
    <p><i class="bi bi-code-slash"></i>Software Developer.</p>
    <p>
        <i class="bi bi-git" style='color:#e74c3c;'></i>
        <i class="bi bi-database-fill" style='color:#2980b9;'></i>
        <i class="bi bi-filetype-html" style='color:#e74c3c;'></i>
        <i class="bi bi-filetype-css" style='color:#9b59b6;'></i>
        <i class="bi bi-filetype-js" style='color:#f1c40f;'></i>
        <i class="bi bi-filetype-php" style='color:#8e44ad;'></i>
        <i class="bi bi-filetype-py" style='color:#27ae60;'></i>
        <i class="bi bi-filetype-java" style='color:#d35400;'></i>
        <i class="bi bi-filetype-sql" style='color:#f1c40f;'></i>
    </p>`;const P=z();P.textContent="power by @eamarquezh";e(n,w);e(n,m);e(n,O());e(n,b);e(n,f);e(n,s);e(s,l);e(s,d);e(s,u);e(l,v);e(l,N);e(d,E);e(d,S);e(u,L);e(u,T);e(n,C);e(n,h);e(n,c());e(n,P);
