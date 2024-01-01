import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-primary text-white px-[80px] text-[14px]">
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
  )
}

export default Navbar