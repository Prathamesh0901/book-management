import { useEffect, useState } from "react";
import Header from '../Components/Header';
import BookList from "../Components/BookList";
import Pagination from "../Components/Pagination";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import './Styles/BooksPage.css'

export default function BooksPage() {

    const BOOK_URL = 'http://softwium.com/api/books';

    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const booksPerPage = 16;

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const response = await fetch(BOOK_URL);
                const data = await response.json();
                setBooks(data);
                setLoading(false);
            } catch(err) {
                console.log('API error: ', err);
                setError(err);
                setLoading(false);
            }
    }
        fetchBooks();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        console.log(currentPage);
    }

    const totalPages = Math.ceil(books.length / booksPerPage);
    const paginatedBooks = books.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage);

    if(loading) {
        return(
            <Loading></Loading>
        )
    }

    if(error) {
        return(
            <Error err={error}></Error>
        )
    }

    return(
        <>
            <Header></Header>
            <div className="bookshelf-container">
                <BookList books={paginatedBooks}></BookList>
                <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}></Pagination>
            </div>
        </>
    )

}