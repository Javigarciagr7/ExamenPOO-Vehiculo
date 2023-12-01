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

//variable tipo object de un objeto vehiculo
const vehiculoObject ={
    marca: 'BMW',
    modelo: 'M competition',
    color: 'rojo',
    fabricacion: 2021,
    cilindrada: '411'
}

//almacenar datos: guardor un JSON en el LocalStorage
localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject))

//recuperar datos: mostrar el object en consola del JSON que hemos guardado en localStorage
console.log(localStorage.getItem("Vehiculo"));

//Muestra un objeto furgoneta
const furgoneta1 = new Furgoneta('Ctroen', 'C15', 'blanca', 1995, '120', 10);
mostrarResultado(`<br/><br/>--Furgoneta 1--`);
furgoneta1.mostrardatos();
furgoneta1.arrancar();
furgoneta1.acelerar(350);
furgoneta1.frenar();


//Guardar en el localStorage la marca de la furgoneta
localStorage.setItem("marca furgoneta", furgoneta1.marca);

//Muestra un objeto furgoneta
const todoterreno1 = new Furgoneta('Mitshubisi', 'Pajero', 'gris', 1995, '190', 4);
mostrarResultado(`<br/><br/>--Furgoneta 1--`);
todoterreno1.mostrardatos();
mostrarResultado(`<br/> Tiene traccion` +todoterreno1.traccion)
todoterreno1.arrancar();
todoterreno1.acelerar(250);
todoterreno1.frenar();

const todoterrenoObject ={
    marca: todoterreno1.marca,
    modelo: todoterreno1.modelo,
    color: todoterreno1.color,
    fabricacion: todoterreno1.fabricacion,
    cilindrada: todoterreno1.cilindrada,
    traccion: todoterreno1.traccion
}

//Almacenar los datos en localStorage mediante un bucle iterativo
for(let key in todoterrenoObject){
    if(todoterrenoObject.hasOwnProperty(key)){
        localStorage.setItem(key, todoterrenoObject[key]);
    }
}

//eliminar un elemento del localStorage
localStorage.removeItem('color');

localStorage.clear();