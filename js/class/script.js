// Script comme euromillions mais maintenant à modifier en orienté objet

class NumberGenerate {

    #ronds;
    #etoiles;
    #numFives;
    #numTwo;

    constructor(ronds, etoiles) {
        this.#ronds = ronds;
        this.#etoiles = etoiles;
    }

    get ronds() {
        this.#ronds;
    }

    set ronds(rond) {
        this.#ronds = rond;
    }

    get etoiles() {
        this.#etoiles;
    }

    set etoiles(star) {
        this.#etoiles = star;
    }

    get numFives() {
        this.#numFives;
    }

    set numFives(Five) {
        this.#numFives = Five;
    }

    get numTwo() {
        this.#numTwo;
    }

    set numTwo(Two) {
        this.#numTwo = Two;
    }
}


