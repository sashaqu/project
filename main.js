var number = 5555;
var string = "Hello world!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log(4*'aaa');
console.log(4+'bbb');

let something;
console.log(something);

//Ассоциативный массив, для любых типов данных ,с ключами.
let person = {
  name: "Jhon",
  age: 22,
  isMarried: false
};

console.log(person.name);
console.log(person["age"]);

// let answer = +prompt("Есть ли вам 18?", "Да");
// console.log(answer);
// console.log(typeof  answer);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp']; // для хранения любых типов данных
console.log(arr[2]);
console.log(arr[0]);

console.log(typeof arr);
console.log(typeof null);

// 7 урок

console.log("arr" + "- object");
console.log(4 + "- object");

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(incr);
console.log(decr--);
console.log(decr);

console.log(5%2);
console.log("2" === 2);

let isCheked = false,
    isClose = false;

console.log(isCheked || !isClose);