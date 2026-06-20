// Task 1 : Employee Registration

let employeeName = "Megasdhanishwar S";
const employeeId = "EMP101";
let department = "Development";
let salary = 50000;
let isPermanent = true;

console.log("Task 1: Employee Details");
console.log("----------------");
console.log("Name :", employeeName);
console.log("ID :", employeeId);
console.log("Department :", department);
console.log("Salary     :", salary);
console.log("Permanent  :", isPermanent);


// Task 2 : Employee Skills

let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Node.js"
];

console.log("\n Task 2: Employee Skills");
console.log("----------------");
console.log("First Skill :", skills[0]);
console.log("Third Skill :", skills[2]);
console.log("Last Skill :", skills[skills.length - 1]);
console.log("Total Skills :", skills.length);


// Task 3 : Company Object

let company = {
    companyName: "Stackly IT",
    location: "Salem",
    employees: 150,
    technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ]
};

console.log("\n Task 3: Company Details");
console.log("----------------");
console.log("Company Name :", company.companyName);
console.log("Location :", company.location);
console.log("Second Technology :", company.technologies[1]);
console.log("Total Technologies :", company.technologies.length);


// Task 4 : Salary Calculator

let basicSalary = 30000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("\n Task 4: Salary Calculation");
console.log("----------------");
console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Total Salary :", totalSalary);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);


// Task 5 : Attendance Checker

let attendance = 92;
let examStatus = attendance >= 75 ? "Eligible for Exam" : "Not Eligible";

console.log("\n Task 5: Attendance Status");
console.log("----------------");
console.log(examStatus);


// Task 6 : Login Verification

let username = "admin";
let password = "12345";

let loginVerification = username === "admin" && password === "12345" ? "Login Successful" : "Invalid Credentials";
console.log("\n Task 6 : Login Verification");
console.log("----------------");
console.log(loginVerification);


// Task 7 : Product Billing

let productName = "Laptop";
let productPrice = 45000;
let quantity = 2;
let totalBill = productPrice * quantity;

console.log("\n Task 7: Product Bill");
console.log("----------------");
console.log("Product :", productName);
console.log("Price :", productPrice);
console.log("Quantity :", quantity);
console.log("Total :", totalBill);


// Task 8 : Increment & Decrement

let visitors = 100;

console.log("\n Task 8: Increment & Decrement");
console.log("----------------");

// Pre Increment
console.log("Pre Increment:", ++visitors); // First increases to 101, then prints 101

// Post Increment
console.log("Post Increment:", visitors++); // Prints current value 101, then increases to 102
console.log("After Post Increment:", visitors); // Now value becomes 102

// Pre Decrement
console.log("Pre Decrement:", --visitors); // First decreases to 101, then prints 101

// Post Decrement
console.log("Post Decrement:", visitors--); // Prints current value 101, then decreases to 100
console.log("After Post Decrement:", visitors); // Now value becomes 100


// Task 9 : Comparison Checker

console.log("\n Task 9: Comparison Operators");
console.log("----------------");

console.log(10 == "10");      // true
console.log(10 === "10");     // false
console.log(20 != "20");      // false
console.log(20 !== "20");     // true
console.log(5 < 10);          // true
console.log(15 >= 20);        // false
console.log(100 <= 100);      // true


// Task 10 : User Interaction

let empName = prompt("Enter Employee Name");
let empAge = prompt("Enter Employee Age");
let joinCompany = confirm("Do you want to join our company?");

joinCompany === true ? alert(`Welcome ${empName}`) : alert("Thank You");



// =====================================
// Final Challenge
// Mini Employee Portal
// =====================================

let employee = {
    name: "Megasdhanishwar S",
    id: "EMP101",
    department: "Development",
    experience: 3,
    salary: 50000
};

let employeeSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Node.js"
];

let employeeBonus = 5000;
let employeeFinalSalary = employee.salary + employeeBonus;

let loginStatus = username === "admin" && password === "12345" ? "Success" : "Failed";

let attendanceStatus = attendance >= 75 ? "Eligible" : "Not Eligible";

console.log("\n==============================");
console.log("      EMPLOYEE PORTAL");
console.log("==============================");

console.log("Employee Name :", employee.name);
console.log("Employee ID :", employee.id);
console.log("Department :", employee.department);
console.log("Experience :", employee.experience, "Years");
console.log("Salary : ₹", employee.salary);
console.log("Bonus : ₹", employeeBonus);
console.log("Final Salary : ₹", employeeFinalSalary);
console.log("Skills :", employeeSkills);
console.log("Attendance :", attendance + "%");
console.log("Exam Status :", attendanceStatus);
console.log("Login Status :", loginStatus);
console.log("Company :", company.companyName);
console.log("Location :", company.location);
console.log("==============================");