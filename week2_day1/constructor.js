function Car(brand, model,price,year) {
    this.brand = brand;
    this.model = model;
    
    this.price = price;
}

// Creating multiple car objects
const car1 = new Car("Toyota", "Corolla", 25000, 2000);
const car2 = new Car("Honda", "Civic", 27000, 2020);
const car3 = new Car("ABC", 2000, "20000");
console.log(car1);
/* console.log(car1.model); */
console.log(car2);
console.log("printing car3", car3);