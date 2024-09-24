import { JatekTer } from "../View/JatekTer.js";

export default class LightOnModell{
    #allapotLista = []
    #meret
    #lepes
    #db
    constructor(){
        this.#meret = 3
        this.#db = 0
        this.#setAllapotLista()
        this.setDB()
    }

    allapotValtozas(id){
        this.#allapotLista[id]= !this.#allapotLista[id]
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
    setDB(){
        for(let i = 0; i<this.#allapotLista.length; i++){
            if(this.#allapotLista[i] === true){
                this.#db++;
            }
        }
    }
    getDB(){
        return this.#db
    }

    szomszedokKeresese(id){
        if(id%3 !== 2){
            this.#allapotLista[id+1] = !this.#allapotLista[id+1]
        }
        if(id%3 !== 0){
            this.#allapotLista[id-1] = !this.#allapotLista[id-1]
        }
        if(id <6){
            this.#allapotLista[id+3] = !this.#allapotLista[id+3]
        }
        if(id>3){
            this.#allapotLista[id-3] = !this.#allapotLista[id-3]
        }
    }
}