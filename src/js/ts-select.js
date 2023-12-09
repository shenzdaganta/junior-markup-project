const btnElList = document.querySelectorAll('.ts-chocolate');

btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        btnEl.classList.toggle('ts-btn');
    });
});