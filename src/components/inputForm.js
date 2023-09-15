import React from 'react'

const InputForm = () => {
  return (
    <div className='bg-[#053978] flex items-center justify-center min-h-[100vh]'>
    <div className='w-[80vw] h-[90vh] flex flex-col items-center justify-center bg-white'>
        <div className='text-4xl'>
            Add your Information
        </div>
        <div className='flex w-full items-center justify-around pt-3'>
            <div>
                <div className='text-xl'>First Name</div>
                <input type='text' className='border border-black-1 px-2 py-3'/>
            </div>
            <div>
                <div className='text-xl'>Last Name</div>
                <input type='text' className='border border-black-1 px-2 py-3'/>
            </div>
        </div>
        <div className='flex flex-col w-[65%] pt-3 justify-around'>
        <div className='text-xl text-left' >Email</div>
            <input type='email' className='border border-black-1  py-3 w-full px-5'/>
        </div>
        <div className='flex flex-col w-[65%] pt-3 justify-around'>
            <div className='text-xl'>Contact Number</div>
            <input type='number' className='border border-black-1  py-3 w-full px-5'/>
        </div>
        <div className='flex w-full items-center justify-around pt-3'>
            <div>
                <div className='text-xl'>City</div>
                <select className='border border-black-1 px-2 py-3'>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Luckhnow</option>
                    <option>Kolkata</option>
                    <option>Surat</option>
                </select>
            </div>
            <div>
                <div className='text-xl'>Year of experience</div>
                <input type='number' className='border border-black-1 px-2 py-3' placeholder='E.G. 1'/>
            </div>
        </div>
        <div className='flex flex-col w-[65%] pt-3 justify-around '>
            <div>Specialisation</div>
            <div className='flex items-center justify-around mt-3'>
            <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            </div>
            <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            </div>
            <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            </div>
            </div>
            <div className='flex items-center justify-around mt-3'>
            <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            </div>
            <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            </div>
            <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            </div>
            </div>
            <div className='flex items-center justify-around mt-3'>
            <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            </div>
            <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            </div>
            <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            </div>
            </div>
            
        <div>
    </div>
        </div>
            <button type='submit' className='px-5 py-3 bg-black text-white mt-3'>Submit</button>
        </div>
    </div>
  )
}

export default InputForm
