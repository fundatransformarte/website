(function () {
  // Mobile nav toggle
  var btn = document.querySelector('.nav-toggle');
  var header = document.querySelector('header.site');
  if (btn && header) {
    btn.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', isOpen);
    });
    document.querySelectorAll('#main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Testimonial switcher (home)
  var side = document.getElementById('testSide');
  if (side) {
    side.addEventListener('click', function (e) {
      var mini = e.target.closest('.test-mini');
      if (!mini) return;
      side.querySelectorAll('.test-mini').forEach(function (m) {
        m.classList.toggle('active', m === mini);
      });
      var quote = mini.dataset.quote || '';
      var name = mini.dataset.name || '';
      var image = mini.dataset.image || '';
      var qEl = document.getElementById('mainQuote');
      var nEl = document.getElementById('mainName');
      var aEl = document.getElementById('mainAvatar');
      if (qEl) qEl.textContent = quote;
      if (nEl) nEl.textContent = name;
      if (aEl) {
        if (image) {
          aEl.innerHTML = '<img src="' + image + '" alt="' + name + '">';
        } else {
          aEl.textContent = (name || '?').charAt(0);
        }
      }
    });
  }

  // Donation amount select (home)
  var amounts = document.getElementById('amounts');
  if (amounts) {
    amounts.addEventListener('click', function (e) {
      var b = e.target.closest('.amount');
      if (!b) return;
      amounts.querySelectorAll('.amount').forEach(function (a) {
        a.classList.toggle('selected', a === b);
      });
    });
  }
})();
