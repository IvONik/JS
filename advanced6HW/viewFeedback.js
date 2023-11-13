"use strict";

// 2. Страница просмотра отзывов.
// Показывает список всех продуктов, на которые были оставлены отзывы.
// Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы"
// (надпись кнопки меняется), при нажатии на которую показываются / скрываются
// отзывы продукта.
// После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв из localstorage и со страницы.
// Если удалены все отзывы продукта, то продукт вовсе должен быть удален, как из localstorage, так и со страницы.

const ulEl = document.querySelector(".list");
const textEl = document.querySelector(".text");
const reviews = JSON.parse(localStorage.getItem("reviews")) || {};

for (const key in reviews) {
    const button = document.createElement("button");
    button.textContent = "Показать отзывы";
    const liEl = document.createElement("li");
    liEl.textContent = key;
    ulEl.append(liEl);  
    liEl.appendChild(button);
    

    button.addEventListener( 'click', () => {  
    createText(key)
    if (button.textContent === "Показать отзывы") {  
       
        textEl.style.display = "block";
        button.textContent = "Скрыть отзывы";     
        
        } else {
                textEl.style.display = "none";
                // textEl.remove()
                button.textContent = "Показать отзывы";
        }
    })
}









// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   const liEl = document.createElement("li");
//   liEl.textContent = key;
//   ulEl.append(liEl);
//   const button = document.createElement("button");
//   button.textContent = "показать отзыв";
//   liEl.appendChild(button);

//   button.addEventListener("click", () => {
//     if (button.textContent === "показать отзыв") {
//       textEl.style.display = "block";
//       textEl.textContent = localStorage.getItem(key);
//       button.textContent = "скрыть отзыв";
//     } else {
//       textEl.style.display = "none";
//       button.textContent = "показать отзыв";
//     }
//   });
// }
