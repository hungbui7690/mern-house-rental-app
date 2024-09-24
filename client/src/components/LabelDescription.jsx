const LabelDescription = ({ title, description }) => {
  return (
    <h3 className='mt-4 text-xl'>
      {title} <span className='text-gray-500 text-sm'>{description}</span>
    </h3>
  )
}
export default LabelDescription
