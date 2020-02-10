export class isAgressive{
    constructor(){
    }

    static becomeAgressive(){
        this.agressive = true;
    }

    static becomePeaceful(){
        this.agressive = false;
    }

    static isOrcAgressive(){
        return this.agressive;
    }
}