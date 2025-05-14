/*
const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        // Si coinciden, devuelve el par
        // ...

        // TODO: Avanza los punteros si no coinciden
        // ...
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]
*/

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Compara las iniciales de los nombres en los punteros
        if (arr[inicio][0].toUpperCase() === arr[siguiente][0].toUpperCase()) {
            
            return [arr[inicio], arr[siguiente]]; // Devuelve el par
        }

        // Avanza los punteros si no coinciden
        siguiente++;
        if (siguiente === arr.length) {
            inicio++;
            siguiente = inicio + 1;
        }
    }

    return null; // Si no se encuentra ningún par
}

function mostrarPareja(parejas){
    console.log("Pareja encontrada: " + parejas[0] + " y " + parejas[1]);
}

if(encontrarPareja(invitados) !== null){
    mostrarPareja(encontrarPareja(invitados));
}
else{
    console.log("No se encontraron parejas");
}

//console.log(encontrarPareja(invitados));

