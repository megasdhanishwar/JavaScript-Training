// Final Mini Project : Employee Payroll System

let employees = [

    {
        id : 101,
        name : "Naveen",
        department : "Development",
        salary : 30000
    },

    {
        id : 102,
        name : "John",
        department : "Testing",
        salary : 60000
    },

    {
        id : 103,
        name : "Arun",
        department : "UI/UX",
        salary : 45000
    },

    {
        id : 104,
        name : "Eswar",
        department : "HR",
        salary : 35000
    }

];


// 1. View Employees

console.log("\n1. View Employees");
console.log("----------------------------");

employees.forEach(function(employee){
    console.log(employee);
});


// 2. Search Employee by ID

console.log("\n2. Search Employee by ID");
console.log("----------------------------");

let searchId = 103;

let employee = employees.find(function(emp){
    return emp.id === searchId;
});

if(employee){
    console.log("Employee Found");
    console.log(employee);
}
else{
    console.log("Employee Not Found");
}


// 3. Add Bonus

console.log("\n3. Salary After Bonus");
console.log("----------------------------");

let bonus = 5000;

let updatedSalary = employees.map(function(emp){
    return{

        id : emp.id,
        name : emp.name,
        department : emp.department,
        salary : emp.salary + bonus

    };
});

updatedSalary.forEach(function(emp){
    console.log(emp.name + " : ₹" + emp.salary);
});


// 4. Highest Salary

console.log("\n4. Highest Salary");
console.log("----------------------------");

let highestSalary = employees.reduce(function(max, emp){
    return emp.salary > max.salary ? emp : max;
});

console.log("Employee :", highestSalary.name);
console.log("Salary   : ₹" + highestSalary.salary);


// 5. Lowest Salary

console.log("\n5. Lowest Salary");
console.log("----------------------------");

let lowestSalary = employees.reduce(function(min, emp){
    return emp.salary < min.salary ? emp : min;
});

console.log("Employee :", lowestSalary.name);
console.log("Salary   : ₹" + lowestSalary.salary);


// 6. Total Salary

console.log("\n6. Total Salary");
console.log("----------------------------");

let totalSalary = employees.reduce(function(total, emp){
    return total + emp.salary;
},0);

console.log("Total Salary : ₹" + totalSalary);


// 7. Salary Above ₹40000

console.log("\n7. Salary Above ₹40000");
console.log("----------------------------");

let highSalaryEmployees = employees.filter(function(emp){
    return emp.salary > 40000;

});

highSalaryEmployees.forEach(function(emp){
    console.log(emp.name + " : ₹" + emp.salary);
});


// 8. Employee Report

console.log("\n8. Employee Report");
console.log("----------------------------");

employees.forEach(function(emp){

    console.log("Employee ID   :", emp.id);
    console.log("Employee Name   :", emp.name);
    console.log("Employee Department   :", emp.department);
    console.log("Employee Salary   :", emp.salary);
    console.log("----------------------------");
});


// 9. Current Date & Time

console.log("\n9. Current Date & Time");
console.log("----------------------------");

let currentDate = new Date();
console.log(currentDate.toLocaleString());


// 10. Fetch Employee Data

console.log("\n10. Fetch Employee Data");
console.log("----------------------------");

fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
    return response.json();
})

.then(function(data){
    data.forEach(function(employee){
        console.log(employee.id + " - " + employee.name);
    });
})

.catch(function(error){
    console.log("Error :", error);
});


// 11. Exit

console.log("\n11. Exit");
console.log("----------------------------");

console.log("Employee Payroll System Closed Successfully.");