// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/api/users

async function getUserData(id, url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const arr = await response.json();
      for (let i = 0; i < arr.data.length; i++) {
        if (arr.data[i].id === id) {
          console.log(Object.entries(arr.data[i]));
        }
      }
    } else {
      console.log(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
getUserData(1, "https://reqres.in/api/users");

// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *

// // Пример использования функции
// const user = {
//   "name": "John Doe",
//   "job": "unknown"
// };

// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

const user = {
  name: "John Doe",
  job: "unknown",
};

function saveUserData(user, url) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader('Content-Type', 'application/json');  
  xhr.onload = function () {
    if (xhr.status >= 400) {      
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      console.log(`user: ${xhr.response}`);
    }
  };
  xhr.onerror = function () {
    console.log("Request error");
  };
  xhr.send(JSON.stringify(user));
}

saveUserData(user, "https://reqres.in/api/users");
