// for scrolling
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    let headerWrapper = document.getElementById('header');

    if (scrollTop >= 850) {
        headerWrapper.classList.add('scrolled');
    } else {
        headerWrapper.classList.remove('scrolled');
    }
});


// SLIDER
const sliderArray = []
const defaultSlide = document.querySelector('.clicked')
sliderArray.push(defaultSlide)
const button_1 = document.getElementById('slide_1')
button_1.addEventListener('click', () => {
    const item_1 = document.querySelector('.item-1')
    if (sliderArray[0] !== item_1) {
        item_1.classList.remove('hidden')
        item_1.classList.add('clicked')
        sliderArray[0].classList.remove('clicked')
        sliderArray[0].classList.add('hidden')
        sliderArray.length = 0
        sliderArray.push(item_1)
    }
})
const button_2 = document.getElementById('slide_2')
button_2.addEventListener('click', () => {
    const item_2 = document.querySelector('.item-2')
    if (sliderArray[0] !== item_2) {
        item_2.classList.remove('hidden')
        item_2.classList.add('clicked')
        sliderArray[0].classList.remove('clicked')
        sliderArray[0].classList.add('hidden')
        sliderArray.length = 0
        sliderArray.push(item_2)
    }
})

const button_3 = document.getElementById('slide_3')
button_3.addEventListener('click', () => {
    const item_3 = document.querySelector('.item-3')
    if (sliderArray[0] !== item_3) {
        item_3.classList.remove('hidden')
        item_3.classList.add('clicked')
        sliderArray[0].classList.remove('clicked')
        sliderArray[0].classList.add('hidden')
        sliderArray.length = 0
        sliderArray.push(item_3)
    }
})
const button_4 = document.getElementById('slide_4')
button_4.addEventListener('click', () => {
    const item_4 = document.querySelector('.item-4')
    if (sliderArray[0] !== item_4) {
        item_4.classList.remove('hidden')
        item_4.classList.add('clicked')
        sliderArray[0].classList.remove('clicked')
        sliderArray[0].classList.add('hidden')
        sliderArray.length = 0
        sliderArray.push(item_4)
    }
})


//SELECT LANGUAGE


const lang = document.querySelector('.select')

lang.addEventListener('click', () => {
    lang.classList.toggle('dropdowned')
})