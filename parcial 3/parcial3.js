const form = document.getElementById('myForm');
const piramide = document.getElementById('piramide');

const createCards = (quantity) => {
    piramide.innerHTML = ''; // Limpiar la pirámide anterior
    if (quantity >= 2 && quantity <= 50) {
        let x = 1;
        let y = 1;
          // Para generar un número aleatorio en un rango específico, por ejemplo, entre 1 y 100:
          let min = 1;
          let max = 100;
          let randomNumInRange = Math.floor(Math.random() * (max - min + 1)) + min;

          // Puedes ajustar los valores de 'min' y 'max' según el rango que necesites



        do {
            let row = document.createElement('div');
            row.classList.add(`fila${x}`);
            let square = '';
            for (let i = 0; i < x; i++) {
                let min = 1;
                let max = 100;
                let randomNumInRange = Math.floor(Math.random() * (max - min + 1)) + min;
                square += `<div class="caja">${randomNumInRange}</div>`;
                y++;
            }
            row.innerHTML = square;
            piramide.appendChild(row);
            x++;
        } while (x <= quantity);
    }
};









const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const cards = createCards(parseInt(formData.get('quantity')));
};

form.addEventListener('submit', onFormSubmit);