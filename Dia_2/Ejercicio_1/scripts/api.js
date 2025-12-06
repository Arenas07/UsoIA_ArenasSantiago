
const API_URL = "https://693311aee5a9e342d271d11d.mockapi.io/api/AI_todo/tasks"

// Obtener todas las tareas
export async function getTasks() {
    const res = await fetch(API_URL);
    return await res.json();
}

// Crear tarea
export async function createTask(title) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false })
    });
    return await res.json();
}

// Actualizar tarea (PUT)
export async function updateTask(id, data) {
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

// Eliminar tarea
export async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
