import React, { useState } from 'react'
import Head from './Head'
import '../components/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [click , setClick] = useState(false)
  return (
    <>
        <Head/>
        <header>
          <nav className='flexSB'>
            <ul className= {click ? 'mobile-nav' : 'flexSB'} onClick={()=>setClick(false)}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Team">Team</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              
            </ul>
            <div className='start'>
              <div className='button'> GET CALL </div>

            </div>
            <button className='toggle' onClick={()=> setClick(!click)}>
              {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </header>
    </>
  )
}

export default Header