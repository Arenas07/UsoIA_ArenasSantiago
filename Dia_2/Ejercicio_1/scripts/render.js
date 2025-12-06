import { handleDelete, handleEdit, handleToggle } from "./events.js";

export function renderTask(task) {
    const ul = document.getElementById("listaTareas");

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const span = document.createElement("span");
    span.textContent = task.title;
    span.classList.add("spanContenido");

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Editar";
    buttonEdit.classList.add("btn", "btn-editar");

    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Eliminar";
    buttonDelete.classList.add("btn", "btn-eliminar");

    // aplicar estilos iniciales
    applyStyles(span, checkbox.checked);

    // enlazar eventos
    checkbox.addEventListener("change", () => handleToggle(task, span, checkbox));
    buttonEdit.addEventListener("click", () => handleEdit(task, span, checkbox));
    buttonDelete.addEventListener("click", () => handleDelete(task.id, li));

    // ensamblar elementos
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);
    ul.appendChild(li);
}

export function applyStyles(span, completed) {
    if (completed) {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
    } else {
        span.style.textDecoration = "none";
        span.style.color = "black";
    }
}
