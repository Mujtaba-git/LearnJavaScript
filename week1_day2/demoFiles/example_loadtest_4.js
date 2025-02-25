// Test Case Details (Fixed Information)
const testCaseName = "Website Load Time Test";
const expectedLoadTime = 3; // Expected time in seconds

// Start and End Time (Dynamic Values)
let startTime = 2; // Test started at 2 seconds
let endTime = 5;   // Test finished at 5 seconds

// Calculate Actual Load Time
let actualLoadTime = endTime - startTime; 

// Display Test Case Information
console.log("Test Case: " + testCaseName);
console.log("Expected Load Time: " + expectedLoadTime + " seconds");
console.log("Actual Load Time: " + actualLoadTime + " seconds");


