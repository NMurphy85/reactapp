import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";
const Book = ({ book }) => {
    const rating = 4
  return (
    <div className="book">
      <Link to ={ `/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img className="book__img" src={book.url} alt="" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <div className="book__ratings">
       <Rating rating={book.rating} />
      </div>
        <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div>
  );
};

export default Book;
