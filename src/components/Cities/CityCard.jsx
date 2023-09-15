import CityImage from './cityImage.png'

const CityCard = () => {
  return (
    <div className='border-3 border-black bg-white mb-3 pb-3'>
      <div className='w-full' style={{backgroundImage:'url("./cityImage.png")'}}>
        <img src={CityImage} alt="" className='object-contain w-full h-full'/>
      </div>
      <p className='pl-4'>Mumbai</p>
    </div>
  )
}

export default CityCard
