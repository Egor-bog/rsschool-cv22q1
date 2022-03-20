window.addEventListener('load', () => {
    console.group()
    console.log('+10 - вёрстка валидная https://validator.w3.org/nu/?doc=https%3A%2F%2Fegor-bog.github.io%2Frsschool-cv%2F')
    console.log('+10 - вёрстка семантическая (main, article, section, header, footer, nav, figure, figcaption, picture, h1, h2, h3)')
    console.log('+10 - для оформления СV используются css-стили')
    console.log('+10 - контент размещается в блоке, который горизонтально центрируется на странице')
    console.log('+10 - вёрстка адаптивная')
    console.log('+10 - есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным')
    console.log('+10 - на странице СV присутствует изображение')
    console.log('+10 - контакты для связи и перечень навыков оформлены в виде списка ul > li')
    console.log('+10 - CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского')
    console.log('+10 - CV содержит пример вашего кода')
    console.log('+10 - CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий')
    console.log('+10 - CV выполнено на английском языке')
    console.log('+10 - выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт)')
    console.log('- есть видеорезюме автора CV на английском языке')
    console.log('+10 - дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию')
    console.groupEnd()


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
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}


