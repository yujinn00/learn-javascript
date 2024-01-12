let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.onclick = function () {
  alert('프로퍼티 리스너');
};

btn2.addEventListener('click', function () {
  alert('addEventListener');
});

btn2.addEventListener('click', removeEventFunction);

function removeEventFunction() {
  alert('addEventListenerrr');
}

btn2.removeEventListener('click', removeEventFunction);

// 8분 10초
