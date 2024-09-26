import { useState } from 'react'
import { AccountNavbar, LabelDescription, Utilities } from '../../components'
import PhotosUploader from '../../components/PhotoUploader'
import { useAppStore } from '../../zustand/useAppStore'
import { useHouseStore } from '../../zustand/useHouseStore'
import { useNavigate } from 'react-router-dom'

const CreateHouse = () => {
  const [imageURLs, setImageURLs] = useState([])
  const { utilities } = useAppStore()
  const { createHouse } = useHouseStore()
  const navigate = useNavigate()

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files)
    const newURLs = files.map((file) => {
      return URL.createObjectURL(file)
    })
    setImageURLs([...imageURLs, ...newURLs])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    formData.append('utilities', JSON.stringify(utilities))
    createHouse(formData)

    e.target.reset()
    navigate('/houses')
  }

  return (
    <div>
      <AccountNavbar />
      <form onSubmit={handleSubmit}>
        <LabelDescription title='Title' description='title for your place' />
        <input type='text' name='title' required defaultValue={'House 1'} />
        <LabelDescription title='Address' description='address to this place' />
        <input
          type='text'
          name='address'
          required
          defaultValue={'House 1 Address'}
        />
        <LabelDescription
          title='Photos'
          description='the photos of your place'
        />
        <div className='flex flex-wrap gap-2'>
          {imageURLs.length > 0 && (
            <>
              {imageURLs.map((url) => (
                <img
                  src={url}
                  key={url}
                  alt=''
                  className='inline-block border rounded-2xl w-32 h-20 object-cover'
                />
              ))}
            </>
          )}
          <PhotosUploader handleImagesChange={handleImagesChange} />
        </div>
        <LabelDescription
          title='Description'
          description='description of the place'
        />
        <textarea
          name='description'
          required
          defaultValue={'House 1 Description'}
        />
        <LabelDescription
          title='Utilities'
          description=' what this place offers'
        />
        <div className='gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-2'>
          <Utilities />
        </div>
        <LabelDescription title='Extra Info' description='house rules, etc.' />
        <textarea name='extraInfo' required defaultValue={'House 1 Rules'} />
        <LabelDescription
          title='Max Guests'
          description='max number of guests'
        />
        <input
          type='number'
          name='maxGuests'
          min={1}
          required
          defaultValue={4}
        />
        <LabelDescription
          title='Price'
          description=' price per night for your place'
        />
        <input type='number' name='price' min={1} required defaultValue={100} />

        <button className='my-4 primary'>Save</button>
      </form>
    </div>
  )
}

export default CreateHouse
