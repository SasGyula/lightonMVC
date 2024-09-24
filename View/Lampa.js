export class Lampa{
    #allapot
    #id 
    #divElem
    #szuloElem
    constructor(id, allapot,szuloElem){
        this.#allapot = allapot
        this.#id = id
        this.#szuloElem = szuloElem
        this.#divElem = this.#szuloElem.children("div:last-child")
        this.#megjelenit()
        this.#szinBeallit()
        this.#divElem.on("click", ()=>{
            this.#kattintasEsemeny()
            this.#setAllapot()
        })
    }

    #setAllapot(){
        this.#allapot = !this.#allapot
    }

    #szinBeallit(){
        if(this.#allapot){
            this.#divElem.addClass("felkapcs")
        }else{
            this.#divElem.removeClass("felkapcs")
        }
    }

    #megjelenit(){
        let txt = `<div></div>`
        this.#szuloElem.append(txt)
    }

    #kattintasEsemeny(){
        const e = new CustumEvent(esemenynev, {detail:this.#id})
        window.dispatchEvent(e)
    }
}