import React from 'react'

const Navbar = () => {
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
    <div className="flex md:hidden justify-between items-center bg-primary text-white px-[20px] py-[26px]">
      <div className="section-1">
        <div className="brand-container">
          <img src="brand.svg" alt="" />
        </div>
      </div>
      <div className="section-2">
        <div className="button-container">
          <button><img src="bugger.svg" alt="" /></button>
        </div>
      </div>
    </div>
   </>
  )
}

export default Navbar