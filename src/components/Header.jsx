import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return <div className='header'>
        <NavLink to='/' className='headerLink'>Home</NavLink>
        <NavLink to='/solutions' className='headerLink'>Solutions</NavLink>
        <NavLink to='/privacy' className='headerLink'>Data Privacy</NavLink>
        <NavLink to='/ransomware' className='headerLink'>Ransomware</NavLink>
        <NavLink to='/krypto-insights' className='headerLink'>Krypto-Insights</NavLink>
        <NavLink to='/contact' className='headerLink'>Contact</NavLink>
        <NavLink to='/login' className='headerLink'>Log-in/Registration</NavLink>
    </div>
}