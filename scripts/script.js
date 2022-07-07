Vue.component('encabezado', {
    template: //html
     `
    <header>
        <div id="mi_titulo" class="m-5">
            <div id="crimi_para_todes" class="text-center text-md-end">
                <h1>Crimi</h1>
                <h1>para</h1>
                <h1>tod<img class="img-fluid" src="img/fingerprint-g988908f2c_1280.png" style="width: 2.5rem; transform: rotate(30deg) translate(5%);">s</h1>
            </div>
            
            <nav class="px-0 navbar navbar-dark">
             <div id="mi_navbar" class="text-center row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 justify-content-center">
                <div class="nav-item">
                    <a class="nav-link btn rounded-pill" aria-current="page" href="index.html"><i class="fas fa-home"></i> Inicio</a>
                </div>
                <div class="nav-item dropdown ">
                    <a class="nav-link dropdown-toggle btn rounded-pill" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Criminalística
                    </a>
                    <ul class="dropdown-menu bg-transparent" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Escena del Crimen</a></li>
                        <li><a class="dropdown-item" href="#">Fotografía Forense</a></li>
                        <li><a class="dropdown-item" href="#">Indicios</a></li>
                        <li><a class="dropdown-item" href="#">Inspección Ocular</a></li>
                        <li><a class="dropdown-item" href="#">Planimetría</a></li>
                    </ul>
                    </div>
                    <div class="nav-item">
                        <a class="nav-link btn rounded-pill" href="#">Accidentología</a>
                    </div >
                    <div  class="nav-item">
                        <a class="nav-link btn rounded-pill" href="#">Balística</a>
                    </div >
                    <div  class="nav-item">
                        <a class="nav-link btn rounded-pill" href="#">Documentología</a>
                    </div >
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle btn rounded-pill" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Papiloscopía
                    </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Dactiloscopía</a></li>
                            <li><a class="dropdown-item" href="#">Palmatoscopía</a></li>
                            <li><a class="dropdown-item" href="#">Pelmatoscopía</a></li>
                            <li><a class="dropdown-item" href="#">Queiloscopía</a></li>
                        </ul>
                    </div >
                    <div  class="nav-item">
                    <a class="nav-link btn rounded-pill" href="#">Otros</a>
                    </div >
                    <div  class="nav-item">
                    <a class="nav-link btn rounded-pill" href="#"><i class="fas fa-book"></i> Bibliografías</a>
                    </div >
                    <div  class="nav-item">
                    <a class="nav-link btn rounded-pill" href="about-me.html"><i class="far fa-address-book"></i> Acerca de mí</a>
                    </div >
                    <div  class="nav-item">
                    <a class="nav-link btn rounded-pill" href="contact.html"><i class="far fa-envelope"></i> Contacto</a>
                    </div>
                </div>
            </nav>
        </div>

    </header>
    `
})

Vue.component('pie_de_pagina', {
    template: //html 
        `
        
    <footer id="mi_footer" class="text-center pt-3 m-5">
        <div class="container my-4 d-flex flex-wrap justify-content-center">
            <a class="p-2 m-2 d-block" href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook btn btn-primary mx-1"></i> Facebook</a>
            <a class="p-2 m-2 d-block" href="https://www.github.com" target="_blank"><i class="fab fa-github btn btn btn-dark mx-1"></i> GitHub</a>
            <a class="p-2 m-2 d-block" href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram btn btn-warning mx-1"></i> Instagram</a>
            <a class="p-2 m-2 d-block" href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter btn btn-info mx-1"></i> Twitter</a>
            <a class="p-2 m-2 d-block" href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube btn btn-danger mx-1"></i> Youtube</a>
        </div>
       
        <div class="container p-3">
            <p><i class="far fa-copyright"></i> Derechos reservados 2022</p>
        </div>
    </footer>

        `

})

//Esto es parte del footer para agregar después
 /* <div class="container p-4">
            <input type="email" class="form-control d-inline w-50"  name="suscribe" id="suscribe">
            <button type="button" class="btn btn-outline-success" placeholder="Ingrese su emal" >Suscribete</button>
            <p class="form-text">Al suscribirse recibirá nuestro newsletter semanalmente</p>
</div> */

