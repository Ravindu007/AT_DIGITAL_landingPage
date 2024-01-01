import React from 'react'
import Navbar from '../Components/top_navigation/Navbar'
import './Home.css'
import Button from '../Components/button/Button'

const Home = () => {
  return (
    <div>
      {/* Navbar  */}
      <div className="navbar h-[77px] w-full">
        <Navbar></Navbar>
      </div>

      {/* hero sectiion */}
      <div className="hero-container">

        <div className="hero-img h-[488px] w-full"></div>

        <div className="hero-bottom h-[258px] px-[40px] bg-gradient-to-l from-analogous2 to-dark pt-[24px] pb-[32px] flex flex-col gap-[20px]">
          <div className="text-div w-[688px] h-[144px]">
            <p className="text-[48px] font-bold leading-[48px] text-white">We crush your competitors, goals, and sales records - without the B.S.</p>
          </div>
          <div className="button-div">
            <Button></Button>
          </div>
        </div>

      </div>




      <div className="about-1"></div>
      <div className="about-2"></div>
      <div className="footer"></div>
    </div>
  )
}

export default Home