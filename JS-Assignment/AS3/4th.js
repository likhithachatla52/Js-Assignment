// Filter by Nested Property
// // Question: Retrieve all tasks assigned to the employee Alice.
const projects = 
[
    { 
        project: 'Website', 
        tasks: [ 
            { 
                task: 'Design', 
                assignedTo: 'Alice' 
            }, 
            { 
                task: 'Code', 
                assignedTo: 'Bob' 
            }, 
        ], 
    }, 
    { 
        project: 'App', 
        tasks: [ 
            { 
                task: 'Develop', 
                assignedTo: 'Alice' 
            }, 
            { 
                task: 'Test', 
                assignedTo: 'Charlie' 
            }, 
        ], 
    }, 
];

const aliceTasks = projects.flatMap(project => 
    project.tasks.filter(task => task.assignedTo === "Alice")
);

console.log(aliceTasks);