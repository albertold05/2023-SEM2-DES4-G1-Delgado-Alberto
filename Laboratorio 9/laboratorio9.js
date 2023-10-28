// HTML Elements
const form = document.querySelector('form');

// ----------------------------------------

// Functions

  const createCards = (quantity) => {
    if(quantity > 1 && quantity < 5) {
      let x = 1;
      let y = 1;
      do {
        let row = document.querySelector(`.fila${x}`);
        let square = '';
        for (let i = 0; i < x; i++) {
          square += `<div class="caja">${y}</div>`;
          y++;
        }
        row.innerHTML = square;
        x++;
      } while (x <= quantity);
    }
  }

// ----------------------------------------

// Event Handlers
const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const cards = createCards(formData.get('quantity'));

}
// ----------------------------------------

// Event Listeners
form.addEventListener('submit', onFormSubmit);
// ----------------------------------------