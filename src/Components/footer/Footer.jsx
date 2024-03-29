import React from 'react'

const Footer = () => {
  return (
    <div className="footer bg-primary h-full flex flex-col gap-[60px]  px-[20px] md:px-[40px] py-[40px] lg:px-[60px] text-white">

      <div className='flex-col lg:flex lg:flex-row lg:justify-between lg:gap-[112px] xlg:gap-[345px]'>
          {/* row 1 */}
          <div className="row flex flex-col md:w-[413px] lg:w-[438px] gap-[20px]  pb-[60px] lg:pb-0">
            <div className="brand-container">
              <img src="brand.svg" alt="" />
            </div>
            <p className='text-[16px] leading-[19.2px] font-normal'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
          </div>

          {/* row 2 */}
          <div className="row flex  flex-col md:flex-row gap-[40px] md:gap-[79px] w-[75%] ">

            <div className="left">
              <ul className='flex flex-col gap-[12px] pr-[37px]'>
                <li className="font-semibold text-[21px]">Our Technologies</li>
                <li className='text-[12px] md:text-[14px]'>ReactJS</li>
                <li className='text-[12px] md:text-[14px]'>Gatsby</li>
                <li className='text-[12px] md:text-[14px]'>NextJS</li>
                <li className='text-[12px] md:text-[14px]'>NodeJS</li>
                <li className='text-[12px] md:text-[14px]'>GraphQL</li>
                <li className='text-[12px] md:text-[14px]'>Laravel</li>
              </ul>
            </div>

            <div className="right">
            <ul className='flex flex-col gap-[12px]'>
                <li className="font-semibold text-[21px]">Our Services</li>
                <li className='text-[12px] md:text-[14px]'>Social media Marketing</li>
                <li className='text-[12px] md:text-[14px]'>Web & Mobile App Development</li>
                <li className='text-[12px] md:text-[14px]'>Data & Analytics</li>
                <li className='text-[12px] md:text-[14px]'>Google Marketing solutions</li>
                <li className='text-[12px] md:text-[14px]'>Search Engine Optimization</li>
              </ul>
            </div>
          </div>
      </div>

      <div className="row">
        <hr className=''/>
        <div className='flex justify-center gap-8 text-[14px] py-1'>
          <p>Privacy Policy</p>
          <p>|</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footer