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
        this.#divElem = this.#szuloElem.children("div:last-child")
        
        this.#szinBeallit()
        this.#divElem.on("click", ()=>{
            this.#kattintasEsemeny("kapcsolas")
            this.#szinBeallit()
        })
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

    #kattintasEsemeny(esemenynev){
        const e = new CustomEvent(esemenynev, {detail:this.#id})
        window.dispatchEvent(e)
    }
}