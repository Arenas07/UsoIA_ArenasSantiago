import { getUsers, createUser, updateUser, deleteUser } from "./api.js";

const userList = document.getElementById("user-list");
const form = document.getElementById("user-form");

let editingId = null;

export async function renderUsers() {
    const users = await getUsers();

    userList.innerHTML = "";

    users.forEach(user => {
        const li = document.createElement("li");
        li.classList.add("card");

        li.innerHTML = `
            <p><strong>Primer Nombre:</strong> ${user.firstName}</p>
            <p><strong>Apellido:</strong> ${user.lastName}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Teléfono:</strong> ${user.phone}</p>
            <p><strong>Fecha de nacimiento:</strong> ${user.birthDate}</p>
            <p><strong>Género:</strong> ${user.gender}</p>
            <p><strong>País:</strong> ${user.country}</p>
            <p><strong>Dirección:</strong> ${user.adress}</p>
            <p><strong>Método de pago preferido:</strong> ${user.preferedPaymentMethod}</p>
            <p><strong>Preferencia de envío:</strong> ${user.shippingPreference}</p>
            <p><strong>Gasto promedio:</strong> ${user.averageSpend}</p>
            <p><strong>Última compra:</strong> ${user.lastPurchaseDate}</p>

            <div class="card-actions">
                <button class="btn-edit" data-edit="${user.id}">Editar</button>
                <button class="btn-delete" data-delete="${user.id}">Eliminar</button>
            </div>
        `;

        userList.appendChild(li);
    });
}


export function initFormLogic() {

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            firstName: document.getElementById("firstName").value.trim(),
            lastName: document.getElementById("lastName").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            birthDate: document.getElementById("birthDate").value.trim(),
            gender: document.getElementById("gender").value.trim(),
            country: document.getElementById("country").value.trim(),
            adress: document.getElementById("adress").value.trim(),
            preferedPaymentMethod: document.getElementById("preferedPaymentMethod").value.trim(),
            shippingPreference: document.getElementById("shippingPreference").value.trim(),
            averageSpend: document.getElementById("averageSpend").value.trim(),
            lastPurchaseDate: document.getElementById("lastPurchaseDate").value.trim()
        };

        if (!editingId) {
            await createUser(data); // POST
        } else {
            await updateUser(editingId, data); // PUT
            editingId = null;
        }

        form.reset();
        renderUsers();
    });


    userList.addEventListener("click", async (e) => {
        const editId = e.target.dataset.edit;
        const deleteId = e.target.dataset.delete;

        if (editId) {
            const users = await getUsers();
            const user = users.find(u => u.id == editId);

            document.getElementById("firstName").value = user.firstName;
            document.getElementById("lastName").value = user.lastName;
            document.getElementById("email").value = user.email;
            document.getElementById("phone").value = user.phone;
            document.getElementById("birthDate").value = user.birthDate;
            document.getElementById("gender").value = user.gender;
            document.getElementById("country").value = user.country;
            document.getElementById("adress").value = user.adress;
            document.getElementById("preferedPaymentMethod").value = user.preferedPaymentMethod;
            document.getElementById("shippingPreference").value = user.shippingPreference;
            document.getElementById("averageSpend").value = user.averageSpend;
            document.getElementById("lastPurchaseDate").value = user.lastPurchaseDate;

            editingId = editId;

            document.querySelector('[data-tab="post"]').click();
        }

        // --- ELIMINAR ---
        if (deleteId) {
            await deleteUser(deleteId);
            renderUsers();
        }
    });
}
