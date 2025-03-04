class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    showDetails() {
        console.log(this.brand + " " + this.model + " - Price: $" + this.price);
    }
}

// Creating car objects
const car1 = new Car("Toyota", "Corolla", 25000);
const car2 = new Car("Honda", "Civic", 27000);

car1.showDetails();
car2.showDetails();
