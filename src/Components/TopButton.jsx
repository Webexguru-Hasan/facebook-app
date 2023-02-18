import React from 'react'

const TopButton = ({setquery}) => {
    const cities = [
        {
            id : 1,
            title : 'Dhaka'
        },
        {
            id : 2,
            title : 'Delhi'
        },
        {
            id : 3,
            title : 'london'
        },
        {
            id : 4,
            title : 'new york'
        },
        {
            id : 5,
            title : 'sydney'
        }
    ]

    return (
        <div className='flex items-center justify-around'>
            {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium' onClick={() => setquery({q : city.title})}>{city.title}</button>
            ))}
            
            
        </div>
    )
}

export default TopButton
