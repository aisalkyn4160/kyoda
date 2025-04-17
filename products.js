document.addEventListener('DOMContentLoaded', function() {
    // ползунок цен
    const slider = document.getElementById('price-range');
    const minInput = document.querySelector('.min-price');
    const maxInput = document.querySelector('.max-price');
    
    noUiSlider.create(slider, {
        start: [200, 35999],
        connect: true,
        step: 100,
        range: {
            'min': 200,
            'max': 35999
        },
        format: {
            to: function(value) {
                return Math.round(value);
            },
            from: function(value) {
                return Number(value);
            }
        }
    });
    
    slider.noUiSlider.on('update', function(values, handle) {
        if (handle === 0) {
            minInput.value = values[0];
        } else {
            maxInput.value = values[1];
        }
    });
    
  
    minInput.addEventListener('change', function() {
        slider.noUiSlider.set([this.value, null]);
    });
    
    maxInput.addEventListener('change', function() {
        slider.noUiSlider.set([null, this.value]);
    });
});


//пагинация для продуктов
document.addEventListener('DOMContentLoaded', function(){
    const paginationNumbers = document.getElementById("pagination-numbers");
    const paginatedList = document.getElementById("products-list");
    const listItems = paginatedList.querySelectorAll(".products-item");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");
    const paginationContainer = document.querySelector('.pagination-container')



    const paginationLimit = 6;
    const pageCount = Math.ceil(listItems.length / paginationLimit);
    let currentPage = 1;



    const disableButton = (button) => {
        button.classList.add("disabled");
        button.setAttribute("disabled", true);
    };

    const enableButton = (button) => {
        button.classList.remove("disabled");
        button.removeAttribute("disabled");
    };

    const handlePageButtonsStatus = () => {
        if (currentPage === 1) {
            disableButton(prevButton);
        } else {
            enableButton(prevButton);
        }

        if (pageCount === currentPage) {
            disableButton(nextButton);
        } else {
            enableButton(nextButton);
        }
    };

    const handleActivePageNumber = () => {
        document.querySelectorAll(".pagination-number").forEach((button) => {
            button.classList.remove("active");
            const pageIndex = Number(button.getAttribute("page-index"));
            if (pageIndex == currentPage) {
                button.classList.add("active");
            }
        });
    };

    const appendPageNumber = (index) => {
        const pageNumber = document.createElement("button");
        pageNumber.className = "pagination-number";
        pageNumber.innerHTML = index;
        pageNumber.setAttribute("page-index", index);
        pageNumber.setAttribute("aria-label", "Page " + index);

        paginationNumbers.appendChild(pageNumber);
    };

    const getPaginationNumbers = () => {
        for (let i = 1; i <= pageCount; i++) {
            appendPageNumber(i);
        }
    };

    const setCurrentPage = (pageNum) => {
        currentPage = pageNum;

        handleActivePageNumber();
        handlePageButtonsStatus();

        const prevRange = (pageNum - 1) * paginationLimit;
        const currRange = pageNum * paginationLimit;

        listItems.forEach((item, index) => {
            item.classList.add("hidden");
            if (index >= prevRange && index < currRange) {
                item.classList.remove("hidden");
            }
        });
    };

    window.addEventListener("load", () => {
        getPaginationNumbers();
        setCurrentPage(1);

        prevButton.addEventListener("click", () => {
            setCurrentPage(currentPage - 1);
        });

        nextButton.addEventListener("click", () => {
            setCurrentPage(currentPage + 1);
        });

        document.querySelectorAll(".pagination-number").forEach((button) => {
            const pageIndex = Number(button.getAttribute("page-index"));

            if (pageIndex) {
                button.addEventListener("click", () => {
                    setCurrentPage(pageIndex);
                });
            }
        });
    });


    if(listItems.length <=6){
        paginationContainer.style.display='none'
    }

    const productsMessage = document.querySelector('.products-message')

    if(listItems.length <= 0){
        productsMessage.style.display='block'
    }
})

// сортировка продуктов
const nameSorter = document.querySelector('.name-sorter')
const nameSorterUp = document.getElementById('name-sorter-arrow-up')
const nameSorterDown = document.getElementById('name-sorter-arrow-down')

const priceSorter = document.querySelector('.price-sorter')
const priceSorterUp = document.getElementById('price-sorter-arrow-up')
const priceSorterDown = document.getElementById('price-sorter-arrow-down')

const productList = document.getElementById("products-list");

const listItems = Array.from(productList.children);




nameSorterUp.addEventListener('click', () => {
    nameSorterUp.classList.add('clicked');
    nameSorterDown.classList.remove('clicked');
    nameSorter.classList.add('clicked')
    

    listItems.sort((a, b) => {
        const nameA = a.querySelector('.products-item__title').textContent.toLowerCase();
        const nameB = b.querySelector('.products-item__title').textContent.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
   
    updateProductsList(listItems);
});

nameSorterDown.addEventListener('click', () => {    
    nameSorterDown.classList.add('clicked');
    nameSorterUp.classList.remove('clicked');
    nameSorter.classList.add('clicked');

    listItems.sort((a, b) => {
        const nameA = a.querySelector('.products-item__title').textContent.toLowerCase();
        const nameB = b.querySelector('.products-item__title').textContent.toLowerCase();

        if (nameA < nameB) return 1;
        if (nameA > nameB) return -1;
        return 0;
    });
   
    updateProductsList(listItems);
}); 


priceSorterUp.addEventListener('click', () => {
    priceSorter.classList.add('clicked');
    priceSorterUp.classList.add('clicked');
    priceSorterDown.classList.remove('clicked');

    listItems.sort((a, b) => {
        const priceA = parseInt(a.dataset.price)
        const priceB = parseFloat(b.dataset.price)

        if (priceA < priceB) return -1;
        if (priceA > priceB) return 1;
        return 0;
        
    });
   
   updateProductsList(listItems)
});

priceSorterDown.addEventListener('click', () => {
    priceSorter.classList.add('clicked');
    priceSorterUp.classList.remove('clicked');
    priceSorterDown.classList.add('clicked');

    listItems.sort((a, b) => {
        const priceA = parseInt(a.dataset.price)
        const priceB = parseFloat(b.dataset.price)

        if (priceA < priceB) return 1;
        if (priceA > priceB) return -1;
        return 0;
        
    });
   
   updateProductsList(listItems)
});     


function updateProductsList(sorterProducts) {
    productList.innerHTML = '';
    sorterProducts.forEach(item => {
        productList.appendChild(item);
    });
}


// мобильный фильтр

const mobileFilter = document.querySelector('.products_content-filter')
const mobileFilterBtn = document.querySelector('.products-filter_btn')

mobileFilterBtn.addEventListener('click', () => {
    mobileFilter.classList.toggle('active')
})

