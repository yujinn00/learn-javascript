let addBeforeBtn = document.getElementById('before');
let addAfterBtn = document.getElementById('after');
let inputBox = document.querySelector('input');

console.log(inputBox.value);

addBeforeBtn.addEventListener('click', function () {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let targetLi = document.querySelector('#target');
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetLi);
});

addAfterBtn.addEventListener('click', function () {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = inputBox.value;
  ul.appendChild(li);
});
