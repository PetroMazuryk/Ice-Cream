(() => {
  const refs = {
    openReadBtn: document.querySelector('[read-modal-open]'),
    closeReadBtn: document.querySelector('[read-modal-close]'),
    modalRead: document.querySelector('[read-modal]'),
  };

  refs.openReadBtn.addEventListener('click', toggleReadModal);
  refs.closeReadBtn.addEventListener('click', toggleReadModal);

  function toggleReadModal() {
    refs.modalRead.classList.toggle('is-hidden');
  }
})();
