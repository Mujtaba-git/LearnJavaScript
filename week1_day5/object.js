let car = {
    color : "read",
    price : 20000,
    owner: {
        owner1: "A",
        owner2: "B",
        owner3: [
            "X",
            "Y",
            "Z",
        ]
    }
}

console.log(car.owner.owner1);
console.log(car.owner.owner3[1]);