import React from 'react';
import Header from './common/Header';
import { Outlet } from 'react-router-dom';
import { Navigation, Search } from './index';

const Home = () => {
   return (
      <div className='w-full flex flex-col items-center h-full'>
         <Header />
         <Navigation />
         <Search />
         <div className="w-5/7 flex flex-col mt-3">
            <Outlet />
         </div>
      </div>
   )
}

export default Home