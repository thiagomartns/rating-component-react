import React from 'react'
import './thanks.scss'

const Thanks = ({ rating }) => {
  return (
    <div className='thanksContainer'>
      <div className="imgContainerThanks">
        <img src="assets/img/illustration-thank-you.svg" alt="" />
      </div>
      <div className="counterThanks">
        <span className="counter">
          You selected {rating} out of 5
        </span>
      </div>
      <div className="info">
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
      </div>
    </div>
  )
}

export default Thanks