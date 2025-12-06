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