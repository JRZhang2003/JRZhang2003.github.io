(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('siteNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    nav.classList.toggle('is-open');
  });
})();
