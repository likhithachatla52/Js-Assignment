// Update a Nested Property
// Question: Update the salary of the employee Bob to 75000.\

const employees = [ 
    { 
        id: 1, 
        name: 'Alice', 
        details: { 
            salary: 50000, 
            role: 'Developer',
        }, 
    }, 
    { 
        id: 2, 
        name: 'Bob', 
        details: { 
            salary: 60000, 
            role: 'Manager', 
        }, 
    }, 
]; 

const updatedEmployees = employees.map(employee => 
    employee.name === "Bob" 
        ? { 
            ...employee, 
            details: { 
                ...employee.details, 
                salary: 75000 
            } 
        } 
        : employee
);

console.log(updatedEmployees);