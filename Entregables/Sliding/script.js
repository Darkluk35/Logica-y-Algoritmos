function findLongestWord(text) {
    // Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    // Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
        // Eliminar signos de puntuación para una comparación limpia
        const currentWord = words[i].replace(/[.,!?¡¿]/g, '');

        // Comparar la longitud de la palabra actual con la más larga
        if (currentWord.length > longestWord.length) {
            // Actualizar la palabra más larga
            longestWord = currentWord;
        }
    }

    // Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text)); // Resultado esperado: "programación"
