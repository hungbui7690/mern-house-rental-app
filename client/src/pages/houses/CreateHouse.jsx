import { DropdownList, LabelDescription } from '../../components'

const CreateHouse = () => {
  return (
    <div>
      <DropdownList />
      <form>
        <LabelDescription title='Title' description='title for your place' />
        <input
          type='text'
          name='title'
          placeholder='title, for example: My lovely apt'
        />
        <LabelDescription title='Address' description='address to this place' />
        <input type='text' name='address' placeholder='address' />
        <LabelDescription
          title='Photos'
          description='the photos of your place'
        />
        {/* <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} /> */}
        <LabelDescription
          title='Description'
          description='description of the place'
        />
        <textarea name='description' />
        <LabelDescription
          title='Utilities'
          description=' what this place offers'
        />
        <div className='gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-2'>
          {/* <Perks selected={perks} onChange={setPerks} /> */}
        </div>
        <LabelDescription title='Extra Info' description='house rules, etc.' />
        <textarea name='extraInfo' />
        <LabelDescription
          title='Max Guests'
          description='max number of guests'
        />
        <input type='number' name='maxGuests' />
        <LabelDescription
          title='Price'
          description=' price per night for your place'
        />
        <input type='number' name='price' />

        <button className='my-4 primary'>Save</button>
      </form>
    </div>
  )
}

export default CreateHouse
