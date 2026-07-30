document.getElementById('year').textContent = new Date().getFullYear();
  const burger = document.getElementById('burger');
  const navlinks = document.getElementById('navlinks');
  burger.addEventListener('click', () => {
    navlinks.style.display = navlinks.style.display === 'flex' ? 'none' : 'flex';
    navlinks.style.flexDirection = 'column';
    navlinks.style.position = 'absolute';
    navlinks.style.top = '64px';
    navlinks.style.right = '20px';
    navlinks.style.background = '#ffffff';
    navlinks.style.border = '1px solid #dcdcdc';
    navlinks.style.padding = '16px 24px';
    navlinks.style.gap = '14px';
  });

  const sections = document.querySelectorAll('section[id]');
  const navA = document.querySelectorAll('.navlinks a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (scrollY >= top) current = sec.getAttribute('id');
    });
    navA.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });