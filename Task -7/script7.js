// Task 1 : Student Management System

let students = [

    {
        name : "Naveen",
        id : 101,
        mark : 85
    },

    {
        name : "John",
        id : 102,
        mark : 45
    },

    {
        name : "Arun",
        id : 103,
        mark : 25
     }

];

console.log("\nTask 1 : Student Management System");
console.log("----------------");

// 1. Print All Students

console.log("All Students");
console.log("----------------");

for(let student of students){
    console.log(student);
}

// 2. Print Student Names

console.log("\nStudent Names");
console.log("----------------");

for(let student of students){
    console.log(student.name);
}

// 3. Find Student ID 102

console.log("\nSearch Student");
console.log("----------------");

let searchId = 102;
let found = false;

for(let student of students){
    if(student.id === searchId){
        console.log("Student Found");
        console.log("Name : " + student.name);
        console.log("Mark : " + student.mark);

        found = true;
    }
}

if(found === false){
    console.log("Student Not Found");
}

// 4. Students Passed

console.log("\nPassed Students");
console.log("----------------");

for(let student of students){
    if(student.mark >= 35){
        console.log(student.name);
    }
}

// 5. Total Students

console.log("\nTotal Students");
console.log("----------------");

console.log("Count : " + students.length);


// Task 2 : Employee Salary System

let employees = [

    {
        name : "Naveen",
        salary : 30000
    },

    {
        name : "John",
        salary : 45000
    },

    {
        name : "Arun",
        salary : 60000
    }

];

console.log("\nTask 2 : Employee Salary System");
console.log("----------------");

// Highest Salary

let highestSalary = employees[0].salary;

for(let employee of employees){
    if(employee.salary > highestSalary){
        highestSalary = employee.salary;
    }
}

console.log("Highest Salary : " + highestSalary);

// Lowest Salary

let lowestSalary = employees[0].salary;

for(let employee of employees){
    if(employee.salary < lowestSalary){
        lowestSalary = employee.salary;
    }
}

console.log("Lowest Salary : " + lowestSalary);

// Salary After Bonus

console.log("\nSalary After Bonus");
console.log("----------------");

for(let employee of employees){
    console.log(employee.name + " : " + (employee.salary + 5000));
}


// Total Salary

let totalSalary = 0;

for(let employee of employees){
    totalSalary += employee.salary;
}

console.log("\nTotal Salary : " + totalSalary);

// Salary Above 40000

console.log("\nSalary Above 40000");
console.log("----------------");

for(let employee of employees){
    if(employee.salary > 40000){
        console.log(employee.name);
    }
}

// Task 3 : Shopping Cart

let products = [

    {
        name : "Laptop",
        price : 50000
    },

    {
        name : "Mouse",
        price : 500
    },

    {
        name : "Keyboard",
        price : 1500
    }

];

console.log("\nTask 3 : Shopping Cart");
console.log("----------------");

// Product Names

console.log("Products");
console.log("----------------");

for(let product of products){
    console.log(product.name);
}

// Total Bill

let totalBill = 0;

for(let product of products){
    totalBill += product.price;
}

console.log("\nTotal Bill : ₹" + totalBill);

// Search Product

console.log("\nSearch Product");
console.log("----------------");

let productFound = false;

for(let product of products){
    if(product.name === "Mouse"){
        console.log("Product Found");
        console.log(product);

        productFound = true;
    }
}

if(productFound === false){
    console.log("Product Not Found");
}

// Apply Discount

let finalBill = totalBill - (totalBill * 10 / 100);

console.log("\nFinal Bill After 10% Discount : ₹" + finalBill);


// Task 4 : Bank Account

let account = { name : "Naveen", balance : 50000 };

console.log("\nTask 4 : Bank Account");
console.log("----------------");

// Deposit
account.balance += 10000;

// Withdraw
account.balance -= 5000;

