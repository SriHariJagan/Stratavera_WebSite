// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      const expanded = nav.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Mark current page as active in nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const cleanHref = href.split('/').pop();
    if (cleanHref === path) a.classList.add('is-active');
  });

  // Contact form: client-side enhancement
  // The form submits to Formspree (or any backend you wire). When deployed
  // on Netlify, the data-netlify="true" attribute auto-handles submission.
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      // Only intercept if no real backend is configured
      const action = form.getAttribute('action');
      if (!action || action === '#') {
        e.preventDefault();
        const status = document.getElementById('form-status');
        if (status) {
          status.textContent =
            'Thanks — your message has been queued. ' +
            'Replace the form action with your Formspree / Netlify endpoint to enable live delivery.';
          status.style.color = '#0B1F3A';
        }
      }
    });
  }
});
