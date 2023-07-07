(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))M(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const A of i.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&M(A)}).observe(document,{childList:!0,subtree:!0});function D(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function M(a){if(a.ep)return;a.ep=!0;const i=D(a);fetch(a.href,i)}})();const n=document.getElementById("app");function q(){return document.createElement("br")}function z(){return document.createElement("a")}function p(){return document.createElement("i")}function j(){return document.createElement("h1")}function C(){return document.createElement("div")}function N(){return document.createElement("button")}function O(){return document.createElement("img")}function L(){return document.createElement("p")}function Q(){return document.createElement("footer")}function e(r,y){return r.appendChild(y)}const s=p();s.tabIndex="0";s.className="bi bi-translate sobre";const t=N();t.tabIndex="0";t.className="derecha";s.ariaLabel="Eapañol";let m="es";t.textContent=m;t.addEventListener("click",()=>{U(m)});e(t,s);const o=z();o.tabIndex="0";o.href="#Eric";o.className="skip-link";o.textContent="Skip to main content";o.ariaLabel="you can to go by main content or you can change the language hwen pressing tab";const u=O();u.src="https://avatars.githubusercontent.com/u/10810956?v=4";u.tabIndex="0";u.alt="Profile photo";u.className="logo vanilla";const l=j();l.id="Eric";l.tabIndex="0";l.ariaLabel="Hi I'm Eric Marquez this is a simply resume but if you use the option accesibility I hope you have the best user experience";l.textContent="Hi I'm Eric Marquez";const d=p();d.tabIndex="0";d.ariaLabel="go to my linkedin profile";d.className="bi bi-linkedin sobre";d.addEventListener("keydown",r=>{r.key==="Enter"&&window.open("https://www.linkedin.com/in/eamarquezh/","_blank")});d.addEventListener("click",()=>{window.open("https://www.linkedin.com/in/eamarquezh/","_blank")});const b=p();b.tabIndex="0";b.ariaLabel="go to my github profile";b.className="bi bi-github sobre";b.addEventListener("keydown",r=>{r.key==="Enter"&&window.open("https://github.com/eamarquezh/","_blank")});b.addEventListener("click",()=>{window.open("https://github.com/eamarquezh/","_blank")});const c=N();c.tabIndex="0";c.textContent="Download this resume";const E=p();E.className="bi bi-arrow-down-square-fill sobre";let P="./CV-Eric-Marquez(en).pdf";c.addEventListener("click",()=>{window.open(P,"_blank")});e(c,E);const x=C();x.className="contenedor";const w=C();w.className="item";const v=C();v.className="item";const S=C();S.className="item";const h=p();h.tabIndex="0";h.ariaLabel="here is my carrer path";h.className="bi bi-person-vcard-fill tam";const g=p();g.tabIndex="0";g.ariaLabel="here is my educational History";g.className="bi bi-mortarboard-fill tam";const f=p();f.tabIndex="0";f.ariaLabel="here is my skills";f.className="bi bi-lightning-charge-fill tam";const k=L();k.innerHTML=`<h2 tabindex='0'>Career path</h2>
    <h3 tabindex='0'>Atento Servicios • 2009 until now</h3>
    <p tabindex='0'><strong>(Today) </strong>Soporte a desarrollo: Software Testing and Quality Assurance Lead.</p>
    <p tabindex='0'><strong>(Until 2016) </strong>Asignación y estrategias: Data Strategy Leader.</p>
    <p tabindex='0'><strong>(Until 2013) </strong>Medios alternos: Data analyst.</p>
    <p tabindex='0'><strong>(Until 2011) </strong>I started how telephone operator and headset maintenance and management.</p>`;const I=L();I.innerHTML=`<h2 tabindex='0'>Educational history</h2>
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
    de versiones,...</p>`;const H=L();H.innerHTML=`<h2 tabindex='0'>Skills</h4>
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
</p>`;const T=Q();T.tabIndex="0";T.textContent="power by @eamarquezh";e(n,o);e(n,t);e(n,l);e(n,u);e(n,q());e(n,d);e(n,b);e(n,x);e(x,w);e(x,v);e(x,S);e(w,h);e(w,k);e(v,g);e(v,I);e(S,f);e(S,H);e(n,c);e(n,L());e(n,T);function U(r){r=="en"&&(console.log("english"),m="es",t.textContent=m,e(t,s),B()),r=="es"&&(console.log("espanish"),m="en",t.textContent=m,e(t,s),F())}async function B(){s.ariaLabel="Español",e(t,s),o.textContent="Skip to main content",o.ariaLabel="for english press Enter o tabulador para elegir el idioma entre español o ingles",u.alt="Profile photo",l.ariaLabel="Hi I'm Eric Marquez this is a simply resume but if you use the option accesibility I hope you have the best user experience",l.textContent="Hi I'm Eric Marquez",d.ariaLabel="go to my linkedin profile",b.ariaLabel="go to my github profile",c.textContent="Download this resume",P="./CV-Eric-Marquez(en).pdf",e(c,E),h.ariaLabel="here is my carrer path",g.ariaLabel="here is my educational History",f.ariaLabel="here is my skills",k.innerHTML=`<h2 tabindex='0'>Career path</h2>
        <h3 tabindex='0'>Atento Servicios • 2009 until now</h3>
        <p tabindex='0'><strong>(Today) </strong>Soporte a desarrollo: Software Testing and Quality Assurance Lead.</p>
        <p tabindex='0'><strong>(Until 2016) </strong>Asignación y estrategias: Data Strategy Leader.</p>
        <p tabindex='0'><strong>(Until 2013) </strong>Medios alternos: Data analyst.</p>
        <p tabindex='0'><strong>(Until 2011) </strong>I started how telephone operator and headset maintenance and management.</p>`,I.innerHTML=`<h2 tabindex='0'>Educational history</h2>
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
        de versiones,...</p>`,H.innerHTML=`<h2 tabindex='0'>Skills</h4>
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
        </p>`}async function F(){s.ariaLabel="English",o.textContent="Ir a contenido principal",o.ariaLabel="for english press Enter o tabulador para elegir el idioma entre español o ingles",u.alt="Foto de perfil",l.ariaLabel="Hola soy Eric Marquez esta es una simple hoja de vida pero puedes elegir las opciones de accesibilidad, espero tengas la mejor experiencia de usuario",l.textContent="Hola soy Eric Marquez",d.ariaLabel="ir a mi perfil de linkedin",b.ariaLabel="ir a mi perfil de github",c.textContent="Descargar hoja de vida",P="./CV-Eric-Marquez(es).pdf",e(c,E),h.ariaLabel="mi camino laboral",g.ariaLabel="mis estudios",f.ariaLabel="estas son mis habilidades",k.innerHTML=`<h2 tabindex='0'>Camino laboral</h2>
        <h3 tabindex='0'>Atento Servicios • 2009 hasta hoy</h3>
        <p tabindex='0'><strong>(Hoy) </strong>Soporte a desarrollo: Software Testing and Quality Assurance Lead.</p>
        <p tabindex='0'><strong>(Hasta 2016) </strong>Asignación y estrategias: Data Strategy Leader.</p>
        <p tabindex='0'><strong>(Hasta 2013) </strong>Medios alternos: Data analyst.</p>
        <p tabindex='0'><strong>(Hasta 2011) </strong>Inicie como teleoperador y en el área de gestión y mantenimiento de diademas..</p>`,I.innerHTML=`<h2 tabindex='0'>Historia Educacional</h2>
        <h3 tabindex='0'>Universidad UNIDEH</h3>
        <p tabindex='0'>Actualmente estoy en proceso de titulación en ingeniería de software.</p>
        <p tabindex='0'><strong>Bachillerato CECyTEH • 2006 - 2009</strong> Técnico en informática.</p>
        <p tabindex='0'><strong>Cursos recientes:</strong>
        Curso de Prompt Engineering con ChatGPT, Curso de Auditoría de Accesibilidad Web, Curso de Introducción a la Automatización de Pruebas, Curso Básico de JavaScript, Curso Básico de Python, Curso de Análisis de Negocios para Ciencia de Datos, Curso de SQL y MySQL, Fundamentos de pruebas de software, Scrum foundation
        profesional certificate(SFPC), Lenguaje no verbal para
        lideres, fundamentos de la gestión del tiempo, Curso
        Scrum, GCP essentials, Programador (Orientado a objetos
        python), Como dirigir el servicio de atención a clientes,
        programador con Java para aplicaciones Android, control
        de versiones,...</p>`,H.innerHTML=`<h2 tabindex='0'>Habilidades</h4>
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
        <p tabindex='0'><i class="bi bi-file-earmark"></i>Ofimática.</p>
        <p>
        <i tabindex='0' aria-label='spreadsheet' class="bi bi-file-earmark-excel-fill" style='color:#27ae60;'></i>
        <i tabindex='0' aria-label='presentation' class="bi bi-file-earmark-ppt-fill" style='color:#d35400;'></i>
        <i tabindex='0' aria-label='documents' class="bi bi-file-earmark-word-fill" style='color:#2980b9;'></i>
    </p>`}
