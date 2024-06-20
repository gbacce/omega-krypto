import React from 'react';
 import { Outlet } from 'react-router-dom';
 import Header from '../components/Header';
 
 export default function Root() {
     return <div>
        <Header />
        <Outlet />
        <div>
        <div className='footer'>
            ©2024 Omega Krypto, Inc. All Rights Reserved
        </div>
        </div>
     </div>
 }