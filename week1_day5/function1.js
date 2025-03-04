/* function outerFunction(x, y, z) {
    function innerAdd() {
        console.log("inside child function");
      return x + y + z;
    }
    console.log("The sum is: " + innerAdd());
    innerAdd();
    function innerSub() {
      return y - z;
    }
    console.log("The result is: " + innerSub());
  }
outerFunction(2,6,9);  
 */

// A simple JavaScript program demonstrating multiple nested functions inside a main function

/* function studentInfo(name, age, score1, score2) {
    console.log("Student Name: " + name);
    console.log("Student Age: " + age);
  
    // Nested function to calculate the student's birth year
    function calculateBirthYear() {
      return 2025 - age;
    }
  
    // Nested function to calculate the total score
    function calculateTotalScore() {
      return score1 + score2;
    }
  
    // Nested function to display all details using the above functions
    function displayDetails() {
      console.log("Birth Year: " + calculateBirthYear());
      console.log("Total Score: " + calculateTotalScore());
    }
  
    // Call the nested displayDetails function
    displayDetails();
  }
  
  // Example calls to the studentInfo function
  studentInfo("Alice", 20, 85, 90);
  studentInfo("Bob", 22, 78, 82); */
  

  function calculateNum (x,y,z){
    function addNum(){
        console.log("I am in addNum");
        return x + y + z;
    }

    function subNum(){
        console.log("I am in subNum");
        return x -y;
    }
    
    function mutiCalculate(){
        console.log("I am in muticalculate");
        return ;
    }
    function finalCal(){
        function lastCall(){
            console.log("I am in last");
        }
        console.log("final");
        lastCall();
    } 
/*     console.log("final is", finalCal());//
 */
    finalCal();
    
  }
  calculateNum(1,2,3);
