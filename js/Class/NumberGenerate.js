// Script comme euromillions mais maintenant à modifier en orienté objet

class NumberGenerate {

    #uniqueNumbers;

    constructor(uniqueNumbers) {

        this.#uniqueNumbers = uniqueNumbers;
    }

    get uniqueNumbers() {
        return this.#uniqueNumbers;
    }

    set uniqueNumbers(Numbers) {
        this.#uniqueNumbers = Numbers;
    }
}


