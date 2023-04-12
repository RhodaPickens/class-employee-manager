
const Employee = require('./employee');

// new class of manager, adding employees property
class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee) {
      this.employees.push(employee);
    }

    // calculate manager bonus: return salary of manager plus all employees under them * multiplier
    calculateBonus(multiplier) {
      return (this.salary + this._totalSubSalary()) * multiplier;
    }

    // calculate sum of all employees
    _totalSubSalary() {
      let sum = 0;

      // loop through array of employees
      for (let employee of this.employees) {
          if (employee instanceof Manager) {
            sum += employee.salary;
            sum += employee._totalSubSalary();            // recursive case
          } else if (employee instanceof Employee) {     // base case
            sum += employee.salary;
          }
      }
      return sum;
    }
}


try {
  module.exports = Manager;
} catch {
  module.exports = null;
}
