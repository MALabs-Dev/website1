/* ============================================================
   Jamia Ayesha Siddiqua — Main JavaScript
   Handles: hamburger menu, dropdowns, tabs, filters, forms,
            lightbox, gallery filter, news filter, smooth scroll
   ============================================================ */

/* ---------- Mobile Hamburger Menu ---------- */
(function () {
  const hamburger = document.getElementById('hamburger');
  const navList   = document.getElementById('navList');

  if (!hamburger || !navList) return;

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
  });

  // Mobile: tap on a dropdown parent toggles the sub-menu
  const dropdownParents = navList.querySelectorAll('.has-dropdown');
  dropdownParents.forEach(function (item) {
    const link = item.querySelector(':scope > a');
    if (!link) return;
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', function (e) {
    if (!navList.contains(e.target) && !hamburger.contains(e.target)) {
      navList.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
})();

/* ---------- Highlight Active Nav Link ---------- */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks    = document.querySelectorAll('.nav-list a');
  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href.split('#')[0] === currentPage) {
      link.classList.add('active');
    }
  });
})();

/* ---------- Language Tab Switcher (about.html) ---------- */
function switchTab(lang) {
  // Hide all panels
  document.querySelectorAll('.tab-panel').forEach(function (panel) {
    panel.classList.remove('active');
  });
  // Deactivate all buttons
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });
  // Show selected panel
  const target = document.getElementById('tab-' + lang);
  if (target) target.classList.add('active');
  // Activate selected button
  const buttons = document.querySelectorAll('.tab-btn');
  const labels  = { en: 'English', ur: 'اردو', ar: 'عربي', hi: 'हिन्दी' };
  buttons.forEach(function (btn) {
    if (btn.textContent.trim() === labels[lang] || btn.getAttribute('onclick') === "switchTab('" + lang + "')") {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    }
  });
}

/* ---------- Language Switcher (EN / Urdu toggle) ---------- */
function setLang(lang) {
  // Update button states
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.remove('active');
  });
  const clicked = Array.from(document.querySelectorAll('.lang-btn')).find(function (btn) {
    return btn.getAttribute('onclick') === "setLang('" + lang + "')";
  });
  if (clicked) clicked.classList.add('active');

  // Toggle RTL on body for Urdu
  if (lang === 'ur') {
    document.body.style.fontFamily = "'Noto Nastaliq Urdu', 'Amiri', serif";
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ur');
  } else {
    document.body.style.fontFamily = '';
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
  }
}

/* ---------- News Filter (news.html) ---------- */
function filterNews(category, btn) {
  // Update button states
  document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.news-card-full').forEach(function (card) {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ---------- Gallery Filter (gallery.html) ---------- */
function filterGallery(category, btn) {
  document.querySelectorAll('.gf-btn').forEach(function (b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.g-item').forEach(function (item) {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

/* ---------- Lightbox (gallery.html) ---------- */
function openLightbox(item) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

// Close lightbox on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

/* ---------- Admission Form Submit (admissions.html) ---------- */
function handleFormSubmit(e) {
  e.preventDefault();
  const form    = document.getElementById('admissionForm');
  const success = document.getElementById('formSuccess');

  // Basic client-side validation already handled by HTML5 required attributes
  // Show success message
  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'block';
    // Scroll to success message
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /* ---- TO ACTUALLY SEND EMAILS ----
     Option 1 — Formspree (free, no server needed):
       1. Go to https://formspree.io and create a free account
       2. Create a new form, copy your endpoint URL
       3. Change the <form> tag to: <form action="https://formspree.io/f/YOUR_ID" method="POST">
       4. Remove the onsubmit="handleFormSubmit(event)" attribute
       5. Add <input type="hidden" name="_subject" value="New Admission Enquiry">

     Option 2 — Netlify Forms (if hosting on Netlify):
       Add netlify attribute to the form tag: <form netlify>
  ---------------------------------------------------------------- */
}

/* ---------- Contact Form Submit (contact.html) ---------- */
function handleContactSubmit(e) {
  e.preventDefault();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');
  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'block';
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/* ---------- Smooth Scroll for anchor links ---------- */
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href').slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

/* ---------- Scroll-reveal animation (subtle fade-in) ---------- */
(function () {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity  = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Apply to cards and sections
  document.querySelectorAll('.card, .course-card, .why-card, .news-card, .news-card-full, .leader-card, .method-card, .impact-card').forEach(function (el) {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
})();

/* ---------- Sticky header shadow on scroll ---------- */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
      header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    }
  }, { passive: true });
})();
