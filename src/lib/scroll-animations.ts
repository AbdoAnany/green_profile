// Initialize scroll animations for elements with scroll animation classes
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right'
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
}

// Initialize staggered animations for container elements
export function initStaggeredAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('visible');
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe containers with stagger class
  const staggerContainers = document.querySelectorAll('.stagger-children');
  staggerContainers.forEach((container) => {
    observer.observe(container);
  });

  return observer;
}

// Auto-initialize when DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initStaggeredAnimations();
  });
}