Vue.component('barra_lateral_izq', {
    template: //html
    `
    <aside id="left-aside" class="container-fluid col-2 h-100 py-4 ps-3 d-flex flex-column align-items-center d-none d-xl-block">

        <div class="container">
            <a href="#"><i class="fas fa-search"></i> Criminalística</a>
            <ul>
                <li><a href="#">Escena del Crimen</a></li>
                <li><a href="#">Fotografía Forense</a></li>
                <li><a href="#">Indicios</a></li>
                <li><a href="#">Inspección Ocular</a></li>
                <li><a href="#">Planimetría</a></li>
            </ul>
        </div>

        <div class="container">
            <a href="#"><i class="fas fa-car"></i> Accidentología</a>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </div>

        <div class="container">
            <a href="#"><i class="fas fa-crosshairs"></i> Balística</a>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </div>
        <div class="container">
            <a href="#"> <i class="fas fa-pen-fancy"></i> Documentología</a>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </div>
        <div class="container">
            <a href="#"> <i class="fas fa-fingerprint"></i>Papiloscopía</a>
            <ul>
                <li><a href="#">Dactiloscopía</a></li>
                <li><a href="#">Palmatoscopía</a></li>
                <li><a href="#">Pelmatoscopía</a></li>
                <li><a href="#">Queiloscopía</a></li>
            </ul>
        </div>

    </aside>
    `
})


Vue.component('barra_lateral_der', {
    template: //html
    `
    <aside id="right-aside" class="container-fluid col-2 h-100 p-4 d-flex flex-column align-items-center d-none d-xl-block">
       <div class="container"> 
            <form class="d-flex flex-column">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="mt-3" type="submit">Buscar</button>
            </form>
        </div>
        <div>
        <form class="d-flex flex-column mt-4">
        <label for="usuario" class="form-label">
            Usuario
            <input class="form-control me-2" id="usuario" aria-label="Usuario">
        </label>
        
        <label for="contraseña" class="form-label">
            Contraseña
            <input class="form-control me-2" id="contraseña" aria-label="Contraseña">
        </label>
        <button class="mt-2" type="submit">Ingresar</button>
    </form>
        </div>
    </aside>
    `
})

