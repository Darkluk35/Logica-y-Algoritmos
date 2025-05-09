/*

Código Inicial del ejercicio:

let listaDeCompras = [];  // Lista vacía

// Función para agregar un producto
function agregarProducto(producto) {
  // TODO: Verifica si el producto ya está en la lista antes de agregarlo
  listaDeCompras.push(producto);
}

// Función para eliminar un producto
function eliminarProducto(producto) {
  // TODO: Encuentra y elimina el producto de la lista
}

// Función para mostrar la lista completa
function mostrarLista() {
  console.log("Lista de Compras:");
  // TODO: Recorre el arreglo y muestra cada producto
}

// Prueba tus funciones
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche");  // Este producto no debe agregarse de nuevo
mostrarLista();  // Debería mostrar "Leche" y "Pan"
*/
let listaDeCompras = [];

const agregarProducto = (producto) => {
    const productoFormateado = producto.trim().toLowerCase();
    if (!listaDeCompras.includes(productoFormateado)) {
      listaDeCompras.push(productoFormateado);
      console.log(`"${producto}" ha sido agregado a la lista.`);
    } else {
      console.log(`"${producto}" ya está en la lista.`);
    }
  };
  
  // Función para eliminar un producto
  const eliminarProducto = (producto) => {
    const productoFormateado = producto.trim().toLowerCase();
    const index = listaDeCompras.indexOf(productoFormateado);
    if (index !== -1) {
      listaDeCompras.splice(index, 1);
      console.log(`"${producto}" ha sido eliminado de la lista.`);
    } else {
      console.log(`"${producto}" no se encontró en la lista.`);
    }
  };
  
  // Función para mostrar todos los productos
  const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
      console.log("La lista de compras está vacía.");
    } else {
      console.log("Lista de Compras:");
      listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
      });
    }
  };

agregarProducto("Pan");
agregarProducto("Leche");
agregarProducto("Huevo");
agregarProducto("pan");  // Duplicado por nombre (no se agregará)
mostrarLista();
eliminarProducto("Leche");
mostrarLista();