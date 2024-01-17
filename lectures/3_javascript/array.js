'use strict';

// // 1. 배열 생성
// const fruits = ['사과', '바나나', '딸기', '파인애플'];
// // const fruits = new Array('사과', '바나나', '딸기');
// console.log('fruits: ', fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// fruits[2] = '포도';
// console.log(fruits[2]);

// // 2. 자주 사용하는 배열 API
// // length : 배열의 길이 가져오기
// console.log('fruits.length: ', fruits.length);
// console.log('마지막 값: ', fruits[fruits.length - 1]);

// // push() : 배열 끝에 항목 추가하기
// fruits.push('귤');
// console.log(fruits);

// // forEach() : 배열의 항목을 순환하며 처리하기
// fruits.forEach(function (item, index) {
//   console.log(index, item);
// });

// // pop() : 배열 끝에 항목 제거하기
// // fruits.pop();
// // let removedItem = fruits.pop();
// // console.log('removedItem: ', removedItem);
// // console.log('제거 완료: ', fruits);

// // shift() : 배열 앞에 항목 제거하기
// // fruits.shift();
// // fruits.shift();
// // console.log(fruits);

// // unshift() : 배열 앞에 항목 추가하기
// fruits.unshift('수박');
// console.log(fruits);

// // indexOf() : 배열 안 항목의 인덱스 찾기
// const index = fruits.indexOf('토마토'); // 토마토가 없으므로 -1을 출력함
// console.log('index: ', index);

// // splice() : 인덱스 위치에 있는 항목 제거하기
// const findIndex = fruits.indexOf('파인애플');
// console.log('findIndex: ', findIndex);
// fruits.splice(findIndex, 1);
// console.log(fruits);

// // 3. 구조 분해 할당
// let fruits = ['사과', '바나나', '딸기'];
// // let apple = fruits[0];
// // let banana = fruits[1];
// // let strawberry = fruits[2];

// let [apple, banana, strawberry, ...others] = ['사과', '바나나', '딸기', 'a', 'b', 'c', 'd', 'e'];
// console.log(apple);
// console.log(banana);
// console.log(strawberry);
// console.log(others);

// // 4. 전개 구문
// let fruits1 = ['사과', '바나나', '딸기'];
// let fruits2 = ['파인애플', '수박'];
// let items = [...fruits1, ...fruits2]; // ...은 나머지 요소들을 의미함
// console.log(items);

// // 5. Rest Parameter
// print('a', 'b', 'c', 'd', 'e', 'f');

// function print(...values) {
//   values.forEach(function (item, index) {
//     console.log('index: ', index, 'item: ', item);
//   });
// }

// // 6. 얕은 복사 (Shallow Copy)
// let source = ['사과', '바나나', '딸기'];
// let target = source;
// target[0] = '파인애플';
// console.log('source: ', source);
// console.log('target: ', target);

// 7. 깊은 복사 (Deep Copy)
let source = ['사과', '바나나', '딸기'];
// let target = [...source];
// let target = Array.from(source);
let target = source.slice();
target[0] = '파인애플';
console.log('source: ', source);
console.log('target: ', target);
