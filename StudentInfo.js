//const variable that needs no changing, preferable to have more of them
const dateOfBirth = "12/12/1980"; //instead of age, we use date of birth and can deduct age from it
//define functions similar as in index.js
const getStudentName = () => {
  return ("Ahmad");
};
const getCampusName = () => {
  return ("Docklands");
};
//exporting functions and variables outside module,
//similar to declaring methods as public in java
exports.getName = getStudentName;
exports.location = getCampusName;
exports.dob = dateOfBirth;
//How to export function with parameters
exports.Studentgrade = (marks) => {
  if (marks > 50 && marks < 70) return ("B grade");
  else return ("A grade");
};
