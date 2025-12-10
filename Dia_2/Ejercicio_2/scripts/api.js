const API_URL = "https://6938ae8b4618a71d77d0f7da.mockapi.io/api/users";


export async function getUsers() {
    const res = await fetch(API_URL);
    return await res.json();
}

export async function createUser(data) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    return await res.json();
}

export async function updateUser(id, data) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    return await res.json();
}

export async function deleteUser(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
