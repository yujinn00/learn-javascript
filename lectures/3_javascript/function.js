'use strict';

// // 함수 선언식 (호이스팅 영향 O)
// function sayHello() {
//   console.log('이름과 나이를 입력해주세요.');
//   console.log('이름: 홍길동, 나이: 25살');
// }
// sayHello();

// // 함수 표현식 (호이스팅 영향 X)
// const sayHello = (name, age) => {
//   console.log('이름과 나이를 입력해주세요.');
//   console.log(`이름: ${name}, 나이: ${age}살`);
// };
// sayHello('짐코딩', 20);
// sayHello('김길동', 45);

// // 파라미터 & 반환 값
// const sum = (num1 = 0, num2 = 0) => num1 + num2;
// let result1 = sum(5, 3);
// console.log('result1: ', result1);
// let result2 = sum(5);
// console.log('result2: ', result2);

// // 함수 스코프
// function aFunc() {
//   let name = '짐코딩';
//   let age = 20;
//   function bFunc() {
//     let job = '개발자';
//     console.log('bFunc name: ', name);
//     console.log('bFunc age: ', age);
//     console.log('bFunc job: ', job);
//   }
//   bFunc();
//   console.log('aFunc name: ', name);
//   console.log('aFunc age: ', age);
//   // console.log('aFunc job: ', job); // 에러 발생
// }
// aFunc();

// // 즉시 실행 함수
// (function () {
//   console.log('hello');
// })();

// // 화살표 표기법
// /*
// 1. function 예약어를 생략할 수 있음
// 2. 함수에 매개변수가 하나 뿐이라면 괄호도 생략할 수 있음
// 3. 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략할 수 있음
// */
// const hello = (name) => `Hello, ${name}`;
// const str = hello('짐코딩');
// console.log(str);

// // 콜백 함수
// let fruits = ['사과', '바나나', '딸기'];
// fruits.forEach((item, index) => {
//   console.log('item: ', item);
// });
