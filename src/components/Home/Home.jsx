import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2 className='text-center text-3xl text-sky-600 font-bold uppercase' >Welcome</h2>
            <p className='text-center italic font-bold text-teal-700 my-2'>Please click following buttons to check the items you want</p>
            <div className='flex gap-5 justify-center mt-5'>
                <Link to={'/pcInfo'}>
                    <button className="btn btn-primary rounded-md uppercase">PC</button>
                </Link>
                <Link to={'/monitorInfo'}>
                    <button className="btn btn-secondary rounded-md uppercase">Monitor</button>
                </Link>
                <Link to={'/upsInfo'}>
                    <button className="btn btn-accent rounded-md uppercase text-white">UPS</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;