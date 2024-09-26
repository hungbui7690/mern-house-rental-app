import { useEffect } from 'react'
import { useHouseStore } from '../zustand/useHouseStore'
import { Houses } from '../components'

const Home = () => {
  const { getAllHouses, houses } = useHouseStore()

  useEffect(() => {
    getAllHouses()
  }, [houses, getAllHouses])

  return <Houses houses={houses} />
}

export default Home
