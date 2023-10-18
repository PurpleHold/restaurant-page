export {clearLoad};

function clearLoad() {
    if (document.querySelector('.food') !== null) {
        let foodList = document.querySelector('.food-list');
        foodList.remove();
        let title = document.querySelector('.titlecard');
        title.classList.remove('side');
        let menu = document.querySelector('.menu');
        menu.classList.remove('food');
        let globalContainer = document.getElementById('content');
        globalContainer.classList.remove('food');
    }
    if (document.querySelector('.info') !== null) {
        let contactInfo = document.querySelector('.contact-info');
        contactInfo.remove();
        let title = document.querySelector('.titlecard');
        title.classList.remove('side');
        let menu = document.querySelector('.menu');
        menu.classList.remove('info');
        let globalContainer = document.getElementById('content');
        globalContainer.classList.remove('info');
    }
}