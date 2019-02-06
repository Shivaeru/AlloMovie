let films = [
    {
        titre: "Shining",
        casting: "Stanley Kubrick",
        acteurs: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
        dateSortie: "01/00/0000",
        synopsis: "1 synopsis",
        nbEntree: 500
    },
    {
        titre: "Shutter Island",
        casting: "Martin Scorsese",
        acteurs: ["Leonardo Dicaprio", "Ben Kingsley"],
     /*    acteurs: [
        {prenom:"Leonardo", nom:"Dicaprio"},
        {prenom:"Ben", nom:"Kingsley"},
        ], */
        dateSortie: "02/00/0000",
        synopsis: "2 synopsis",
        nbEntree: 2000
    },
    {
        titre: "Interstellar",
        casting: "Christopher Nolan",
        acteurs: ["Matthew McConaughey", "Anne Hataway", "Jessica Chastain"],
        dateSortie: "03/00/0000",
        synopsis: "3 synopsis",
        nbEntree: 3000
    }      
];

let bouton = document.createElement('button');
bouton.textContent = "Click on me bitch!";

bouton.onclick = function() {
    alert(films[0].casting)};
//let textBtn = document.createTextNode("Pas sur moi");
//bouton.appendChild(textBtn);
document.getElementById('film').appendChild(bouton);



document.getElementById('film').insertAdjacentHTML("beforebegin", "<h1>Ma liste de films</h1>");
document.getElementById('film').insertAdjacentHTML("afterend", '<span id="copyright">Copyright</span>'); //ajouter un id au span Copyright
document.getElementById('film').insertAdjacentHTML("beforebegin", '<h2 id="sous-titre">Meilleurs films</h2>'); //ajouter un h2 avec un id avant les films
document.getElementById('copyright').insertAdjacentText("beforebegin", '@'); //ajouter un @ au tout début de la phrase
document.getElementById('copyright').innerHTML = ('nouveau copyright <b><sub>2019</sub></b>'); //écrire entre des balises
document.getElementById('copyright').insertAdjacentText("afterend", ' HollyShiva'); //ajouter le nom de l'entreprise à la fin de la phrase

document.getElementById('sous-titre').style.color = 'red';


function addFilms(unFilm){ //création de la fonction pour ajouter un film
   return '<div class="liste-films">'+
    '<div>' + unFilm.titre + '</div>' +
    '<div>' + unFilm.casting + '</div>' +
    '<div>' + unFilm.dateSortie + '</div>' +
    '<div>' + unFilm.synopsis + '</div>' +
    '<div>' + unFilm.nbEntree + '</div>'+
    '</div>' ;
}

let newFilm = { //ajout d'un nouveau film
    titre: "Inception",
    casting: "Christopher Nolan",
    dateSortie: "04/00/0000",
    synopsis: "4 synopsis",
    nbEntree: 5500
};
document.getElementById('film').insertAdjacentHTML("beforeend", addFilms(newFilm));


films.forEach(function(unFilm){
    let filmHtml='<div class="liste-films">'+
    '<div>' + unFilm.titre + '</div>' +
    '<div>' + unFilm.casting + '</div>' +
    '<div>' + unFilm.dateSortie + '</div>'+ 
    '<div>' + unFilm.synopsis + '</div>' +
    '<div>' + unFilm.nbEntree + '</div> </div>';

    document.getElementById('film').insertAdjacentHTML("beforeend", filmHtml);
});
