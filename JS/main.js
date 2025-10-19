const burger  = document.querySelector('.nav__burger');
const panel   = document.getElementById('mobilePanel');   // новий ID
const overlay = document.querySelector('.nav__overlay');

function openMenu(){
  panel.hidden = false;
  overlay.hidden = false;
  requestAnimationFrame(()=>{
    panel.classList.add('is-open');
    overlay.classList.add('is-open');
  });
  burger.classList.add('is-open');
  burger.setAttribute('aria-expanded','true');
  document.documentElement.style.overflow = 'hidden';
}
function closeMenu(){
  panel.classList.remove('is-open');
  overlay.classList.remove('is-open');
  burger.classList.remove('is-open');
  burger.setAttribute('aria-expanded','false');
  document.documentElement.style.overflow = '';
  setTimeout(()=>{
    panel.hidden = true;
    overlay.hidden = true;
  }, 250);
}
if (burger && panel && overlay){
  burger.addEventListener('click', () =>
    panel.classList.contains('is-open') ? closeMenu() : openMenu()
  );
  overlay.addEventListener('click', closeMenu);
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

// закриваємо панель при кліку на будь-який пункт/соц-іконку
document.querySelectorAll('#mobilePanel a').forEach(a => {
  a.addEventListener('click', () => {
    if (panel.classList.contains('is-open')) closeMenu();
  });
});