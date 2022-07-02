function openMobileMenu() {
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const navMobileLinks = document.getElementById('nav-mobile-links');

  menuIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');
  navMobileLinks.style.display = 'flex';
}
function closeMobileMenu() {
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const navMobileLinks = document.getElementById('nav-mobile-links');

  menuIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  navMobileLinks.style.display = 'none';
}