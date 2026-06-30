// Task 1 : Employee Salary

function yearlySalary(monthlySalary){
    return monthlySalary * 12;
}

console.log("\nTask 1 : Employee Salary");
console.log("----------------");

let salary = yearlySalary(45000);
console.log("Yearly Salary :" + salary);


// Task 2 : Student Pass or Fail

function studentResult(marks){
    if(marks >= 35){
        return "Pass";
    }else{
        return "Fail";
    }
}

console.log("\nTask 2 : Student Pass or Fail");
console.log("----------------");
console.log("Result : " + studentResult(72));


// Task 3 : Food Bill

function totalBill(price, quantity){
    return price * quantity;
}

console.log("\nTask 3 : Food Bill");
console.log("----------------");

let bill = totalBill(180, 3);
console.log("Total Bill :" + bill);


// Task 4 : Welcome Employee

function welcomeEmployee(name, department){
    console.log("Welcome " + name);
    console.log("Department : " + department);
}

console.log("\nTask 4 : Welcome Employee");
console.log("----------------");

welcomeEmployee("Naveen", "Development");


// Task 5 : Shopping Discount

function finalAmount(price, discount){
    return price - discount;
}

let amount = finalAmount(5000, 500);

console.log("\nTask 5 : Shopping Discount");
console.log("----------------");

console.log("Final Amount :" + amount);


// Task 6 : Company Login

function loadingDashboard(){
    console.log("Loading Dashboard...");
}

function login(callback){
    console.log("Login Successful");
    callback();
}

console.log("\nTask 6 : Company Login");
console.log("----------------");

login(loadingDashboard);


// Task 7 : Food Delivery

function preparingFood(nextStep){
    console.log("Preparing Food");
    nextStep();
}

function outForDelivery(nextStep){
    console.log("Out for Delivery");
    nextStep();
}

function delivered(){
    console.log("Delivered");
}

function orderReceived(callback){
    console.log("Order Received");

    callback(function(){
        outForDelivery(delivered);
    });
}

console.log("\nTask 7 : Food Delivery");
console.log("----------------");

orderReceived(preparingFood);


// Task 8 : Lucky Draw

function* luckyDraw(){

    yield "10% Coupon";
    yield "20% Coupon";
    yield "50% Coupon";
    yield "Better Luck Next Time";
}

console.log("\nTask 8 : Lucky Draw");
console.log("----------------");

let coupon = luckyDraw();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// Task 9 : Employee Bonus

function bonus(salary){
    return function(extraBonus){
        console.log("Total Salary : " + (salary + extraBonus));
    };
}

console.log("\nTask 9 : Employee Bonus");
console.log("----------------");

bonus(50000)(5000);


// Task 10 : Merge Employee Details

let employeePersonal = {
    name : "Naveen",
    age : 24
};

let employeeOffice = {
    department : "Development",
    salary : 50000
};

console.log("\nTask 10 : Merge Employee Details");
console.log("----------------");

let employee = {...employeePersonal, ...employeeOffice};
console.log(employee);


// Task 11 : Shopping Cart

let cart1 = [
    "Mobile",
    "Laptop"
];

let cart2 = [
    "Headphone",
    "Smart Watch"
];

console.log("\nTask 11 : Shopping Cart");
console.log("----------------");

let shoppingCart = [...cart1, ...cart2];

console.log("Shopping Cart");
console.log("----------------");
console.log(shoppingCart);


// Task 12 : Student Marks

function student(name, ...marks){
    let total = 0;
    for(let mark of marks){
        total += mark;
    }

    let average = total / marks.length;

    console.log("Student :", name);
    console.log("Total Marks :", total);
    console.log("Average :", average);
}

console.log("\nTask 12 : Student Marks");
console.log("----------------");

student("Naveen", 90, 85, 88, 95);


// Task 13 : Product Details

let product = {
    name : "Laptop",
    price : 65000,
    brand : "Dell",
    stock : 20
};

let {name, price} = product;

console.log("\nTask 13 : Product Details");
console.log("----------------");

console.log("Product Name :", name);
console.log("Product Price :", price);


// Task 14 : Customer Details

let customer = [
    101,
    "Naveen",
    "Chennai",
    9876543210
];

let [id, name1, city, phoneNum] = customer;

console.log("\nTask 14 : Customer Details");
console.log("----------------");

console.log("Customer ID :", id);
console.log("Customer Name :", name1);
console.log("Customer City :", city);


// Task 15 : Add Product

let cart = [
    "Mobile",
    "Laptop"
];

cart.push("Headphone");

console.log("\nTask 15 : Add Product");
console.log("----------------");

