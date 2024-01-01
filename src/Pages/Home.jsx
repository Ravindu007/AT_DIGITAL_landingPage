import React from 'react'
import Navbar from '../Components/top_navigation/Navbar'
import './Home.css'
import Button from '../Components/button/Button'
import Footer from '../Components/footer/Footer'
import ButtonLearnMore from '../Components/button/ButtonLearnMore'

const Home = () => {
  return (
    <div className="bg-white w-full">

      {/* Navbar  */}
      <div className="navbar w-full">
        <Navbar></Navbar>
      </div>

      {/* hero sectiion */}
      <div className="hero-container mb-[30px]">

        {/* hero -image */}
        <div className="hero-img h-[218px] md:h-[488px] w-full"></div>
        {/* hero-text */}
        <div className="hero-bottom w-full h-[295px] md:h-[258px] px-[20px] md:px-[40px] bg-gradient-to-l from-analogous2 to-dark  pt-[24px] pb-[32px] flex flex-col gap-[20px]">
          <div className="text-div md:w-[688px] md:h-[144px]">
            <p className="text-[36px] md:text-[48px] font-bold leading-[48px] text-white">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</p>
          </div>
          <div className="button-div">
            <Button></Button>
          </div>
        </div>

      </div>



      <div className="second-section">

        {/* about-section */}
        <div className="about px-[20px] md:px-[40px] py-[30px]">
          <div className="md:h-[275px] flex flex-col md:flex-row border-2 border-black">

            <div className="left md:w-[40%] h-full flex justify-center items-center border-2 border-red-400">
              <img src="about/about.svg" alt="" className='w-[275px] h-[275px]'/>
            </div>

            <div className="right md:w-[60%] h-full flex flex-col justify-center md:items-start items-center gap-[20px] border-2 border-blue-400 md:pl-[20px]">
              <p className="text-primary font-semibold text-[27px] leading-[33px] text-center">Web & Mobile App Development</p>
              <p className='text-[16px] text-center md:text-start'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
              <ButtonLearnMore></ButtonLearnMore>
            </div>
          </div>
        </div>

      
        {/* contact-section */}
        <div className="contact px-[20px] md:px-[40px] py-[30px]">
          <div className="md:h-[276px] flex flex-col md:flex-row border-2 border-black">
            
            {/* desktop view */}
            <div className="left hidden md:flex md:w-[60%] h-full flex-col justify-center gap-[20px] border-2 border-blue-400 pl-[20px]">
              <p className="text-primary font-semibold text-[27px] leading-[33px]">Digital Strategy Consulting</p>
              <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
              <ButtonLearnMore></ButtonLearnMore>
            </div>
            <div className="right hidden md:flex md:w-[40%] h-full justify-center items-center border-2 border-red-400">
              <img src="contact/contact.svg" alt="" className='w-[275px] h-[275px]'/>
            </div>

            {/* mobile view */}
            <div className="flex md:hidden right md:w-[40%] h-full justify-center items-center border-2 border-red-400">
              <img src="contact/contact.svg" alt="" className='w-[275px] h-[275px]'/>
            </div>
            <div className="flex md:hidden left md:w-[60%] h-full flex-col justify-center gap-[20px] border-2 border-blue-400 md:pl-[20px]">
              <p className="text-primary font-semibold text-[27px] leading-[33px] text-center">Digital Strategy Consulting</p>
              <p className='text-[16px] text-center'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
              <div className="button-div flex justify-center">
                <ButtonLearnMore></ButtonLearnMore>
              </div>
            </div>
          </div>
        </div>

      </div>




      <div className="footer-container h-auto w-full">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home