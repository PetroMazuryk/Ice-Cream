(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const nav = document.querySelectorAll('.mob-list__link');

  const doCloseMobMenu = () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || 'false';
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  };

  menuBtnRef.addEventListener('click', () => {
    doCloseMobMenu();
    for (var i = 0; i < nav.length; i++) {
      nav[i].onclick = function (e) {
        e.preventDefault();
        doCloseMobMenu();
      };
    }
  });
})();
