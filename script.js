console.log("Hello");
("abc"); //выражение
let a;
a = 10;
const b = "556";

const anyObj = {
  a: 20,
  b: 21,
  c: "Daniil",
  d: "single",
};

const copyOfObj = anyObj;
copyOfObj.a = 5;
anyObj.d = "married";
console.log(anyObj);
console.log(copyOfObj);

//в объектах в качестве значений могут использоваться переменные

const name = "Daniil";
const postQty = 23;

const userProfile = {
  name: name,
  postQty: postsQty,
  hasSignedAgreement: false,
};

const userprofile = {
  name,
  postQty,
  hasSignedAgreement: false,
};
// сокращенный формат записи свойств.

const myCity = {
  city: "New York",
  cityGreeting() {
    console.log("Greetings");
  },
};
138
myCity.cityGreeting();
// Greetings


// JSON.parse() - конвертит JSON в объект JS
{
    "userId": 1,
     "id": 1,
    "title": "Test title"
}
JSON.parse() - парсит JSON
JSON.stringify() - конверитит объект JS в JSON

// функции ;
let a = 5;
let b = 3;

function sum(a,b) {
  const c = a + b;
  console.log(c)
}

sum (a,b) // 8

// callback functions :

function anotherFunction() {
  //actions
}

function fnWCallB(callBFun) {
  callBFun();
}

fnWCallB(anotherFn)

function printMyName(){
  console.log('Daniil');
}

setTimeout(printMyName,1000)

const myName = "Dan";
const myCity = "Moscow";
const myInfo = `My name is ${myName} and I live in ${myCity} `;
console.log(myInfo)

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
})
// Date = значение даты присваивается агрументу как значение по умолочанию
const firstPost = {
  id: 1,
  author: 'Daniil'
}

newPost(firstPost)


// Обработка ошибок :
const fnWithError  = () => {
  throw new Error('text of the error')
}

fnWithError() // выполнение кода остановится тут (после появления Uncaught ошибки)

console.log('Continue')

//try catch

try {
// выполнение блока кода
} catch (error) {
// этот блок выполнится в случае возникновения ошибок в блоке try
}

const fnWithError = () => {
  throw new Error('TExt')
}
try {
  fnWithError()
} catch (error) {
  console.error(error)
  console.log(error.message)
}
console.log('continue')

// Инструкции
* Выражение всегда возвращает значение
* Инструкции(;) не могут быть использованы как аргументы в функциях

//Массивы
const myArr = [1,true,'b']
* console.log(myArr)
console.log (myArr[0]) //1
console.log (myArr[2]) //bT

// методы массивов:
А) push(e) - добавляет элемент в конец массива:
const myArray = [1,2,3];
myArray.push(5)
console.log(myArray) // [1,2,3,5]

Б) pop(NaN) - убирает элемент из конца массива и возвращает удаленный с конца эелмент
const removedElement = myArray.pop() // 5
console.log(myArray) // [1,2,3]

В) unshift(e) - добавляет элемент в начало массива:
myArray.unshift(first) // [first,1...]

Г) shift(e) - удаляет элемент из начала массива и возвращает его:
const removedElement = myArray.shift()

D) forEach(el=>) - перебирает все элементы массива и для каждого применятся то, что находится в фигурных скобках
+ он не меняет оригинальный массива
myArray.forEach(el=> el*2) //[2,4,6]

E) map(el=>) - то же самое что и forEach, только map() возвращает новый массив
const newArray = myArray.map(el=> el*5) //[5,10,15] оригинальный массив не изменился

//деструктуризация:
A) Объектов:
const userProfile = {
  name: 'Daniil',
  age: 25,
  city: 'Moscow'
}
const {name,city,age} = userProfile //создание новых перменных и взятие в них свойств одноименных названий

B) Массивов:
const fruits = ['Apple','Orange'];
const [fruitOne,fruitTwo] = fruits //создание новых переменных и присваивание им значений по порядку
+ // так как порядок следования в массивах - важен

Г) Функций:
const userProfile = {
  name: 'Daniil',
  age: 25,
  city: 'Moscow'
}

const userInfo = ({name, age}) => {
  if(!age){
    return `User ${name} wasnt aged`
  }
  return `User${name}'s age is ${age}` years old
}


Д) Условные инструкции:

1) if :
if(условие) {
  //блок кода, выполянемые 1раз , если условие в аргументе = правда
}
let val = 10

if (val > 5){
  val += 30
}

console.log(val) //40

2) if else :
if (условие) {
  // Блок кода, выполняемый однократно, если условие правдиво
} else {
  // Блок кода, выполняемый если условие ложно
}

let val = 6
if(val <  5){
  val += 20
} else {
  val -= 20
}
console.log(val) //-14

