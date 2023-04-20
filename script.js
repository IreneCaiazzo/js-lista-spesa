// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.

const arrList = [
	'pomodori',
	'funghi',
	'latte',
	'carne',
	'caffè',
	'peperoni',
	'biscotti',
	'salmone',
	'pasta',
];

const eleList = document.querySelector('#list');

// soluzione con il ciclo for
for (let i = 0; i < arrList.length; i++) {
	console.log(arrList[i]);
	eleList.innerHTML += `<li>${arrList[i]}</li>`;
}

// soluzione ciclo while
let i = 0;

while (i < arrList. lenght){
    console.log(arrList[i]);
    eleList.innerHTML += `<li>${arrList[i]}<li>`;
    i++;
}

const btnAdd = document.querySelector('#btn-add');
const inputAdd = document.querySelector('#input-add');

btnAdd.addEventListener('click',
	function () {
		// prendere il valore dall'input
		const addText = inputAdd.value.trim().toLowerCase();

		if (addText != '') {
			// console.log di addText
			console.log(addText);
			// pusharlo nell'array
			arrList.push(addText);
			console.log(arrList);
			// stampare il valore in pagina
			eleList.innerHTML += `<li>${addText}</li>`;
		}

		inputAdd.value = '';
	}
)