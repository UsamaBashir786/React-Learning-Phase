import { Command } from 'lucide-react'
import React from 'react'

const Card = ({icon,title,desc}) => {
  return (
    <div className='border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all'>
        {icon}
        <h3 className='text-lg font-bold mt-3'>{title}</h3>
        <p className='text-gray-500 text-sm mt-1'>{desc}</p>
    </div>
  )
}

export default Card