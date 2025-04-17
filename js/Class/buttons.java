// Class pour l'addeventListener

class buttons {

    #numFives;
    #numTwo;

    constructor(numFives, numTwo) {
        
        this.#numFives = numFives;
        this.#numTwo = numTwo;
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
