export {contactLoad};

function contactLoad() {
    let globalContainer = document.getElementById('content');
    globalContainer.classList.add('info');

    let contactInfo = document.createElement("div");
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML=(`
        <h3>Adresse</h3>
        27 rue du Château des Poulpes<br>
        75000 Poulpe-Ville<br>

        <h3>Contact POULPE FICTION</h3>
        +33 (0)X 8X X4 X3 X3<br>
        contact@poulpe-fiction.com<br>
    `);

    let title = document.querySelector('.titlecard');
    title.classList.add('side');

    let menu = document.querySelector('.menu');
    menu.classList.add('info');
  
    globalContainer.appendChild(contactInfo);
}