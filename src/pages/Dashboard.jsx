import React from 'react'
import Lawyercard from '../components/lawyercard';
import { Navbar,Footer } from '../components';
const Dashboard = () => {
  return (
    <div className='min-w-[100vw] max-w-[100vw]'>
        <Navbar/>

        <div className='w-[100vw] flex '>
            <div className='flex flex-col items-start text-left pt-9 w-full ml-5'>
            <div className='pl-1 font-extrabold text-xl'>Select your Prefrence of lawyers Here</div>
            <div className='pt-4 pl-1 '>Type Of Lawyers:</div>
            <select className='bg-gray rounded-sm border border-black-1' placeholder='Type Of lawyers'>
                <option>
                    Estate Planning lawyers
                </option>
                <option>
                    Bakruptcy lawyers
                </option>
                <option>
                   Employment lawyers
                </option>
                <option>
                    Corporate lawyers
                </option>
                <option>
                    Immigration lawyers
                </option>
                <option>
                    Criminal lawyers
                </option>
                <option>
                    Tax lawyers
                </option>
                <option>
                    Family lawyers
                </option>
                <option>
                    Contract lawyers
                </option>
            </select>
            <div className='pt-4 pl-1 '>years of experience:</div>
            <input type='number' placeholder='e.g. 1'></input>
            <div className='pt-4 pl-1 '>Ratings:</div>
            <input type='number' placeholder='e.g. 1'></input>
            <div className='pt-4 pl-1 '>City:</div>
            <select className='bg-gray rounded-sm border border-black-1' placeholder='Type Of lawyers'>
                <option>
                    Estate Planning lawyers
                </option>
                <option>
                    Bakruptcy lawyers
                </option>
                <option>
                   Employment lawyers
                </option>
                <option>
                    Corporate lawyers
                </option>
                <option>
                    Immigration lawyers
                </option>
                <option>
                    Criminal lawyers
                </option>
                <option>
                    Tax lawyers
                </option>
                <option>
                    Family lawyers
                </option>
                <option>
                    Contract lawyers
                </option>
            </select>
            </div>
        <div className='min-w-[80vw] py-9 px-5'> <Lawyercard/></div>
        
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard
