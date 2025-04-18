document.addEventListener('DOMContentLoaded', ()=>{
    // мобильное меню
    const header = document.querySelector(".header");
    const burger = document.querySelector(".header-burger");


    burger.addEventListener("click", () => {
        header.classList.toggle("mobile-header");
        if (header.classList.contains("mobile-header")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    })


    const mobCatalogBtn = document.querySelector('.mobile-catalog-btn')
    const mobSubMenu = document.querySelector('.mobile-sub-menu')
    const closeBtn = document.querySelector('.close-btn')


    mobCatalogBtn.addEventListener('click', () =>{
        mobSubMenu.style.left = '0'
    })

    closeBtn.addEventListener('click', ()=>{
        mobSubMenu.style.left= '-100%'

    })

// выпадающее меню
    const hasMenu = document.querySelector('.mobile-sub-menu .has-menu')
    const mobItemSubmenu = document.querySelector('.mobile-item-sub-menu')
    const closeArrow = document.querySelector('.close-arrow')

    hasMenu.addEventListener('click', (e) =>{
        e.preventDefault();
        mobItemSubmenu.style.left = '0'
    })

    closeArrow.addEventListener('click', ()=>{
        mobItemSubmenu.style.left = '-100%'
    })
})

// модальное окно 
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

document.addEventListener('DOMContentLoaded', () => {
    // аккордион
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const accordionItem = button.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            accordionItem.classList.toggle('active');
            if(accordionItem.classList.contains('active')){
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            }else{
                accordionContent.style.maxHeight = '0';
            }
        });
    });
})


// аккордион для мобильной версии подвала
if(window.innerWidth <= 550){
    document.querySelectorAll('.footer-accordion-header').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const accordionItem = button.parentElement;
            const accordionContent = accordionItem.querySelector('.footer-accordion-content');
            accordionItem.classList.toggle('active');
            if(accordionItem.classList.contains('active')){
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            }else{
                accordionContent.style.maxHeight = '0';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // слайдер новостей
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

    // слайдер отзывов
    const reviewsSlider = new Swiper('.reviews-swiper', {
        slidesPerView: 2,
        spaceBetween: 24,
        speed: 400,
        loop: true,
        breakpoints: {
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
});

document.addEventListener('DOMContentLoaded', () => {
    // табы
    const tabLinks = document.querySelectorAll('.tab-btn');
    const tabs = document.querySelectorAll('.tab');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            tabLinks.forEach(link => link.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            this.classList.add('active');
            target.classList.add('active');
        });
    });
})
document.addEventListener('DOMContentLoaded', () => {
    // кнопки выбора отображения новостей
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

            if(window.innerWidth <= 767){
                newsItems.classList.remove('news-in-column')
            }

        })
    });
})
document.addEventListener('DOMContentLoaded', () => {
    // слайдер продукта
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
    // слайдер продукта
    const productTopSwiper = new Swiper(".product-top-swiper", {
        spaceBetween: 10,
        pagination: {
            el: ".product-swiper-pagination",
        },
        thumbs: {
            swiper: productBottomSwiper,
        },

        
    });

})


document.addEventListener('DOMContentLoaded', () => {
    // попап для отзыва
    const rewiewLinks = document.querySelectorAll('.show-more')

    rewiewLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            
            const reviewItem = link.parentElement
            const reviewDate = reviewItem.querySelector('.reviews_item-date').textContent
            console.log(reviewDate)
            const reviewText = reviewItem.querySelector('.reviews_item-text').textContent
            const reviewTitle = reviewItem.querySelector('.reviews_item-title').textContent

            const reviewModal = document.createElement('div')
            reviewModal.className = 'review-modal';
            reviewModal.innerHTML = `
                <div class="review-modal-content">
                    <div class="review-modal-header">
                        <div class="reviews_item-date">${reviewDate}</div>
                        <h5>${reviewTitle}</h5>
                        <button class="review-modal-close">&times;</button>
                    </div>
                    <div class="review-modal-body">
                        <p>${reviewText}</p>
                    </div>
                </div>
            `;

            document.body.appendChild(reviewModal)

            reviewModal.querySelector('.review-modal-close').addEventListener('click', () => {
                reviewModal.remove()
            })

            reviewModal.addEventListener('click', (e) => {
                if(e.target === reviewModal){
                    reviewModal.remove()
                }
            })
        })
    });
});


// анимация шагов истории компании

document.addEventListener('DOMContentLoaded', ()=>{
    const stepLogo = document.querySelector('.step-logo');
    const stepLogoPaths = stepLogo.querySelectorAll('path');
    console.log(stepLogoPaths)
    const containBlock = document.querySelector('.contain');
    const steps = document.querySelectorAll('.step');

    if (stepLogo && containBlock && steps.length) {
        const handleScroll = () => {
            const containRect = containBlock.getBoundingClientRect();

            if (containRect.top < window.innerHeight && containRect.bottom > 0) {
                steps.forEach((step, index) => {
                    const stepRect = step.getBoundingClientRect();
                    const stepTop = stepRect.top - containRect.top; 

                    if (stepRect.top < window.innerHeight * 0.7 && stepRect.bottom > window.innerHeight * 0.3) {
                        stepLogo.style.opacity = '1';
                        stepLogo.style.transform = `translateY(${stepTop + 50}px)`;

                        stepLogoPaths.forEach((path) => {
                            path.style.fill = `url(#gradient${index + 1})`;
                        })
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
})