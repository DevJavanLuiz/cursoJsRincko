import chalk from "chalk";
// FUNÇOES DE CALLBACK

// function perfome( exec) {
//   setTimeout(() => {
//     exec({
//       name: "javan",
//       sobreName: "Luiz",
//       idade: 21,
//     });
//   }, 1000);
// }

// function getUsersApi(user) {
//     console.log("o usuario é", user);
// }

// perfome(getUsersApi);

// *******************************************************

// FUNÇOES RECURSIVAS

// function countdown(number) {
//   if (number < 1) return;
//   setTimeout(()=>{
//     console.log(number)
//     countdown(number - 1)
//   }, 500)

// }
// countdown(5);

// function sum(number, result=0){
//   if (number <=1){
//     return result
//   }
//   return sum(number-1, result + number)
// }
// console.log(sum(3))

// *******************************************************

// PROMISE

// function requestCar(drivers){
//   return new Promise((resolve, reject)=>{
//     if (drivers > 0) return resolve('Motorisca a caminho.')
//       return reject ('Não há motoristas disponíveis.')
//   })
// }

// async function main(){
//   let drivers = 0;

//   const request = await requestCar(drivers).catch(err => err)

//   console.log(request)
// }
// main()

// SEM USAR O ASYNC / AWAIT

//   request
//   .then((text)=>{
// console.log(chalk.bgGreen('Promessa concluída!', text))
// })
// .catch((err)=>{
//   console.log(chalk.bgRed('Promessa rejeitada!', err))
// })
// .finally(()=>{
//     console.log(chalk.green('Promessa finalizada!'))
//   })

// }

// main()

// import { text } from "@clack/prompts";

// async function main(){
//   const name = await text({message: 'Qual seu nome?'})

//     console.log(`Seja bem vindo(a) ${name}`)
// }
// main()

// *******************************************************

// TRATAMENTO DE ERROS

// import { readFile } from "node:fs/promises";

// async function main() {
//   let file;

//   try {
//     file = await readFile("./sr/index.js");
//     console.log(file.toString());
//   } catch (err) {
//     console.log(Error("not can read this file"));
//   } finally {
//     console.log("Fim do tratamento de erro");
//   }
//   console.log("Fim do programa");
// }

// main();

// function upper(text) {
// if(typeof text !== 'string'){
//     throw new Error('Not is string.')
// }
// return text.toUpperCase()
// }

// try {
//     console.log(upper('ola'))
// } catch (err) {
//     console.log('Não foi possivel proseguir.', err);
// }

// console.log('End of aplication')

// *******************************************************

// CLASSES

// class Person {
//   #name;
//   #money = 0;
//   constructor(name, age, money) {
//     this.#name = name;
//     this.age = age;
//     this.#money = money;
//   }
//   intro() {
//     return `You name is ${this.#name}`;
//   }

//   getMoney() {
//     return this.#money;
//   }
//   setMoney(value){
//     return this.#money = value
//   }
//   incrementMoney(value){
//     return this.#money += value
//   }
// }

// const personOne = new Person("Javan", 21);
// const personTwo = new Person("Sabrina", 20);

// personOne.name = "Luiz";
// personOne.age = 25;

// console.log(personOne.intro());
// console.log(personOne.age);

// console.log(personTwo.intro());

// console.log(personOne.setMoney(200))

// console.log(personOne.incrementMoney(200))
// console.log(personOne.incrementMoney(200))
// console.log(personOne.incrementMoney(200))

// class Game {
//   static games = [];
//   status = "idle";
//   constructor(title, time) {
//     this.title = title;
//     this.time = time;
//     Game.games.push(this)
//   }
//   start() {
//     this.status = "progress";
//   }
//   stop() {
//     this.status = "ended";
//   }
//   deleteGame(){
//     Game.games = Game.games.filter(game => game.title !== this.title)
//   }
// }

// const parkuor = new Game("Parkuor", 200);
// const puzzle = new Game("Puzzle", 100);

// console.log(Game.games)
// puzzle.deleteGame()
// console.log(Game.games)

// *******************************************************

// SETS

// const numbers = new Set([1, 22, 3, 14, 5, 10, -30]);
// numbers.add(10)
// numbers.add(22)
// numbers.add(2)
// numbers.delete(3)

// console.log(numbers.has(22))
// console.log(numbers)
// console.log(numbers.size)
// import { text } from "@clack/prompts";

// async function main() {
//   const input = await text({ message: "Digite 5 números:" });

//   const inputNumbers = input.split(" ").map(Number);
//   const arrayNumber = new Set(inputNumbers);

//   console.log(inputNumbers);
//   console.log(arrayNumber);
// }

// main();

// // *******************************************************

// SPREAD E REST

// const player = {
//   nickname: 'Javan',
//   health: 20,
//   inventory:{
//     items:['sword', 'shield', 'bow'],
//     potions: [
//       {type:'regeneration', duration: 8},
//       {type:'defense', duration: 8},
//     ]
//   },
// }

// function updatedPlayers(player, newProps){
//   return { ...player, ...newProps }
// }

// const updatedPlayer = updatedPlayers(player, {
//   nickname:'Luiz',
//   coins: 10000000000
// });

// console.log(updatedPlayer)

// const numbers = [1, 2, 4, 7, 2, 3];

// const [one, two, ...others] = numbers;

// console.log(numbers);
// console.log(one, two);
// console.log(others);

// *******************************************************

// JSON JavaScript Object Notation

// import json from '../person.json' with {type: "json"};

// console.log(json)

// const person = {
//   name: "Javan",
//   age: 21,
//   isProgrammer: true,
//   languages: ["javaScript", "React"],
// };

// const stringJson = JSON.stringify(person);

// const arrayJson = [];

// arrayJson.push(stringJson)

// console.log(stringJson);
import { writeFileSync, readFileSync } from "node:fs";

// const person = {
//   name: "Javan",
//   age: 21,
//   isProgrammer: true,
//   languages: ["javaScript", "React"],
// };

// writeFileSync("./newperson.json", JSON.stringify(person, null, 2), "utf-8");

// const stringJson = readFileSync("./newperson.json", "utf-8");

// console.log(stringJson);

// const formatedJson = JSON.parse(stringJson);

// console.log(formatedJson);

// async function main() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();

//   console.log(data);
// }

// main();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('Javan', 21);
const person2 = new Person('Luiz', 21);
const person3 = new Person('Sabrina', 20);


writeFileSync("./newperson2.json", JSON.stringify([person1, person2, person3], null, 2), "utf-8");