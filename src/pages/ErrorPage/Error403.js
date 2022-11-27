import React from 'react';
import { Link } from 'react-router-dom';

const Error403 = () => {
    return (
        <div className='min-h-screen'>
            <div>
                <img className='mx-auto w-96' src="https://img.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1904.jpg?w=2000" alt=''/>
            </div>
            <div className='pt-4 text-center'>
            No Access.<br/>
            <Link to='/' className='btn btn-outline btn-secondary mt-12'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error403;