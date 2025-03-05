class Car {
    #mileage; // Private property

    constructor(brand, model, mileage) {
        this.brand = brand;
        this.model = model;
        this.#mileage = mileage; // Only accessible inside the class
    }

    showDetails() {
        console.log(this.brand + " " + this.model);
    }

    getMileage() {
        return this.#mileage;
    }
    
    print(){
        console.log(this.#mileage);
    }
}

const myCar = new Car("Toyota", "Corolla", 30000);
myCar.showDetails();
myCar.print();
//console.log(myCar.#mileage); // ❌ Error: Private field not accessible
