console.log("Connection")

const projects = []
const toDos = []

function populateContent(projects){
    projects.forEach(project => {
        project.forEach(toDo => populateToDo(toDo))
    });
}

function populateToDo(toDo){
    console.log(`Title: ${toDo.title}`);
    console.log(`Description: ${toDo.description}`);
    console.log(`Complete: ${toDo.complete? "Yes" : "No"}`);
    console.log(`Due Date: ${toDo.dueDate}`);
    console.log(`Priority: ${toDo.priority}`);
    console.log(`Notes: ${toDo.notes}`)
}

function ToDo(title, description, dueDate, priority, notes){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.complete = false,
        this.priority = priority,
        this.notes = notes

}

// function Project(){
//     this.createToDo = createToDo()    
// }


//test content
// const toDoTest = {
//     title: "Figure shit out",
//     description: "This should be able to be as long as it needs to be. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,
//     complete: false,
//     dueDate: "10/26/2025",
//     priority: 5,
//     notes: "This is a test ToDo.",
// }

const testProject = [
//     toDoTest,
]

//test scripts
testProject.push(new ToDo("first", "second", "third", 4, "fifth"))
projects.push(testProject)
populateContent(projects)