'use strict';

// 1. 숫자형 리터럴 표현 방식
let number1 = 2;
const number2 = 1.2;
console.log(number2);
console.log(5 / 0); // Infinity는 number의 한 종류임
console.log(-5 / 0); // -Infinity는 number의 한 종류임
let nan = 'hello' / 5; // Nan은 number의 한 종류임
console.log(nan);
console.log(typeof nan);

// 2. 문자열 리터럴 표현 방식
const name1 = '홍길동'; // 싱글쿼터
const name2 = '홍길동'; // 더블쿼터 (자동 포매팅)
const name3 = `홍길동`; // 백틱
const name = '홍길동';
const age = 25;
console.log('제 이름은 ' + name + '입니다. 나이는 ' + age + '살이에요.');
console.log('--------------------');
console.log(`제 이름은 ${name}입니다. 나이는 ${age}살이에요.`);
const message = `안녕하세요

이렇게 표현할 수도 있어요.`;
console.log(message);
const hello = "안녕하세요.\n제 이름은 '홍길동'입니다.";
console.log(hello);

// 3. 불리언 리터럴 표현 방식
const isProgrammer = true;
const isDesign = false;
console.log('isProgrammer: ', typeof isProgrammer);
console.log('isDesign', typeof isDesign);
if (isProgrammer) {
  console.log('프로그래머');
} else {
  console.log('디자이너');
}

// 4. null, undefined
const username = null;
let message2;
console.log(username);
console.log(message2);
console.log(typeof username);
console.log(typeof message2);

const person = {
  name: '홍길동',
  age: 25,
  isProgrammer: true,
  say() {
    console.log('Hello~!');
  },
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.length);
arr.push(88);
console.log(arr);
