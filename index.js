import Books from './modules/books.js'
import { navigation } from "./modules/nav.js";
import { luxon } from "./modules//luxon.js";

const books = new Books();
const addBookForm = document.getElementById("add-books-form");
const bookList = document.getElementById("list");
const addNewBookSection = document.getElementById("add-new");
const displayDate = document.querySelector('.date');

navigation;

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector(".titleField");
  const author = document.querySelector(".authorField");

  if (title.value === "" && author.value === "")
    return alert("All fields are required");

  const newBook = {
    title: title.value,
    author: author.value,
  };

  books.addBook(newBook);
  addBookForm.reset();
  addNewBookSection.classList.add("hidden");
  bookList.classList.remove("hidden");
});

displayDate.innerHTML = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED);