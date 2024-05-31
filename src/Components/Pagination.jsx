import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../Components/Styles/Pagination.css"

export default function Pagination({ currentPage, totalPages, handlePageChange }) {

    const handlePrevious = () => {
        if(currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    }

    const handleNext = () => {
        if(currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    }

    return(
        <div className="Pagination">
            <button onClick={handlePrevious} disabled={currentPage === 1} className='backbtn'><ArrowBackIosIcon /></button>
            <button onClick={handleNext} disabled={currentPage === totalPages} className='forwardbtn'><ArrowForwardIosIcon /></button>
        </div>
    )
}