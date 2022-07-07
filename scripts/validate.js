document.getElementById('desplegarPrincipales').addEventListener('click', abrir_principales);
document.getElementById('desplegarCrimi').addEventListener('click', abrir_crimi);
document.getElementById('desplegarPapi').addEventListener('click', abrir_papi);

function abrir_principales() {
    var sub_principales = document.getElementById('subNavPrincipales');
    sub_principales.classList.toggle("mostrar-barra");
}

function abrir_crimi() {
    var sub_crimi = document.getElementById('sub-barra-crimi');
    sub_crimi.classList.toggle("mostrar-barra");
}

function abrir_papi() {
    var sub_papi = document.getElementById('sub-barra-papi');
    sub_papi.classList.toggle("mostrar-barra");
}