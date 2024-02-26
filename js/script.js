const imgWrapper = document.querySelector('.img-wrapper');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const imagesList = document.querySelector('.list-img')

up.classList.add('hide');

let counterImg = 0;

const images = [
  'consegna/img/01.webp',
  'consegna/img/02.webp',
  'consegna/img/03.webp',
  'consegna/img/04.webp',
  'consegna/img/05.webp',
]

for(let i = 0; i < images.length; i++){
  const img = images[i];
  imgWrapper.innerHTML += `<img class="img hide" src="${img}" >`;
  
  imagesList.innerHTML += `<img class="images-list" src="${img}" >`;

}

const itemsCollection = document.getElementsByClassName('img');
itemsCollection[0].classList.remove('hide');

// imagesList[counterImg].classList.add('active');

// tatso up
up.addEventListener('click', function(){
  itemsCollection[counterImg--].classList.add('hide');

  itemsCollection[counterImg].classList.remove('hide');
  
  if(counterImg === 0){
    up.classList.add('hide');
  }

  down.classList.remove('hide');

})

// tasto down
down.addEventListener('click', function(){
  up.classList.remove('hide');

  itemsCollection[counterImg++].classList.add('hide');

  itemsCollection[counterImg].classList.remove('hide');
  
  if(counterImg === images.length - 1){
    down.classList.add('hide');
  }


})



