console.log("Hola mundo");

//fs => File system
// 1. Llamando al modulo fs y guardandolo en una variable.
const fs = require("fs");


//Leer archivos.
const archivo1 = fs.readFileSync('./archivos/archivo.txt', 'utf-8');
console.log(archivo1);

//JSON -> JavaScript Object Notation

const json1 = fs.readFileSync('./archivos/mascota.json', 'utf-8');
//console.log(json1);

console.log(JSON.parse(json1)); //JSON.parse() convierte texto a un objeto literal.
//Escribir archivos
const textoAEscribir = 'Soy un texto que fue generado desde javascript \n  Yo soy un nuevo parrafo'
if(fs.existsSync('./archivos/archivoEscritura.txt')){
    console.log("Ya existe el archivo");
}else{
    fs.writeFileSync('./archivos/archivoEscritura.txt',textoAEscribir);
}

const recetaCocina = {
    nombre: "Quesadillas",
    ingredientes: ["Queso", "Tortillas", "Aceite", "Relleno al gusto"],
    preparacion: ["1. Calentar tortillas", "2. Agregar queso y relleno a la tortilla", "3. Cerrar quesadilla", "4. Esperar a que el queso se derrita"]
}
const recetaCocinaJSON = JSON.stringify(recetaCocina); // JSON.stringify() convierte un objeto literal a texto.

fs.writeFileSync('./archivos/recetas/receta1.json', recetaCocinaJSON);





//log <- Registro