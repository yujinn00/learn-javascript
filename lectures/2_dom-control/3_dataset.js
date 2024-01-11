let h2 = document.querySelector('h2');
h2.dataset.test = 'hello javascript!';
console.log('h2.dataset.test: ', h2.dataset.test);

let img = document.querySelector('img');
let liList = document.querySelectorAll('li');
let seletedItem = document.querySelector('.selected-item');

liList[0].addEventListener('click', selectItem);
liList[1].addEventListener('click', selectItem);
liList[2].addEventListener('click', selectItem);

function selectItem(event) {
  seletedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
}
