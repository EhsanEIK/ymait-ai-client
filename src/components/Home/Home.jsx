import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2 className='text-5xl text-sky-600 font-bold uppercase' >Welcome to the YMA-IT AI System</h2>
            <div className='flex gap-5 justify-center mt-5'>
                <Link>
                    <button className="btn btn-primary">PC</button>
                </Link>
                <Link>
                    <button className="btn btn-secondary">Monitor</button>
                </Link>
                <Link>
                    <button className="btn btn-accent">UPS</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;