import {Vehiculo} from "./vehiculo.js"

export class Todoterreno extends Vehiculo{
    #traccion;

    constructor(marca, modelo, color, fabricacion, cilindrada, traccion){
        super(marca,modelo,color,fabricacion,cilindrada,traccion);
        this.#traccion = traccion;
    }

    //GETTER Y SETTER
    get traccion(){
        return this.#traccion;
    }

    set traccion(value){
        this.#traccion = value;
    }
}