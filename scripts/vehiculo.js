import {mostrarResultado} from "./main.js"

export class Vehiculo{
    #marca;
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    constructor(marca,modelo,color,fabricacion,cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#fabricacion = fabricacion;
        this.#cilindrada = cilindrada;
    }

    mostrardatos(){
        const datos = `
        La marca es -> ${this.marca}
        </br>
        El modelo es -> ${this.modelo}
        </br>
        Su color es -> ${this.color}
        </br>
        Se fabrico el año -> ${this.fabricacion}
        </br>
        Su cilindrada es -> ${this.cilindrada}
        </br>
        `;

        //LLamar a la función mostrarresultado definida en el main.js
        mostrarResultado(`<p>${datos}</p>`);
    }

    acelerar(velocidad){
        const mensaje = `</br>Se ha acelerado hasta -> ${velocidad}`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }

    arrancar(){
        const mensaje = `</br>El coche ${this.#modelo} de la marca ${this.#marca} de color ${this.#color} ha arrancado`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }

    frenar(){
        const mensaje = `</br>El coche ${this.#modelo} de la marca ${this.#marca} de color ${this.#color} ha frenado`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }
    
    //GETTER Y SETTER

    get marca(){
        return this.#marca;
    }

    set marca(value){
        this.#marca = marca;
    }
 
    get modelo(){
        return this.#modelo;
    }
 
    set modelo(value){
        this.#modelo = modelo;
   
    }
 
    get color(){
        return this.#color;
    }
 
    set color(value){
        this.#color = color;
   
    }
 
    get fabricacion(){
        return this.#fabricacion;
    }
 
    set fabricacion(value){
        this.#fabricacion = fabricacion;
    }
 
    get cilindrada() {
        return this.#cilindrada;
    }
 
    set cilindrada(value) {
        this.#cilindrada = cilindrada;
    }
    
}