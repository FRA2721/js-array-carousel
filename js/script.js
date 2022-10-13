// programmer: Francesco Cimino;
// project: Carousel Mono Arra;
// language: javascript;

// imgs-list
const imgsList = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",
];

const card = document.querySelector(".left-section");
const cardRight = document.querySelector(".right-section");

// items
for (let i = 0; i < imgsList.length; i++) {
    let picPosition = imgsList[i];
    const items =
            `<div class="card-img-1">
                <img src="${imgsList[i]}" alt="environment images" >
            </div>`;

    const itemsRight =
            `<div class="small-img">
                <img src="${imgsList[i]}" alt="small environment images">
            </div>`;

    card.innerHTML += items;
    cardRight.innerHTML += itemsRight;
}

// active-class-section
const cardImg = document.getElementsByClassName("card-img-1");
const smallImg = document.getElementsByClassName("small-img");

let arrowPointer = 0;

cardImg[arrowPointer].classList.add("active");
smallImg[arrowPointer].classList.add("active");

//onclick-section
const downArrowBtn = document.querySelector(".down-arrow");
const upArrowBtn = document.querySelector(".up-arrow");

// onclick-down-arrow-btn
downArrowBtn.addEventListener("click", function() {
    
    cardImg[arrowPointer].classList.remove("active");
    smallImg[arrowPointer].classList.remove("active");

    if (arrowPointer < 4){
        arrowPointer++;

    } else {
        arrowPointer = 0;
    }

    cardImg[arrowPointer].classList.add("active");
    smallImg[arrowPointer].classList.add("active");
});

// onclick-up-arrow-btn
 upArrowBtn.addEventListener("click", function() {

    cardImg[arrowPointer].classList.remove("active");
    smallImg[arrowPointer].classList.remove("active");

    if (arrowPointer > 0){
        arrowPointer--;
    } else {

        arrowPointer = 4;
    }

    cardImg[arrowPointer].classList.add("active");
    smallImg[arrowPointer].classList.add("active");
});

// loop
for (let i = 0; i < smallImg.length; i++) {
    const items = smallImg[i];
    items.addEventListener("click", function() {

        cardImg[arrowPointer].classList.remove("active");
        smallImg[arrowPointer].classList.remove("active");
        
        arrowPointer = i;

        cardImg[arrowPointer].classList.add("active");
        smallImg[arrowPointer].classList.add("active")
        
    });  
}