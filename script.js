// Animação suave ao rolar (scroll reveal com delay automático)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.style.transitionDelay = `${index * 100}ms`;
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));
