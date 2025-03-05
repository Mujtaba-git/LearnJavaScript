class Car {
    constructor(brand, model, price, stock) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.stock = stock;
    }

    sellCar() {
        if (this.stock > 0) {
            this.stock--;
            console.log("Car sold. Remaining stock: " + this.stock);
        } else {
            console.log("Out of stock.");
        }
    }

    restockCar(amount) {
        this.stock += amount;
        console.log("Stock updated. New stock: " + this.stock);
    }
}

// Creating a car object
const car1 = new Car("Tesla", "Model 3", 40000, 3);

car1.sellCar();
car1.sellCar();
car1.sellCar();
car1.sellCar();
car1.restockCar(2);
