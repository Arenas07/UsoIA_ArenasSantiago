import fs from "fs";
import { encoding_for_model } from "tiktoken";

function contarTokens() {
    const encoding = encoding_for_model("gpt-4");
    const costoPorMilTokens = 0.03

    try {
        const texto = fs.readFileSync("./libro.txt", "utf-8");
        const tokens = encoding.encode(texto);

        console.log(tokens)
        console.log(`Número de tokens en el archivo: ${tokens.length}`);

        const costoTotal = (tokens.length*costoPorMilTokens)/10000;
        console.log(`Costo estimado para procesar el archivo: $${costoTotal}`);


    } catch (error) {
        console.error(error);
    }
}

contarTokens();
