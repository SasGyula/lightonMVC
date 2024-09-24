import { Lampa } from "./Lampa.js";

export class JatekTer {
    #szuloElem;
    #db;
    #allapotLista;
    constructor(szuloElem,allapotLista) {
        /* this.#db = db; */
        this.#szuloElem = szuloElem;
        this.#allapotLista = allapotLista
        this.#kiir();
    }

    #kiir() {
        const jatekTer = this.#szuloElem
        jatekTer.empty();
        for (let index = 0; index < this.#allapotLista.length; index++) {
            new Lampa(index,this.#allapotLista[index],jatekTer)
            
        }
    }
}