// Current Balance
console.log("Current Balance : " + account.balance);

// Balance Check
if(account.balance < 20000){
    console.log("Balance Below 20000");
}
else{
    console.log("Balance Sufficient");
}

// Account Details
console.log("\nAccount Details");
console.log("----------------");

console.log(account);


// Task 5 : Company Login

let username = "admin";
let password = "12345";
let enteredUsername = prompt("Enter Username");
let enteredPassword = prompt("Enter Password");

if(enteredUsername === username && enteredPassword === password){
    alert("Welcome");
}
else{
    alert("Invalid Username or Password");
}


// Task 6 : Traffic Signal

console.log("\nTask 6 : Traffic Signal");
console.log("----------------");

let signal = prompt("Enter Signal Color");

switch(signal.toLowerCase()){

    case "red": console.log("Stop"); break;

    case "yellow": console.log("Ready"); break;

    case "green": console.log("Go"); break;

    default: console.log("Invalid Signal");
}


// Task 7 : ATM Machine

let balance = 50000;
let choice = Number(prompt(
`
1. Balance
2. Deposit
3. Withdraw
4. Exit
`
));

console.log("\nTask 7 : ATM Machine");
console.log("----------------");

switch(choice){

    case 1: console.log("Current Balance : " + balance); break;

    case 2: let deposit = Number(prompt("Enter Deposit Amount"));
            balance += deposit; console.log("Updated Balance : " + balance); break;

    case 3: let withdraw = Number(prompt("Enter Withdrawal Amount"));

        if(withdraw <= balance){
            balance -= withdraw;
            console.log("Withdrawal Successful");
            console.log("Remaining Balance : " + balance);
        }
        else{
            console.log("Insufficient Balance");
        }
        break;

    case 4: console.log("Thank You"); break;

    default: console.log("Invalid Choice");
}


// Task 8 : Cricket Score

let score = [ 10, 25, 40, 60, 80, 100 ];
let highest = score[0];
let lowest = score[0];
let total = 0;

for(let runs of score){
    if(runs > highest){
        highest = runs;
    }

    if(runs < lowest){
        lowest = runs;
    }

    total += runs;
}

let average = total / score.length;

console.log("\nTask 8 : Cricket Score");
console.log("----------------");

console.log("Highest Score : " + highest);
console.log("Lowest Score : " + lowest);
console.log("Total Score : " + total);
console.log("Average Score : " + average);


// Task 9 : Movie Ticket Booking

let age = Number(prompt("Enter Your Age"));
let confirmBooking = confirm("Do You Want To Book The Ticket?");

if(confirmBooking){
    if(age >= 18){
        alert("Movie Ticket Booked Successfully");
    }
    else{
        alert("Not Allowed");
    }
}
else{
    alert("Booking Cancelled");
}


// Task 10 : Hospital Appointment

let token = Number(prompt(
`
1. Doctor A
2. Doctor B
3. Doctor C
`
));

console.log("\nTask 10 : Hospital Appointment");
console.log("----------------");

switch(token){

    case 1: console.log("Appointment Booked With Doctor A"); break;

    case 2: console.log("Appointment Booked With Doctor B"); break;

    case 3: console.log("Appointment Booked With Doctor C"); break;

    default: console.log("Invalid Token");
}


// Task 11 : Array Method Practice

let fruits = [ "Apple", "Orange", "Banana" ];

console.log("\nTask 11 : Array Method Practice");
console.log("----------------");

console.log("Original Array");
console.log(fruits);


// push()

fruits.push("Mango");

console.log("\nAfter push()");
console.log(fruits);

// pop()

fruits.pop();

console.log("\nAfter pop()");
console.log(fruits);


// shift()

fruits.shift();

console.log("\nAfter shift()");
console.log(fruits);


// unshift()

fruits.unshift("Grapes");

console.log("\nAfter unshift()");
console.log(fruits);


// splice()

