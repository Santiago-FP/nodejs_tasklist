//Importamos controladores
const {getAllTasks,
    getTask,
    createTask,
    changeStatus,
    deleteTask} = require("./tasks.controllers");



//Obtener todas las tareas
const getAll = (req,res) =>{
    const data = getAllTasks();
    res.status(200).json(data);
};

//Obtener una tarea por id
const getThisTask = (req,res) => {
    
    const id = Number(req.params.id);
    if(id){
        const data = getTask(id);
        res.status(200).json(data);
    }else{
        res.status(400).json({message:"Invalid ID"})
    }
        
};

//Crear tarea
const createThisTask = (req,res) => {
    const task = req.body.task;
    if(task){
        const newTask = createTask(task);
        res.status(201).json(newTask);
    }else{
        res.status(400).json({message:"Please write a valid task"})
    }
        
};

//Eliminar tarea
const deleteThisTask = (req,res) =>{
    const id = Number(req.params.id);
    if(id){
        const data = deleteTask(id);
        res.status(200).json(data);
    }else{
        res.status(400).json({message:"Invalid ID"})
    }
        
};

//Editar status

const updateThisTask = (req,res) => {
    const id = Number(req.params.id);
    if(id){
        const update = changeStatus(id);
        res.status(200).json(update);
    }else{
        res.status(400).json({message:"Invalid Id"})
    }
    
};

//exportacion
module.exports = {
    getAll,
    getThisTask,
    createThisTask,
    deleteThisTask,
    updateThisTask
}