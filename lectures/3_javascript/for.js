'use strict';

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let fruits = ['사과', '배', '바나나', '포도', '딸기'];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

let person = {
  name: '홍길동',
  age: '25',
  job: '개발자',
};
// let key = prompt('출력할 값을 입력해주세요.');
// console.log(person[key]);

let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(person[key]);
}
console.log('----------');
for (let key in person) {
  console.log(person[key]);
}
console.log('----------');
let fruits = ['사과', '배', '바나나', '포도', '딸기'];
// for-in 문은 인덱스가 출력됨
for (let fruit in fruits) {
  console.log(fruit);
}
// for-of 문은 값이 출력됨
for (let fruit of fruits) {
  console.log(fruit);
}
