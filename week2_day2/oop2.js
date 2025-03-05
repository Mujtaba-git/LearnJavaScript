// A test automation script needs to validate if a car object has correct details.
class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    validatePrice(expectedPrice) {
        return this.price === expectedPrice ? "Test Passed" : "Test Failed";
    }
}

// Running a test case
const testCar = new Car("Ford", "Mustang", 55000);
console.log(testCar.validatePrice(55000)); // Test Passed
console.log(testCar.validatePrice(50000)); // Test Failed
