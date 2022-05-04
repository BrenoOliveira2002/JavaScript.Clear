class CalcController {
    constructor(){
         this.displayCalc = "0";
         this.currentDate;
         this.initialize();
    }
        
        initialize() {
            let displayCalcEl = document.querySelector("#display");
            let dateEl = document.querySelector("#data");
            let timeEl = document.querySelector("#hora");

            displayCalcEl.innerHTML = "4567"
            // ele coloca uma informação em html o "innerHTML"


        }   

    get displayCalc() {
        return this.displayCalc;
        
    }
    set displayCalc(valor){
        this.displayCalc = valor;

    }
    get currentDate(){
        return this.currentDate;
    }
    set currentData(valor){
        this.currentDate = valor;
        `
    `}

}