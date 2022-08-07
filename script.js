'use string';

let title = "lesson02";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 12;
const rollback = 5;
let fullPrice = 250000;
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

title = prompt('Как называется ваш проект?');

screens = prompt('Какие типы экранов нужно разработать?');

screenPrice = +prompt('Сколько будет стоить данная работа?');

adaptive = !!prompt('Нужен ли адаптив?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Math.ceil(fullPrice - 5000.44);
console.log(servicePercentPrice);

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (15000 < fullPrice && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
  console.log("Что то пошло не так");
}