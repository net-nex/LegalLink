import React from 'react'
import EstateIcon from './estateIcon.png'

const CategoryCard = () => {
    return (
    <div className='flex flex-col justify-center items-center py-10'>
        <img src={EstateIcon} alt="" height={60} width={60}/>
        <h3 className='mt-3 text-[#4F5D77]'>Estate Planning Lawyer</h3>
    </div>
    )
}

export default CategoryCard
