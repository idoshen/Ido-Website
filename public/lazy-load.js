document.addEventListener("DOMContentLoaded", () => {
    const components = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.1 }
    );
    components.forEach(component => observer.observe(component));
  });
  