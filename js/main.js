document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // mark current page link as active
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });

  // simple admission-form handler (no backend on a static site)
  var form = document.querySelector('#admission-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.querySelector('#form-note');
      if (note) {
        note.textContent = 'Заявка сформирована. Подключите приём заявок на сервере или укажите e-mail приёмной комиссии для отправки формы.';
        note.style.display = 'block';
      }
    });
  }
});
