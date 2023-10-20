import React from 'react'
import './styles.css'
import logo from "../../images/logo.png"
import overv from "../../images/1. overview.png"
import tick from "../../images/2. tickets.png"
import ideas from "../../images/3. ideas.png"
import contacts from "../../images/4. contacts.png"
import agents from "../../images/5. agents.png"
import articles from "../../images/6. articles.png"
import settings from "../../images/a_1. settings.png"
import subscp from "../../images/a_2. subscription.png"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar' >
        <div className='sb-up'>
           <img src={logo} alt='' className='sb-imgs'/>
            <p className='sb-text'>Dashboard Kit</p>
        </div>
        <Link to='/'>
        <div className='sb-md'>
        <img src={overv} alt='' className='sb-img'/>
            <p className='sb-text1'>Overviews</p>
        </div>
      </Link>
        <Link to='/ticket'>
        <div className='sb-md1'>
        <img src={tick} alt='' className='sb-img'/>
            <p className='sb-text1'>Tickets</p>
        </div>
        </Link>
        <div className='sb-md1'>
        <img src={ideas} alt='' className='sb-img'/>
            <p className='sb-text1'>Ideas</p>
        </div>
        <div className='sb-md1'>
        <img src={contacts} alt='' className='sb-img'/>
            <p className='sb-text1'>Contacts</p>
        </div>
        <div className='sb-md1'>
        <img src={agents} alt='' className='sb-img'/>
            <p className='sb-text1'>Agents</p>
        </div>
        <div className='sb-md1'>
        <img src={articles} alt='' className='sb-img'/>
            <p className='sb-text1'>Articles</p>
        </div>
        <div className='sb-emp'>
           
        </div>
        <div className='sb-down'>
        <img src={settings} alt='' className='sb-img'/>
            <p className='sb-text1'>Settings</p>
        </div>
        <div className='sb-md1'>
        <img src={subscp} alt='' className='sb-img'/>
            <p className='sb-text1'>Subscribtion</p>
        </div>
    </div>
  )
}

export default Sidebar