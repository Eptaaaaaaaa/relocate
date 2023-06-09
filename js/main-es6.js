// Header scroll

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 70) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());


// Burger handler

(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.menu__nav');
    const closeItem = document.querySelector('.header__nav_close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('menu__nav_active');
    });
    closeItem.addEventListener('click', () => {
        menu.classList.remove('menu__nav_active');
    });
    if (window.innerWidth <= 999) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('menu__nav_active');
            });
        }
    }
}());



// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());


// slider 
function slider(active) {
    document.querySelectorAll('.info__cards-slide')[active].classList.add('info__cards-slide_active')
    document.querySelector('.info__cards-container').addEventListener('click', (e) => {
        let target = e.target.closest('.info__cards-slide');
        if (!target) return;
        for (let slide of document.querySelectorAll('.info__cards-slide')) {
            slide.classList.remove('info__cards-slide_active')
        }
        target.classList.add('info__cards-slide_active');
    })
}

slider(2)