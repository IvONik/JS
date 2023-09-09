// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени


function getCube(number) {
  let num = +prompt("введите число");
  let x = num ** 3;
  alert(`${num} в степени 3: ${x}`)
  return `${num} в степени 3: ${x}`;
}
// console.log(getCube(num));


// const getexponentiation = (a) => a ** 3;
// console.log(getexponentiation(3));

// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"



function getSalaryMinusTax(salary) {
  let inputNumber = +prompt("введите вашу зп");
    if (isNaN(inputNumber)){
      alert ('введите корректные значения')
        return 'введите корректные значения'
    } else {
        let salaryMinusTax = inputNumber - inputNumber * 0.13
        alert (`Размер заработной платы за вычетом налогов равен ${salaryMinusTax}`)
        return `Размер заработной платы за вычетом налогов равен ${salaryMinusTax}`;
    }
}
// console.log(getSalaryMinusTax(inputNumber));


// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел


    function getMax(number1, number2, number3){
        let inputNumber1 = +prompt("введите число");
        let inputNumber2 = +prompt("введите число");
        let inputNumber3 = +prompt("введите число");

        let max = Math.max(inputNumber1, inputNumber2, inputNumber3)
        alert(`максимальное из них: ${max}`)
}

// console.log(getMax(inputNumber1, inputNumber2, inputNumber3));

// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function summ(number1, number2){
  let inputNumber1 = +prompt("введите число");
  let inputNumber2 = +prompt("введите число");
  let sum = inputNumber1 + inputNumber2  
  alert(`Сумма чисел равна: ${sum}`)
}

function difference(number1, number2){
  let inputNumber1 = +prompt("введите число");
  let inputNumber2 = +prompt("введите число");
  if (inputNumber1 > inputNumber2){
    let dif = inputNumber1 - inputNumber2 
    alert(`Разность чисел равна: ${dif}`)
  }
  else{
    let dif = inputNumber2 - inputNumber1
    alert(`Разность чисел равна: ${dif}`)
  }  
  
}

function multy(number1, number2){
  let inputNumber1 = +prompt("введите число");
  let inputNumber2 = +prompt("введите число");
  let multy = inputNumber1 * inputNumber2  
  alert(`Произведение чисел равно: ${multy}`)
}
function division(number1, number2){
  let inputNumber1 = +prompt("введите число");
  let inputNumber2 = +prompt("введите число");
  let division = inputNumber1 / inputNumber2  
  alert(`Частное чисел равна: ${division}`)
}
