const Badge = ({label}) => {
  return (
    <span className='text-xs bg-red-100 font-semibold rounded-full px-3 py-1 text-red-600 items-center'>
        {label}
    </span>
  )
}

export default Badge