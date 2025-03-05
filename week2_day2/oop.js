class Car {
    constructor(brand, model, price,color) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.color = color;
    }

    showDetails() {
        console.log(this.brand + " " + this.model + " - Price: $" + this.price);
    }

    showColor(){
        console.log("the color is " + this.color)
    }
}

// Creating car objects
const car1 = new Car("Toyota", "Corolla", 25000);
const car2 = new Car("Honda", "Civic", 27000);
const car3 = new Car("BMW", "X5", 50000, "black");
car1.showDetails();
car2.showDetails();
car3.showDetails();
car3.showColor();