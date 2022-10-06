const card_3_copy = document.querySelector('.card__inner_3_copy');

card_3_copy.addEventListener('click', function(){
    card_3_copy.classList.toggle('is-flipped3_copy');
});

const card = document.querySelector('.card__inner');

card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
});

const card_1 = document.querySelector('.card__inner_1');

card_1.addEventListener('click', function(){
    card_1.classList.toggle('is-flipped1');
});

const card_2 = document.querySelector('.card__inner_2');

card_2.addEventListener('click', function(){
    card_2.classList.toggle('is-flipped2');
});

const card_3 = document.querySelector('.card__inner_3');

card_3.addEventListener('click', function(){
    card_3.classList.toggle('is-flipped3');
});

const card_copy = document.querySelector('.card__inner_copy');

card_copy.addEventListener('click', function(){
    card_copy.classList.toggle('is-flippedcopy');
});
// Element.classList.toggle 은 전등 스위치를 껏다 켯다 하는 행위처럼 0과 1을 반복한다
// 즉 기존값이 0이었다면 1로 바뀌고 기존값이 1이었다면 0으로 바뀐다
// 그래서 toggle에서는 클래스가 존재한다면 클래스를 제거하고, 클래스가 존재하지않는다면 클래스를 추가하는
// 매서드라고 할수있땅?

const slideContainer = document.querySelector ('container');
const slide = document.querySelector (".sliddes");
const nextBtn = document.getElementById ("next-btn");
const prevBtn = document.getElementById ("prev-btn");
const interval = 3000;

let sliddes = document.querySelectorAll(".slide");
let index = 1;
let slideId;

const firstClone = sliddes[0].cloneNode(true);
const lastClone = sliddes[sliddes.length - 1].cloneNode(true);

firstClone.id = "card__inner_3_copy";
lastClone.id = "card__inner_copy";

slide.append(firstClone);
slide.prepend(lastClone);

const slidewidth = sliddes[index].clientWidth;

console.log(slidewidth);

slide.style.transform = 'translateX(${-slidewidth * index}px)';

console.log(slides);

const startSlide = ()=>{
    slideId = setInterval(() => {
        moveToNextSlide();
    },interval);
};

const getslides = () => document.querySelectorAll(".slide");

slide.addEventListener('transitioned', ()=>{
    sliddes = getslides();
    if(slides[index].id === firstClone.id){
        slide.style.transition = 'none'
        index = 1;
        slide.style.transform = 'translateX(${-slidewidth * index}px)'
    }
    sliddes = getslides();
    if(slides[index].id === lastClone.id){
        slide.style.transition = 'none'
        index = slides.length-2;
        slide.style.transform = 'translateX(${-slidewidth * index}px)'
    }
})

const moveToNextSlide = () => {
    sliddes = getslides();
    if(index >= slides.length -1) return;
    index++;
        slide.style.transform = 'translateX(${-slidewidth * index}px)';
        slide.style.transition = '.7s'
}

const moveToPreviousSlide = () => {
    if(index <= 0) return;
    index--;
        slide.style.transform = 'translateX(${-slidewidth * index}px)';
        slide.style.transition = '.7s'
}

slideContainer.addEventListener('mouseenter',() => {
    clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();