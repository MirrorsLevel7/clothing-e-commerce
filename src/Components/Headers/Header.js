import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/FirebaseUtils';
import '../Headers/Header.scss';

function Header({currentUser}) {
    return (
        <div className='Header'>
            <div className='Header-Logo'>
                <Link className='Header-Logo-Link' to='/'>Micheals</Link>
            </div>
            <div className='Header-Links'>
                <Link className='Header-Link' to='/shop'>Shop</Link>
                {currentUser ? (<Link className='Header-Link' onClick={()=>{
                    auth.signOut();
                }}>
                   Sign Out 
                </Link>): (
                    <Link className='Header-Link' to='/signin'>SignIn</Link>
                )}
                
            </div>
        </div>
    )
}

export default Header
