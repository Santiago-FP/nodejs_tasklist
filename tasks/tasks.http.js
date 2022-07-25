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
        const data = getTask(id);
        res.status(200).json(data);
};

//Crear tarea
const createThisTask = (req,res) => {
    const task = req.body.task;
        const newTask = createTask(task);
        res.status(201).json(newTask);
};

//Eliminar tarea
const deleteThisTask = (req,res) =>{
    const id = Number(req.params.id);
        const data = deleteTask(id);
        res.status(200).json(data);
};

//Editar status

const updateThisTask = (req,res) => {
    const id = Number(req.params.id);
    const update = changeStatus(id);
        res.status(200).json(update);
};

//exportacion
module.exports = {
    getAll,
    getThisTask,
    createThisTask,
    deleteThisTask,
    updateThisTask
}