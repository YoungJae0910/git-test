const card = document.querySelector('.card__inner');

card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
});

const card_1 = document.querySelector('.card__inner_1');

card.addEventListener('click', function(){
    card.classList.toggle('is-flipped1');
});
