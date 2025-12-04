
async function getAllCharacters() {
    const baseURL = "https://rickandmortyapi.com/api/character?name=";
    const input = document.getElementById('input-value').value;
    try {
        const res = await fetch(`${baseURL}${input}`);
        const data = await res.json();

        const information_section = document.getElementById("information-section");

        let templateHtml = "";

        data.results.forEach(char => {
            templateHtml += `
                <div class="char-div">
                    <img src="${char.image}">
                    <h2>${char.name}</h2>
                </div>
            `;
        });

        information_section.innerHTML = templateHtml;


    } catch (error) {
        console.error("Error GET:", error);
    }
}

