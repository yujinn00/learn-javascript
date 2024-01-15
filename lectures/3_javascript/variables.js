'use strict';

/*
ES는 ECMAScript의 약어이며,
브라우저에서 동작하는
자바스크립트라는 언어를 만들 때,
변수는 어떻게 선언하고,
함수는 어떻게 선언하는지
이렇게 브라우저에서 동작하는
자바스크립트 문법을
표준화하기 위해 만들어짐
*/

// let teacher = '짐코딩';
// console.log(teacher);
// teacher = '홍길동';
// console.log(teacher);

// // let teacher = '김길동'

// const username = '짐코딩';
// console.log(username);
// username = 'change';

// {
//   let a = '변수';
//   console.log('a: ', a);
//   {
//     let a = '변수2';
//     let c = 'c변수';
//     console.log('c블록 a: ', a);
//   }
//   console.log('c: ', c);
// }
// // console.log('a: ', a);

// function sum(a, b) {
//   let result = a + b;
//   return result;
// }

// {
//   var number = 2;
//   var number = 3;
// }
// console.log(number);

/*
호이스팅은 코드가 실행되기 전에
변수나 함수의 선언이
자바스크립트 파일의
최상단으로 끌어 올려지는 것이며,
var로 선언한 변수와
function으로 선언한 함수는
호이스팅이 발생함
*/

// console.log(number2);
// let number2 = 2;

// console.log(print());
// let print = function () {
//   return 'hello';
// };

/*
Strict Mode는 암시적 전역 변수와
묵인했던 여러가지 이상한 문법을
허용하지 않는 모드이며,
자바스크립트 파일의 최상단에
'use strict'라는 문자열을
선언하면 됨
*/

// number = 2;
// console.log(number);
