import React from 'react'
import './Assisent.css'

const Assisent = () => {
  return (
    <div>
        <div className="assisted-service-section">
     

      <div className="assisted-content">
        <div className="assisted-left">
          <div className="assisted-header">
            <h1>Assisted Service</h1>
            <p>Personalised matchmaking service</p>
          </div>

          <div className="assisted-subheader">
            <h1>
              Find your match <span>10x faster</span>
            </h1>
            <p>Personalized matchmaking service through expert Relationship Manager</p>
          </div>

          <div className="assisted-benefits">
            <div className="benefit-box">
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/bm-1030/assisted-list-newicon-1.svg"
                alt=""
              />
              <p>Guaranteed matches</p>
            </div>
            <div className="benefit-box">
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/bm-1030/assisted-list-icon-2.svg"
                alt=""
              />
              <p>Better response</p>
            </div>
            <div className="benefit-box">
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/bm-1030/assisted-list-newicon-3.svg"
                alt=""
              />
              <p>Save time & effort</p>
            </div>
          </div>
        </div>

        <div className="assisted-right">
          <img
            className="assisted-image"
            src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/bm-1030/assisted-right-side-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Assisent