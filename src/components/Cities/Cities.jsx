import CityCard from "./CityCard"
import CityImage2 from './CityImage2.png'
import mumbai from './mumbai.jpg'
import kolkata from './kolkata.jpg'
import hyderabad from './hyderabad.jpg'
import delhi from './/delhi.jpg'
import chennai from './chennai.jpg'
import kochi from './kochi.jpg'
import nagpur from './nagpur.jpg'
import bankura from './mumbai.jpg'

const Cities = () => {
    return (
        <section className="flex flex-col justify-center items-center px-14 sm:px-[40px] sm:py-[50px]">
            <h1 className="text-2xl font-bold pb-5">Find Your City</h1>
            <p className="w-50 pb-7 text-center">Any solicitors or legal business can submit a listing to our website. Our site is free for UK solicitors or legal business</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 place-self-center">
                <CityCard city="Mumbai" image={mumbai}/>
                <CityCard city="Kolkata" image={kolkata}/>
                <CityCard city="Hyderabad" image={hyderabad}/>
                <CityCard city="Delhi" image={delhi}/>
                <CityCard city="Chennai" image={chennai}/>
                <CityCard city="Kochi" image={kochi}/>
                <CityCard city="Nagpur" image={nagpur}/>
                <CityCard city="Bankura" image={mumbai}/>
            </div>
            <div className="flex justify-between space-x-1 mt-14 sm:mt-[50px] mb-[50px]">
                <div>
                    <h3 className="text-lg mb-3">Business</h3>
                    <h2 className="text-xl font-bold mb-2">Build trust with your Business Page</h2>
                    <p className="text-sm mb-4 mr-10">
                        Yelp Connect lets you post regular updates so <br/>you can help potential customers learn more about your business.
                    </p>
                    <button className="bg-[#132A47] text-white text-sm py-2 px-2 rounded-md">Manage my free listings</button>
                </div>
                <div className="hidden md:block">
                    <img src={CityImage2} width={400}/>
                </div>
            </div>
        </section>
    )
}

export default Cities
