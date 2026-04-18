// =========================================
// NAV TOGGLE (Mobile Menu)
// =========================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// =========================================
// CONTACT FORM HANDLER (Dummy client-side)
// =========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    alert('✅ Message sent! (Note: This demo form is not connected to a backend)');
    contactForm.reset();
  });
}

// =========================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
