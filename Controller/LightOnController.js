import { JatekTer } from "../View/JatekTer.js";
import LightOnModell from "../Modell/LightOnModell.js";

export default class LightOnController{
    constructor(){
        this.jatekTer = $("#jatekter")
        this.modell = new LightOnModell()
        this.pontElem = $(".pontok")
        new JatekTer(this.jatekTer, this.modell.getAllapotLista(), this.modell.getDB(), this.pontElem)
        this.#esemenyKezelo();
    }

    #esemenyKezelo(){
        $(window).on("kapcsolas",  ((event)=>{
            console.log(event.detail)
            this.modell.allapotValtozas(event.detail)
            new JatekTer(this.jatekTer, this.modell.getAllapotLista(), this.modell.getDB(), this.pontElem)
        }))
    }
    
}