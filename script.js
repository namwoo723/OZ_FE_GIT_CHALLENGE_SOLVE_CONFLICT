document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelectorAll("section");
  section.forEach((sec) => {
    sec.addEventListener("click", () => { console.log("MAIN branch click");
    sec.classList.toggle("highlight");
    });
  });
});
