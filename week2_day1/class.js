class Car {
    constructor(brand, model, year, price){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    showDetais(){
        console.log("this car is reday to go");
    }
}
const car1 = new Car("toyota", "86", 30000, 2025);
console.log(car1);
car1.showDetais();