import React, { useState } from 'react'
import useFetch from './Hooks/useFetch'

const FilterBtn = ({setFilteredProduct, filteredProduct}) => { 

    const filteredCategory = (category) => filteredProduct.filter((product) => product.category === category)   
    
    console.log(filteredCategory("men's clothing"));

    return (
        <>
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center pt-5'>
                    <h1 className='fs-2 fw-semibold'>Latest Products</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-center py-5'>
                    <div>
                        <button className='btn btn-dark mx-2' onClick={() => setFilteredProduct(datas)}>All</button>
                    </div>
                    <div>
                        <button className='btn btn-dark mx-2' onClick={() => filteredCategory("men's clothing")}>men's clothing</button>
                    </div>
                    <div>
                        <button className='btn btn-dark mx-2' onClick={() => filteredCategory("women's clothing")}>women's clothing</button>
                    </div>
                    <div>
                        <button className='btn btn-dark mx-2' onClick={() => filteredCategory("jewelery")}>jewelery</button>
                    </div>
                    <div>
                        <button className='btn btn-dark mx-2' onClick={() => filteredCategory("electronics")}>Electronic</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
        </>
    )
}

export default FilterBtn
