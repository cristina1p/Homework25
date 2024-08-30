// Exercitii in clasa

// function welcome() {
//     console.log(`Hello, ${name}`)
// }

// let rezultat = welcome('Ivan')
// console.log(rezultat)

// function calculateArea(height, width) {
//     let area = height * width
//     console.log(`Area is ${area}`)
// }

// calculateArea(5, 8);

// let totalArea = calculateArea(5, 8) + calculateArea(5, 9);

// Exercitiul 1 , if/else

// function HelloWorld(language) {
//     if (language == 'ro') {
//         return 'Salut!'
//     } else if (language == 'ru') {
//         return 'Privet'
//     } else if (language == 'fr') {
//         return 'Bonjour!'
//     } else {
//         return 'Hello!'
//     }
// }

// console.log(HelloWorld('ru'));

// Exercitiul 1 , switch

// function HelloWorld(language) {
//     switch (language) {
//         case 'ro':
//             return 'Salut!'
//             break;

//         case 'ru':
//             return 'Privet!'
//             break;

//         case 'fr':
//             return 'Bonjour!'
//             break;
//     }
// }

// console.log(HelloWorld('fr'))

// Exercitiul 2

/* o funcție cu numele plural care să:
Accepte 2 argumente: un substantiv și un număr.
Întoarcă o propoziție ce conține numărul și substantivul la plural (dacă e cazul), ex: “I have 5 cats” sau “I have 1 dog”. 
Chemați funcția cu datele: “6 pig”, “0 hamster”, “1 parrot”.
Bonus: includem şi exceptiile "sheep" (“I have 1 sheep”, “I have 4 sheep”) şi "geese" (“I have 1 goose”, “I have 9 geese”)*/

// function plural(noun, number) {
//   if (number != 1 && noun != "sheep" && noun != "goose") {
//     return number + " " + noun + "s";
//   } else {
//     return number + " " + noun;
//   }
// }

// console.log(`I have ${plural("cat", 0)}`);
// console.log(`I have ${plural("dog", 3)}`);
// console.log(`I have ${plural("sheep", 4)}`);

// Exercitiul 3

// Creați o programă care întoarce prețul biletului la Grădina Botanică, în funcție de vârstă: copiii până la 12 ani plătesc 5 lei, după 12 - 10 lei, adulții - 20 lei, iar pensionarii (peste 65) - 15.
// Chemați numai 1 funcție, numai cu anul nașterii. (ar trebui să aveți 2 funcții)
// Datele: 2015, 198 5, 1960, 2018

// function, calculate age
// const calculateAge = (birthYear) => {
//   const currentYear = new Date().getFullYear(); // current year
//   return currentYear - birthYear;
// };

// function, calculate ticket price based on birthYear
// const getPriceTicket = (birthYear) => {
//   const age = calculateAge(birthYear);
//   if (age <= 12) {
//     return 5;
//   } else if (age > 12 && age < 18) {
//     return 10;
//   } else if (age >= 18 && age >= 65) {
//     return 20;
//   } else {
//     return 15;
//   }
// };

// const birthYear = 2003;
// const ticketPrice = getPriceTicket(birthYear);
// console.log(
//   `If your birth's year is ${birthYear}, your ticket costs: ${ticketPrice} mdl.`
// );

// Ec=xercitiul 4

let nume;
let anulNasterii;
let isF; // valoare booleană

// Funcția care calculează vârsta persoanei
const calcVarsta = (anulNasterii) => {
  const currentYear = new Date().getFullYear(); // anul curent
  return currentYear - anulNasterii;
};

// Funcția care determină statutul de pensionare
const varstaPensionare = (nume, anulNasterii, isF) => {
  const varstaPensionareFemei = 64;
  const varstaPensionareBarbati = 67;
  const varsta = calcVarsta(anulNasterii);

  if (varsta < 18) {
    console.log(`${nume} nu este la pensie și este minor.`);
  } else if (isF && varsta >= varstaPensionareFemei) {
    console.log(`${nume} este femeie, este deja la pensie.`);
  } else if (!isF && varsta >= varstaPensionareBarbati) {
    console.log(`${nume} este barbat, este deja la pensie.`);
  } else if (isF && varsta < varstaPensionareFemei) {
    const aniPanaLaPensionare = varstaPensionareFemei - varsta;
    console.log(
      `${nume} este femeie și mai are ${aniPanaLaPensionare} ani până la pensionare.`
    );
  } else if (!isF && varsta < varstaPensionareBarbati) {
    const aniPanaLaPensionare = varstaPensionareBarbati - varsta;
    console.log(
      `${nume} este barbat și mai are ${aniPanaLaPensionare} ani până la pensionare.`
    );
  }
};
varstaPensionare("Emilia", 1999, true);
