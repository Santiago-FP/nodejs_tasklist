//Importamos Router 

const router = require("express").Router();

// Importamos funciones de tasks.http
const {
    getAll,
    getThisTask,
    createThisTask,
    deleteThisTask,
    updateThisTask
} = require("./tasks.http")

//
router.route('/tasks')
    .get(getAll)
    .post(createThisTask)



router.route('/tasks/:id')
    .get(getThisTask)
    .delete(deleteThisTask)
    .put(updateThisTask)



    // exportar router
    module.exports = {
        router
    };