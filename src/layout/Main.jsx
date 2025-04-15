import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-full h-full container'>
            <div className='grid grid-cols-6 md:w-[1520px] gap-1 h-full'>
                <div className='col-span-1 bg-indigo-600 p-2'>
                    <h2>WELCOME</h2>
                </div>
                <div className='col-span-5 p-2'>
                    <div className='flex justify-between'>
                        <h2 className='text-3xl font-bold text-cyan-600'>YMA-IT Asset Information System</h2>
                        <img src="/src/assets/yoc_logo.png" alt="youngone" width="200px" />
                    </div>
                    <hr className='mt-1 mb-3' />
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;