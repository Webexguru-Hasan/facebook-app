import React from 'react'
import { useState } from 'react'
import FilterBtn from './FilterBtn'



const ShowProduct = ({datas}) => {
    const [filteredProduct, setFilteredProduct] = useState(datas)

    
    


  
    return (
       
             <>
             <FilterBtn setFilteredProduct={setFilteredProduct} filteredProduct={filteredProduct}/>

             {datas.map((product, idx) => {
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
