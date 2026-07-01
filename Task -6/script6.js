// Task 1 : Find the Highest Salary

let employees = [

    {
        name : "Naveen",
        id : 101,
        salary : 30000
    },

    {
        name : "John",
        id : 102,
        salary : 60000
    },

    {
        name : "Arun",
        id : 103,
        salary : 45000
    }

];

let highestSalary = employees[0].salary;
let employeeName = employees[0].name;

for(let employee of employees){
    if(employee.salary > highestSalary){
        highestSalary = employee.salary;
        employeeName = employee.name;
    }
}

console.log("\nTask 1 : Find the Highest Salary");
console.log("----------------");

console.log("Highest Salary : " + highestSalary);
console.log("Employee Name : " + employeeName);


// Task 2 : Find Employee by ID

let searchId = 103;
let found = false;

console.log("\nTask 2 : Find Employee by ID");
console.log("----------------");

for(let employee of employees){
    if(employee.id === searchId){
        console.log("Employee Found");
        console.log("----------------");
        console.log("Name : " + employee.name);
        console.log("Salary : " + employee.salary);

        found = true;
    }
}

if(found === false){
    console.log("Employee Not Found");
}


// Task 3 : Calculate Salary with Bonus

let bonus = 5000;

console.log("\nTask 3 : Calculate Salary with Bonus");
console.log("----------------");

console.log("Salary After Bonus");
console.log("----------------");

for(let employee of employees){
    let totalSalary = employee.salary + bonus;
    console.log(employee.name + " : " + totalSalary);
}


// Task 4 : Experience Check

let employeeExperience = [

    {
        name : "Naveen",
        experience : 2
    },

    {
        name : "John",
        experience : 7
    },

    {
        name : "Arun",
        experience : 5
    }

];

console.log("\nTask 4 : Experience Check");
console.log("----------------");

console.log("Experience Report");
console.log("----------------");

for(let employee of employeeExperience){
    if(employee.experience >= 5){
        console.log(employee.name + " - Senior Employee");
    }

    else{
        console.log(employee.name + " - Junior Employee");
    }
}


// Task 5 : Display Only Employee Names

console.log("\nTask 5 : Display Only Employee Names");
console.log("----------------");

console.log("Employee Names");
console.log("----------------");

for(let employee of employees){
    console.log(employee.name);
}


// Task 6 : Display Employee IDs

console.log("\nTask 6 : Display Employee IDs");
console.log("----------------");

console.log("Employee IDs");
console.log("----------------");

for(let employee of employees){
    console.log(employee.id);
}


// Task 7 : Find Total Salary

let totalSalary = 0;

for(let employee of employees){
    totalSalary = totalSalary + employee.salary;
}

console.log("\nTask 7 : Find Total Salary");
console.log("----------------");

console.log("Total Salary : " + totalSalary);


// Task 8 : Employees Earning More Than 40,000

console.log("\nTask 8 : Employees Earning More Than 40,000");
console.log("----------------");

console.log("Employees Earning More Than 40000");
console.log("----------------------------------");

for(let employee of employees){
    if(employee.salary > 40000){
        console.log(employee.name);
    }
}



// Task 9 : Increase Salary

console.log("\nTask 9 : Increase Salary");
console.log("----------------");

console.log("Updated Salary");
console.log("----------------");

for(let employee of employees){
    employee.salary = employee.salary + 5000;
    console.log(employee.name + " : " + employee.salary);
}


// Task 10 : Employee Report

console.log("\nTask 10 : Employee Report");
console.log("----------------");

console.log("Employee Report");
console.log("----------------");

for(let employee of employees){
    console.log(`Employee Name : ${employee.name}`);
    console.log(`Employee ID   : ${employee.id}`);
    console.log(`Salary        : ${employee.salary}`);
    console.log("");
}


// Challenge Task : Employee Report System

console.log("\nChallenge Task : Employee Report System");
console.log("----------------");

let employees1 = [

    {
        name : "Naveen",
        id : 101,
        salary : 30000
    },

    {
        name : "John",
        id : 102,
        salary : 60000
    },

    {
        name : "Arun",
        id : 103,
        salary : 45000
    }

];

// 1. Total Number of Employees

console.log("1. Total Employees");
console.log("----------------");

console.log("Total Employees : " + employees1.length);


// 2. Highest Salary

let highestSalary1 = employees1[0].salary;
let highestEmployee = employees1[0];

for(let employee of employees1){
    if(employee.salary > highestSalary1){
        highestSalary1 = employee.salary;
        highestEmployee = employee;
    }
}

console.log("\n2. Highest Salary");
console.log("----------------");

console.log("Highest Salary : " + highestSalary1);
console.log("Employee Name : " + highestEmployee.name);


// 3. Lowest salary.

let lowestSalary = employees1[0].salary;
let lowestEmployee = employees1[0];

for(let employee of employees1){
    if(employee.salary < lowestSalary){
        lowestSalary = employee.salary;
        lowestEmployee = employee;
    }
}

console.log("\n3. Lowest Salary");
console.log("----------------");

console.log("Lowest Salary : " + lowestSalary);
console.log("Employee Name : " + lowestEmployee.name);


// 4. Total Salary

let totalSalary1 = 0;

for(let employee of employees1){
    totalSalary1 = totalSalary1 + employee.salary;
}

console.log("\n4. Total Salary");
console.log("----------------");

console.log("Total Salary : " + totalSalary1);


// 5. Employee Earning Highest Salary

for(let employee of employees1){
    if(employee.salary > highestSalary1){
        highestSalary1 = employee.salary;
        highestEmployee = employee;
    }
}

console.log("\n5. Employee Earning Highest Salary");
console.log("----------------");

console.log("Highest Salary : " + highestSalary1);
console.log("Employee Name : " + highestEmployee.name);

// 6. Employee Earning the Lowest Salary

for(let employee of employees1){
    if(employee.salary < lowestSalary){
        lowestSalary = employee.salary;
        lowestEmployee = employee;
    }
}

console.log("\n6. Employee earning the lowest salary.");
console.log("----------------");

console.log("Lowest Salary : " + lowestSalary);
console.log("Employee Name : " + lowestEmployee.name);

// 7. Salary Greater Than 40000

console.log("\n5. Employees Earning More Than 40000");
console.log("-------------------------------------");

for(let employee of employees1){
    if(employee.salary > 40000){
        console.log(employee.name);
    }
}


// 8. Search Employee By ID

let searchId1 = 102;
let found1 = false;

console.log("\n6. Search Employee");
console.log("----------------");

for(let employee of employees1){
    if(employee.id === searchId1){
        console.log("Employee Found");
        console.log("Name : " + employee.name);
        console.log("Salary : " + employee.salary);

        found1 = true;
    }
}

if(found1 === false){
    console.log("Employee Not Found");
}


// 9. Add 5000 Bonus

console.log("\n7. Salary After Bonus");
console.log("----------------");

for(let employee of employees1){
    let updatedSalary = employee.salary + 5000;
    console.log(employee.name + " : " + updatedSalary);
}


// 10. Employee Report

console.log("\n8. Employee Report");
console.log("----------------");

for(let employee of employees1){
    console.log(`Employee Name : ${employee.name}`);
    console.log(`Employee ID   : ${employee.id}`);
    console.log(`Salary        : ${employee.salary}`);
    console.log("");
}