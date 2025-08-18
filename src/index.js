console.log("Connection")

const projects = []
const content = document.getElementById("content")

function populateContent(projects){
    projects.forEach(project => {
        project.toDos.forEach(toDo => populateToDo(toDo))
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

function Project(projectName){
 
    this.projectName = projectName,
    this.complete = false,
    this.toDos = []
    this.createToDo = (title, description, dueDate, priority, notes)=>{
        this.toDos.push(new ToDo(title, description, dueDate, priority, notes))
    }

    this.createToDo = function(title, description, dueDate, priority, notes){
        this.toDos.push({
            title: title,
            description: description,
            dueDate: dueDate,
            complete: false,
            priority: priority,
            notes: notes
        })
    }


}

function ToDo(title, description, dueDate, priority, notes){
    this.title = title,
    this.description = description,
    this.dueDate = dueDate,
    this.complete = false,
    this.priority = priority,
    this.notes = notes
}

// test content

const testProject = new Project("Test Project")
testProject.createToDo(
    "Figure shit out", 
    "This should be able to be as long as it needs to be. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    "10/26/2025", 
    5, 
    "This is a test ToDo." )
testProject.createToDo(
    "Test a second TODO", 
    "This should be able to be as long as it needs to be. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    "4/10/2025", 
    1, 
    "This is another test ToDo." )

//test scripts
console.log(`Project Name: ${testProject.projectName}`)
projects.push(testProject)
populateContent(projects)