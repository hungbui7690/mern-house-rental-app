import { Link } from 'react-router-dom'
import { DropdownList, PlusIcon } from '../../components'

const Houses = () => {
  return (
    <div>
      <DropdownList />
      <div className='text-center'>
        <Link
          className='inline-flex gap-1 bg-primary px-2 py-1 rounded-full text-white'
          to={'/houses/create'}
        >
          <PlusIcon />
          Add House
        </Link>
      </div>
      <div className='mt-4'></div>
    </div>
  )
}

export default Houses
