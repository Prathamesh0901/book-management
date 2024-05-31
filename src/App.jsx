import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BooksPage from './Pages/BooksPage'
import BookDetailsPage from './Pages/BookDetailsPage'
import HomePage from './Pages/HomePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' Component={HomePage}></Route>
          <Route path='/books'Component={BooksPage}></Route>
          <Route path='/books/:id'Component={BookDetailsPage}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
