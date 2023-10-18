export {initialLoad};

function initialLoad() {

    // crée un nouvel élément
    let menu = document.createElement("div");
    menu.classList.add('menu');
    menu.innerHTML=(`<ul><li class="home">Accueil</li><li class="menu">Menu</li><li class="contact">Contact</li></ul>`);
    let title = document.createElement("div");
    title.classList.add('titlecard');
    title.innerHTML=(`<h1>P<span>o</span>ulpe fiction</h1>
    <h2>Cuisine méditerranéenne & bar à tapas</h2>`);
  
    // ajoute le nouvel élément créé et son contenu dans le DOM
    let currentDiv = document.getElementById("content");
    currentDiv.appendChild(menu);
    currentDiv.appendChild(title);
}


