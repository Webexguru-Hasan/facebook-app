import React from 'react'


const ShowProduct = ({dats}) => {
    
    
     return (
       
             <>
    
                {dats.map((product, idx) => {
                        return (
                            <>
                            <div className='col-lg-3'>
                            <div className="card" key={idx}>
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

export default ShowProduct
