import { useNavigate } from 'react-router-dom'
import './home.scss'

const Home = ({ rating, setRating }) => {
  
  const numbers = [1, 2, 3, 4, 5];

  const handleClick = (number, e) => {
    e.preventDefault()
    setRating(number)
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/thanks')
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
      <form onSubmit={handleSubmit}>
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
        <button type='submit' className="submitBtn">Submit</button>
      </form>
    </>
  )
}

export default Home