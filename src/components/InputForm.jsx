import React, { memo } from 'react'

const InputForm = ({ label, value, setValue, type }) => {
  return (
    <div>
      <label htmlFor="phone" className='text-xs font-medium text-color_333'>{label}</label>
      <input type="text" id='phone'
        className='outline-none bg-bg_input mt-1 p-2 rounded-sm w-full'
        value={value}
        onChange={(e) => setValue(pre => ({ ...pre, [type]: e.target.value }))}
      />
    </div>
  )
}

export default memo(InputForm)