import React from 'react'

const Forcast = ({title}) => {
    return (
        <div>
            <div className='flex justify-start items-center mt-6'>
                <h4 className='text-white font-medium uppercase text-xl'>{title}</h4>
            </div>
            <hr className='text-white' />
            <div className='flex justify-between items-center flex-row'>
                <div className='flex flex-col items-center justify-center'>
                    <h5 className='text-lg font-medium text-white'>04:30PM</h5>
                    <img className='w-12 h-12' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                    <p className='text-lg font-medium text-yellow-400'>24°</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h5 className='text-lg font-medium text-white'>07:30PM</h5>
                    <img className='w-12 h-12' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                    <p className='text-lg font-medium text-yellow-400'>20°</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h5 className='text-lg font-medium text-white'>12:30PM</h5>
                    <img className='w-12 h-12' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                    <p className='text-lg font-medium text-yellow-400'>18°</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h5 className='text-lg font-medium text-white'>06:30AM</h5>
                    <img className='w-12 h-12' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                    <p className='text-lg font-medium text-yellow-400'>14°</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h5 className='text-lg font-medium text-white'>02:30PM</h5>
                    <img className='w-12 h-12' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                    <p className='text-lg font-medium text-yellow-400'>32°</p>
                </div>

            </div>
            
        </div>
    )
}

export default Forcast
