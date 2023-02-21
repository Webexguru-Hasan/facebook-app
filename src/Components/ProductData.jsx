import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'




const ProductData = () => {
    const [data, setData] = useState([])
    console.log(data)
    const [filter, setFilter] = useState()
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getData(){
            
            
            try{
                
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setData(data)
            }catch(error){
                console.error(error)
            }
        }
        getData()

    }, [])

    const Loading = () =>{
        return (
            <>
            Loading....
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center py-5'>
                    <button className='btn btn-outline-dark'>All</button>
                    <button className='btn btn-outline-dark'>All</button>
                    <button className='btn btn-outline-dark'>All</button>
                    <button className='btn btn-outline-dark'>All</button>
                    <button className='btn btn-outline-dark'>All</button>
                </div>
    
                {data?.map((product, idx) => {
                    return (
                        <>
                        <div className='col-lg-3'>
                        <div className="card h-100px" key={idx}>
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        </div>
                        </>
                    )
                })}
                
            </>
        )

    }
    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center py-3'>
                    <h1 className='fs-2 fw-semibold'>Latest Products</h1>
                </div>
            </div>
            <div className='row justify-content-center'>
                 <ShowProduct />
            </div>
        </div>
            
        </>
    )
}

export default ProductData
