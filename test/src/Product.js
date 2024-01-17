import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Product = () => {
    const routeParams = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${routeParams.id}`).then((res) => {

            setProduct(res.data)
        })
    }, [])

    console.log(routeParams)
    return <>

        <h1> {product.title}</h1>
        <p>{product.description}</p>
    </>
}

export default Product
