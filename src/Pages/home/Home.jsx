import React, { useState } from 'react'
import './home.scss'

const Home = () => {

  const numbers = [1, 2, 3, 4, 5];
  
  const [rating, setRating] = useState('')

  const handleClick = (number, e) => {
    e.preventDefault()
    setRating(number);
  }

  return (
    <>
      <div className="imgContainer">
        <img src="assets/img/icon-star.svg" alt="" />
      </div>
      <div className="info">
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is apreciated to help us improve our offering</p>
      </div>
      <form action="">
        <div className="numbersContent">
          {numbers.map((number, index) => (
            <button 
              className={`number ${rating === number ? 'active' : ''}`}
              onClick={(e) => handleClick(number, e)}
              key={index}
            >
              {number}
            </button>
          ))}
        </div>
        <button className="submitBtn">Submit</button>
      </form>
    </>
  )
}

export default Home