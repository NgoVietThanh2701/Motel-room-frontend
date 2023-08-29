import React from 'react'
import { Navigation } from '../../Public'

const Header = () => {
   return (
      <div className='w-full flex h-full sticky top-0'>
         <div className='bg-bg_blue1 flex items-center justify-center text-white
            text-lg font-bold w-[256px] h-[46px]'>
            Phongtro123.com
         </div>
         <div className='flex-auto text-start'>
            <Navigation isSystem={true} />
         </div>
      </div>
   )
}

export default Header