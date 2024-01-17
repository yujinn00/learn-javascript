'use strict';

// // 문자열 병합
// console.log('Hello ' + 'World!');
// console.log('3' + 3);
// console.log(typeof ('3' + 3)); // number -> string
// console.log('3' + 5 + 8);
// console.log(3 + 5 + '8');

// // 산술 연산자
// let x = 10;
// let y = 20;
// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x * y);
// console.log(9 % 2);

// number = prompt('숫자를 입력해주세요.');
// if (number % 2 === 1) {
//   alert('홀수입니다.');
// } else {
//   alert('짝수입니다.');
// }

// // 증감 연산자
// let result = x + y--;
// console.log('x: ', x);
// console.log('y: ', y);
// console.log('result: ', result);

// // 비교 연산자
// let a = 30;
// let b = '30';
// console.log(a !== b); // True
// console.log(a != b); // False
// // ==, !=을 사용하는 대신에 ===, !==을 사용하면 됨

// // 할당 연산자
// let x = 10;
// let y = 20;
// // x = x + y;
// x += y;
// console.log(x);
// // 1부터 10까지 더하는 반복문
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   // sum = sum + i;
//   sum += i;
//   console.log(`${i}번째 sum = ${sum}`);
// }

// // 논리 연산자
// let x = true;
// let y = false;
// console.log(x && y);
// console.log(x || y);
// console.log(!x);

let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');

btn.addEventListener('click', function () {
  let email = emailEl.value;
  let password = passwordEl.value;
  // console.log('email: ', email);
  // console.log('email: ', email === '');
  // console.log('password: ', password);
  // console.log('!password: ', !password);

  if (email === '' || email.includes('@') === false) {
    console.log('이메일이 유효하지 않습니다.');
  } else if (!password) {
    console.log('비밀번호를 입력해주세요.');
  } else if ((password.length >= 8 && password.length <= 16) == false) {
    console.log('비밀번호는 8~16자 이내입니다.');
  } else {
    console.log('로그인 성공!');
  }

  // password = null;
  // if (password && password.length === 8) {
  //   console.log('성공');
  // } else {
  //   console.log('실패');
  // }
});

// 삼항 연산자
let number = 7;
let message = number % 2 === 1 ? '홀수' : '짝수';
// if (number % 2 === 1) {
//   message = '홀수';
// } else {
//   message = '짝수';
// }
console.log(message);
