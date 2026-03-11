import React from 'react'

const HeroRight = ({image}) => {
  return (
    <div className='flex justify-center items-center'>
        <img className='w-full max-w-full' src={image} alt="Image" />
    </div>
  )
}

export default HeroRight