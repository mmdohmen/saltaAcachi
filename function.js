//Función para desplegar barra de navegación -

function myFunction() {
    let navbar = document.getElementById("myNav")
    if (navbar.className === "navbar") {
    navbar.className += " responsive";
    } else {
    navbar.className = "navbar";
    }
}

//header -

const header = `<header>
<div class="logo1">
<img src="assets/image.png" alt="dibujo">
</div>
<div class="logo2">
<img src="assets/pngwing.com.png" alt="dibujo">
</div>
<div class="titulo">
<h1>Salta, la linda</h1>
</div>
<div class="subtitulo1">
<h4>Tan linda que enamora</h4>
</div>

<!--Barra de navegación-->
<nav class="navbar" id="myNav">
        <a href="index.html">Home</a>
        <a href="contacto.html">Contacto</a>
        <a href="http://turismosalta.gov.ar/." target="_blank">Más información</a>
        <a href="climaApi.html">Clima</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i></a>
</nav>
</header>`

const styles = `
header {
  margin: 5px;
  padding: 10px;
  background-color: #EACEB4;
}

.logo1 img {
  width: 7em;
  float: left;
  margin-bottom: 5px;
}

.titulo {
  font-family: 'Dancing Script', cursive;
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
}

.subtitulo1 {
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 6px;
}

.logo2 img {
  width: 7em;
  float: right;
  margin-bottom: 5px;
}

.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color:#E79E85;
  overflow: hidden;
}

.navbar a {
  color: black;
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 1.2em;
}

.navbar a:hover {
  background-color: #eb8c6c;
  color: #7e6858;
  transform:scale(1.2);
  cursor: pointer;
}

.navbar a.active {
  background-color: #FAD6A5;
}

.navbar .icon {
  display: none;
}
`;

document.getElementById("header").innerHTML = header;
let style = document.createElement('style');
style.innerHTML = styles;
document.head.appendChild(style);




//footer -

const footer = `<footer>
<h3>Visitanos en nuestras redes sociales</h3>
<i class='bx bxl-facebook-circle  bx-sm icono' style='color:#4b4d94'  ></i>
<i class='bx bxl-instagram  bx-sm icono' style='color:#b958d6'  ></i>
<i class='bx bxl-twitter  bx-sm icono' style='color:#2fa6e2'  ></i>
</footer>`

const estilos = 
`footer {
    background-color: #f8f2f2;
    font-family: 'Courgette', cursive;
    font-size: .9em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px;
}

.icono {
    cursor: pointer;
}

.icono:hover {
    opacity: .50;
}`

document.querySelector("#footer").innerHTML = footer;
let estilo = document.createElement('style');
estilo.innerHTML = estilos;
document.head.appendChild(estilo);



