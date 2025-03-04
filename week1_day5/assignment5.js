/* Assignment: User Registration Validator for Test Automation */

const ALLOWED_COUNTRIES = ["USA", "Canada", "UK"];
const MIN_AGE = 18;

let user = {
    username: "John",
    age: 20,
    country: "Canada"
};


/* function checkRegistration(username, age, country) {
    if (username.trim() !== ""){
        if (age >= MIN_AGE && age < 120){
            if (ALLOWED_COUNTRIES.includes(country)){
                console.log("Success!!")
            }else{
                console.log("Failure, Country must be in the allowed list");
            }
        }else{
            console.log("Failure, Age must be 18 or older but less than 120.");
        }
    }else{
        console.log("Failure, username is empty");
    }
} */

function isUsernameValid(username) {
    return username.trim() !== "";
}

function isAgeValid(age) {
    return age >= MIN_AGE && age < 120;
}

function isCountryValid(country) {
    return ALLOWED_COUNTRIES.includes(country);
}

const isUserValid = isUsernameValid(user.username) && isAgeValid(user.age) && isCountryValid(user.country);

if (isUserValid) {
    console.log("Registration successful!");
} else {
    console.log("Registration failed.");
}