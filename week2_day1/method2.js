const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    displayDetails() {
        console.log(this.brand + " " + this.model + " (" + this.year + ")");
    }
};

// Calling the method
car.displayDetails();
