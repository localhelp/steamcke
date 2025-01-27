document.addEventListener('DOMContentLoaded', function() {
  const gameCards = document.querySelectorAll('.game-card');

  gameCards.forEach(card => {
    card.addEventListener('click', function() {
      alert('You clicked on ' + card.querySelector('p').textContent);
    });
  });
});
