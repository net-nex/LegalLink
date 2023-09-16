import { db } from '../firebase'
import { collection, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';



const Lawyercard = () => {

  const [lawyers, setLawyers] = useState([])

  console.log(lawyers)

  useEffect(()=>{
    const callDocs = async () => {
      const q = query(collection(db, "lawyers"));
      const querySnapshot = await getDocs(q);
      const laywerArray = [];
      querySnapshot.forEach((doc) => {
        laywerArray.push(doc.data())
      })
      setLawyers(laywerArray);
    }
    callDocs()

  },[])


  return (
    <div className='w-[100%]'>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:grod-cols-2'>
          {
            lawyers.map((lawyer)=>{
              return(
                <li className='col-span-1'>
                <a
                  href="#"
                  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                >
                  <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                  ></span>

                  <div className="sm:flex sm:justify-between sm:gap-4">
                  <div>
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {lawyer.firstName} {lawyer.lastName}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-gray-600">{lawyer.specialisation}</p>
                  </div>

                  <div className="hidden sm:block sm:shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                  </div>
                  </div>

                  <div className="mt-4">
                  <p className="max-w-[40ch] text-sm text-gray-500">
                    City : {lawyer.city}
                  </p>
                  </div>

                  <dl className="mt-6 flex gap-4 sm:gap-6">
                  <div className="flex flex-col-reverse">
                  <dt className="text-sm font-medium text-gray-600">{lawyer.contactNumber}</dt>
                  <dd className="text-xs text-gray-500">Contact Number</dd>
                  </div>

                  <div className="flex flex-col-reverse">
                  <dt className="text-sm font-medium text-gray-600">{lawyer.email}</dt>
                  <dd className="text-xs text-gray-500">Email</dd>
                  </div>
                  </dl>
                </a>
              </li>
              )
            })
          }
    </ul>
    </div>
  )
}

export default Lawyercard
