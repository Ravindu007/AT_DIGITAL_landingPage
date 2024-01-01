import React from 'react'

const Footer = () => {
  return (
    <div className="footer bg-primary h-full flex flex-col gap-[60px]  px-[40px] py-[40px] text-white">

      {/* row 1 */}
      <div className="row flex flex-col md:w-[60%] gap-[20px] border-2">
        <div className="brand-container">
          <img src="brand.svg" alt="" />
        </div>
        <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
      </div>

        {/* row 2 */}
      <div className="row flex  flex-col md:flex-row gap-[40px] md:gap-[316px] w-[75%] border-2">

        <div className="left border-2">
          <ul className='flex flex-col gap-[12px]'>
            <li className="font-semi bold text-[21px]">Our Technologies</li>
            <li className='text-[12px] md:text-[14px]'>ReactJS</li>
            <li className='text-[12px] md:text-[14px]'>Gatsby</li>
            <li className='text-[12px] md:text-[14px]'>NextJS</li>
            <li className='text-[12px] md:text-[14px]'>NodeJS</li>
            <li className='text-[12px] md:text-[14px]'>GraphQL</li>
            <li className='text-[12px] md:text-[14px]'>Laravel</li>
          </ul>
        </div>

        <div className="right border-2">
        <ul className='flex flex-col gap-[12px]'>
            <li className="font-semi bold text-[21px]">Our Services</li>
            <li className='text-[12px] md:text-[14px]'>Social media Marketing</li>
            <li className='text-[12px] md:text-[14px]'>Web & Mobile App Development</li>
            <li className='text-[12px] md:text-[14px]'>Data & Analytics</li>
            <li className='text-[12px] md:text-[14px]'>Google Marketing solutions</li>
            <li className='text-[12px] md:text-[14px]'>Search Engine Optimization</li>
          </ul>
        </div>
      </div>


      <div className="row">
        <hr className='h-[10px]'/>
        <div className='flex justify-center gap-8 text-[14px]'>
          <p>Privacy Policy</p>
          <p>|</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footer