import '/style.css'


const lienzo = document.getElementById('app');

function br(){return document.createElement('br');}
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



const foto = img();
foto.src='https://avatars.githubusercontent.com/u/10810956?v=4';
//foto.src='https://www.gravatar.com/avatar/bfcb1d6a22d7098499771d3bcec5a8c4?d=robohash&f=y&s=128';
foto.className='logo vanilla';

const nombre = h1();
nombre.textContent="Hi I'm Eric Marquez";

const iLinkedin = i();
iLinkedin.className='bi bi-linkedin sobre';
iLinkedin.addEventListener('click',()=>{window.open('https://www.linkedin.com/in/eamarquezh/', '_blank')})

const iGithub = i();
iGithub.className='bi bi-github sobre';
iGithub.addEventListener('click',()=>{window.open('https://github.com/eamarquezh/', '_blank')})

const iDescargaCV = i();
iDescargaCV.className='bi bi-arrow-down-square-fill sobre';
iDescargaCV.addEventListener('click',()=>{window.open('./CV-Eric-Marquez.pdf', '_blank')})


const contenedor = div();
contenedor.className='contenedor';
const capOne = div();
capOne.className='item';
const capTwo = div();
capTwo.className='item';
const capThree = div();
capThree.className='item';

const iOne = i();
iOne.className='bi bi-person-vcard-fill tam';
const iTwo = i();
iTwo.className='bi bi-mortarboard-fill tam';
const iThree = i();
iThree.className='bi bi-lightning-charge-fill tam';


const pOne =p();
pOne.innerHTML= `<h2>Career path</h2>
<section>
    <h3>Atento Servicios • 2009 until now</h3>
    <p><strong>(Today) </strong>Soporte a desarrollo: Software Testing and Quality Assurance Lead.</p>
    <p><strong>(Until 2016) </strong>Asignación y estrategias: Data Strategy Leader.</p>
    <p><strong>(Until 2013) </strong>Medios alternos: Data analyst.</p>
    <p><strong>(Until 2011) </strong>I started how telephone operator and headset maintenance and management.</p>`;

const pTwo =p();
pTwo.innerHTML= `<h2>Educational history</h2>
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
    de versiones,...</p>`;

const pThree =p();
pThree.innerHTML= `<h2>Skills</h4>
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
    </p>`;

const pie = footer();
pie.textContent='power by @eamarquezh';

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

aC(lienzo,iDescargaCV);
aC(lienzo,br());
aC(lienzo,pie);


