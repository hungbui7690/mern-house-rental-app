import { Link } from 'react-router-dom'

const Houses = ({ houses }) => {
  return (
    <>
      <div className='sm:grid md:grid sm:grid-cols-2 md:grid-cols-3 mt-4'>
        {' '}
        {houses.length > 0 &&
          houses.map((house) => (
            <Link
              to={'/houses/' + house._id}
              key={house._id}
              className='p-4 rounded-2xl cursor-pointer'
            >
              <div className='flex bg-gray-300 mb-2 rounded-xl text-sm'>
                <img
                  src={house.photos[0]}
                  alt={house.title}
                  className='rounded-xl leading-10 aspect-video object-cover'
                />
              </div>
              <div>
                <h2 className='font-medium text-gray-600 leading-5'>
                  {house.address}
                </h2>
                <p className='text-gray-500'>
                  Hosted By {house.owner.fullName}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}

export default Houses
