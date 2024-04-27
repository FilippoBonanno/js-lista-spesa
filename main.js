
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


// CREO UN CICLO FOR CHE MI ITERA OGNI ELEMENTO PARTENDO DALLA POSIZIONE 0 FINO A FINE LISTA
for (let i = 0; i < list.length; i++) {
    // CREO UNA CONSTANTE "ELEMENT" CHE SIA = ALL'ELEMENTO IN QUEL MOMENTO IN LISTA PIù i 
	const element = list[i];
	console.log(i, element);
	
}