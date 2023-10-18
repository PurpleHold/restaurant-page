export {foodMenuLoad};

function foodMenuLoad() {
    let globalContainer = document.getElementById('content');
    globalContainer.classList.add('food');

    let foodList = document.createElement("div");
    foodList.classList.add('food-list');
    foodList.innerHTML=(`
<h3>A PARTAGER</h3>
Caviar aubergines / banane / crackers 7€<br>
Houmous pois chiches / cacahuètes 6€<br>

<h3>ENTREES</h3>
Gaspacho / tomate / framboise / poivrons brûlés / sorbet Ispahan 16€<br>
Saumon gravelax / sésame grillé / pickles de chou-rave / blini moutarde 18€<br>
Chou-fleur rôti / vanille d’Ouganda / argan / noisettes grillées 21€<br>
Risotto Vialone Nano / girolles / tartuffon / jus corsé 26€<br>

<h3>DESSERTS</h3>
Coulant chocolat Pérou 65% / poivrons confits / glace popcorn / gel Penja 12€<br>
Monochrome de Panna cotta Reine des prés / tonka / poire / noix râpée 12€<br>
    `);

    let title = document.querySelector('.titlecard');
    title.classList.add('side');

    let menu = document.querySelector('.menu');
    menu.classList.add('food');
  
    globalContainer.appendChild(foodList);
}

