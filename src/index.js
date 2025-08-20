import './styles.css'
console.log("Connection Established")

//TODO: figure out a way to collapse both Project and ToDo cards

const projects = []
const CONTENT = document.getElementById("content")

function createProjectCardList(projects){
    let projectCardArray = []
    projects.forEach(project => {
        let projectCard = createProjectCard(project)
        projectCardArray.push(projectCard)
    });
    return projectCardArray
}

function populateContent(projects){
    let cardList = createProjectCardList(projects)
    cardList.forEach(projectCard => {
        projectCard.setAttribute("class", "projectCard")
        CONTENT.appendChild(projectCard)
    })

}

function createProjectCard(project){
    //TODO: provide indicator for project.complete boolean
    let projectCard = document.createElement("div");
    let title = document.createElement("h2")
    title.textContent= `Project Name: ${project.projectName}`

    projectCard.appendChild(title)

    project.toDos.forEach(toDo =>{
        let toDoCard = createToDoCard(toDo)
        projectCard.appendChild(toDoCard);
    })

    return projectCard
}

function createToDoCard(toDo){
    let toDoCard = document.createElement("div")
    toDoCard.setAttribute("class", "toDoCard")

    Object.entries(toDo).forEach(
        entry => appendKeyValueToCard(toDoCard, entry)
    )

    return toDoCard
    //TODO: add buttons that EDIT and DELETE the ToDo card.
}

function appendKeyValueToCard(targetCard, [key, value]){
    let newDiv
    //TODO: ensure appropriate display for Dates
    //TODO: ensure appropriate display for "complete" boolean
    if (key === "title"){
        newDiv = document.createElement("h3")
    } else {
        newDiv = document.createElement("div")
    };
    newDiv.setAttribute("class", key);
    newDiv.textContent = `${value}`;
    targetCard.appendChild(newDiv)
}

class Project {
    constructor(projectName = "none"){
        this.projectName = projectName;
        this.complete = false;
        this.toDos = [];
    }
    createToDo(title, description, dueDate, priority, notes){
        this.toDos.push(new ToDo(
            title, 
            description, 
            dueDate, 
            priority, 
            notes
        ))
    }
}



class ToDo{
    constructor(title = "none", description = "none", dueDate = "none", priority = "none", notes = "none"){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
        this.priority = priority;
        this.notes = notes;
    }
}



// TEST CONTENT

let nextProject = new Project()
nextProject.createToDo()
nextProject.createToDo()

const testProject = new Project("Test Project")
testProject.createToDo(
    "Figure shit out", 
    "This should be able to be as long as it needs to be. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    "10/26/2025", 
    5, 
    "This is a test ToDo." 
)
testProject.createToDo(
    "Test a second TODO", 
    "This should be able to be as long as it needs to be. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    "4/10/2025", 
    1, 
    "This is another test ToDo." 
)

//TEST SCRIPTS
projects.push(testProject)

projects.push(nextProject)

populateContent(projects)
