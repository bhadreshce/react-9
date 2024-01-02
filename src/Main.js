import React from 'react'
import slide1 from './img/slide.png'
import slide2 from './img/slide1.jpg'
const Main = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              height={'300px'}
              src={slide1}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              height={'300px'}
              src={slide2}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              height={'300px'}
              src={slide1}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
