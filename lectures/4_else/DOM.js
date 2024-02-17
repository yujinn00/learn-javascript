'use strict';

document.getRootNode(); // document
document.childNodes(); // !DOCTYPE html, html
document.childNodes[1].childNodes[2].childNodes[1].textContent = '제목입니다.';
let domObject = document.querySelector('h1');
domObject.textContent = '변경합니다.';
