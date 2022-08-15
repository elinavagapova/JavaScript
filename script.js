'use string';

let allServicePrices, fullPrice, servicePercentPrice, service1, service2, title, screens, screenPrice, adaptive;
const rollback = 5;

const isNumder = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt('Как называется ваш проект?');
  screens = prompt('Какие типы экранов нужно разработать?');

  screenPrice = +prompt('Сколько будет стоить данная работа?');

  while (!isNumder(screenPrice)) {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  }

  adaptive = confirm('Нужен ли адаптив?');
};

const showTypeOf = function(variable) {
  console.log(variable, typeof variable); 
};

const getAllServicePrices = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }
    sum += +prompt("Сколько это будет стоить?");
  }

  return sum;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function() {
  return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
};

const getServicePercentPrices = function() {
  return fullPrice - (fullPrice * (rollback/100));
};

const getRollBackMessage = function(price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price > 0 && price <= 15000) {
    return "Скидка не предусмотрена";
  } else {
    return"Что то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getTitle());
console.log(getRollBackMessage(fullPrice));
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log(servicePercentPrice);