console.log("Updated Cart");
console.log(cart);


// Task 16 : Remove Last Product

let cart3 = [
    "Mobile",
    "Laptop",
    "Headphone"
];

console.log("\nTask 16 : Remove Last Product");
console.log("----------------");

console.log("Before Removing");
for(let item of cart){
    console.log(item);
}

cart.pop();

console.log("\nAfter Removing");

for(let item of cart){
    console.log(item);
}


// Task 17 : Replace Employee

let employees1 = [
    "Rahul",
    "Arun",
    "John",
    "David"
];

console.log("\nTask 17 : Replace Employee");
console.log("----------------");

console.log("Before Replace");
console.log(employees1);

employees1.splice(2, 1, "Naveen");

console.log("\nAfter Replace");
console.log(employees1);


// Task 18 : Search Product

let products = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "Laptop"
];

console.log("\nTask 18 : Search Product");
console.log("----------------");

console.log("Available Products");
console.log(products);

let available = products.includes("Laptop");

console.log("\nLaptop Available : " + available);


// Task 19 : Employee Ranking

let salaries = [
    25000,
    45000,
    30000,
    70000
];

console.log("\nTask 19 : Employee Ranking");
console.log("----------------");

console.log("Before Sorting");
console.log(salaries);

salaries.sort(function(a, b){
    return a - b;
});

console.log("\nAfter Sorting");
console.log(salaries);


// Task 20 : Reverse Chat Messages

let messages = [
    "Hi",
    "Hello",
    "How are you?",
    "Good Morning"
];

console.log("\nTask 20 : Reverse Chat Messages");
console.log("----------------");

console.log("Original Messages");
console.log(messages);

messages.reverse();

console.log("\nLatest Messages First");
console.log(messages);



// Mini Project : Employee Management System

console.log("\nMini Project : Employee Management System");
console.log("----------------");

let employees = [

    {
        id : 101,
        name : "Naveen",
        department : "Development",
        salary : 50000
    },

    {
        id : 102,
        name : "Surya",
        department : "Testing",
        salary : 35000
    },

    {
        id : 103,
        name : "Megas",
        department : "HR",
        salary : 45000
    }

];


// View Employees

function viewEmployees(){
    console.log("\nEmployee List");
    console.log("----------------");

    for(let employee of employees){
        console.log(employee);
    }
}


// Add Employee

function addEmployee(employee){
    employees.push(employee);
    console.log("\nEmployee Added Successfully");
}


// Search Employee By ID

function searchEmployee(id){
    let found = false;

    for(let employee of employees){
        if(employee.id === id){
            console.log("\nEmployee Found");
            console.log(employee);

            found = true;

            break;
        }
    }

    if(found === false){
        console.log("Employee Not Found");
    }
}


// Calculate Salary + Bonus

function calculateBonus(){
    console.log("\nSalary Details");
    console.log("----------------");

    for(let employee of employees){

        let bonus = employee.salary * 0.10;
        let totalSalary = employee.salary + bonus;

        console.log("Name : " + employee.name);
        console.log("Salary : " + employee.salary);
        console.log("Bonus : " + bonus);
        console.log("Total Salary : " + totalSalary);
        console.log("----------------");
    }
}


// Remove Employee

function removeEmployee(id){
    for(let index = 0; index < employees.length; index++){
        if(employees[index].id === id){
            employees.splice(index,1);
            console.log("Employee Removed Successfully");
            break;
        }
    }
}


// Sort Employees By Salary

function sortEmployees(){
    employees.sort(function(a,b){
        return a.salary - b.salary;
    });

    console.log("\nEmployees Sorted By Salary");
    console.log("----------------");

    for(let employee of employees){
        console.log(employee);
    }
}


// Find Employee By Name

function findEmployee(name){
    let found = false;

    for(let employee of employees){
        if(employee.name === name){
            console.log("\nEmployee Found");
            console.log(employee);

            found = true;

            break;
        }
    }

    if(found === false){
        console.log("Employee Not Found");
    }
}


// Display Employee Using Destructuring

function employeeDetails(employee){
    let {id,name,department,salary} = employee;

    console.log("\nEmployee Details");
    console.log("----------------");
    console.log("ID : " + id);
    console.log("Name : " + name);
    console.log("Department : " + department);
    console.log("Salary : " + salary);
}


// Function Calls

viewEmployees();

addEmployee({

    id : 104,
    name : "Eswar",
    department : "Frontend",
    salary : 60000

});


viewEmployees();

searchEmployee(104);

calculateBonus();

removeEmployee(102);

viewEmployees();

sortEmployees();

findEmployee("Megas");

employeeDetails(employees[0]);
