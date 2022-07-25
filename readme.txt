

English
1-To edit an existing task you only need to make a PUT request, there is no need to include a body,
this will change task status to "Completed" or "Incomplete".

2-To create a task you must make a POST request with the following syntax {"task":"whatever task"},
it must have 3 or more characters.

------------------------------------------------------------------------------------------------------
Español
1-Para editar una tarea solo hace falta hacer una peticion put, no es necesario incluir body,
esto cambiara la tarea a "Completed"(completada) o "Incomplete"(incompleta)

2-Para crear una tarea se debe enviar el body con la siguiente sintaxis {"task": "Tarea a realizar"},
y la tarea debe tener 3 caracteres o más.

