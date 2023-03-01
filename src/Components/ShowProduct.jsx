import React from 'react'
import { useState } from 'react'




const ShowProduct = ({datas}) => {
    const [filterProduct, setFilterProduct] = useState(datas)
    
    const filterCategory = (cat) => {
        const updateList = datas.filter(({category}) => category === cat);
        setFilterProduct(updateList)
    }
    
    return (
       
             <>
             

             <div className='container'>
            <div className='row'>
                <div className='col-12 text-center pt-5'>
                    <h1 className='fs-2 fw-semibold'>Latest Products</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-center py-5'>
                    <div>
                        <button className='btn btn-dark mx-2' onClick={() => setFilterProduct(datas)}>All</button>
                    </div>
                    <div>
                        <button className='btn btn-dark mx-2' onClick={() => filterCategory("men's clothing")}>men's clothing</button>
                    </div>
                    <div>
                        <button className='btn btn-dark mx-2' onClick={() => filterCategory("women's clothing")}>women's clothing</button>
                    </div>
                    <div>
                        <button className='btn btn-dark mx-2' onClick={() => filterCategory("jewelery")}>jewelery</button>
                    </div>
                    <div>
                        <button className='btn btn-dark mx-2' onClick={() => filterCategory("electronics")}>Electronic</button>
                    </div>
                </div>
            </div>
        </div>

             {filterProduct.map((product, idx) => {
                        return (
                            <>
                            <div className='col-lg-3 my-4'>
                            <div className="card h-100" key={idx}>
                                <img src={product.image} className="card-img-top" alt={product.title} height="200px" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title.substring(0, 12)}</h5>
                                    <p className="card-text fw-bold fs-4">{product.price}</p>
                                    <a href="#" className="btn btn-dark">Buy Now</a>
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
