let inputBox = document.querySelector('#input-box');
let img = document.querySelector('img');

// inputBox.addEventListener('keypress', function () {
//   console.log('keypress');
// });

// inputBox.addEventListener('keydown', function () {
//   console.log('keydown');
// });

// inputBox.addEventListener('keyup', function (event) {
//   console.log('event.key: ', event.key);
//   console.log('event.key: ', event.keyCode);
// });

// inputBox.addEventListener('focus', function () {
//   alert('focus');
// });

// inputBox.addEventListener('blur', function () {
//   alert('blur');
// });

// inputBox.addEventListener('change', function () {
//   console.log('change');
// });

// inputBox.addEventListener('submit', function () {
//   console.log('change');
// });

img.addEventListener('error', function (event) {
  console.log('error');
  event.target.src = '../../img/apple.jpg';
});
