// nav.js – inject consistent nav + hamburger drawer on every page
(function () {
  const current = location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'consulting.html',   label: '💼 Business Consulting' },
    { href: 'automation.html',   label: '⚙️ Automation' },
    { href: 'DigitalForms.html', label: '📋 Digital Forms' },
    { href: 'cases.html',        label: '📁 Case Studies' },
    { href: 'contact.html',      label: '✉️ Contact' },
  ];

  const pills = links.map(l => {
    const active = current === l.href ? ' active' : '';
    return `<a href="${l.href}" class="nav-pill${active}">${l.label}</a>`;
  }).join('');

  const drawerLinks = links.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('');

const logoSVG = `<img src="VTlogoNoBackground.svg" alt="Viola Technology" style="width:36px;height:36px;object-fit:contain;" />`;
  const navHTML = `
    <nav class="site-nav" role="navigation" aria-label="Main navigation">
      <a href="index.html" class="nav-logo" aria-label="Viola Technology home">
        ${logoSVG}
        <span class="nav-logo-text">VIOLA <span>TECHNOLOGY</span></span>
      </a>
      <div class="nav-pills">${pills}</div>
      <div class="nav-right">
        <a href="contact.html" class="nav-cta">Get Started</a>
        <button class="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-drawer">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="nav-drawer" id="nav-drawer" aria-hidden="true">
      ${drawerLinks}
      <a href="contact.html" class="drawer-cta">Schedule a Free Consultation</a>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // hamburger toggle
  const btn = document.querySelector('.hamburger');
  const drawer = document.getElementById('nav-drawer');
  btn.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    drawer.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // close on link click
  drawer.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    })
  );
})();
