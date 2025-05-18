// Intersection Observer for fade-in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1
});

// Observe all fade-in sections
document.querySelectorAll('.section-fade-in').forEach((el) => observer.observe(el));

// Parallax effect for background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelector('.animated-bg').style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Enhanced hover effects for cards
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});
