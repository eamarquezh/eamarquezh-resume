import '/style.css'
import { jsPDF } from "jspdf"


const lienzo = document.getElementById('app');

function br(){return document.createElement('br');}
function hr(){return document.createElement('hr');}
function a(){return document.createElement('a');}
function i(){return document.createElement('i');}
function h1(){return document.createElement('h1');}
function h2(){return document.createElement('h2');}
function h3(){return document.createElement('h3');}
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

const loadCcontainer = div();
loadCcontainer.id='loader-container';
lienzo.appendChild(loadCcontainer);

const mLoad = div();
mLoad.id='loader';
loadCcontainer.appendChild(mLoad);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loader-container").style.display = "flex";
  setTimeout(function () {
      document.getElementById("loader-container").style.display = "none";
  }, 100);
});


const skip = a();
skip.tabIndex='0';
skip.href='#Eric'; 
skip.className='skip-link';
skip.textContent='Skip to main content';
skip.ariaLabel="you can to go by main content or you can change the language hwen pressing tab";

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


const contForm = form()
contForm.id='myForm'
contForm.className='card-capcha'

const theCapcha = div()
theCapcha.className="g-recaptcha"
theCapcha.setAttribute('data-sitekey', '6Lcsl9spAAAAAE9YCrIgsrPJ8-ZSDxPIc3H-8GTt')

const downloadResumeBTN = button()
downloadResumeBTN.textContent='Download resume'

const responseT = div()

const portfolioTitle = h3();
portfolioTitle.textContent='Projects'

const portfolioContainer = div();
portfolioContainer.className='contenedor-port'

const iPort = i();
iPort.tabIndex='0';
iPort.ariaLabel='here is my portfolio';
iPort.className='bi bi-folder-fill tam'

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
aC(capTwo,iTwo);
aC(capThree,iThree);

aC(lienzo,contForm)
aC(contForm,theCapcha)
aC(contForm,downloadResumeBTN)
aC(contForm,responseT)


aC(lienzo,hr());
aC(lienzo,iPort);
aC(lienzo,portfolioTitle)
aC(lienzo,portfolioContainer);

aC(lienzo,p());
aC(lienzo,pie);


const datos = async () => {
    return await fetch('https://api.github.com/gists/7fb8e7d73918c944743c317eca633ec6')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const jsonFile = Object.values(data.files).find(file => file.language === 'JSON');
        if (jsonFile) {
          return fetch(jsonFile.raw_url);
        } else {
          throw new Error('El Gist no contiene un archivo JSON');
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Hubo un problema con la operación fetch:', error);
      });
  }
  

const startResume=()=>{
  datos()
  .then(data => {
      readExperience(data[0].work);
      readEducation(data[0].education);
      readCertificates(data[0].certificates);
      readSkill(data[0].skills);
  })
  .catch(error => {
      console.error(error);
  });
}
startResume()


const  readExperience = (cad)=>{
    capOne.innerHTML = capOne.innerHTML + `<h2 tabindex="0">Carrer path<h2>`
    cad.map(a=>{
        capOne.innerHTML = capOne.innerHTML +`
        <div class="card" tabindex="0">
            <strong class="title">${a.name}</strong><br>
            <small><strong>From </strong>${parseDate(a.startDate)} <strong>to</strong> ${parseDate(a.endDate)}</small><br>
            <small><strong>Position</small></strong>: ${a.position}<br>
            <strong><small>Responsibilities</small></strong>: ${a.summary}
        </div>
        `
    })
    

}

const  readEducation = (cad)=>{
    capTwo.innerHTML = capTwo.innerHTML + `<h2 tabindex="0">Educational history<h2>`
    cad.map(a=>{
        capTwo.innerHTML = capTwo.innerHTML +`
        <div class="card" tabindex="0">
            <small class="title"><strong>${a.institution}</small><strong><br>
            <small><strong>From </strong>${parseDate(a.startDate)} <strong>to</strong> ${parseDate(a.endDate)}</small><br>
            <strong><small>Area</small></strong>: ${a.area}
        </div>
        `
    })
}
const  readCertificates = (cad)=>{

    capTwo.innerHTML = capTwo.innerHTML +`<small><strong>Recent Certificates:<small><strong>`
    cad.map(a=>{
        capTwo.innerHTML = capTwo.innerHTML +`
        <a href="${a.url}" target="_blank"><small><small>${a.name}</small></small></a><strong>,</strong>
        `
    })
    capTwo.innerHTML = capTwo.innerHTML +`<small><small>...</small></small>`
}


const  readSkill = (cad)=>{
    capThree.innerHTML = capThree.innerHTML + `<h2 tabindex="0">Skills<h2>`
    cad.map(a=>{
        capThree.innerHTML = capThree.innerHTML +`
        <div class="card" tabindex="0">
            <i class="bi bi-bookmark-plus-fill" style="font-size: 16px;"></i>
            <small class="title"><strong>${a.name}</small><strong><br>
        </div>
        `
    })
}


