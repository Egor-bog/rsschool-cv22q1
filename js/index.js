console.log('Egor');


document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        if(iconMenu.classList.contains('_active')) {
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
            document.body.classList.toggle('_lock');
        }

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


const spol = document.querySelector('.accordion__btn')
const jsBlock = document.querySelector('.accordion__dropdown')

spol.addEventListener('click', function(e) {
    spol.classList.toggle('active')
    jsBlock.classList.toggle('.js-acc-dropdown')
    if (jsBlock.style.maxHeight){
        jsBlock.style.maxHeight = null;
      } else {
        jsBlock.style.maxHeight = jsBlock.scrollHeight + "px";
      } 
}) 


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if(iconMenu) {
    console.log(iconMenu)
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}


