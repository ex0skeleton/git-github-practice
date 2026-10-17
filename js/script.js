const button = document.querySelector('#practice-button');
const message = document.querySelector('#message');
let clicks = 0;

button.addEventListener('click', () => {
  clicks += 1;
  message.textContent = `You clicked ${clicks} ${clicks === 1 ? 'time' : 'times'}. Keep learning!`;
});
