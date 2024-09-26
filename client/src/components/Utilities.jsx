import { useAppStore } from '../zustand/useAppStore'
import {
  WifiIcon,
  FreeParkingIcon,
  TVIcon,
  RadioIcon,
  PetIcon,
  PrivateEntranceIcon,
} from './'

const Utilities = () => {
  const { addUtility, removeUtility } = useAppStore()

  const handleChange = (e) => {
    const { checked } = e.target
    const value = e.target.value

    if (checked) {
      addUtility(value)
    } else {
      removeUtility(value)
    }
  }

  return (
    <>
      <label className='flex items-center gap-2 p-4 border rounded-2xl cursor-pointer'>
        <input
          type='checkbox'
          value='wifi'
          className='accent-primary'
          onChange={handleChange}
        />
        <WifiIcon />
        <span>Wifi</span>
      </label>
      <label className='flex items-center gap-2 p-4 border rounded-2xl cursor-pointer'>
        <input
          type='checkbox'
          value='parking'
          className='accent-primary'
          onChange={handleChange}
        />
        <FreeParkingIcon />
        <span>Free Parking Lots</span>
      </label>
      <label className='flex items-center gap-2 p-4 border rounded-2xl cursor-pointer'>
        <input
          type='checkbox'
          value='tv'
          className='accent-primary'
          onChange={handleChange}
        />
        <TVIcon />
        <span>TV</span>
      </label>
      <label className='flex items-center gap-2 p-4 border rounded-2xl cursor-pointer'>
        <input
          type='checkbox'
          value='radio'
          className='accent-primary'
          onChange={handleChange}
        />
        <RadioIcon />
        <span>Radio</span>
      </label>
      <label className='flex items-center gap-2 p-4 border rounded-2xl cursor-pointer'>
        <input
          type='checkbox'
          value='pets'
          className='accent-primary'
          onChange={handleChange}
        />
        <PetIcon />
        <span>Pets</span>
      </label>
      <label className='flex items-center gap-2 p-4 border rounded-2xl cursor-pointer'>
        <input
          type='checkbox'
          value='privateEntrance'
          className='accent-primary'
          onChange={handleChange}
        />
        <PrivateEntranceIcon />
        <span>Private Entrance</span>
      </label>
    </>
  )
}

export default Utilities
