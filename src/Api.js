import React, { useEffect, useState } from 'react'

const Api = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/').then(res => {
            return res.json()

        }).then((result) => {
            console.log(result);
            setProduct(result)
        })

    }, [])

    return <>
        <div className="container d-flex flex-wrap">
            {product.map((prd) => {
                return (
                    <div className="card" style={{ width: '18rem' }} >
                        <img className="card-img-top" src={prd.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{prd.title}</h5>
                            <p className="card-text">{prd.description}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                )
            })}
        </div>

    </>
}

export default Api
