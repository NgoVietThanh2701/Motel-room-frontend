import React, { useEffect } from 'react';
import Header from './common/Header';
import { Outlet } from 'react-router-dom';
import { Contact, Intro, Navigation, Search } from './index';
import { useDispatch } from 'react-redux';
import { getAreas, getPrices, getProvinces } from '../../features/appSlice'

const Home = () => {

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getPrices())
      dispatch(getAreas())
      dispatch(getProvinces())
   }, [dispatch])
   return (
      <div className='w-full flex flex-col items-center h-full'>
         <Header />
         <Navigation />
         <Search />
         <div className="w-5/7 mt-[10px] flex flex-col">
            <Outlet />
         </div>
         <Intro />
         <Contact />
         <div className='mb-[200px]'></div>
      </div>
   )
}

export default Home