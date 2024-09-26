import { AccountNavbar, Houses } from '../../components'
import { useHouseStore } from '../../zustand/useHouseStore'
import { useEffect } from 'react'

const HousesPage = () => {
  const { getAllHouses, houses } = useHouseStore()

  useEffect(() => {
    getAllHouses()
  }, [houses, getAllHouses])

  return (
    <div>
      <AccountNavbar />
      <Houses houses={houses} />
    </div>
  )
}

export default HousesPage
