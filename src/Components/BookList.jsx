import '../Components/Styles/BookList.css'
import { convertISBN10to13 } from '../helper';

export default function BookList({ books }) {

    books.forEach(async (book) => {
        book.image_url = book.isbn === convertISBN10to13(book.isbn) ? null : `https://covers.openlibrary.org/b/isbn/${convertISBN10to13(book.isbn)}-M.jpg`;
        console.log(book.image_url);
    });

    return(
        <>
            <div className='BookList'>
                {books.map((book, index) => (
                    <div key={book.id} className={`Book b${index}`} title={book.title}>
                        <a href={`/books/${book.id}`}>
                            {book.image_url? <img src={`${book.image_url}`}/> : <span>{book.title}</span>}
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}