export class Lampa{
    #allapot
    #id 
    #divElem
    #szuloElem
    constructor(id, allapot,szuloElem){
        this.#allapot = allapot
        this.#id = id
        this.#szuloElem = szuloElem
        this.#megjelenit()
    }

    #megjelenit(){
        let txt = `<div></div>`
        this.#szuloElem.append(txt)
    }
}