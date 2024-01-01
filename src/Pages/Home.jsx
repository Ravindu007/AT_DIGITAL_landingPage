import React from 'react'
import Navbar from '../Components/top_navigation/Navbar'
import './Home.css'
import Button from '../Components/button/Button'

const Home = () => {
  return (
    <div className="bg-white h-[2020px] w-full">

      {/* Navbar  */}
      <div className="navbar h-[77px] w-full">
        <Navbar></Navbar>
      </div>

      {/* hero sectiion */}
      <div className="hero-container mb-[30px]">

        {/* hero -image */}
        <div className="hero-img h-[488px] w-full"></div>
        {/* hero-text */}
        <div className="hero-bottom h-[258px] px-[40px] bg-gradient-to-l from-analogous2 to-dark pt-[24px] pb-[32px] flex flex-col gap-[20px]">
          <div className="text-div w-[688px] h-[144px]">
            <p className="text-[48px] font-bold leading-[48px] text-white">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</p>
          </div>
          <div className="button-div">
            <Button></Button>
          </div>
        </div>

      </div>



      <div className="second-section">

        {/* about-section */}
        <div className="about px-[40px] py-[30px]">
          <div className="h-[275px] flex border-2 border-black">
            <div className="left w-[40%] h-full flex justify-center items-center border-2 border-red-400">
              <img src="about/about.svg" alt="" className='w-[275px] h-[275px]'/>
            </div>
            <div className="right w-[60%] h-full flex flex-col justify-center gap-[20px] border-2 border-blue-400 pl-[20px]">
              <p className="text-primary font-semibold text-[27px] leading-[33px]">Web & Mobile App Development</p>
              <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
              <Button></Button>
            </div>
          </div>
        </div>

      
        {/* contact-section */}
        <div className="contact px-[40px] py-[30px]">
          <div className="h-[276px] flex border-2 border-black">
          <div className="left w-[60%] h-full flex flex-col justify-center gap-[20px] border-2 border-blue-400 pl-[20px]">
              <p className="text-primary font-semibold text-[27px] leading-[33px]">Digital Strategy Consulting</p>
              <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
              <Button></Button>
            </div>
            <div className="right w-[40%] h-full flex justify-center items-center border-2 border-red-400">
              <img src="about/about.svg" alt="" className='w-[275px] h-[275px]'/>
            </div>
          </div>
        </div>

      </div>




      <div className="footer"></div>
    </div>
  )
}

export default Home