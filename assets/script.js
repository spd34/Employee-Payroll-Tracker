// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
  const employeesArray = []
  let pikachu = true;
  while (pikachu){
    const getFirst = prompt ('Enter First Name')
    const getLast = prompt ('Enter Last Name')
    let getSalary = prompt ('Enter Salary')
  
    if (isNaN (getSalary)){
      getSalary = 0
    }
    const employee = {
      firstName : getFirst,
      lastName : getLast,
      salary : parseFloat(getSalary),
    }
    employeesArray.push(employee)
    pikachu = confirm('Do you want to add another employee?')
  }
  return employeesArray
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
const salArray = []
for (let i = 0; i < employeesArray.length; i++) {
  const pikachu = employeesArray[i].salary;
  salArray.push(pikachu)
}
let sum = 0
for(let i = 0; i < salArray.length; i++) {
  sum += salArray[i];
}
const avg = sum / salArray.length
console.log (`The average Employee salary is: ${avg}`)
return avg;
}
  // TODO: Calculate and display the average salary
  // get the total salary, declare the variable to 0 - make that variable a 'let'
  // use variable number of employee using employeeArray.length - make it a const
  // use for loop to over in employeesarray to calculate total salary
  // outside the fourloop calculate the average salary


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  if (employeesArray && employeesArray.length > 0) {
    let winner =
      employeesArray[Math.floor(Math.random() * employeesArray.length)];
    console.log(
      `Congratulations to ${winner.firstName} ${winner.lastName}, our random drawing winner`
    );
  } else {
    console.log(
      "Sorry, no winner today because you messed up and didn't enter any employees in the drawing"
    );
  }
};
  // TODO: Select and display a random employee
  // https://www.programiz.com/javascript/examples/get-random-item
  // https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
  // https://www.w3schools.com/js/js_random.asp



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

