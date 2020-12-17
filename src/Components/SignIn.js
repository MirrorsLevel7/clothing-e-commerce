import React, { Component } from 'react'
import Contact from '../pages/Contact';

export default class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e)=>{
        this.setState({
            
        })
    }

    render() {
        return (
            <div className='signup'>
               <Contact onChange={this.handleChange}/>
            </div>
        )
    }
}
