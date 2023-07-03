import '/style.css'


const lienzo = document.getElementById('app');

function br(){return document.createElement('br');}
function a(){return document.createElement('a');}
function i(){return document.createElement('i');}
function h1(){return document.createElement('h1');}
function h2(){return document.createElement('h2');}
function div(){return document.createElement('div');}
function input(){return document.createElement('input');}
function button(){return document.createElement('button');}
function img(){return document.createElement('img');}
function label(){return document.createElement('label');}
function table(){return document.createElement('table');}
function tr(){return document.createElement('tr');}
function th(){return document.createElement('th');}
function tbody(){return document.createElement('tbody');}
function td(){return document.createElement('td');}
function form(){return document.createElement('form');}
function p(){return document.createElement('p');}
function footer(){return document.createElement('footer');}
function aC(a,b){return a.appendChild(b);}


const skip = a();
skip.tabIndex='0';
skip.href='#Eric'; 
skip.className='skip-link';
skip.textContent='Skip to main content';

const foto = img();
foto.src='https://avatars.githubusercontent.com/u/10810956?v=4';
foto.tabIndex="0";
foto.alt='Profile photo';
//foto.src='https://www.gravatar.com/avatar/bfcb1d6a22d7098499771d3bcec5a8c4?d=robohash&f=y&s=128';
foto.className='logo vanilla';

const nombre = h1();
nombre.id='Eric';
nombre.tabIndex="0";
nombre.ariaLabel="Hi I'm Eric Marquez this is a simply resume but if you use the option accesibility I hope you have the best user experience";
nombre.textContent="Hi I'm Eric Marquez";

const iLinkedin = i();
iLinkedin.tabIndex="0";
iLinkedin.ariaLabel="go to my linkedin profile";
iLinkedin.className='bi bi-linkedin sobre';
iLinkedin.addEventListener('keydown',(e)=>{(e.key === "Enter")?window.open('https://www.linkedin.com/in/eamarquezh/', '_blank'):''});
iLinkedin.addEventListener('click',()=>{window.open('https://www.linkedin.com/in/eamarquezh/', '_blank')});

const iGithub = i();
iGithub.tabIndex="0";
iGithub.ariaLabel="go to my github profile";
iGithub.className='bi bi-github sobre';
iGithub.addEventListener('keydown',(e)=>{(e.key === "Enter")?window.open('https://github.com/eamarquezh/', '_blank'):''});
iGithub.addEventListener('click',()=>{window.open('https://github.com/eamarquezh/', '_blank')});

const invitacion = label();
invitacion.tabIndex='0';
invitacion.textContent='Download this resume';

const iDescargaCV = i();
iDescargaCV.className='bi bi-arrow-down-square-fill sobre';
invitacion.addEventListener('keydown',(e)=>{(e.key === "Enter")?window.open('./CV-Eric-Marquez.pdf', '_blank'):''});
invitacion.addEventListener('click',()=>{window.open('./CV-Eric-Marquez.pdf', '_blank')});
aC(invitacion,iDescargaCV);

const contenedor = div();
contenedor.className='contenedor';
const capOne = div();
capOne.className='item';
const capTwo = div();
capTwo.className='item';
const capThree = div();
capThree.className='item';

const iOne = i();
iOne.tabIndex='0';
iOne.ariaLabel='here is my carrer path';
iOne.className='bi bi-person-vcard-fill tam';
const iTwo = i();
iTwo.tabIndex='0';
iTwo.ariaLabel='here is my educational History';
iTwo.className='bi bi-mortarboard-fill tam';
const iThree = i();
iThree.tabIndex='0';
iThree.ariaLabel='here is my skills';
iThree.className='bi bi-lightning-charge-fill tam';


const pOne =p();
pOne.innerHTML= `<h2 tabindex='0'>Career path</h2>
<section>
    <h3 tabindex='0'>Atento Servicios • 2009 until now</h3>
    <p tabindex='0'><strong>(Today) </strong>Soporte a desarrollo: Software Testing and Quality Assurance Lead.</p>
    <p tabindex='0'><strong>(Until 2016) </strong>Asignación y estrategias: Data Strategy Leader.</p>
    <p tabindex='0'><strong>(Until 2013) </strong>Medios alternos: Data analyst.</p>
    <p tabindex='0'><strong>(Until 2011) </strong>I started how telephone operator and headset maintenance and management.</p>`;

const pTwo =p();
pTwo.innerHTML= `<h2 tabindex='0'>Educational history</h2>
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
    de versiones,...</p>`;

const pThree =p();
pThree.innerHTML= `<h2 tabindex='0'>Skills</h4>
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
    `;

const pie = footer();
pie.tabIndex='0';
pie.textContent='power by @eamarquezh';

aC(lienzo,skip);
aC(lienzo,nombre);
aC(lienzo,foto);
aC(lienzo,br());
aC(lienzo,iLinkedin);
aC(lienzo,iGithub);
aC(lienzo,contenedor);
aC(contenedor,capOne);
aC(contenedor,capTwo);
aC(contenedor,capThree);

aC(capOne,iOne);
aC(capOne,pOne);
aC(capTwo,iTwo);
aC(capTwo,pTwo);
aC(capThree,iThree);
aC(capThree,pThree);

aC(lienzo,invitacion);
aC(lienzo,p());
aC(lienzo,pie);


