let title = "lesson02";
let screens = "Простые, Сложные, Интерактивные";
const screenPrice = 12;
const rollback = 5;
const fullPrice = 250000;
let adaptive = 2 > 1;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

console.log(screens.toLowerCase());
console.log(screens.split(","));

console.log(fullPrice * rollback/100 + "%");

alert("Hello JavaScript!");

console.log("Мое первое домашнее задание");