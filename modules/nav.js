const sections = Array.from(document.body.querySelectorAll('section'));

const navigation = (navLink) => {
  navLink.addEventListener('click', () => {
    const idForSectionToShow = navLink.getAttribute('href');
    sections.forEach((section) => {
      const id = section.getAttribute('id');
      if (`#${id}` === idForSectionToShow) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  });
};

export default navigation;