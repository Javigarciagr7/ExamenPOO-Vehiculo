//Importar las clases desde los archivos respectivos
import {Vehiculo} from "./vehiculo.js";
import {Furgoneta} from "./furgoneta.js";
import {Todoterreno} from "./todoterreno.js";

//Crear contenedor para mostrar los resultados
const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

//Funcion para mostrar datos
export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

//Muestra de un vehiculo 
const vehiculo1 = new Vehiculo("BMW","M2 COMPETITION", "ROJO",2021, "411");
mostrarResultado('--Vehiculo 1--');
vehiculo1.mostrardatos();
vehiculo1.arrancar();
vehiculo1.acelerar(160);
vehiculo1.frenar();

//Muestra un objeto furgoneta
const furgoneta1 = new Furgoneta('Ctroen', 'C15', 'blanca', 1995, '120', 10);
mostrarResultado(`<br/><br/>--Furgoneta 1--`);
furgoneta1.mostrardatos();
furgoneta1.arrancar();
furgoneta1.acelerar(350);
furgoneta1.frenar();

//Muestra un objeto furgoneta
const todoterreno1 = new Furgoneta('Mitshubisi', 'Pajero', 'gris', 1995, '190', 4);
mostrarResultado(`<br/><br/>--Furgoneta 1--`);
todoterreno1.mostrardatos();
todoterreno1.arrancar();
todoterreno1.acelerar(250);
todoterreno1.frenar();
