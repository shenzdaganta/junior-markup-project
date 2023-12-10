(() => {
    const refs = {
        openModalBtn: document.querySelector("[ts-modal-open]"),
        closeModalBtn: document.querySelector("[ts-modal-close]"),
        modal: document.querySelector("[ts-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();