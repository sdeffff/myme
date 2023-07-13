const sliderBtn = document.querySelectorAll('.slider-btn'),
sliderBtns = [...sliderBtn],

sliderImgs = document.querySelector(".slider-imgs"),
sliderImg = document.querySelector(".slider-img");

sliderBtns[0].addEventListener("click", () => {
    sliderImgs.style.marginLeft = '0'

    sliderBtns[0].classList.add('active');
    sliderBtns[1].classList.remove('active');
    sliderBtns[2].classList.remove('active');
})

sliderBtns[1].addEventListener("click", () => {
    sliderImgs.style.marginLeft = '-865px'

    sliderBtns[0].classList.remove('active');
    sliderBtns[1].classList.add('active');
    sliderBtns[2].classList.remove('active');
})

sliderBtns[2].addEventListener("click", () => {
    sliderImgs.style.marginLeft = '-1740px'

    sliderBtns[0].classList.remove('active');
    sliderBtns[1].classList.remove('active');
    sliderBtns[2].classList.add('active');
})

if(window.innerWidth >= 1536) {
    sliderBtns[0].addEventListener("click", () => {
        sliderImgs.style.marginLeft = '0'
    })
    
    sliderBtns[1].addEventListener("click", () => {
        sliderImgs.style.marginLeft = '-865px'
    })
    
    sliderBtns[2].addEventListener("click", () => {
        sliderImgs.style.marginLeft = '-1740px'
    })

    console.log('asd')
} else {
    sliderBtns[0].addEventListener("click", () => {
        sliderImgs.style.marginLeft = '0'
    })
    
    sliderBtns[1].addEventListener("click", () => {
        sliderImgs.style.marginLeft = '-680px'
    })
    
    sliderBtns[2].addEventListener("click", () => {
        sliderImgs.style.marginLeft = '-1375px'
    })

    console.log('fas')
}

