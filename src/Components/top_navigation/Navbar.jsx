import React, { useState } from 'react'

const Navbar = () => {


  const [show, setShow] = useState(false)

  const toggleShowMenu = () => {
    setShow(prev => !prev)
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
          <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CAREERS</li>
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
          <button onClick={toggleShowMenu}><img src="bugger.svg" alt="" /></button>
        </div>
      </div>
    </div>


    {/* mobile menu */}
      {show && (
          <div className="fixed w-full md:hidden bg-primary text-white px-[20px] py-[26px] top-20">
          <ul className='flex flex-col gap-[10px] py-[10px]'>
            <li>SERVICES</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>CAREERS</li>
          </ul>
    </div>
    )}
   </>
  )
}

export default Navbar