import React from 'react';


import './contact.css'
const Contact = () => {
  return (
    <div className='contact' >
    <div className='contact-sub'>
    <h1 className='heading'>Contact Us</h1>
    <div className='fields'>
    <label>Name</label>
    <input type='text' placeholder=' Enter your name' />
    <label>Email</label>
    <input type='email' placeholder=' Enter your email' />
    <label>Message</label>
    <textarea className='text' placeholder='Type your message'/>
    </div>
    <button className='btn'>Send</button>
    </div>
    </div>
  )
}

export default Contact
