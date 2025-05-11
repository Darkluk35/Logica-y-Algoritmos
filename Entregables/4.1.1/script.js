//Código Inicial
//`viajes.js`
//```javascript
// viajes.js

// Array para guardar los destinos
const destinos = [];

//Función para registrar un destino de viaje
function registrarDestino(destino, fecha, transporte) {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
function calcularCosto(destino, transporte) {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}

//Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    destinos.forEach(({ destino, fecha, transporte, costo }) => {
        console.log(`Destino: ${destino}`);
        console.log(`Fecha: ${fecha}`);
        console.log(`Transporte: ${transporte}`);
        console.log(`Costo: $${costo}`);
        console.log('---------------------------');
    });
};
//```
//`app.js`
//```javascript
// app.js

//Iniciar la aplicación
const iniciarApp = () => {
    //Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    //Mostrar el itinerario de los viajes
    mostrarItinerario();
};

//Ejecutar la aplicación
iniciarApp();