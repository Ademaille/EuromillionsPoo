// Script comme euromillions mais maintenant à modifier en orienté objet

function genererNombres(nbNombres, nbMax) {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < nbNombres) {
        let newNumber = Math.ceil(Math.random() * nbMax);
        if (uniqueNumbers.indexOf(newNumber) == -1) {
            uniqueNumbers.push(newNumber);
        }
    }
    console.log(uniqueNumbers);
    return uniqueNumbers;
}


const button = document.querySelector(".tirage");
button.addEventListener("click", () => {

    const nombresStandard = genererNombres(5, 50);

    const nombresEtoiles = genererNombres(2, 12);

    const numeros = document.querySelectorAll(".rond-text");

    for (let i = 0; i < numeros.length; i++) {
        numeros[i].textContent = nombresStandard[i];
        console.dir(numeros[i])
    }

    const numerosTwo = document.querySelectorAll(".étoile-text");

    for (let i = 0; i < numerosTwo.length; i++) {
        numerosTwo[i].textContent = nombresEtoiles[i];
        console.dir(numerosTwo[i])  
    }           
});