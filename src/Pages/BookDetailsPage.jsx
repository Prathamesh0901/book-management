import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import Error from '../Components/Error';
import Header from '../Components/Header';
import { convertISBN10to13 } from '../helper';
import "./Styles/BookDetailsPage.css"

export default function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BOOK_URL = "//softwium.com/api/books";

  useEffect(() => {
    const fetchBook = async () => {
      try {
        let response = await fetch(`${BOOK_URL}/${id}`);
        let data = await response.json();
        data.authors = data.authors.map((author, index) => (<li key={index}>{author}</li>));
        book.image_url = book.isbn === convertISBN10to13(book.isbn) ? null : `https://covers.openlibrary.org/b/isbn/${convertISBN10to13}-M.jpg`;
        console.log(book.isbn);
        setBook(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message={"book not found!"} />;
  if (!book) return <div>Book not found</div>;

  return (
    <>
      <Header />
      <h1 style={{backgroundColor: "rgb(192 192 192)"}}>Details of Book: {book.title}</h1>
      <div className="BookDetails">
        {book.image_url? 
          <div className="bookimage">
            <img src={book.image_url} alt={book.title} />
          </div> :
          <></>
        }
        <div className="details">
          {book.isbn && <p><strong>ISBN:</strong> {book.isbn}</p>}
          {book.pageCount && <p><strong>Page Count:</strong> {book.pageCount}</p>}
          {book.authors && <p><strong>Authors:</strong> <ol>{book.authors}</ol></p>}
        </div>
      </div>
    </>
  );
}
