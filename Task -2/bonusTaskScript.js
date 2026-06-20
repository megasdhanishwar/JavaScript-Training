// STUDENT REPORT CARD SYSTEM

console.log("==============================");
console.log("      STUDENT REPORT CARD");
console.log("==============================");


// Student Object

let student = {
    studentName : "Megasdhanishwar S",
    studentId : "STU101",
    department : "Computer Science"
};


// Subjects

let subjects = [
    "Tamil",
    "English",
    "Maths",
    "Science",
    "Social"
];


// Marks

let tamil = 90;
let english = 85;
let maths = 95;
let science = 88;
let social = 92;


// Total and Average

let totalMarks = tamil + english + maths + science + social;

let average = totalMarks / 5;


// Grade

let grade =
    average >= 90 ? "A+" :
    average >= 80 ? "A" :
    average >= 70 ? "B" :
    average >= 60 ? "C" :
    "Fail";


// Result

let result = average >= 35 ? "Pass" : "Fail";


// Student Details

console.log("\nStudent Details");
console.log("----------------");
console.log(`Name       : ${student.studentName}`);
console.log(`Student ID : ${student.studentId}`);
console.log(`Department : ${student.department}`);


// Marks

console.log("\nSubject Marks");
console.log("----------------");
console.log(`${subjects[0]} : ${tamil}`);
console.log(`${subjects[1]} : ${english}`);
console.log(`${subjects[2]} : ${maths}`);
console.log(`${subjects[3]} : ${science}`);
console.log(`${subjects[4]} : ${social}`);


// Report

console.log("\nReport Summary");
console.log("----------------");
console.log(`Total Marks : ${totalMarks}`);
console.log(`Average     : ${average}`);
console.log(`Grade       : ${grade}`);
console.log(`Result      : ${result}`);


// User Interaction

let studentName = prompt("Enter Student Name");

let continueCheck = confirm("Do you want to view your report card?");

let message = continueCheck ? `Welcome ${studentName}` : "Thank You";

alert(message);


// Final Output

console.log("\n==============================");
console.log("        FINAL REPORT");
console.log("==============================");
console.log(`Student Name : ${student.studentName}`);
console.log(`Total Marks  : ${totalMarks}`);
console.log(`Average      : ${average}`);
console.log(`Grade        : ${grade}`);
console.log(`Result       : ${result}`);
console.log("==============================");