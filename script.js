document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelectorAll("section");
  section.forEach((sec) => {
    sec.addEventListener("click", () => {
      sec.classList.toggle("highlight");
    });
  });
});
