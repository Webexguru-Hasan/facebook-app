import React from 'react'
import { useState } from 'react'

const ShowProduct = ({datas}) => {
    
   const [data, setData] = useState()
   
    return (
        <>
            <div className='buttons d-flex justify-content-center py-5'>
                <button className='btn btn-outline-dark'>All</button>
                <button className='btn btn-outline-dark'>All</button>
                <button className='btn btn-outline-dark'>All</button>
                <button className='btn btn-outline-dark'>All</button>
                <button className='btn btn-outline-dark'>All</button>
            </div>

            {data?.map((product) => {
                return (
                    <>
                    <div className='col-lg-3'>
                    <div class="card" style="width: 18rem;">
                        <img src={product.image} class="card-img-top" alt={product.title} />
                        <div class="card-body">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text">{product.price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>
                    </>
                )
            })}
            
        </>
    )
}

export default ShowProduct
