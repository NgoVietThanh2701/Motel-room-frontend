import React from 'react';
import Header from './common/Header';
import { Outlet } from 'react-router-dom';
import { Contact, Intro, Navigation, Search } from './index';
import { useSelector } from 'react-redux';

const Home = () => {

   const { isLoggedIn } = useSelector(state => state.auth)

   return (
      <div className='w-full flex flex-col items-center h-full'>
         <Header />
         <Navigation />
         {isLoggedIn && <Search />}
         <div className="w-5/7 mt-[10px] flex flex-col items-center">
            <Outlet />
         </div>
         <Intro />
         <Contact />
         <div className='mb-[200px]'></div>
      </div>
   )
}

export default Home