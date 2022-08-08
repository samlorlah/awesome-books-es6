const navLinks = Array.from(
  document.body.querySelectorAll("header nav ul li a")
);

const sections = Array.from(document.body.querySelectorAll("section"));

export const navigation = navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const idForSectionToShow = navLink.getAttribute("href");
    sections.forEach((section) => {
      const id = section.getAttribute("id");
      if (`#${id}` === idForSectionToShow) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  });
});
