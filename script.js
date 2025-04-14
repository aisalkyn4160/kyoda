// const header = document.querySelector(".header");
// const burger = document.querySelector(".burger");


// burger.addEventListener("click", () => {
//     header.classList.toggle("mobile-header");
//     if (header.classList.contains("mobile-header")) {
//         document.body.classList.add("no-scroll");
//     } else {
//         document.body.classList.remove("no-scroll");
//     }
// })

// ----------------------------------popup--------------------------------
const popup = document.querySelector('.popup')
const popupShowBtns = document.querySelectorAll('.show-popup')
const closeFormBtn = document.querySelector('.close-form')

popupShowBtns.forEach(item => {
    item.addEventListener('click', () => {
        popup.classList.add('show-popup')
        document.body.classList.add('no-scroll')
    })
})

closeFormBtn.addEventListener('click', () => {
    popup.classList.remove('show-popup')
    document.body.classList.remove('no-scroll')
})

document.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show-popup')
        document.body.classList.remove('no-scroll')
    }
});

// Инициализация аккордеона
document.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню
    const burger = document.querySelector('.header-burger');
    const navMenu1 = document.querySelector('.nav-menu1');
    const navMenu2 = document.querySelector('.nav-menu2');
    const body = document.body;

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navMenu1.classList.toggle('active');
        navMenu2.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navMenu1.classList.remove('active');
            navMenu2.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    // Аккордеон (оставляем существующий код)
    // const firstAccordionItem = document.querySelector('.accordion-item');
    // if (firstAccordionItem) {
    //     const firstAccordionContent = firstAccordionItem.querySelector('.accordion-content');
    //     firstAccordionItem.classList.add('active');
    //     firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + "px";
    // }


});

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');



        // if (accordionItem.classList.contains('active')) {
        //     return;
        // }

        // document.querySelectorAll('.accordion-item').forEach(item => {
        //     item.classList.remove('active');
        //     const content = item.querySelector('.accordion-content');
        //     content.style.maxHeight = "0";
        // });

        accordionItem.classList.toggle('active');
        if(accordionItem.classList.contains('active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }else{
            accordionContent.style.maxHeight = '0';

        }


    });
});

document.addEventListener('DOMContentLoaded', () => {
    const newsSlider = new Swiper('.news-swiper', {
        slidesPerView: 3,
        spaceBetween: 24,
        speed: 400,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1.4,
                spaceBetween: 8,
            },
            550: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.news-btn-next',
            prevEl: '.news-btn-prev',
        },
    });

    const reviewsSlider = new Swiper('.reviews-swiper', {
        slidesPerView: 2,
        spaceBetween: 24,
        speed: 400,
        loop: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.4,
                spaceBetween: 8,
            },
            767: {
                slidesPerView: 2,
            }
        },
        navigation: {
            nextEl: '.reviews-btn-next',
            prevEl: '.reviews-btn-prev',
        },
    });

    const productBottomSwiper = new Swiper(".product-bottom-swiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".product-btn-next",
            prevEl: ".product-btn-prev",
        },
    });
    const productTopSwiper = new Swiper(".product-top-swiper", {
        spaceBetween: 10,
        thumbs: {
            swiper: productBottomSwiper,
        },
    });


    const newsOptions = document.querySelectorAll('.news-option')
    const newsItems = document.querySelector('.news-items')
    const columnOption = document.querySelector('.column-option')


    newsOptions.forEach(option =>{
        option.addEventListener('click', ()=>{
            newsOptions.forEach(opt => opt.classList.remove('selected'));

            option.classList.add('selected')

            if(columnOption.classList.contains('selected')){
                newsItems.classList.add('news-in-column')
            }else{
                newsItems.classList.remove('news-in-column')
            }

        })
    });

});



