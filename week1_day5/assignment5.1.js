const ALLOWED_COUNTRIES = ["USA", "Canada", "UK"];
const MIN_AGE = 18;

let user = {
  username: "John",
  age: 20,
  country: "Canada"
};

function isUserValid(user) {
  
  function isUsernameValid(username) {
    return username.trim() !== "";
  }

  function isAgeValid(age) {
    return age >= MIN_AGE && age < 120;
  }

  function isCountryValid(country) {
    return ALLOWED_COUNTRIES.includes(country);
  }

  return (
    isUsernameValid(user.username) &&
    isAgeValid(user.age) &&
    isCountryValid(user.country) 
  );
}

if (isUserValid(user)) {
  console.log("Registration successful!");
} else {
  console.log("Registration failed. Please check your details.");
}