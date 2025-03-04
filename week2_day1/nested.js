// Outer arrow function returns another arrow function
const nestedCheck = (obj) => {
  return () => {
    // First nested if-else block
    if (obj.status === "active") {
      // Second nested if-else block
      if (obj.count > 10 && !obj.isBlocked) {
        console.log("High count, not blocked!");
      } else if (obj.count > 10 && obj.isBlocked === true) {
        console.log("High count, but blocked!");
      } else {
        console.log("Low count or unknown status");
      }
    } else {
      // Another nested if block
      if (obj.status === "inactive" || obj.status === "paused") {
        console.log("Inactive or paused status");
      } else {
        console.log("Status unknown");
      }
    }
  };
};

// Example object
const sampleObj = {
  status: "active",
  count: 12,
  isBlocked: false
};

// We call the outer function to get the returned arrow function, then invoke it
const runCheck = nestedCheck(sampleObj);
runCheck();
