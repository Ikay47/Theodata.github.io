document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenuBtn && mobileMenu && menuIcon) {
      mobileMenuBtn.addEventListener('click', function() {
          mobileMenu.classList.toggle('show');
          menuIcon.textContent = mobileMenu.classList.contains('show') ? '✕' : '☰';
      });

      // Close mobile menu when clicking on a link
      const mobileMenuLinks = mobileMenu.querySelectorAll('a');
      mobileMenuLinks.forEach(link => {
          link.addEventListener('click', function() {
              mobileMenu.classList.remove('show');
              menuIcon.textContent = '☰';
          });
      });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      });
  });

  // Progress bars
  function animateProgressBars() {
      const progressBars = document.querySelectorAll('.progress-fill');
      progressBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = width + '%';
      });
  }

  // Intersection Observer
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              if (entry.target.id === 'skills') {
                  setTimeout(animateProgressBars, 300);
              }
          }
      });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const formData = new FormData(contactForm);
          console.log('Form submitted:', Object.fromEntries(formData.entries()));
          alert('Thank you for your message! I\'ll get back to you soon.');
          contactForm.reset();
      });
  }

  // Header background opacity
  window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      const scrollTop = window.pageYOffset;
      if (header) {
          header.style.background = scrollTop > 50
              ? 'rgba(10, 15, 28, 0.95)'
              : 'rgba(10, 15, 28, 0.8)';
      }
  });

  // Page load fade-in
  setTimeout(() => {
      document.body.style.opacity = '1';
  }, 100);
});
