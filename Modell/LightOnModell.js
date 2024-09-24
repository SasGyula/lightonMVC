import { JatekTer } from "../View/JatekTer.js";

export default class LightOnModell{
    #allapotLista = []
    #meret
    #lepes
    #db
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


}