// create Employee class with manager argument defaulting to null
class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if(this.manager) {
            this.manager.addEmployee(this);
        }
    }

    // calculate bonus by passing in a multiplier to multiply by the employee's salary
    calculateBonus(multiplier) {
        return this.salary * multiplier;
    }
}
// multiply salary (this.salary) by multiplier passed in
// return result




// Export Employee class
try {
    module.exports = Employee;
} catch {
    module.exports = null;
}
