import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-full h-full container'>
            <div className='grid grid-cols-6 md:w-[1520px] gap-1 h-full'>
                <div className='col-span-1 bg-red-700 p-2'>
                    <h2>WELCOME</h2>
                </div>
                <div className='col-span-5 bg-green-500 p-2'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;