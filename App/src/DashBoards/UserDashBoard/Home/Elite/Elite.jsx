import React from 'react';
import './Elite.css';

const Elite = () => {
  return (
    <div className="elite-container">
      <div className="elite-inner">
        <div className="elite-left">
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/bm-1030/elite-banner-img.png"
            alt="Elite Matrimony"
            className="elite-image"
          />
          
        </div>

        <div className="elite-right">
          <h2>Elite Matrimony</h2>
          <p className="elite-subheading">
            The largest and most successful <br />
            matrimony service for elites
          </p>

          <ul className="elite-features">
            <li>
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/bm-1030/elite-list-icon-1.svg"
                alt="icon"
              />
              <div>
                <strong>Largest pool of truly elite profiles</strong>
                <p>
                  Increased chances of finding the right match through our largest
                  and most exclusive database of elite matches.
                </p>
              </div>
            </li>
            <li>
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/bm-1030/elite-list-icon-2.svg"
                alt="icon"
              />
              <div>
                <strong>Experienced Relationship Managers</strong>
                <p>
                  A dedicated Relationship Manager will be shortlisting and
                  sharing matches as per your preferences.
                </p>
              </div>
            </li>
            <li>
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/bm-1030/elite-list-icon-3.svg"
                alt="icon"
              />
              <div>
                <strong>100% confidential service</strong>
                <p>
                  Strict privacy & confidentiality ensured throughout the service.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Elite;
