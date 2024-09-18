const books = [
  {
    title: "1984",
    author: "Джордж Орвелл",
    year: 1949,
    genre: "Антиутопія",
    urlBook: "https://uk.wikipedia.org/wiki/1984_(%D1%80%D0%BE%D0%BC%D0%B0%D0%BD)",
  },
  {
    title: "Гаррі Поттер і філософський камінь",
    author: "Дж. К. Роулінг",
    year: 1997,
    genre: "Фентезі",
    urlBook:
      "https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D1%80%D1%80%D1%96_%D0%9F%D0%BE%D1%82%D1%82%D0%B5%D1%80_%D1%96_%D1%84%D1%96%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D0%BC%D1%96%D0%BD%D1%8C",
  },
  {
    title: "Гра престолів",
    author: "Джордж Р. Р. Мартін",
    year: 1996,
    genre: "Фентезі",
    urlBook:
      "https://uk.wikipedia.org/wiki/%D0%93%D1%80%D0%B0_%D0%BF%D1%80%D0%B5%D1%81%D1%82%D0%BE%D0%BB%D1%96%D0%B2",
  },
  {
    title: "Старий і море",
    author: "Ернест Хемінгуей",
    year: 1952,
    genre: "Пригодницький роман",
    urlBook:
      "https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D0%B8%D0%B9_%D1%96_%D0%BC%D0%BE%D1%80%D0%B5",
  },
  {
    title: "Майстер і Маргарита",
    author: "Михайло Булгаков",
    year: 1967,
    genre: "Фантастика",
    urlBook:
      "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B9%D1%81%D1%82%D0%B5%D1%80_%D1%96_%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0",
  },
];

let container = document.querySelector("#bookList");
let btn = document.querySelector("#added");
let flag = true;
btn.addEventListener("click", () => {
  let bookNew = getNewBook();
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.title === bookNew.title) {
      book.author = bookNew.author;
      book.year = bookNew.year;
      book.genre = bookNew.genre;
      drawListBook();
      alert(`Your update book ${book.title}`);
      flag = false;
      break;
    }else{
      flag = true;
    }
  }
  if (flag) {
    books.push(bookNew);
    drawListBook();
    flag = true;
  }
});

drawListBook();

function drawListBook() {
  container.innerHTML = "";
  books.forEach((book) => container.append(creatBookBlock(book)));
  getEvent();
  getEvent();
}
function creatBookBlock(book = books[0]) {
  let box = document.createElement("div");
  box.classList.add("book__box");
  if (book.urlBook) {
    box.insertAdjacentHTML("beforeend", `<p>Title: <a href=${book.urlBook}>${book.title}</a></p>`);
  } else {
    box.insertAdjacentHTML("beforeend", `<p>Title : ${book.title}</p>`);
  }
  box.insertAdjacentHTML("beforeend", `<p>Author: ${book.author}</p>`);
  box.insertAdjacentHTML("beforeend", `<p>Year ${book.year}</p>`);
  box.insertAdjacentHTML("beforeend", `<p>Genre : ${book.genre}</p>`);
  return box;
}

function getNewBook() {
  let newBook = document.querySelector("fieldset");
  let title = newBook.querySelector("#title").value;
  let author = newBook.querySelector("#author").value;
  let year = newBook.querySelector("#year").value;
  let genre = newBook.querySelector("#genre").value;

  let bock = {
    title,
    author,
    year,
    genre,
    urlBook: undefined,
  };
  let inputFilds = newBook.querySelectorAll("input");
  for (const el of inputFilds) {
    if (el.type === "button") {
      continue;
    }
    el.value = "";
  }
  return bock;
}

function getEvent() {
  container.querySelectorAll(".book__box").forEach((el) => {
    el.addEventListener("click", (e) => {
      let book = e.currentTarget.querySelector("a");
      let titleFromBook = book.innerHTML;
      for (const book of books) {
        if (book.title === titleFromBook) {
          let newBook = document.querySelector("fieldset");
          newBook.querySelector("#title").value = book.title;
          newBook.querySelector("#author").value = book.author;
          newBook.querySelector("#year").value = book.year;
          newBook.querySelector("#genre").value = book.genre;
        }
      }
    });
  });
}
function getEvent() {
  container.querySelectorAll(".book__box").forEach((el) => {
    el.addEventListener("click", (e) => {
      let book = e.currentTarget.querySelector("a");
      let titleFromBook = book.innerHTML;
      for (const book of books) {
        if (book.title === titleFromBook) {
          let newBook = document.querySelector("fieldset");
          newBook.querySelector("#title").value = book.title;
          newBook.querySelector("#author").value = book.author;
          newBook.querySelector("#year").value = book.year;
          newBook.querySelector("#genre").value = book.genre;
        }
      }
    });
  });
}