3) if else if :
if (Условие 1) {
  // Блок кода, выполняеиый однократно, если Условие 1 правдиво
} else if (Условие 2) {
  // Блок кода, выполняемый однократно, если Условие 2 ложно 
} else {
  // Блок кода, выполняемый  однократно, если все условия ложны
}

const age = 21

if(age > 18){
  console.log('Is adult')
} else if(age >= 12){
  console.log('Is teenager')
} else {
  console.log('Is child')
}
const age = 21

if(age > 18){
  console.log('Is adult')
}

if(age >= 12){
  console.log('Is teenager')
}

if(age < 12){
  console.log('Is child')
}

//Инструкция 'if' в функциях:
const sumPostiveNumbers = (a,b) => {
  if (typeof a !== 'number' || typeof b !== 'number'){
    return 'One of the arguments is not a number'
  }
  if (a <= 0 || b <= 0) {
    return 'Numbers are not postive'
  }
  return a + b
}

// switch:
switch(Выражение) {
  case A:
    //Действия если Выражение === A
    break
  case B:
//Действия если Выражение === B
     break 
    default: 
     //Действия по умолочанию
}

const month = 2
switch (month) {
  case 12:
    console.log('Декабрь')
    break
  case 1:
      console.log('Январь')
    break
  case 2:
      console.log('Февраль')
      break
  default:
    console.log('Это не зимний месяц')
}


//тернарный оператор: (три операнда) - это выражение(возвращает значение)
Условие 
  ? Выражение 1 
  : Выражение 2



  // Циклы (все циклы - это инструкции):
1) Цикл for:
for (Начальная инструкция; Условие; Итерационное действие){
  // Блок кода, выполняемый на каждой итерации
}

for (let i = 0; i < 5; i++) {
  console.log(i)
}

//Перебор элементов массивов:
const myArray = ['first', 'second', 'third']

1) for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}

2) myArray.forEach((element, index) => {
  console.log(element,index)
})


// Циклы (2):
2) while (Условие) {
  // Блок кода, выполняющийся пока условие правидиво
}

let i = 0
while (i < 5) {
  console.log(i)
  i++
}

3) do while цикл:
do {
  // Блок кода, выполняющийся на каждой итерации
} while (Условие)
/*
(блок инструкции выполнится хотя бы 1 раз и будет выполнятся пока условие правдиво)
*/ 

let i = 0

do {
 console.log(i)
 i++
} while (i < 5)


4) Цикл for in:
for (key in Object) {
  // Действия с каждым свойством объекта
  // Значения свойтсва - Object[key]
}

const myObject = {
  x: 10,
  y: true,
  z: 'abc'
}

for (const key in myObject) {
  console.log(key, myObject[key])
}

Object.keys(myObject).forEach(key => {
  console.log(key, myObject[key])
})


Object.values(myObject).forEach(key => {
  console.log(key, myObject[key])
})

5) Цикл for in для массивов:
const myArray = [true, 10, 'abc', null]

for (const key in myArray) {
  console.log(myArray[key])
}

6) Цикл for of: (не используется для объектов)
for (Element of Iterable) {
  // Действия с определенным элементом 
}

a) для строк:
const myString = 'Hey'

for (const letter of myString) {
  console.log(letter)
}

б) для массивов:
const myArray = [true, 10, 'abc', null]

for (const element of myArray) {
  console.log(element)
}

// Модули:
export default / import 

a) 
export {
  one,
  two
}

b)
import {
  one,
  two
} from './.js'

// имена переменных должны совпадать

c)
import {
  one as oneRenamed,
  two
} from './.js'
// можно менять названия при импорте as




// классы и прототипы:
* Классы позволяют создавать прототипы для объектов
* На основании прототипов создаются экземпляры
* Класс - это шаблон для создания новых объектов
class Comment {
  constructor(text){
    this.text = text
    this.votesQty = 0
  }
  upvote() {
    this.votesQty += 1
  }
}

const firstComment = new Comment('First comment')

// промисы :
* промис - это обещание предоставить результат позже >
* у промиса есть 3 состояния:
- ожидание
- отклолнен
- выполнен 

const aPromise = new Promise((resolve, reject) => {
  // выполнение асинхронных действий
})

//получение результата промиса:
aPromise 
.then(value = >{
  //действия в случае успешного исполнения промиса
})
.catch(error => {
  //дествия в случае отклонения промиса
})

* пример:
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error(error))


/* Асинхронные функции */:
async function asyncFn() {
  //Возвращает промис всегда
}

const asyncFn = async () => {
  //Промис
}

//await :

const asyncFn = async () => {
  await <Promise></Promise> //ожидание результатов промиса
}
asyncFn()

const timerPromise = () =>
new Promise((resolve,reject) => 
setTimeout(() => resolve(), 2000))

const asyncFn = async() => {
  console.log('Timer starts')
  await timerPromise()
  console.log('Timer ended')
}

asyncFn()