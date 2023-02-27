import React from 'react'

const FilterBtn = () => {
    const buttons = [
        {
            id: 1,
            title: "All"
        },
        {
            id: 2,
            title: "Mens Cloth"
        },
        {
            id: 3,
            title: "Womens Cloth"
        },
        {
            id: 4,
            title: "Womens Ring"
        },
        {
            id: 5,
            title: "Accessories"
        },
    ]
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
                {buttons.map((button) => (
                <div id={button.id}>
                <button className='btn btn-dark mx-2'>{button.title}</button>
                </div>
            )
                
            )}

                </div>
            </div>
        
            </div>
           
        </div>
            
        </>
    )
}

export default FilterBtn
