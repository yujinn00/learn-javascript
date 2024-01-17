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

// 할당 연산자
let x = 10;
let y = 20;
// x = x + y;
x += y;
console.log(x);
// 1부터 10까지 더하는 반복문
let sum = 0;
for (let i = 1; i <= 10; i++) {
  // sum = sum + i;
  sum += i;
  console.log(`${i}번째 sum = ${sum}`);
}

// 논리 연산자

// 삼항 연산자
