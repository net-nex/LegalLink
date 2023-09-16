import CityImage from './cityImage.png'

const CityCard = ({city, image}) => {
  return (
    <div className='border-3 border-black bg-white mb-3 pb-3'>
      <div className='w-full h-[150px]'>
        <img src={image} alt="" className='object-cover w-full h-full'/>
      </div>
      <p className='mt-3'>{city}</p>
    </div>
  )
}

export default CityCard

