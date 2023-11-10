const form = document.getElementById('myForm');
const piramide = document.getElementById('piramide');

const createCards = (quantity) => {
    piramide.innerHTML = ''; // Limpiar la pirámide anterior
    if (quantity >= 2 && quantity <= 50) {
        let pyramid = [];
        for (let i = 0; i < quantity; i++) {
            pyramid.push([]);
            let row = document.createElement('div');
            row.classList.add(`fila${i + 1}`);
            let square = '';
            for (let j = 0; j <= i; j++) {
                let min = 1;
                let max = 3;
                let randomNumInRange = Math.floor(Math.random() * (max - min + 1)) + min;
                pyramid[i].push(randomNumInRange);
                square += `<div class="caja">${randomNumInRange}</div>`;
            }
            row.innerHTML = square;
            piramide.appendChild(row);
        }

        for (let i = quantity - 2; i >= 0; i--) {
            for (let j = 0; j <= i; j++) {
                pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
            }
        }

        let maxPath = pyramid[0][0];
        console.log(`El camino con el mayor peso tiene un valor de ${maxPath}.`);
    }
};

const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const cards = createCards(parseInt(formData.get('quantity')));
};

form.addEventListener('submit', onFormSubmit);