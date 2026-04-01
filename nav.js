// nav.js – inject consistent nav + hamburger drawer on every page
(function () {
  const current = location.pathname.split('/').pop() || 'index.html';

  const icon = (path, vb='0 0 24 24') =>
    `<svg width="13" height="13" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0">${path}</svg>`;

  const links = [
    { href: 'consulting.html',   label: 'Consult',   icon: icon('<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>') },
    { href: 'automation.html',   label: 'Automate',  icon: icon('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3h-8l-2 4h12zM12 12v3M9 15h6"/>') },
    { href: 'reporting.html',    label: 'Visualize', icon: icon('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 17V13M12 17V9M16 17v-4"/>') },
    { href: 'DigitalForms.html', label: 'Digitize',  icon: icon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>') },
    { href: 'cases.html',        label: 'Results',   icon: icon('<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>') },
    { href: 'contact.html',      label: 'Connect',   icon: icon('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>') },
  ];

  const pills = links.map(l => {
    const active = current === l.href ? ' active' : '';
    return `<a href="${l.href}" class="nav-pill${active}">${l.icon}${l.label}</a>`;
  }).join('');

  const drawerLinks = links.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('');

const logoSVG = `<img src="VTlogoNoBackground.png" alt="Viola Technology" style="width:36px;height:36px;object-fit:contain;" />`;
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
