// 'use strict';

/*
let person = {
  fullname: '짐코딩',
  age: 20,
  printThis: function () {
    console.log(this);
    console.log('this === person: ', this === person);
    console.log('this === window: ', this === window);
  },
};

// 아래와 같이 printThis() 함수 앞에 호출한 객체가 있으면 this는 그 호출한 객체를 가리킴
person.printThis();
// 아래와 같이 printThis() 함수 앞에 호출한 객체가 없으면 this는 디폴트로 window 전역 객체를 가리킴
let printThis = person.printThis;
printThis();
*/

/*
function printThis() {
  console.log(this);
}
printThis(); // default this => window

let person1 = {
  name: '홍길동1',
  printThis: printThis,
};
person1.printThis(); // this => person1

let person2 = {
  name: '홍길동2',
  printThis: printThis,
};
person2.printThis(); // this => person2

let person3 = {
  name: '홍길동3',
  printThis: printThis,
};
person3.printThis(); // this => person3
*/

/*
// ES5 bind - this 설정
function printThis() {
  console.log(this);
}
let person1 = {
  name: '홍길동',
};
let person2 = {
  name: '김길동',
};
let printThis1 = printThis.bind(person1); // bind() 함수로 this를 window에서 person1로 바인딩 O
let printThis2 = printThis1.bind(person2); // bind() 함수는 단 한 번만 가능하기 때문에 person2로 바인딩 X
printThis2();
*/

/*
let person = {
  name: '짐코딩',
  age: 20,
  hello: function () {
    setTimeout(() => {
      console.log(this);
    }, 1000);
    // let that = this;
    // setTimeout(function () {
    //   console.log(this);
    //   console.log(that.name);
    //   console.log(that.age);
    // }, 1000);
  },
};
person.hello();
*/
