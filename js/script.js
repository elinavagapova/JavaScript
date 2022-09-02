'use strict';

const book = document.querySelectorAll('.book');
const div = document.querySelectorAll('div');
const title3 = div[4].querySelector('a');
const adv = document.querySelector('.adv');
const book2 = div[0].querySelectorAll('li');
const book5 = div[5].querySelectorAll('li');
const book6 = div[2].querySelectorAll('li');
const newChapter = document.createElement('li');

book[0].before(book[1]);
book[2].before(book[4]);
book[5].after(book[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

title3.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

book2[3].after(book2[6]);
book2[4].before(book2[8]);
book2[9].after(book2[2]);
book5[1].after(book5[9]);
book5[4].after(book5[2]);
book5[7].after(book5[5]);

newChapter.textContent = 'Глава 8: За пределами ES6';
book6[8].after(newChapter);