const gitApiRepo = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/eamarquezh/repos`);
    if (!response.ok) {
      throw new Error('Error al obtener los repositorios');
    }
    const repositorios = await response.json();

    // Filtrar repositorios que tienen al menos una estrella
    const starredRepos = repositorios.filter(repo => repo.stargazers_count > 0);

    // Mapear los datos de los repositorios filtrados
    const reposArray = starredRepos.map(repo => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
    }));

    return reposArray;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

gitApiRepo()
  .then(reposArray => {
    readRepos(reposArray);
  })
  .catch(error => {
    console.error(error);
  });


const  readRepos = (cad)=>{
  cad.map(a=>{
    if(a.stargazers_count>=1){
    portfolioContainer.innerHTML = portfolioContainer.innerHTML +`
      <div class="item-port" tabindex="0">
          <small class="title"><strong>${a.name}</small><strong><br>
          <a href="${a.html_url}" target="_blank"><i class="bi bi-github"></i></a>
          <a href="${a.homepage}" target="_blank"><i class="bi bi-window"></i></a>

      </div>
    `
    }
  })
}

const downloadResume=()=>{
  datos()
  .then(data => {
      downloadResumen(data[0].work, data[0].education,data[0].certificates,data[0].skills)
  })
  .catch(error => {
      console.error(error);
  });
}





const downloadResumen=(work,education,certificates,skills)=>{
const doc = new jsPDF();

// Agregar foto (reemplaza 'ruta/a/imagen.jpg' con la URL de tu foto)
const imgUrl = 'https://avatars.githubusercontent.com/u/10810956?v=4';
doc.addImage(imgUrl, 'JPEG', 5, 5, 25, 25);


// Agregar nombre
doc.setFont('helvetica', 'bold'); // Establecer la fuente en negrita
doc.setFontSize(16);
doc.text('Eric Alfredo Marquez', 40, 10);
doc.setFontSize(14);
doc.text('Software Engineering', 40, 15);

// Agregar información personal
doc.setFont('helvetica','normal'); // Establecer la fuente en negrita
doc.setFontSize(12);
doc.text('Phone: 52 + 771-120-87-04', 40, 25);
doc.text('E-mail: eamarquezh@gmail.com', 40, 30);
doc.text('My website: eamarquezh.xyz', 120, 25);
doc.text('Linkedin: eamarquezh', 120, 30);

doc.setLineWidth(0.5);
doc.line(5, 35, 205, 32);

let position = 45

// Agregar experiencia laboral
doc.setFont('helvetica', 'bold'); 
doc.setFontSize(14);
doc.text('Carrer path', 5, position);
doc.setFont('helvetica', 'normal'); 
doc.setFontSize(10);


work.map((a)=>{
    position +=10
    doc.text(`${a.summary} in the role of "${a.position}" \n${a.name} from ${parseDate(a.startDate)} to ${parseDate(a.endDate)}`, 5, position)
})

position +=20
doc.setFont('helvetica', 'bold'); 
doc.setFontSize(14);
doc.text('Educational history', 5, position);
doc.setFont('helvetica', 'normal'); 
doc.setFontSize(10);

education.map((a)=>{
    position +=10
    doc.text(`${a.area} \n${a.institution} from ${parseDate(a.startDate)} to ${parseDate(a.endDate)}`, 5, position)
})


doc.setFont('helvetica', 'normal'); 
doc.setFontSize(10);

position +=15

let cadenas=``

certificates.map((a)=>{
    cadenas+=`${a.name}(${parseDate(a.startDate)}), `
  }
)

let recentCertificates=`Recent certificates:`
let largeCounter=0
let positionTemp =0
for(let cadena of cadenas){
  largeCounter+=cadena.length
  if(largeCounter>50 && cadena==','){
    recentCertificates+=`,\n`
    largeCounter=0
    positionTemp +=5
  }else{
    recentCertificates+=cadena
  }
}

doc.setFont('helvetica', 'normal'); 
doc.setFontSize(10);
doc.text('Recent certificates:', 5, position);
doc.setFont('helvetica', 'normal'); 
doc.setFontSize(10);

doc.text(recentCertificates.replace(/,$/, '.'),5,position)


position+=positionTemp
doc.setFont('helvetica', 'bold'); 
doc.setFontSize(14);
doc.text('Skills:', 5, position);
doc.setFont('helvetica', 'normal'); 
doc.setFontSize(10);

skills.map((a)=>{
  position +=5
  doc.text(`${a.name}`,5,position)
})

// Guardar el documento PDF como archivo
doc.save('resume_eamarquezh.pdf');
}

const parseDate=(myDate)=>{
  let patron = /^\d{4}-\d{2}-\d{2}$/;
  let mes=''
  if(patron.test(myDate)){
    if(myDate.substring(5,7)=='01') mes='January';
    if(myDate.substring(5,7)=='02') mes='February';
    if(myDate.substring(5,7)=='03') mes='March';
    if(myDate.substring(5,7)=='04') mes='April';
    if(myDate.substring(5,7)=='05') mes='May';
    if(myDate.substring(5,7)=='06') mes='June';
    if(myDate.substring(5,7)=='07') mes='July';
    if(myDate.substring(5,7)=='08') mes='August';
    if(myDate.substring(5,7)=='09') mes='September';
    if(myDate.substring(5,7)=='10') mes='October';
    if(myDate.substring(5,7)=='11') mes='November';
    if(myDate.substring(5,7)=='12') mes='December';
    return mes + ' ' + myDate.substring(0,4)
  }else{
    return 'Now'
  }
}

downloadResumeBTN.addEventListener('click',()=>{
  
})


contForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  var response = grecaptcha.getResponse();
  
  if(response.length == 0) {
    let tiempoAleatorio = Math.floor(Math.random() * 5000) + 1000
    responseT.innerHTML = `Press the 'I'm not a robot' checkbox. <br>
    <img src="https://robohash.org/${tiempoAleatorio}" alt="robot" class="mini-robot">
    `
    setTimeout(()=>{responseT.textContent=""},3000)
  } else {
    try {
      downloadResume()
      responseT.textContent=""
      } catch (error) {
        responseT.textContent = `Error ${error}`
      }
  }
});