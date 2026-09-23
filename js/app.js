document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------
     1. Mobile Menu Toggle (Hamburger Navigation)
  ------------------------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------
     2. Reveal on Scroll (Intersection Observer)
  ------------------------------------------------------------ */
  const reveals = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------
     3. Active Nav Link on Scroll (Scroll Spy)
  ------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-navy-dark', 'font-extrabold', 'border-b-2', 'border-navy-dark');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-navy-dark', 'font-extrabold', 'border-b-2', 'border-navy-dark');
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ------------------------------------------------------------
     4. Tombol "Kembali ke Atas" (Back to Top)
  ------------------------------------------------------------ */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    const toggleBackToTop = () => {
      const isPastHero = window.scrollY > 400;
      backToTop.classList.toggle('opacity-0', !isPastHero);
      backToTop.classList.toggle('pointer-events-none', !isPastHero);
      backToTop.classList.toggle('translate-y-4', !isPastHero);
    };

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------
     5. Salin Email ke Clipboard dengan Toast Feedback
  ------------------------------------------------------------ */
  const copyBtn = document.getElementById('copyEmail');
  const copyToast = document.getElementById('copyToast');

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.dataset.email || 'bagas.satrio@example.com';

      try {
        await navigator.clipboard.writeText(email);
      } catch (err) {
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      // Tampilkan toast
      if (copyToast) {
        copyToast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
        copyToast.classList.add('opacity-100', 'translate-y-0');
        clearTimeout(copyBtn._toastTimeout);
        copyBtn._toastTimeout = setTimeout(() => {
          copyToast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
          copyToast.classList.remove('opacity-100', 'translate-y-0');
        }, 2200);
      }
    });
  }
});
