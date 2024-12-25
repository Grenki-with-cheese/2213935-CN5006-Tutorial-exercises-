function EmployeeInfo(EmpName, Salary, Penalty) {
  //function is exactly the same as in python, simply define a function name and put parameters in brackets
  //this function is meant to print or show in console log a message + 2 var (variables) name and Salary
  console.log("Welcome " + EmpName + " Your monthly salary is " + EmpSalary+"Your penalty is "+EmpPenalty);
} //we only need the code executed in the function, the variables can be anything you want as you'll substitute them later
console.log("This is my first program");

var EmpName = "John";
var EmpSalary = 5000;
var EmpPenalty = 90000;

EmployeeInfo(EmpName, EmpSalary);

const EmpSkills = (skills) => {
  console.log("Expert in " + skills);
};
//much of the same, we define a function and put all var we will use in brackets
EmpSkills("Java");
const studentModule = require('./StudentInfo');
const student = require('./Person');
console.log(studentModule.getName());
console.log(studentModule.location());
console.log(studentModule.dob);
console.log(studentModule.Studentgrade(60));

person1 = new student("Himanshu", 25, "himanshu@gmail.com")

console.log(person1.getPersonInfo());