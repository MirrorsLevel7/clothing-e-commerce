import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss';

function Header() {
    return (
        <div className='Header'>
            <div className='Header-Logo'>
                <Link className='Header-Logo-Link' to='/'>Micheals</Link>
            </div>
            <div className='Header-Links'>
                <Link className='Header-Link' to='/shop'>Shop</Link>
                <Link className='Header-Link' to='/signin'>Login</Link>
            </div>
        </div>
    )
}

export default Header
