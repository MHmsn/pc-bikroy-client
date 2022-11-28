import React from 'react';
import { Link, useRouteError } from 'react-router-dom';



const ErrorPage = () => {
    let error = useRouteError();
    console.error(error);
    return (
        <div className='min-h-screen'>
            <div>
                <img className='mx-auto w-96' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1669565813~exp=1669566413~hmac=7c0f862a41bf2bfb48472e0419311ad16340448654aaf3f26dc574fca9dd0425" alt=''/>
            </div>
            <div className='pt-4'>
            Error 404 - No content found!<br/>
            Please check your route and try again!
            Or, Log Out and then Login and try again.
            <br/>
            <Link to='/' className='btn btn-outline btn-secondary mt-12'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;