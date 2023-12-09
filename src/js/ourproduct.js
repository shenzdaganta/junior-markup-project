document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.querySelector('.our-products-container');
  const cards = document.querySelectorAll('.card');
  const dotNavigation = document.querySelector('.dot-navigation');
  const dots = document.querySelectorAll('.dot');
  const cardCount = cards.length;
  let currentIndex = 0;

  function highlightDot(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.style.opacity = i === index ? 1 : 0.5;
    });
  }

  function showCards(index) {
    cards.forEach((card, i) => {
      const newIndex = (i + index) % cardCount;
      card.style.display = i >= index && i < index + 4 ? 'block' : 'none';
    });
  }

  function updateDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index / 4);
    });
  }

  function showNextCards() {
    currentIndex = (currentIndex + 4) % cardCount;
    cardsContainer.style.transition = 'left 0.5s ease-in-out';
    cardsContainer.style.left = `-${currentIndex * 100}%`;
    showCards(currentIndex);
    updateDots(currentIndex);
  }

  function showPrevCards() {
    currentIndex = (currentIndex - 4 + cardCount) % cardCount;
    cardsContainer.style.transition = 'left 0.5s ease-in-out';
    cardsContainer.style.left = `-${currentIndex * 100}%`;
    showCards(currentIndex);
    updateDots(currentIndex);
  }

  document.querySelector('.prev-button').addEventListener('click', () => {
    showPrevCards();
    setTimeout(() => {
      cardsContainer.style.transition = ''; // Reset transition after animation
    }, 500);
  });

  document.querySelector('.next-button').addEventListener('click', () => {
    showNextCards();
    setTimeout(() => {
      cardsContainer.style.transition = ''; // Reset transition after animation
    }, 500);
  });

  function highlightDot(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  cards.forEach((card, i) => {
    card.addEventListener('mouseover', () => {
      const cardIndex = (currentIndex + i) % cardCount;
      highlightDot(cardIndex);
    });

    card.addEventListener('mouseout', () => {
      highlightDot(currentIndex);
    });
  });

  // Initial display
  showCards(currentIndex);
  updateDots(currentIndex);
});
