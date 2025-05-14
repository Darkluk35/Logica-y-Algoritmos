function encontrarParDeSuma(arreglo,sumaObjetivo){
    for (let i = 0; i < arreglo.length; i++) {
        for(let j = i + 1; j < arreglo.length; j++){
            console.log(`${arreglo[i]} + ${arreglo[j]} = ${arreglo[i] + arreglo[j]}`);
            if(arreglo[i] + arreglo[j] === sumaObjetivo){
                console.log(`El par de números que suman ${sumaObjetivo} son: ${arreglo[i]} y ${arreglo[j]}`);
                return;
            }

        }
}
}
let arreglo = [1, 2, 5, 7, 9,10,12,13,15,20,21,22,25,27,27];
let valorObjetivo = 7;
encontrarParDeSuma(arreglo,valorObjetivo)