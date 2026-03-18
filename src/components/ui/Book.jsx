import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (!mountedRef.current) {
          setImg(image)
        }
      }, 300)
    }
    return () => {
      //When the component unmounts
      mountedRef.current = false;
    }
  })
    

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img className="book__img" src={img.src} alt="" />
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
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book--title--skeleton"></div>
          <div className="skeleton book--rating--skeleton"></div>
          <div className="skeleton book--price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
