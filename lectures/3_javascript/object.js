'use strict';

// // Part 1

// // 객체 리터럴 문법
// const person = {
//   name: '짐코딩',
//   age: 25,
// };
// person.job = '개발자';

// // 객체 생성자 문법
// const person = new Object();
// person.name = '짐코딩';
// person.age = 25;
// person.job = '개발자';

// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'health'],
//   hello: function () {
//     alert('Hello!');
//   },
//   greeting: function () {
//     alert('Hi!');
//   },
//   hobby: {
//     name: 'programing',
//     alert: function () {
//       alert('programing');
//     },
//   },
// };

// // 점 표기법 => 객체.key
// console.log(person.name[0]);
// console.log(person.name[1]);
// person.hello();
// console.log(person.hobby.name);
// person.hobby.alert();
// delete person.interests;
// console.log(person);

// // 괄호 표기법 => 객체['key']
// console.log(person['name'][0]);
// console.log(person['name'][1]);
// person['hello']();
// console.log(person['hobby']['name']);
// person['hobby']['alert']();
// delete person['interests'];
// console.log(person);

// function printPerson({ hobby, name, age }) {
//   console.log(`제 이름은 ${name}이며, 나이는 ${age}살입니다. 그리고 취미는 ${hobby}입니다.`);
// }
// function createPerson(name, age, hobby) {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

// const person1 = createPerson('김길동1', 1, '아무거나');
// const person2 = createPerson('김길동2', 1, '아무거나');
// const person3 = createPerson('김길동3', 1, '아무거나');
// const person4 = createPerson('김길동4', 1, '아무거나');
// const person5 = createPerson('김길동5', 1, '아무거나');
// const person6 = createPerson('김길동6', 1, '아무거나');
// const person7 = createPerson('김길동7', 1, '아무거나');
// printPerson(person1);
// printPerson(person2);
// printPerson(person3);
// printPerson(person4);
// printPerson(person5);
// printPerson(person6);
// printPerson(person7);

// const { hobby, name, age } = person;
// console.log('name: ', name);
// console.log('age: ', age);
// console.log('hobby: ', hobby);

// const fruits = ['사과', '포도', '딸기'];
// const [a, b] = fruits;
// console.log(a);
// console.log(b);

// // ES5
// function Person(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }
// const person1 = new Person('김길동1', 1, '아무거나');

// // ES6
// class Person {
//   constructor(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//   }
// }
// const person1 = new Person('김길동1', 1, '아무거나');

// // Part 2

// let username = '짐코딩';
// console.log(username);
// changeName(username);
// console.log(username);

// function changeName(name) {
//   name = '홍길동';
// }

// console.log('==========');

// let person1 = {
//   name: '짐코딩',
//   age: 25,
// };
// console.log('name2' in person1);
// if ('name2' in person1) {
//   console.log('존재합니다.');
// } else {
//   console.log('존재하지 않습니다.');
// }

// let person2 = { ...person1 }; // Spread Operator를 이용한 복사
// let person2 = Object.assign({}, person1); // Object.assign() 함수를 이용한 복사
// person2.name = '홍길동';
// console.log(person1);
// console.log(person2);

// console.log(person);
// changePersonName(person);
// console.log(person);

// function changePersonName(people) {
//   people.name = '홍길동';
//   people.age = 60;
// }

const person = {
  name: '짐코딩',
};
console.log(person.hasOwnProperty('name'));
console.log(Object.hasOwn(person, 'name'));

console.log(person.name2);
if (person.name2) {
  console.log('True');
}
