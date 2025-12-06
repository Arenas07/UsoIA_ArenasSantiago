import { updateTask, deleteTask } from "./api.js";
import { applyStyles } from "./render.js";

export async function handleToggle(task, span, checkbox) {
    const completed = checkbox.checked;
    applyStyles(span, completed);

    await updateTask(task.id, {
        title: task.title,
        completed
    });
}

export async function handleEdit(task, span, checkbox) {
    const nuevoTexto = prompt("Editar tarea:", span.textContent);

    if (nuevoTexto && nuevoTexto.trim() !== "") {
        const newTitle = nuevoTexto.trim();
        span.textContent = newTitle;

        await updateTask(task.id, {
            title: newTitle,
            completed: checkbox.checked
        });

        task.title = newTitle; // mantener datos actualizados localmente
    }
}

export async function handleDelete(id, li) {
    await deleteTask(id);
    li.remove();
}
