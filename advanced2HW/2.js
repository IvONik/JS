"use strict";

class Manager {
  constructor() {
    this.chefs = new Map();
    this.dishes = new Map();

    this.chefs.set("Олег", "Пицца");
    this.chefs.set("Андрей", "Суши");
    this.chefs.set("Анна", "Десерт");

    this.dishes.set("Пицца", "Маргарита");
    this.dishes.set("Пицца", "Пепперони");
    this.dishes.set("Пицца", "Три сыра");
    this.dishes.set("Суши", "Филадельфия");
    this.dishes.set("Суши", "Калифорния");
    this.dishes.set("Суши", "Чизмаки");
    this.dishes.set("Суши", "Сеякемаки");
    this.dishes.set("Десерт", "Тирамису");
    this.dishes.set("Десерт", "Чизкейк");
  }

  // newOrder(client, ...orders) {
  //   console.log(`Клиент ${client.firstname} ${client.lastname} заказал:`);

  //   for (const order of orders) {
  //     const dishType = this.dishes.get(order.name);
  //     const chef = [...this.chefs.entries()].find(([name, specialization]) => specialization === dishType);

  //     if (chef) {
  //       console.log(`${dishType} "${order.name}" - ${order.quantity}; готовит повар ${chef[0]}`);
  //     } else {
  //       console.log(`Блюдо "${order.name}" не может быть приготовлено, так как нет подходящего повара.`);
  //     }
  //   }
  // }

  newOrder(client, ...orders) {
    console.log("");
    console.log(`Клиент ${client.firstname} заказал:`);

    for (const order of orders) {
      const chef = [...this.chefs.entries()].find(
        ([name, value]) => value === order.type
      );

      if (chef) {
        console.log(
          ` ${order.type} "${order.name}" - ${order.quantity} готовит повар ${chef[0]} `
        );
      } else {
        throw new Error("Мы не можем выполнить заказ");
      }
      // for (let v of this.chefs.values()) {
      //   if (v === order.name) {
      //     console.log(` ${order.type} "${order.name}" - ${order.quantity} готовит повар ${chef[0]} `);
      //   }
      // }
      // console.log('Мы не можем выполнить заказ');
    }
  }
}

class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const manager = new Manager();

const clientIvan = new Client("Иван", "Иванов");
manager.newOrder(
  clientIvan,
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" }
);

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" }
);

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" }
);

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" }
);
