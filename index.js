import Books from './modules/books.js';
import navigation from './modules/nav.js';
import { luxon } from './modules/luxon.js';

const books = new Books();
const addBookForm = document.getElementById('add-books-form');
const bookList = document.getElementById('list');
const addNewBookSection = document.getElementById('add-new');
const displayDate = document.querySelector('.date');
const navLinks = Array.from(
  document.body.querySelectorAll('header nav ul li a'),
);

navLinks.forEach(navigation);

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('.titleField');
  const author = document.querySelector('.authorField');

  if (title.value === '' && author.value === '') return null;

  const newBook = {
    title: title.value,
    author: author.value,
  };

  books.addBook(newBook);
  addBookForm.reset();
  addNewBookSection.classList.add('hidden');
  bookList.classList.remove('hidden');
  return null;
});

displayDate.innerHTML = luxon.DateTime.now().toLocaleString(
  luxon.DateTime.DATETIME_MED,
);
