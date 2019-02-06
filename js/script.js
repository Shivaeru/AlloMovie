let titre = "un titre"
let casting = "un casting";
let dateSortie = "00/00/0000";
let synopsis = "un synopsis";
let nbEntree = "un nb entrée";

//création objet en json
let filmJson = {
    titre : "un titre",
    casting : "un casting",
    dateSortie : "00/00/0000",
    synopsis : "un synopsis",
    nbEntree : 4000
};
//création objet en tableau
//let filmTab = [titre = "un titre", casting = "un casting", dateSortie = "00/00/0000", synopsis = "un synopsis", nbEntree = 4000];

//création de la liste
let listeFilms = [
    {
        titre : "1 titre",
        casting : "1 casting",
        dateSortie : "01/00/0000",
        synopsis : "1 synopsis",
        nbEntree : 500
    },
    {
        titre : "2 titre",
        casting : "2 casting",
        dateSortie : "02/00/0000",
        synopsis : "2 synopsis",
        nbEntree : 2000
    },
    {
        titre : "3 titre",
        casting : "3 casting",
        dateSortie : "03/00/0000",
        synopsis : "3 synopsis",
        nbEntree : 3000
    },         
];

for (let i=0; i<listeFilms.length; i++){
    console.log(listeFilms[i].titre); //boucle for
};

for (indexFilms in listeFilms) {
    console.log(listeFilms[indexFilms].titre); //boucle forin
};

listeFilms.forEach (function (listeFilms){
    console.log(listeFilms.titre) //boucle forEach
});
console.log();
listeFilms[0].titre = "123 nous irons au bois";

console.log(listeFilms[0].nbEntree);
console.log();

let filmFilter = listeFilms.filter(listeFilms => listeFilms.nbEntree >= 1500);
console.log(filmFilter); // filtrer
console.log();

//On utilise la methode reducer
const reducer = (accumulator, listeFilms)=> accumulator+ listeFilms.nbEntree;
let nbEntreeTotal = listeFilms.reduce(reducer, 0);
console.log(nbEntreeTotal + "tickets vendus");
// " => " = fonction

let nombreEntree = filmFilter.reduce(function (acc, obj) {return acc + obj.nbEntree;}, 0); 

console.log(`${nombreEntree} tickets vendus (filtre pour les films ayant vendus plus de 1500 places)`);
console.log(nombreEntree + " tickets vendus...");