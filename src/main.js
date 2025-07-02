import './style.css'

const links = document.querySelectorAll('.nav-links');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(l => l.classList.remove('text-teal-400'));
    this.classList.add('text-teal-400');
  });
});

const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });