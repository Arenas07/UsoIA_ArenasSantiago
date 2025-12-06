import { getTasks, createTask } from "./api.js";
import { renderTask } from "./render.js";

// Cargar todas las tareas al iniciar
async function loadTasks() {
    const tasks = await getTasks();
    tasks.forEach(task => renderTask(task));
}

document.getElementById("formularioEnvio").addEventListener("submit", async function(event) {
    event.preventDefault();

    const input = document.getElementById("tarea");
    const texto = input.value.trim();

    if (texto) {
        const newTask = await createTask(texto);
        renderTask(newTask);
        input.value = "";
    }
});

// Inicializar la app
loadTasks();
