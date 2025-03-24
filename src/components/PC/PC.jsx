import React from 'react';
import { Link } from 'react-router-dom';

const PC = () => {
    return (
        <div>
            {/* Befor Table Part */}
            <div className='flex gap-5 justify-between mb-3'>
                <h1 className='text-2xl font-bold'>PC List</h1>
                <div className='flex gap-3'>
                    <Link to={'/addNewPCInfo'}>
                        <button className="btn btn-primary btn-sm">Add New</button>
                    </Link>
                    <Link to='/'>
                        <button className="btn btn-secondary btn-sm">Back</button>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        <tr className="hover">
                            <th>1</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PC;