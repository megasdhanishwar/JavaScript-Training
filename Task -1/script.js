var employeeName = "Megasdhanishwar S";
let employeeAge = 24;
const companyName = "Stackly";

console.log("Employee Name :", employeeName);
console.log("Employee Age :", employeeAge);
console.log("Company Name :", companyName);

alert("Welcome to Employee Portal");

let taskStatus = confirm("Have you completed today's task?");
console.log(taskStatus);

let enteredName = prompt("Enter your name");
console.log(enteredName);

document.writeln("<h2>Welcome " + enteredName + "</h2>");
console.warn("Task submitted successfully");
console.error("Task submission failed");

employeeAge = 25;
console.log("Updated Employee Age :", employeeAge);