// import {Link} from 'react-router-dom';
import FooterImg from '../assets/Footer_logo.png';

const Footer = () => {
    return(
      <footer className="bg-[#132A47;] mt-3">
      <div
        className="relative justify-between items-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
      >
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>
    
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
    
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              
            </div>
    
            <p
              className="mx-auto  max-w-md text-center text-xl leading-relaxed text-[#B2BBC2] lg:text-left"
            >
              Welcome to your gateway to legal solutions – where expertise meets convenience, and justice is just a click away.
            </p>
          </div>
          <div className="" style={{background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.07) 0.65%, #FFF 46.09%, rgba(255, 255, 255, 0.07) 96.2%)'}}/>
    
          <ul
            className="mt-12 flex flex-col justify-center items-center gap-3   md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
          >
            <li>
              <a className="text-[#B2BBC2] transition hover:text-gray-700/75" href="#lawyers">
                Lawyers
              </a>
            </li>
    
            <li>
              <a className="text-[#B2BBC2] transition hover:text-gray-700/75" href="/dashboard">
                Dashboard
              </a>
            </li>
    
            <li>
              <a className="text-[#B2BBC2] transition hover:text-gray-700/75" href="/chat">
                Chat
              </a>
            </li>
          </ul>
          <div className='mt-12 flex flex-col justify-center items-center'>
            <img src={FooterImg} alt="Footer_img" />
          </div>
        </div>
      </div>
    </footer>
  )};
  
  export default Footer;