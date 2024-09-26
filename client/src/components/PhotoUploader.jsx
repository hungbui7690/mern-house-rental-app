import PlusIcon from './icons/PlusIcon'

const PhotosUploader = ({ handleImagesChange }) => {
  return (
    <>
      <div className='flex gap-2'>
        <label className='flex justify-center items-center gap-1 border-2 bg-primary p-2 rounded-2xl w-32 h-20 text-white cursor-pointer'>
          <input
            type='file'
            multiple
            className='hidden'
            name='photos'
            onChange={handleImagesChange}
          />
          <PlusIcon />
        </label>
      </div>
    </>
  )
}

export default PhotosUploader
