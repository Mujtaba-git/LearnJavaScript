class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    startCar() {
        this.#startEngine(); // Complex logic hidden
        console.log("Car started.");
    }

    #startEngine() { // Private method (cannot be accessed outside)
        console.log("Engine started internally.");
    }

    #print(){
        this.#startEngine();
    }
}

const myCar = new Car("Honda", "Civic");
myCar.startCar();
myCar.#print(); // ❌ Error: Private method not accessible

