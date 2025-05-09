/*
Crea un arreglo de objetos con al menos 5 productos, cada uno con 
las propiedades nombre, precio y categoría. Puedes ver el código 
de ejemplo para este paso en el siguiente enlace: https://gist.github.com/heladio-devf-mx/a2127c7992384fd0fd66893db47ea506
//Usa filter() para obtener los productos que cuesten menos de $100.
Usa sort() para ordenar esos productos alfabéticamente por su nombre.
Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
Muestra los resultados de la aplicación de cada métiodo en consola.
(Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.


//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];
*/

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 1, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

let productosBaratos = productos.filter((valor) => {
    return valor.precio < 100;
});

let productosOrdenados = productos.sort((a,b) => {
    return a.nombre.localeCompare(b.nombre);

});

let productosSoloNombres = productos.map((valor) => {
    return valor.nombre;
});

let precioTotal = productos.reduce((acumulador,valor) => {
    return acumulador + valor.precio;
},0);

let verificarCategoria = productos.some((valor) => {
    return valor.categoria === "Electrónica";
    })

let preciosAltos = productos.every((valor) => {
    return valor.precio >= 10;
})


console.log("Productos que valen menos de 100: ", productosBaratos);
console.log("Productos ordenados: ", productosOrdenados);
console.log("Productos solos nombres: ");
console.log(productosSoloNombres);
console.log("Precio total de los productos: ", precioTotal);
if (verificarCategoria){
    console.log("Existen productos de electronica")
}
else{
    console.log("No existen productos de electronica")
}

if (preciosAltos){
    console.log("Tienes productos de alto valor")
}
else{
    console.log('Agarraste buenas ofertas')
}


//Adriana Patricia Camarillo  Mora
//Pablo Hernandez 
//Luis Gustavo de Jesus Lara