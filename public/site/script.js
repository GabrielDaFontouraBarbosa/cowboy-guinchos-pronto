/* Cowboy Guinchos — script.js
   JS mínimo: menu mobile, ano do rodapé, fechamento suave de âncoras. */

(function () {
  // Ano dinâmico no footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Fecha ao clicar em um link
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Fecha detalhes irmãos ao abrir um (FAQ acordeão simples)
  var faq = document.querySelectorAll('.faq details');
  faq.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) {
        faq.forEach(function (o) { if (o !== d) o.open = false; });
      }
    });
  });
})();
