(function () {
  'use strict';

  var toggle = document.querySelector('[data-nav-toggle]');
  var panel = document.querySelector('[data-nav-panel]');

  if (!toggle || !panel) return;

  function open() {
    panel.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function close() {
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    if (panel.classList.contains('is-open')) {
      close();
    } else {
      open();
    }
  }

  toggle.addEventListener('click', toggleMenu);

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
