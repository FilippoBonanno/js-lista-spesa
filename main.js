
// CREO UN ARRAY CON UNA LISTA DI ELEMENTI
let list = [
    "banane",
    "zucchine",
    "peperoni",
    "yougurt",
    "pollo",
    "maiale",
    "verdure",
    "pizza"
];
// STAMPO IN CONSOLE LA LISTA
console.log(list);


// // CREO UN CICLO FOR CHE MI ITERA OGNI ELEMENTO PARTENDO DALLA POSIZIONE 0 FINO A FINE LISTA
// for (let i = 0; i < list.length; i++) {
//     // CREO UNA CONSTANTE "ELEMENT" CHE SIA = ALL'ELEMENTO IN QUEL MOMENTO IN LISTA PIù i 
// 	const element = list[i];
// 	console.log(i, element);
	
// }
let i = 0
let item = document.querySelector(`ul`);
while (i < list.length) {
    

    const element = list[i];
    // console.log(element);
    item.innerHTML += `<li>${element}</li>`;

    i++;

}