import { Button } from "@mui/material"
import "./Styles/HomePage.css"

export default function HomePage() {
    return (
        <div className="HomePage">
            <div className="content">
                <h1>Welcome to HIRADEMY BOOKS !</h1>
                <Button className="btn" variant="contained" href="/books">Explore!</Button>
            </div>
        </div>
    )
}