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
// 매서드라고 할수있따