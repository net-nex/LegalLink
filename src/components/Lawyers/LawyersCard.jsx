const LawyersCard = ({ title, imgUrl }) => {
  return (
    <div className='flex flex-col justify-center items-center py-10 '>

      <img src={imgUrl} alt="imgurl" className="w-full bg-cover bg-center" />

      <div className="m-[5px] leading-8">
        <h3 className="text-[20px] font-[500] text-[#4F5D77]">{title}</h3>
        <h5 className="text-[#6C778D] text-[14px] font-[400]">Family Law</h5>
        <p className="text-[#6B778E] text-[14px] font-[400] font-open-sans">A lawyer is a professional who is qualified to offer advice about the law.</p>
        <a className="flex text-rgba(21, 77, 142, 0.68) text-[14px] font-open-sans font-[400]" href="/">Learn More &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </a>
      </div>
    </div>
  )
}

export default LawyersCard
