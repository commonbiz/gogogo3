
console.log(name);
/**
 *  Hoisting : 모든 변수 선언문이 최상단으로 이동되는 것처럼 느껴지는 현상
 * var를 쓰면 안되는 이유, 변수선언전에 값을 출력함
 * 
 * 
 * 타입변환 - type conversion Coercion
 * 명시적
 * 암묵적
 */

let age=32;
let stringAge = age.toString();
console.log(typeof age);


var name='Justin is Good';


let go ='5.55';

console.log(typeof go, go+5);
console.log(age.toString(), go);
parseFloat(go);
console.log(go+45, typeof go);
console.log(parseFloat(go)+.045);



console.log(!!null);
console.log(!!undefined);
console.log(!!true);
console.log('---------------');
console.log(!!{});
console.log(!![]);
/**
 * 1. 아무글자도 없는 String
 * 2. 값이 없는 경우
 * 3. 0
 * 모두 false 로 반환한다. 
 * 
 * git hub 테스트 입니다. 
 */

