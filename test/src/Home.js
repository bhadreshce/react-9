import React, { useEffect, useState } from 'react'
import Banner from './banner.jpg'
import Banner2 from './banner2.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      //   console.log(res.data.products)
      setProducts(res.data.products)
    })
  }, [])

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              height={'300px'}
              src={Banner}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              height={'300px'}
              src={Banner2}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              height={'300px'}
              src={Banner}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container d-flex flex-wrap gap-5">
        {products.map((res) => {
          return (
            <div className="card" style={{ width: '18rem' }}>
              <img
                height={'100px'}
                className="card-img-top"
                src={res.images[0]}
                alt="Card image cap"
              />
              <div className="card-body">
                <h6 className="card-title">{res.title}</h6>
                <p className="card-text">{res.description.substr(0, 10)}</p>
                <Link to={`/product/${res.id}`} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
