// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "./Header";
import Books from "./books/Books";

const BooksData = [
  {
    id: crypto.randomUUID(),
    name: "JavaScript and Jquery",
    image:
      "https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
    By: "Jon Duckett",
    price: "56",
    ratting: "4.7",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Jquery",
    image:
      "https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
    By: "john Doe",
    price: "67",
    ratting: "4.3",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Vanilla JS",
    image:
      "https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
    By: "Jahid",
    price: "99.99",
    ratting: "5",

    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Learn CSS",
    image:
      "https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
    By: "Jon",
    price: "59",
    ratting: "4.9",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Python",
    image:
      "https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
    By: "Duckett",
    price: "89",
    ratting: "4.7",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Full Stack Dev ?",
    image:
      "https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
    By: "Developer",
    price: "120",
    ratting: "5",

    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "DOM",
    image:
      "https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
    By: "Browser",
    price: "30",
    ratting: "4.9",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "API",
    image:
      "https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
    By: "Java Script",
    price: "20",
    ratting: "4",

    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "BOM",
    image:
      "https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
    By: "Browser",
    price: "20",
    ratting: "5",

    isFav: false,
  },
];

const Main = () => {
  const [books, setBooks] = useState(BooksData);

  const [addedCart, setAddedCart] = useState([]);

  const handleClickCart = (bookID) => {
    const isBookInCart = addedCart.includes(bookID);

    if (!isBookInCart) {
      setAddedCart([...addedCart, bookID]);
    }
  };

  function handleFavorite(id) {
    const bookIndex = books.findIndex((book) => book.id === id);
    const newBook = [...books];
    newBook[bookIndex].isFav = !newBook[bookIndex].isFav;
    setBooks(newBook);
  }
  return (
    <main>
      <Header></Header>
      <Books
        books={books}
        addCartBtn={[handleClickCart, addedCart]}
        isFav={handleFavorite}
      ></Books>
    </main>
  );
};

export default Main;
