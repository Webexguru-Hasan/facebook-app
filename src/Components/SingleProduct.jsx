import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {id} = useParams()
    const [prodcut, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    return (
        <div>
            
        </div>
    )
}

export default SingleProduct
