document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section, .hero");

  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    setTimeout(() => {
      el.style.transition = "0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 150);
  });
});