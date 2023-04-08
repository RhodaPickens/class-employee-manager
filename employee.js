// create Employee class with manager argument defaulting to null
class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
    }
}

// test snippet
// const leo = new Employee('Leonardo', 90000, 'Ninja', 'Harry');
// console.log(leo)

// Export Employee class
try {
    module.exports = Employee;
} catch {
    module.exports = null;
}