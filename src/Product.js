import React, { useState, useEffect } from 'react'

function Product() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                setProduct(result)
                console.log(result)
            })
    }, [])

    return <>
        <div className="container d-flex flex-wrap" >
            {product.map((data) => {
                return (
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={data.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.description}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
}

export default Product
