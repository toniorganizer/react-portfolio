
document.addEventListener('DOMContentLoaded', function() {
  // Menambahkan class 'fade-blog' ke semua elemen dengan class 'fade-blog'
  var elements = document.querySelectorAll('.fade-blog');
  elements.forEach(function(element) {
    element.classList.add('fade-blog');
  });

  // Menambahkan event listener untuk mengatur efek fade in saat elemen berada dalam viewport
  document.addEventListener('scroll', function() {
    var blogs = document.querySelectorAll('.fade-blog');
    blogs.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('open');
      }
    });
  });
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

