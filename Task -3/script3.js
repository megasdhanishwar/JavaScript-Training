// Task 1: Employee Information System

let employeeName = prompt("Enter Employee Name");
let employeeAge = prompt("Enter Employee Age");
let employeeDepartment = prompt("Enter Employee Department");
let employeeSalary = Number(prompt("Enter Employee Salary"));

let employee = {
    name : employeeName,
    age : employeeAge,
    department : employeeDepartment,
    salary : employeeSalary
};

console.log("\nTask 1: Employee Information System");
console.log("----------------");
console.log("Name :", employee.name);
console.log("Age :", employee.age);
console.log("Department :", employee.department);
console.log("Salary :", employee.salary);

if(employee.salary > 30000){
    console.log("Eligible for Bonus");
}else{
    console.log("Not Eligible");
}


// Task 2: Supermarket Billing

let productName = prompt("Enter Product Name");
let productPrice = Number(prompt("Enter Product Price"));
let quantity = Number(prompt("Enter Quantity"));

let totalBill = productPrice * quantity;
let finalAmount;

if(totalBill > 5000){
    finalAmount = totalBill - (totalBill * 0.10);
}else{
    finalAmount = totalBill;
}

console.log("\nTask 2: Supermarket Billing");
console.log("----------------");
console.log("Product :", productName);
console.log("Price :", productPrice);
console.log("Quantity :", quantity);
console.log("Total Bill :", totalBill);
console.log("Final Amount :", finalAmount);


// Task 3: Student Result Portal

let studentName = prompt("Enter Student Name");
let marks = Number(prompt("Enter Marks"));

console.log("\nTask 3: Student Result Portal");
console.log("----------------");
console.log("Name :", studentName);
console.log("Marks :", marks);

if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 75){
    console.log("Grade B");
}
else if(marks >= 50){
    console.log("Grade C");
}
else{
    console.log("Fail");
}


// Task 4: Bank ATM Eligibility

let userName = prompt("Enter User Name");
let accountBalance = Number(prompt("Enter Account Balance"));
let withdrawalAmount = Number(prompt("Enter Withdrawal Amount"));

console.log("\nTask 4: Bank ATM Eligibility");
console.log("----------------");

if(withdrawalAmount <= accountBalance){
    console.log("Transaction Successful");
}else{
    console.log("Insufficient Balance");
}


// Task 5: Login Validation

let username = "admin";
let password = "12345";

let enteredUsername = prompt("Enter Username");
let enteredPassword = prompt("Enter Password");

console.log("\nTask 5: Login Validation");
console.log("----------------");

if(enteredUsername === username && enteredPassword === password){
    console.log("Login Successful");
}else{
    console.log("Invalid Username or Password");
}


// Task 6: Online Food Order

let foods = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sandwich",
    "Fries",
    "Juice",
    "Ice Cream",
    "Shawarma"
];

console.log("\nTask 6: Online Food Order");
console.log("----------------");

console.log("First Item :", foods[0]);

console.log("Last Item :", foods[foods.length - 1]);

console.log("Total Items :", foods.length);

console.log("\nFood Items");
console.log("----------------");

for(let item of foods){
    console.log(item);
}


// Task 7: Company Employee Directory

let employee1 = {
    name : "Megasdhanishwar S",
    age : 24,
    department : "Development",
    salary : 50000,
    experience : 3
};

console.log("\nTask 7: Company Employee Directory");
console.log("----------------");

for(let key in employee1){
    console.log(key + " : " + employee1[key]);
}


// Task 8: Traffic Signal System

let signal = prompt("Enter Signal Color");

console.log("\nTask 8: Traffic Signal System");
console.log("----------------");

switch(signal){
    case "Red": console.log("Stop"); break;

    case "Yellow": console.log("Ready"); break;

    case "Green": console.log("Go"); break;

    default: console.log("Invalid Signal");
}


// Task 9: Age Category Checker

let age = Number(prompt("Enter Age"));

console.log("\nTask 9: Age Category Checker");
console.log("----------------");

if(age <= 12){
    console.log("Child");
}
else if(age <= 19){
    console.log("Teenager");
}
else if(age <= 59){
    console.log("Adult");
}
else{
    console.log("Senior Citizen");
}


// Task 10: Employee Attendance

let employeeName1 = prompt("Enter Employee Name");
let attendance = prompt("Present / Absent");

let message = attendance === "Present"? "Welcome " + employeeName1 +"\nAttendance : Present": "Attendance : Absent";

console.log("\nTask 10: Employee Attendance");
console.log("----------------");

console.log(message);