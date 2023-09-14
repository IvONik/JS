// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i === 0){
        console.log(`${i} - это ноль`);
    }
    else if (i % 2 === 0){
        console.log(`${i} - это чётное число`);
    }else{
        console.log(`${i} - это нечётное число`);
    }    
}

const myarr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const res1 = myarr1.filter((el) => el % 2 === 0).forEach((el => console.log(`${el} - это чётное число`)))
const res2 = myarr1.filter((el) => el % 2 !== 0).forEach(el => console.log(`${el} - это нечётное число`))


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const myarr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myarr2.splice(3, 2)
console.log(myarr2);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const myarr3 = Array.from({length: 5}, () => Math.floor(Math.random() *(0, 9)));
console.log(myarr3);
const sum = myarr3.reduce((acc, el) =>  acc + el, 0)
console.log(`сумма чисел: ${sum}`);

// 2. Найти минимальное число:
let min = myarr3[0]
for (let i = 0; i < (myarr3.length-1) ; i++) {       
        if (myarr3[i+1] < min){
            min = myarr3[i+1]                
        }else{
            continue
        }     
}
console.log(`min: ${min}`); 
// или 
const min1 = myarr3.reduce((x, y) => Math.min(x, y));
console.log(min1);

// 3. Найти есть ли в этом массиве число 3:
let count = 0
for (let i = 0; i < myarr3.length ; i++) {       
    if (myarr3[i] === 3){
        count++               
    }else{
        continue
    }     
}
console.log(`Количество троек: ${count}`);


// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0; i < 20; i++) {
    let x = 'x' 
    let multiStr = x.repeat(i);
    console.log(multiStr);    
}
