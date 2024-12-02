document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section"); // Select all sections
  const options = {
    root: null, // Use viewport as the root
    threshold: 0, // Trigger when 60% of the section is visible
    rootMargin: "-50% 0px -50% 0px", // Adjust to trigger when the section's center is near the viewport's center
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        history.replaceState(null, null, `#${id}`); // Update URL hash
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section)); // Observe each section
});
