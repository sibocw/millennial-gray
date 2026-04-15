// Reconstruct email links stored in reverse for obfuscation
document.querySelectorAll('a[data-e]').forEach(function (el) {
  var email = el.dataset.e.split('').reverse().join('');
  el.querySelector('span').textContent = email;
  el.addEventListener('click', function (e) {
    e.preventDefault();
    window.location = 'mailto:' + email;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menuToggle');
  var nav    = document.getElementById('mobileNav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    nav.setAttribute('aria-hidden', String(!isOpen));
  });

  // Close drawer when a link is clicked
  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      nav.setAttribute('aria-hidden', 'true');
    });
  });

  // Close drawer on outside click
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      nav.setAttribute('aria-hidden', 'true');
    }
  });
});
