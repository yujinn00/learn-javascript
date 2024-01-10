let addAfterBtn = document.getElementById('after');
let addBeforeBtn = document.getElementById('before');
let removeTargetBtn = document.querySelector('#target-remove');
let removeBtn = document.querySelector('.remove-btn');
let inputBox = document.querySelector('input');

console.log(inputBox.value);

addAfterBtn.addEventListener('click', function () {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  // button.setAttribute('class', 'remove-btn');
  button.classList.add('remove-btn');
  button.addEventListener('click', removeParentNode);
  li.appendChild(button);
  ul.appendChild(li);

  inputBox.value = '';
  inputBox.focus();
});

addBeforeBtn.addEventListener('click', function () {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let targetLi = document.querySelector('#target');
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetLi);
});

removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('#target');
  targetLi.remove();
});

removeBtn.addEventListener('click', removeParentNode);

function removeParentNode(event) {
  event.target.parentNode.remove();
}
