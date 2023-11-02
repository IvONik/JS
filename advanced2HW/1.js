"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/
const albums =  [
    {
        title: "Still Loving You",
        artist: "Scorpions ",
        year: "1984"
    },
    {
        title: "A Kind of Magic",
        artist: "Qween",
        year: "1986"
    },
    {
        title: "Let It Be",
        artist: "The Beatles ",
        year: "1970"
    },
];

const obj = {
    albums,
    *[Symbol.iterator]() {
        for (const item of this.albums) {
            yield item;
        }
    }
    
};
for (const item of albums) {
    console.log(`${item.title} - ${item.artist}(${item.year})`);
 }
