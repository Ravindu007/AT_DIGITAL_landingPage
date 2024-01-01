import React, { useState } from 'react'

const Navbar = () => {


  const [show, setShow] = useState(false)

  const toggleShowMenu = () => {
    setTimeout(()=>{
      setShow(prev => !prev)
    },200)
  }

  return (
    <>
    {/* desktop */}
    <div className="hidden md:flex justify-between items-center bg-primary text-white text-[14px] px-[40px]">
      <div className="section-1">
        <div className="brand-container">
          <img src="brand.svg" alt="" />
        </div>
      </div>
      <div className="section-2">
        <ul className='flex gap-[28px]  py-[28px]'>
          <a href="#services"><li>SERVICES</li></a>
          <a href="#about"><li>ABOUT US</li></a>
          <a href="#footer"><li>CONTACT US</li></a>
          <a href="#foooter"><li>CAREERS</li></a>
        </ul>
      </div>
    </div>

    {/* mobile view */}
    <div className="fixed w-full flex md:hidden justify-between items-center bg-primary text-white px-[20px] py-[26px]">
      <div className="section-1">
        <div className="brand-container">
          <img src="brand.svg" alt="" />
        </div>
      </div>
      <div className="section-2">
        <div className="button-container">
          {!show ? 
            <button onClick={toggleShowMenu}><img src="bugger.svg" alt="" width={40} /></button>
          : 
             <button onClick={toggleShowMenu}><img src="close.svg" alt="" width={40} /></button>
          }
        </div>
      </div>
    </div>


    {/* mobile menu */}
      {show && (
          <div className="fixed w-full md:hidden bg-primary text-white px-[20px] py-[26px] top-20">
          <ul className='flex flex-col gap-[10px] py-[10px]'>
            <a href="#services"><li>SERVICES</li></a>
            <a href="#about"><li>ABOUT US</li></a>
            <a href="#footer"><li>CONTACT US</li></a>
            <a href="#foooter"><li>CAREERS</li></a>
          </ul>
    </div>
    )}
   </>
  )
}

export default Navbar