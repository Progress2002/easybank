import React from 'react'

const Card = (props) => {
  const {imgUrl, author, title, summary, alt} = props;

  return (
    <li className='rounded-lg bg-white'>
      <div className='h-48'>
        <img src={imgUrl} alt={alt} className='w-full h-full' />
      </div>
      <div className=' p-7 md:p-4 '>
        <h4 className='text-sm text-GrayishBlue '>
          {author}
        </h4>
        <a className=' block text-2xl text-DarkBlue hover:text-blue-300 hover:cursor-pointer my-3'>
          {title}
        </a>
        <p className=' text-GrayishBlue text-base'>
          {summary}
        </p>
      </div>
    </li>
  )
}

export default Card