//La lista de tareas
const taskList = [
    {
        id:1,
        task:"Learn Node.js",
        status: "Incomplete"
    }
];
//Funcion que retorna todas las tareas
const getAllTasks = () => {
    if(taskList.length > 0){
        return(taskList)
    }else{
        return("No tasks available yet")
    }
    
};
//Obtener tarea especifica
const getTask = (id) => {
    const filteredTasks = taskList.filter(task => task.id === id);
    const task = filteredTasks[0];
    if (task){
        return(filteredTasks[0])
    }else{
        return("Task does not exist")
    }
    
};
//Crear tarea
const createTask = (task) => {
        if(taskList.length === 0){
            const newTask = {
                id: 1,
                task:task,
                status: "Incomplete"
            }
            taskList.push(newTask)
            return(newTask)
        }else{
            const newTask = {
                id: taskList[taskList.length -1].id + 1,
                task:task,
                status: "Incomplete"
            }
            taskList.push(newTask)
            // console.log(taskList);
            return(newTask)
        }
    };
//Editar status
const changeStatus = (id) => {
    const filteredTasks = taskList.filter(task => task.id === id);
    const task = filteredTasks[0];
    if (task){
        const taskStatus = task.status;
        if(taskStatus === "Incomplete"){
            task.status = "Completed"
            return(task);
        }else{
            task.status = "Incomplete"
            return(task);
        }
    }else{
        return("Task does not exist")
    }
    
    
};

//Eliminar una tarea
const deleteTask = (id) => {
    const filteredTasks = taskList.filter(task => task.id === id);
    const task = filteredTasks[0];
    const taskIndex = taskList.indexOf(filteredTasks[0])
    if (task){
        taskList.splice(taskIndex,1)
        return("Task has been deleted")
    }else{
        return("Task does not exist")
    }
    
};


//exportacion
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    changeStatus,
    deleteTask
}