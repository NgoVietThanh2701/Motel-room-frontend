import React from 'react'

const Button = ({text, textColor, bgColor}) => {
  return (
      <button type='button' className={`py-2 px-4 ${textColor} 
      ${bgColor} outline-none rounded-md hover:underline`}>
         {text}
      </button>
  )
}

export default Button