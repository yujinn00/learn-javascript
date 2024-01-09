console.log('Hello!!!');
console.log('Hello@@@', 'world!', 'javascript');
console.log('안녕');

// alert('Hello Javascript!');

/*
console.log('Hello!!!');
console.log('Hello@@@');
console.log('Hello@@@', 'world!', 'javascript');
*/

let str = 'Hello Javasccript';
let number = 30;
console.log('문자열:', str);
console.log('숫자:', number);

function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

sayHello();
console.log('-----');
sayHello();

let obj = {
  number: 30, // 속성 (Property)
  sayHello: function () {
    console.log('obj>Hello1');
    console.log('obj>Hello2');
    console.log('obj>Hello3');
  },
};

console.log(obj.number);
obj.sayHello();
