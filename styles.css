// nav.js – inject consistent nav + hamburger drawer on every page
(function () {
  const current = location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'consulting.html',   label: '💼 Biz Tech Consulting' },
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

  const logoSVG = `<svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="10" r="7" stroke="#5B3FA6" stroke-width="5" fill="none"/>
    <line x1="50" y1="17" x2="50" y2="38" stroke="#5B3FA6" stroke-width="5" stroke-linecap="round"/>
    <path d="M50 38 L22 58 Q14 75 50 92 Q86 75 78 58 L50 38Z" stroke="#5B3FA6" stroke-width="5" fill="none" stroke-linejoin="round"/>
    <path d="M50 38 L30 54" stroke="#5B3FA6" stroke-width="4" stroke-linecap="round"/>
    <path d="M50 38 L70 54" stroke="#5B3FA6" stroke-width="4" stroke-linecap="round"/>
  </svg>`;

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
