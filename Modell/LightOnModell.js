import { JatekTer } from "../View/JatekTer.js";

export default class LightOnModell{
    #allapotLista = []
    #meret
    #lepes
    constructor(){
        this.#meret = 3
        this.#setAllapotLista()
    }

    #setAllapotLista(){
        for(let i = 0; i<this.#meret*this.#meret; i++){
            if(Math.random() < .2){
                this.#allapotLista[i] = true
            }else{
                this.#allapotLista[i] = false
            }
        }
    }

    getAllapotLista(){
        return this.#allapotLista
    }

    getDB(){
        let db
        for(let i = 0; i<this.#allapotLista.length; i++){
            if(this.#allapotLista[i] === true){
                db++;
            }
        }
        return db
    }
}