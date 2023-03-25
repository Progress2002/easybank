import React from 'react'

const Item = (props) => {
  const { imgURL, summary, title } = props
  return (
    <li>
      <div className='flex justify-center md:justify-start my-6'>
        <img className='block' src={imgURL} alt={title} />
      </div>
      <h3 className='my-5 text-DarkBlue text-2xl '>{title}</h3>
      <p className=' text-GrayishBlue mb-14'>{summary}</p>
    </li>
  )
}

export default Item