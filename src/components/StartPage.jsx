import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <div className="container">
        <h2>Quizzical</h2>
        <p>Test your knowledge on various topics</p>
        <button>
         <Link to='/Preferences'>Start Quiz</Link>
        </button>
    </div>
  )
}

export default StartPage