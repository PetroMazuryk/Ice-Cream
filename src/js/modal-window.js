(() => {
  const refs = {
    openReadBtn: document.querySelector('[read-modal-open]'),
    closeReadBtn: document.querySelector('[read-modal-close]'),
    modalRead: document.querySelector('[read-modal]'),

    openLocationBtn: document.querySelector('[location-modal-open]'),
    closeLocationBtn: document.querySelector('[location-modal-close]'),
    modalLocation: document.querySelector('[location-modal]'),
  };

  refs.openReadBtn.addEventListener('click', toggleReadModal);
  refs.closeReadBtn.addEventListener('click', toggleReadModal);

  refs.openLocationBtn.addEventListener('click', toggleLocationModal);
  refs.closeLocationBtn.addEventListener('click', toggleLocationModal);

  function toggleReadModal() {
    refs.modalRead.classList.toggle('is-hidden');
  }

  function toggleLocationModal() {
    refs.modalLocation.classList.toggle('is-hidden');
  }
})();
