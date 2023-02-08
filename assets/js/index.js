document.addEventListener('DOMContentLoaded', () => {
    const moveDownBtn = document.querySelector('#move-down-button');
    moveDownBtn.addEventListener('click', () => {
        document.body.scrollTop = 918;
    })

    const swiper = new Swiper('.swiperVl', {
        speed: 400,
        spaceBetween: 9,
        slidesPerView: 'auto',

        navigation: {
            nextEl: '.vladivostok-city__nav-button-next',
            prevEl: '.vladivostok-city__nav-button-prev',
        },

        breakpoints: {
            420: {
                spaceBetween: 19,
            }
        }
    });

    const swiperOtherCity = new Swiper('.swiper-other-city', {
        speed: 400,
        spaceBetween: 9,
        slidesPerView: 'auto',

        navigation: {
            nextEl: '.other-city__nav-button-next',
            prevEl: '.other-city__nav-button-prev',
        },

        breakpoints: {
            420: {
                spaceBetween: 19,
            }
        }  
    });



})