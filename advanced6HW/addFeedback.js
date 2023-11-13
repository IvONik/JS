'use strict';

// 1. Страница добавления отзыва о продукте.
// Должна содержать форму с полем для ввода названия продукта и текстовое поле 
// для текста отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
// Необходимо реализовать проверку, оба поля должны быть заполнены, если это не 
// так, необходимо выводить ошибку пользователю.

const prodEl = document.querySelector('.productName');
const textEl = document.querySelector('.text');
const btnEl = document.querySelector('.btn');
const messageEl = document.querySelector('.message');
const viewEl = document.querySelector('.view');


btnEl.addEventListener('click', () => {
    addFeedback(prodEl.value, textEl.value); 
    prodEl.value = '';
    textEl.value = '';
    
});
viewEl.addEventListener('click', () => {
    window.location.href = "viewFeedback.html";

})