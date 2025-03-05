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

class ElectricCar extends Car {
    constructor(brand, model, price, batteryRange) {
        super(brand, model, price);
        this.batteryRange = batteryRange;
    }

    showBatteryInfo() {
        console.log(this.model + " has a battery range of " + this.batteryRange + " miles.");
    }
}

class disCar extends Car {
    constructor(brand, model, price, engine){
        super(brand, model, price);
        this.engine =engine;
    }
    showEngine(){
        console.log("Enging is " + this.engine)
    }
}
const tesla = new disCar("Tesla", "Model 3", 40000, 350);
//tesla.showDetails();

tesla.showEngine();