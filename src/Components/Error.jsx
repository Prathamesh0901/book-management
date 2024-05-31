export default function Error({ message }) {
    return(
        <div style={{fontSize: '3rem', textAlign: 'center', marginTop: '20rem'}}>
            Error 404
            <div> {message} </div>
        </div>
    )
}