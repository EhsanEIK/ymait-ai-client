import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2 className='text-5xl text-sky-600 font-bold uppercase' >Welcome to the YMA-IT AI System</h2>
            <div className='flex gap-5 justify-center mt-5'>
                <Link to={'/pcInfo'}>
                    <button className="btn btn-primary rounded-md">PC</button>
                </Link>
                <Link to={'/monitorInfo'}>
                    <button className="btn btn-secondary rounded-md">Monitor</button>
                </Link>
                <Link>
                    <button className="btn btn-accent rounded-md">UPS</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;