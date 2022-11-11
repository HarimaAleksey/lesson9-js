class Animal {
    constructor(name) {
        this.name = name;
    }

    showInfo() {
        console.log(`Animal name is ${this.name}`);
    }
}

class Cat extends Animal {
    constructor(name, age, height) {
        super(name);
        this.age = age;
        this.height = height;
    }

    // переопределение метода родительского класса
    showInfo() {
        super.showInfo(); // расширяет метод родителя
        console.log(`${this.age} years old`);
        console.log(`Cat height = ${this.height}`);
    }
}

class Kitty extends Cat {

}

const barsik = new Cat('Barsik', 5, 33);
barsik.showInfo();
console.log('--------------------------------');
const littleKitty = new Kitty('Mini', 2, 10);
littleKitty.showInfo();