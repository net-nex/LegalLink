
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import {useState} from 'react'
import {auth,db} from '../firebase'
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
    const { setLawyer } = useContext(AuthContext);
    const [error,setError] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const [asLawyer,setAsLaywer] = useState(false)
    const handleEmailChange = (e)=>{
        setData((prev)=>{
            return ({...prev,email : e.target.value})
        })
        console.log(data)
    }
    const handlePasswordChange = (e)=>{
        setData((prev)=>{
            return ({...prev,password : e.target.value})
        })
        console.log(data)
    }
    const lawyerLogin = (e)=>{
        setAsLaywer((prev)=>{
            return (!prev)
        })
        console.log(data)
    }
    const handleSubmit = async (e)=>{
    
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const isLawyer = asLawyer;
        setLawyer(isLawyer)
        console.log(isLawyer)
        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res)
            await setDoc(doc(db,"users",res.user.uid),{
               uid : res.user.uid,
                email : email,
                 lawyer : isLawyer
            })
            if(isLawyer){
                navigate("/input");
            }
        }catch(e){
            console.log(e)
            setError(true)
        }
    }
    return (
        <section class="">
            <div class=" bg-[#05397A] h-screen">      
                <main
                class="flex items-center justify-center px-8 py-8 h-screen"
                >
                    <div class="max-w-xl lg:max-w-3xl bg-white min-w-[50vw] px-3 py-14 lg:min-w-[30vw] lg:px-10">
                        <div class="relative block ">

                        <h1
                            class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center mb-4"
                        >
                            Create Account
                        </h1>
                        </div>
                        <div class="relative block ">

                        <p
                            class="mt-2 text-gray-900 text-center mb-4"
                        >
                            Create Your New Account
                        </p>
                        </div>

                        <form  onSubmit={handleSubmit}>                

                        <div class="mb-2">
                            <label for="Email" class="block text-sm font-medium text-gray-700">
                            Email
                            </label>

                            <input
                            type="email"
                            id="Email"
                            name="email"
                            class="mt-1 w-full rounded-md border-gray-200 bg-gray-200 text-sm text-black shadow-sm py-2"
                            onChange={(e)=>{handleEmailChange(e)}}
                            />
                        </div>

                        <div class="mb-2">
                            <label
                            for="Password"
                            class="block text-sm font-medium text-gray-700"
                            >
                            Password
                            </label>

                            <input
                            type="password"
                            id="Password"
                            name="password"
                            class="mt-1 w-full rounded-md border-gray-200 bg-gray-200 text-sm text-black shadow-sm py-2"
                            onChange={(e)=>{handlePasswordChange(e)}}
                            />
                        </div>

                        <div class="col-span-6">
                            <label for="MarketingAccept" class="flex gap-4">
                            <input
                                type="checkbox"
                                id="MarketingAccept"
                                name="marketing_accept"
                                class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                value={true}
                                onChange={(e)=>{lawyerLogin(e)}}
                            />

                            <span class="text-sm text-gray-700">
                                Sign Up as Lawyer
                            </span>
                            </label>
                            
                        </div>
                        {}


                        <div class="">
                            <button
                            class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 w-full text-center my-4"
                            >
                            Login In
                            </button>
                        </div>

                        {/* <div className="bg-black h-[1px] w-full"></div> */}
                        <div class="relative block w-full">

                            <p
                                class="mt-2 text-gray-900 text-center min-w-full block my-2"
                            >
                                Or log in with
                            </p>
                        </div>
                        <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                            class="inline-block shrink-0 rounded-md border border-blue-600 px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 w-full"
                            >
                            Google
                            </button>
                        </div>
                        {error &&
                        <h4 className="text-center my-2">Something went wrong</h4>
                        }
                        
                        <h4 className="text-center my-2">New account yet? Sign Up</h4>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default SignUp
