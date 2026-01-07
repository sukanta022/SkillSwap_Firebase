import React, { use } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const HomeLayouts = () => {
    // const {loading} = use(AuthContext)
    // if(loading){
    //     return <p>Loading....</p>
    // }
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;