Vue.component('contenido_pcpal', {
    template: //html 
    `
    <div id="main_content" class="col d-flex flex-column mx-3 px-4">

        <div>
            <h2 class="container text-center p-4 my-4 w-75 subtitulo">Criminalística</h2>
        </div>
    
            
        <div class="row row-cols-2 p-4 my-1 align-items-center">
            <div class="col">
            <img src="img/police.jpg" class="img-fluid img_tarjetas" alt="escena del crimen">
            </div>
            <div class="card text-center p-2 bg-transparent">
                <div class="card-body d-flex flex-column justify-content-centers align-items-center">
                    <p class="card-text">"La Criminalística es la disciplina que aplica fundamentalmente los
                        conocimientos,métodos y técnicas de investigación de las ciencias naturales en el examen
                        del material sensible
                        significativo relacionado con un presunto hecho delictuoso, con el fin de determinar, en
                        auxilio de los órganos encargados de administrar justicia, su existencia, o bien
                        reconstruirlo, o bien señalar y precisar la
                        intervención de uno o varios sujetos del mismo."</p>
                    <footer class="blockquote-footer"><cite title="Rafael Moreno González">Rafael Moreno
                            González</cite></footer>
                    <button><a href="contenidos/papiloscopia/papiloscopia.html">Ir al
                            contenido</a></button>
                </div>
            </div>
        </div>

       


        <div>
            <h2 class="text-center p-4 my-4 subtitulo">Ramas Principales</h2>
        </div>
        <div class="row row-cols-1 row-cols-lg-2 gy-3 py-3 my-1">
            <div class="container col">
                <div class="card text-center p-2 h-100 bg-transparent">
                    <img src="img/car-accident-2.jpg" class="card-img-top w-75 align-self-center img_tarjetas"
                        alt="escena del crimen">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title"><i class="fas fa-car"></i> Accidentología</h5>
                        <p class="card-text">"La accidentología es una técnica que se nutre de las ciencias
                            clásicas, principalmente de la física, la matemática, la ingeniería, la
                            psicología y otras, en las que se apoya tecnológicamente. El estudio
                            de un accidente vial se basa en poder determinar científicamente
                            cuál o cuáles son los factores elementales o básicos que tuvieron incidencia
                            en su producción."</p>
                        <footer class="blockquote-footer"><cite title="Carlos Gúzman">Carlos
                                Gúzman.(2000)</cite></footer>
                        <button><a href="contenidos/papiloscopia/papiloscopia.html">Ir al
                                contenido</a></button>
                    </div>
                </div>
            </div>

            <div class="container col">
                <div class="card text-center p-2 h-100 bg-transparent">
                    <img src="img/revolver.jpg" class="card-img-top w-75 align-self-center img_tarjetas"
                        alt="escena del crimen">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title"><i class="fas fa-crosshairs"></i> Balística</h5>
                        <p class="card-text">"La balística forense es una rama especializada de la
                            criminalística, orientada al
                            estudio integral de las armas de fuego, al alcance y dirección de los proyectiles
                            que disparan y a los efectos que estos producen. En otras palabras, se encarga de
                            investigar el comportamiento simple o complejo de las balas y, del examen de las
                            trazas relacionadas con el uso de armas de fuego, las que se ven involucradas en
                            eventos presuntamente criminales."</p>
                        <footer class="blockquote-footer"><cite title="Octavio Cibrian Vidrio">Octavio Cibrian
                                Vidrio.(1998)</cite></footer>
                        <button><a href="contenidos/papiloscopia/papiloscopia.html">Ir al
                            contenido</a></button>
                    </div>
                </div>
            </div>

            <div class="container col">
                <div class="card text-center p-2 h-100 bg-transparent">
                    <img src="img/firma.jpg" class="card-img-top w-75 align-self-center img_tarjetas"
                        alt="escena del crimen">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title"><i class="fas fa-pen-fancy"></i> Documentología</h5>
                        <p class="card-text">"La documentología es la ciencia que tiene por objeto de estudio el
                            análisis de los
                            documentos
                            modernos,
                            públicos y/o privados, utilizando para ello métodos y técnicas precisas, a fin de
                            establecer su autenticidad o falsedad, plasmando las conclusiones a las que se
                            arriban
                            a través de un informe escrito denominado Pericia Documentológica."</p>
                        <footer class="blockquote-footer"><cite title=""></cite></footer>
                        <button><a href="contenidos/papiloscopia/papiloscopia.html">Ir al
                            contenido</a></button>
                    </div>
                </div>
            </div>

            <div class="container col">
                <div class="card text-center p-2 h-100 bg-transparent">
                    <img src="img/huella-dactilar-en-vaso.jpg" class="card-img-top w-75 align-self-center img_tarjetas"
                        alt="escena del crimen">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title"><i class="fas fa-fingerprint"></i> Papiloscopía</h5>
                        <p class="card-text">"La papiloscopía es la disciplina que establece la identidad de las
                            personas en
                            función
                            del estudio de las cristas papilares e incluye la dactiloscopía (yema de los dedos),
                            la
                            palmatoscopía (palma de las manos) y la pelmatoscopía (planta de los pies).
                            Las crestas papilares determinan lo que se denomina "dibujos papilares" que, a fin
                            de la
                            identificación personal, son perennes, inmutables e individuales."</p>
                        <footer class="blockquote-footer"><cite title="Carlos Guzmán">Carlos
                                Guzmán.(2011)</cite></footer>
                        <button><a href="contenidos/papiloscopia/papiloscopia.html">Ir al
                            contenido</a></button>
                    </div>
                </div>
            </div>

        </div>

        <div>
            <h2 class="container text-center p-4 my-4 subtitulo">Otras Ramas</h2>
        </div>
        <div>
            <div class="row row-cols-auto justify-content-center align-content-center my-1 text-center">
                <div class="p-3 m-2 rama-otro-item">
                <a href="#">Antropología Forense</a>
                </div>
                <div class="p-3 m-2 rama-otro-item">
                <a href="#">Hematología Forense</a>
                </div>
                <div class="p-3 m-2 rama-otro-item">
                <a class="" href="#">Identificación Cadavérica</a>
                </div>
                <div class="p-3 m-2 rama-otro-item">
                <a href="#">Semenología Forense</a>
                </div>
                <div class="p-3 m-2 rama-otro-item">
                <a href="#">Tricología Forense</a>
                </div>
            </div>
        </div>

    </div>
    `
})

const app = new Vue({
    el: '#app'
})
