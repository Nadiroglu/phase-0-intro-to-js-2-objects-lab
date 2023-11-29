
   const employee = {
    name : "Nail",
    streetAdress: "Bedford Ave"
   } 
   function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key]: value 
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
employee[key] = value;
return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  delete employee.name;
  return {
    ...employee,   
  }
}
function nondestryctivelydeleteFromEmployeeByKey(employee, key) {
  const modifiedEmployee = { ...employee };
  delete modifiedEmployee[key];
  return modifiedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
