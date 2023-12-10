//Hero modal//
// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();

//topseller//

$("#mobile_code").intlTelInput({
	initialCountry: "in",
	separateDialCode: true,
	utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
});

const btnElList = document.querySelectorAll('.ts-chocolate');

btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        btnEl.classList.toggle('ts-btn');
    });
});

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();


// Review modal//

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    fade:true,
    centerSlider: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
         slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
  }
  });

//Our Products//

document.addEventListener("DOMContentLoaded", function () {
        const cardsContainer = document.querySelector('.our-products-container');
        const cards = document.querySelectorAll('.card');
        const dotNavigation = document.querySelector('.dot-navigation');
        const dots = document.querySelectorAll('.dot');
        const cardCount = cards.length;
        let currentIndex = 0;
        let isDragging = false;
        let startX;

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

        cardsContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - startX;
                const threshold = 50; // Adjust this threshold as needed
                if (deltaX > threshold) {
                    showPrevCards();
                    startX = e.clientX;
                } else if (deltaX < -threshold) {
                    showNextCards();
                    startX = e.clientX;
                }
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            setTimeout(() => {
                cardsContainer.style.transition = ''; // Reset transition after dragging
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
    
//subscribe modal//

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
