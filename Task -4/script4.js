// Task 1 : Employee Management System

let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Surya",
        id: 103,
        salary: 45000
    }
];

console.log("\nTask 1: Employee Management System");
console.log("----------------");

console.log("Employee Details");
console.log("----------------");

for(let employee of employees){

    console.log(employee);

    if(employee.salary > 50000){
        console.log("Employee Eligible For Bonus");
    }
    else{
        console.log("Employee Not Eligible For Bonus");
    }
}

// Task 2 : Student Result Portal

let tamil = 90;
let english = 85;
let maths = 95;
let science = 80;
let social = 90;

let total = tamil + english + maths + science + social;

let percentage = total / 5;


console.log("\nTask 2 : Student Result Portal");
console.log("----------------");
console.log("\nStudent Report");
console.log("----------------");
console.log("Total :", total);
console.log("Percentage :", percentage);

if(percentage >= 90){
    console.log("Grade : A+");
}
else if(percentage >= 80){
    console.log("Grade : A");
}
else if(percentage >= 70){
    console.log("Grade : B");
}
else if(percentage >= 60){
    console.log("Grade : C");
}
else{
    console.log("Fail");
}

// Task 3 : E-Commerce Cart

let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 2000
    }
];

function calculateBill(productList)
{
    let total = 0;
    for(let product of productList){
        total += product.price;
    }

    console.log("\nTotal Bill :", total);

    if(total > 5000){
        let discount = total * 0.10;
        console.log("Discount :", discount);
        console.log("Final Amount :", total - discount);
    }
    else{
        console.log("Final Amount :", total);
    }
}

console.log("\nTask 3 : E-Commerce Cart");
console.log("----------------");
calculateBill(products);

// Task 4 : Login Authentication

let username = "admin";
let password = "12345";

let enteredUsername = prompt("Enter Username");
let enteredPassword = prompt("Enter Password");

let result = enteredUsername === username && enteredPassword === password ? "Login Successful" : "Invalid Credentials";


console.log("\nTask 4 : Login Authentication");
console.log("----------------");
console.log(result);

// Task 5 : Traffic Signal System

let signal = prompt("Enter Signal Color");

console.log("\nTask 5 : Traffic Signal System");
console.log("----------------");

switch(signal){

    case "Red": console.log("Stop"); break;

    case "Yellow": console.log("Ready"); break;

    case "Green": console.log("Go"); break;

    default:
        console.log("Invalid Signal");
}

// Task 6 : ATM Withdrawal System

let accountBalance = Number(prompt("Enter Account Balance"));

let withdrawalAmount = Number(prompt("Enter Withdrawal Amount"));


console.log("\nTask 6 : ATM Withdrawal System");
console.log("----------------");
console.log("\nATM Transaction");
console.log("----------------");
console.log("Account Balance :", accountBalance);
console.log("Withdrawal Amount :", withdrawalAmount);

if(withdrawalAmount <= accountBalance){

    accountBalance = accountBalance - withdrawalAmount;

    console.log("Transaction Successful");
    console.log("Remaining Balance :", accountBalance);
}
else{
    console.log("Insufficient Balance");
}

// Task 7 : Online Food Order

function orderPlaced(callback){

    console.log("Order Received");
    callback();
}

function preparingFood(callback){

    console.log("Food Preparing");
    callback();
}

function foodDelivered(){
    console.log("Food Delivered");
}


console.log("\nTask 7 : Online Food Order");
console.log("----------------");

orderPlaced(function(){
    preparingFood(function(){
        foodDelivered();
    });
});

// Task 8 : Cashback Generator

function* cashbackOffers(){

    yield "10% Cashback";

    yield "20% Cashback";

    yield "50% Cashback";

    yield "Better Luck Next Time";
}

console.log("\nTask 8 : Cashback Generator");
console.log("----------------");

let offers = cashbackOffers();

console.log(offers.next().value);

console.log(offers.next().value);

console.log(offers.next().value);

console.log(offers.next().value);


// Task 9 : Hospital Patient Check

let age = Number(prompt("Enter Age"));

let weight = Number(prompt("Enter Weight"));

console.log("\nTask 9 : Hospital Patient Check");
console.log("----------------");

if(age > 18){
    if(weight > 50){
        console.log("Eligible For Treatment");
    }
    else{
        console.log("Not Eligible");
    }
}
else{
    console.log("Not Eligible");
}


// Task 10 : Mini Employee Portal

let employees1 = [

    {
        id : 101,
        name : "Naveen",
        department : "Development",
        salary : 50000
    },

    {
        id : 102,
        name : "John",
        department : "Testing",
        salary : 30000
    },

    {
        id : 103,
        name : "Surya",
        department : "HR",
        salary : 45000
    }

];


console.log("\nTask 10 : Mini Employee Portal");
console.log("----------------");

// View Employees

function viewEmployees(){

    console.log("\nEmployee List");
    console.log("----------------");

    for(let employee1 of employees1){
        console.log(employee1);
    }
}


// Add Employee

function addEmployee(employee1){

    employees1.push(employee1);
    console.log("\nEmployee Added Successfully");
}


// Search Employee

function searchEmployee(id){

    let found = false;

    for(let employee1 of employees1){

        if(employee1.id === id){

            console.log("\nEmployee Found");
            console.log(employee1);

            found = true;
        }
    }

    if(found === false){
        console.log("Employee Not Found");
    }
}


// Delete Employee

function deleteEmployee(id){
    for(let index = 0; index < employees1.length; index++){
        if(employees1[index].id === id){
            employees1.splice(index,1);

            console.log("Employee Deleted");

            break;
        }
    }
}


// Bonus Calculation

function calculateBonus(){
    console.log("\nBonus Details");
    console.log("----------------");

    for(let employee1 of employees1){
        if(employee1.salary >= 50000){
            console.log(employee1.name + " Eligible For Bonus");
        }
        else{
            console.log(employee1.name + " Not Eligible For Bonus");
        }
    }
}


// Employee Count

function totalEmployees(){
    console.log("\nTotal Employees :", employees1.length);
}


// Function Calls

viewEmployees();

addEmployee({

    id : 104,
    name : "Eswar",
    department : "Frontend",
    salary : 55000

});

viewEmployees();

searchEmployee(104);

calculateBonus();

totalEmployees();

deleteEmployee(102);

viewEmployees();

totalEmployees();