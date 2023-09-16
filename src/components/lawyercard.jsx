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
                  <img
                  alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                  />
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
