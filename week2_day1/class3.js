class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    validatePrice(expectedPrice) {
        if (this.price === expectedPrice) {
            console.log("Test Passed: Price is correct.");
        } else {
            console.log("Test Failed: Expected $" + expectedPrice + ", but got $" + this.price);
        }
    }
}

// Creating test data
const testCar = new Car("Ford", "Mustang", 55000);

// Running test case
testCar.validatePrice(55000);
testCar.validatePrice(50000);
