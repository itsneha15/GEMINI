import React from 'react'
import './Mainpage.css'
import { assets } from '../../assets/assets'

const mainpage = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt=''/>
      </div>
       <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest brautiful places across the  world for road trips.</p>
            <img src={assets.compass_icon} alt=''/>
          </div>
          <div className="card">
            <p>Suggest brautiful places across the  world for road trips.</p>
            <img src={assets.bulb_icon} alt=''/>
          </div>
          <div className="card">
            <p>Suggest brautiful places across the  world for road trips.</p>
            <img src={assets.message_icon} alt=''/>
          </div>
          <div className="card">
            <p>Suggest brautiful places across the  world for road trips.</p>
            <img src={assets.code_icon} alt=''/>
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type='text' placeholder='Enter a prompt here'/>
            <div>
                 <img src={assets.gallery_icon} alt="" />
                 <img src={assets.mic_icon} alt="" />
                 <img src={assets.send_icon} alt="" />
            </div>
          </div>
          
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. <u>Your privacy & Gemini Apps</u>
          </p>
        </div>
       </div>
    </div>
  )
}

export default mainpage
