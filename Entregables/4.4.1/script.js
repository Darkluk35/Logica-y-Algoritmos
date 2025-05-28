function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length/2)/* calcular el punto medio */;
    const left = arr.slice(0,mid)/* obtener la primera mitad */;
    const right = arr.slice(mid)/* obtener la segunda mitad */;

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left)/* llamada recursiva */;
    const rightMax = findMax(right) /* llamada recursiva */;

    // TODO: Combinar las soluciones comparando los máximos
    return Math.max(leftMax,rightMax);
}


function findMin(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length/2)/* calcular el punto medio */;
    const left = arr.slice(0,mid)/* obtener la primera mitad */;
    const right = arr.slice(mid)/* obtener la segunda mitad */;

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMin = findMin(left)/* llamada recursiva */;
    const rightMin = findMin(right) /* llamada recursiva */;

    // TODO: Combinar las soluciones comparando los máximos
    return Math.min(leftMin,rightMin);
}


// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
const numberMin = findMax(numbers)
const numberMax = findMin(numbers)


console.log(`El arreglo: [${numbers}] contiene como numero máximo a ${numberMax} `); // Salida esperada: 10
console.log(`El arreglo: [${numbers}] contiene como numero minímo a ${numberMin} `); //salida de 2