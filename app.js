const express = require('express');
//importar router
const tasksRouter = require("./tasks/tasks.router").router;

const app = express();

app.use(express.json());

app.use("/api/v1",tasksRouter);
// localhost:8000/api/v1/tasks

app.listen(8000, () =>{
    console.log("Server working at port 8000")
})




