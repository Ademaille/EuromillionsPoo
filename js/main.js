// Page js pour la mise en page du code

function NumberGenerate(nbNombres, nbMax) {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < nbNombres) {
        let newNumber = Math.ceil(Math.random() * nbMax);
        if (uniqueNumbers.indexOf(newNumber) == -1) {
            uniqueNumbers.push(newNumber);
        }
    }
    return uniqueNumbers;
}

console.log(NumberGenerate)

const button = document.querySelector(".tirage");
button.addEventListener("click", () => {

    const ronds = NumberGenerate(5, 50);

    const etoiles = NumberGenerate(2, 12);

    const numFives = document.querySelectorAll(".rond-text");

    for (let i = 0; i < numFives.length; i++) {
        numFives[i].textContent = nombresStandard[i];
        console.dir(numFives[i])
    }

    const numTwo = document.querySelectorAll(".étoile-text");

    for (let i = 0; i < numTwo.length; i++) {
        numTwo[i].textContent = nombresEtoiles[i];
        console.dir(numTwo[i])
    }
});
