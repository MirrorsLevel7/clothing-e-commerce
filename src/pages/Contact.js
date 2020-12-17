import React from 'react';
import '../styles/Contact.scss';

function Contact({onChange}) {
    console.log(onChange)
    return (
        <div className='Contact'>
            <div className='Contact-Container'>
                <form className='Contact-Form'>
                    <h1 className='Contact-Form-title'>login</h1>
                    <hr className='Contact-Form-hr'/>

                    <input
                     className='Contact-Form-input' 
                     type="email" 
                     onChange={onChange}/>

                    <input 
                    className='Contact-Form-input' 
                    type="password" 
                    onChange={onChange}/>
                    
                    <button className='Contact-Form-Btn' type='submit'>submit</button>
                </form>

            </div>
        </div>
    )
}

export default Contact
