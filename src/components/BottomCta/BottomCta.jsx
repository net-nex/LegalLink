import React from 'react'

const BottomCta = () => {
    return (
    <section className='px-14 sm:mx-[120px] sm:pb-[50px] bg-[#EAEEF1] py-10'>
        <h1 className='text-3xl font-bold text-center pb-5'>Stay In Touch</h1>
        <p className='w-50 text-center mx-auto'>Sign up for our mailing list to get latest updates and offers.</p>
        <div className='flex justify-center items-center pt-5'>
            <input type="text" className='py-2'/>
            <button className="bg-[#132A47] text-white text-sm py-2 px-2 rounded-md">Subscribe</button>
        </div>
    </section>
    )
}

export default BottomCta
