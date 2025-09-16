const images = document.querySelectorAll(".about-img");
  const text = document.querySelector(".description");

  images.forEach((img, i) => {
    // Tilt et décalage aléatoire
    const tilt = Math.random() * 20 - 10; // -10° à +10°
    const xOffset = Math.random() * 40 - 20; // -20px à +20px
    img.style.transform = `rotate(${tilt}deg) translateX(${xOffset}px)`;
    
    // Superposition
    img.style.zIndex = i + 1;
  });

  // Scroll pour passer en sticky
  window.addEventListener("scroll", () => {
    const rect = text.getBoundingClientRect();
    images.forEach((img) => {
      const imgRect = img.getBoundingClientRect();
      if (imgRect.top <= rect.top + window.scrollY) {
        img.classList.add("sticky-img");
      } else {
        img.classList.remove("sticky-img");
      }
    });
  });


  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeInRightElements = document.querySelectorAll(".animate-fade-in");
  const fadeInOpacityElements = document.querySelectorAll(
    ".animate-fade-opacity"
  );
  const delayBetween = 200;

  const handleIntersection = (elements, animationName) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains("animated")
          ) {
            entry.target.classList.add("animated");

            setTimeout(() => {
              entry.target.style.animation = `${animationName} 1s ease forwards`;
            }, index * delayBetween);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
  };

  handleIntersection(fadeInRightElements, "fadeInRightBlur");
  handleIntersection(fadeInOpacityElements, "fadeInOpacity");
});