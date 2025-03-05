class Car {
    drive() {
        console.log("The car is driving.");
    }
}

class ElectricCar extends Car {
    drive() {
        console.log("The electric car is driving silently.");
    }
}

class GasolineCar extends Car {
    drive() {
        console.log("The gasoline car is driving with engine noise.");
    }
}

const tesla = new ElectricCar();
const ford = new GasolineCar();

tesla.drive(); // Output: The electric car is driving silently.
ford.drive();  // Output: The gasoline car is driving with engine noise.
