import React from 'react'
import './Header.css'
import img2 from '../img/3.jpg'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src={img2} />
    </div>
  )
}
