document.addEventListener('DOMContentLoaded', function () {
  // мобильное меню
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('nav.main');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // подсветка текущей страницы в меню
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.classList.add('on');
  });

  // форма заявки: открывает письмо на почту колледжа
  var form = document.getElementById('admission-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var body =
        'ФИО: ' + (f.get('fio') || '') + '\n' +
        'Телефон: ' + (f.get('phone') || '') + '\n' +
        'Специальность: ' + (f.get('spec') || '') + '\n\n' +
        (f.get('msg') || '');
      var url = 'mailto:Vatk1968@mail.ru?subject=' + encodeURIComponent('Заявка с сайта VATK') +
        '&body=' + encodeURIComponent(body);
      window.location.href = url;
      var note = document.getElementById('form-note');
      if (note) {
        note.textContent = 'Откроется ваша почтовая программа с готовым письмом — останется нажать «Отправить».';
        note.style.display = 'block';
      }
    });
  }
});