fruits.splice(1, 1, "Pineapple");

console.log("\nAfter splice()");
console.log(fruits);


// slice()

let newFruits = fruits.slice(0, 2);

console.log("\nAfter slice()");
console.log(newFruits);


// Task 12 : Higher Order Methods

let employees1 = [

    {
        name : "A",
        salary : 20000
    },

    {
        name : "B",
        salary : 35000
    },

    {
        name : "C",
        salary : 50000
    },

    {
        name : "D",
        salary : 70000
    }

];

// map()

let updatedSalary = employees1.map(function(employee){
    return {
        name : employee.name,
        salary : employee.salary + 5000
    };
});

console.log("\nTask 12 : Higher Order Methods");
console.log("----------------");

console.log("Salary After Bonus");
console.log(updatedSalary);

// filter()

let filteredEmployees = employees1.filter(function(employee){
    return employee.salary > 30000;
});

console.log("\nSalary Greater Than 30000");
console.log(filteredEmployees);

// find()

let employee = employees1.find(function(employee){
    return employee.salary === 50000;
});

console.log("\nEmployee With Salary 50000");
console.log(employee);

// reduce()

let totalSalary1 = employees1.reduce(function(total, employee){
    return total + employee.salary;
}, 0);

console.log("\nTotal Salary");
console.log(totalSalary1);

// some()

let result = employees1.some(function(employee){
    return employee.salary > 60000;
});

console.log("\nAny Employee Salary Greater Than 60000");
console.log(result);

// every()

let check = employees1.every(function(employee){
    return employee.salary > 15000;
});

console.log("\nEvery Employee Salary Greater Than 15000");
console.log(check);

// Task 13 : String Practice

let company = " Stackly IT ";

console.log("\nTask 13 : String Practice");
console.log("----------------");

console.log("Original String");
console.log("----------------");
console.log(company);

console.log("\nUppercase");
console.log("----------------");
console.log(company.toUpperCase());

console.log("\nLowercase");
console.log("----------------");
console.log(company.toLowerCase());

console.log("\nTrim");
console.log("----------------");
console.log(company.trim());

console.log("\nReplace");
console.log("----------------");
console.log(company.replace("IT", "Software"));

console.log("\nIncludes");
console.log("----------------");
console.log(company.includes("Stackly"));

console.log("\nSplit");
console.log("----------------");
console.log(company.trim().split(" "));


// Task 14 : Digital Clock

console.log("\nTask 14 : Digital Clock");
console.log("----------------");

console.log("Digital Clock Started");

let count = 0;

let clock = setInterval(function (){
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
    count++;

    if(count === 10){
        clearInterval(clock);
        console.log("----------------------");
        console.log("Digital Clock Stopped");
    }
}, 1000);


// Task 15 : Fake Store API

console.log("\nTask 15 : Fake Store API");
console.log("----------------");

fetch("https://fakestoreapi.com/products").then(function(response){
    return response.json();
})

.then(function(products){
    console.log("All Product Titles");
    console.log("-----------------------");

    products.forEach(function(product){
        console.log("=>", product.title);
    });

    console.log("\nOnly Prices");
    console.log("-----------------------");

    products.forEach(function(product){
        console.log(product.price);
    });


    console.log("\nProducts Costing More Than 100");
    console.log("-----------------------");

    let costlyProducts = products.filter(function(product){
        return product.price > 100;
    });

    costlyProducts.forEach(function(product){
        console.log("=>", product.title + " - ₹" + product.price);
    });


    console.log("\nTotal Products");
    console.log("-----------------------");

    console.log(products.length);

    console.log("\nCategory Names");
    console.log("-----------------------");

    let categories = [];

    products.forEach(function(product){
        if(!categories.includes(product.category)){
            categories.push(product.category);
        }
    });

    categories.forEach(function(category){
        console.log(category);
    });

})

.catch(function(error){
    console.log("Error :", error);
});


