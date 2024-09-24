import { Lampa } from "./Lampa.js";

export class JatekTer {
    #szuloElem;
    #allapotLista;
    #pontElem
    #db
    constructor(szuloElem,allapotLista,db,pontElem) {
        this.#db = db;
        this.#szuloElem = szuloElem;
        this.#allapotLista = allapotLista
        this.#pontElem = pontElem
        this.#kiir();
    }
    #kiir() {
        const jatekTer = this.#szuloElem
        jatekTer.empty();
        for (let index = 0; index < this.#allapotLista.length; index++) {
            new Lampa(index,this.#allapotLista[index],jatekTer)
        }
        this.#pontElem.append(this.#db)
    }
}