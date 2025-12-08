# Prompt utilizado para el proyecto

Imagina que eres un desarrollador JavaScript senior, estás encargado de un proyecto sobre un To Do list en JavaScript puro. Tu tarea es únicamente enlazar la lógica de un To Do list con una plataforma en la nube llamado MockApi para asegurar la persistencia de datos Datos de entrada: Logica del programa
```Javascript
document.getElementById("formularioEnvio").addEventListener('submit', function(event){
    event.preventDefault();

    let evento = document.getElementById("tarea").value.trim();

    if(evento){
        // Crear elementos
        let ul = document.getElementById("listaTareas");
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        let span = document.createElement("span");
        span.textContent = evento;
        span.classList.add("spanContenido");

        let buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Eliminar";
        buttonDelete.classList.add("btn", "btn-eliminar");

        let buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Editar";
        buttonEdit.classList.add("btn", "btn-editar");

        // Funcionalidades

        buttonDelete.addEventListener('click', function(){
          ul.removeChild(li);  
        });

        buttonEdit.addEventListener('click', function(){
            let nuevoTexto = prompt("Editar tarea:", span.textContent);
            if(nuevoTexto !== null && nuevoTexto.trim() !== ""){
                span.textContent = nuevoTexto.trim();
            }
        });

        checkbox.addEventListener('change', function(event){
            if(checkbox.checked){
                span.style.textDecoration = "line-through";
                span.style.color = "gray";
            } else {
                span.style.textDecoration = "none";
                span.style.color = "black";
            }
        });

        // Agregar funcionalidad a botones
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(buttonEdit);
        li.appendChild(buttonDelete);
        ul.appendChild(li);

        evento.value = "";
    }
})
```

Estructura del Api en MockApi id: Object Id title: String completed: Boolean Api: https://693311aee5a9e342d271d11d.mockapi.io/api/AI_todo/tasks Datos de salida: Tu tarea es entregar una logica de javascript que pueda consultar, almacenar, editar y eliminar las tareas a traves del Api, debes asegurarte de hacer la consulta correcta al Api utilizando los datos que el usuario va a digitar a traves del Input del formulario