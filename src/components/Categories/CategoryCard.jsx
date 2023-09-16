import React from 'react'
import lawyerIcon from './lawyerCategory.png'

const CategoryCard = ({category}) => {
    return (
    <div className='flex flex-col justify-center items-center py-10'>
        <img src={lawyerIcon} alt="" height={60} width={60}/>
        <h3 className='mt-3 text-[#4F5D77]'>{category}</h3>
    </div>
    )
}

export default CategoryCard
