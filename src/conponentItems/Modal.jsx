import React from 'react'
import icons from '../utils/icons'

const { GoArrowLeft } = icons

const Modal = ({ setisShowModal, content, name }) => {
   return (
      <div className='fixed z-20 top-0 left-0 right-0 bottom-0
      bg-bg_overlay60 flex justify-center items-center'
         onClick={() => setisShowModal(false)}>
         <div className='w-2/5 pb-3 bg-white rounded-md border border-default'
            onClick={(e) => {
               e.stopPropagation() /*keep children click*/
               setisShowModal(true)
            }}>
            <div className='h-[50px] px-4 flex items-center border-b border-default'>
               <span>
                  <GoArrowLeft className='hover:text-color_red cursor-pointer'
                     onClick={(e) => {
                        e.stopPropagation()
                        setisShowModal(false)
                     }} size={24} />
               </span>
            </div>
            <div className='px-5 flex flex-col'>
               {content?.map((item, index) => (
                  <span key={index} className='py-[10px] flex items-center gap-3 border-b border-default'>
                     <input type="radio" id={item.code} name={name} value={item.code} />
                     <label className='text-color_222' htmlFor={item.code}>{item.value}</label>
                  </span>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Modal