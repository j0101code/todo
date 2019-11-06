const database = ['numb1', 'numb2'];
const nowData = new Date();

function lookFunctions(){
    console.log('List of application functions \n',
                '1. Add a task to the list \n',
                '2. Delete a job from the list \n',
                '3. See all the tasks \n');
    
}

function lookAllTasks(){
    console.log(database);
    
}
lookFunctions();
lookAllTasks();

function pickSomeFunction(){
    let whichFunction = Number(prompt("Which one want function use?: "));
    
    lookAllTasks();

    switch(whichFunction){
        case 1:
            console.log("You pick 'add taks' ");
            addTasks();
            if(true){
                console.log('Great!');
                lookFunctions();
                return pickSomeFunction();
            }
            else{
                console.log("something went wrong");
            }
            break;
        case 2:
            console.log("You pick 'Remove from list tasks' ");
            
            removeTasks();
            if(true){
                lookFunctions();
                console.log("You delete task about " + nowData.getTime());
                
            }
            else{
                console.log("Something went wrong")
            }
            
            
            return pickSomeFunction();
        case 3:
            
            console.log("Look all tasks");
            console.log(database + " " + '\n ');
            break;
        
        default:
            console.log("Try again");
            return pickSomeFunction();
    }
}



function addTasks(){
    let addTaskAlert = prompt('Write task: ');
    database.push(" " + addTaskAlert);
    console.log(database);
    
}

//function whose delete task from variable database

function removeTasks(){
    console.log(database);
    let removeTaskAlert = Number(prompt('Which one task you want remove?: '));
    
    database.splice(removeTaskAlert, 1);
    
    
    
    console.log(database);
}


pickSomeFunction();
