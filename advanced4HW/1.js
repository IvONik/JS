"use strict";
/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/
const books = ['Курочка Ряба', 'Золотой ключик', 'Сказка о золотой рыбке', 'Петушок гребешок'];
class Library {
    #books = [];
    constructor (){
        this.#books = books;
    }
    checkDuble(){
        const checkBooks = new Set(this.#books)
        if (books.length > checkBooks.size){
            throw new Error('есть повторяющиеся книги');
        }
    }
    getAllBooks(){
        console.log(this.#books);
    }
    addBook(title){
        this.#books.push(title)        
        this.checkDuble()
    }
    removeBook(title){
        const index = this.#books.indexOf(title);
            if (index > -1) { 
                this.#books.splice(index, 1); 
            }
        console.log(this.#books);
    }
    hasBook(title){
        console.log(this.#books.includes(title));
    }
}

const libr = new Library();
// libr.checkDuble();
// libr.getAllBooks();
// libr.addBook('Золотой ключик');
libr.addBook('Мальчик с пальчик');
libr.getAllBooks();
libr.removeBook('Мальчик с пальчик');
libr.hasBook('Мальчик с пальчик');
libr.hasBook('Золотой ключик');

