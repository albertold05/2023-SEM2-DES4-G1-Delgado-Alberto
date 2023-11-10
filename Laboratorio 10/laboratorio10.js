// HTML Elements
const form = document.querySelector('form');
const response = document.querySelector('#response');
// ----------------------------------------

// Functions

function fibonacci(quantity) {
  let fib = [1, 1]; 
  for (let i = 2; i < quantity; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}


const createCards = (quantity) => {
  if (quantity < 20 && quantity > 1) {
    let cards = '';
    let fibNumbers = fibonacci(quantity);
    for (let i = 0; i < fibNumbers.length; i++) {
      cards += `
        <div class="square"><span class="close">X</span>${fibNumbers[i]}</div>
      `;
    }
    return cards;
  }
};

const drawCards = (cards) => {
  response.innerHTML = cards;
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    const closeBtn = square.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      square.style.display = 'none';
    });
  });
};

// ----------------------------------------

// Event Handlers
const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const cards = createCards(formData.get('quantity'));
  drawCards(cards);
}
// ----------------------------------------

// Event Listeners
form.addEventListener('submit', onFormSubmit);
// ----------------------------------------