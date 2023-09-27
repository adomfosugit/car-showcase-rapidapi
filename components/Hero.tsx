import React from 'react'
import CustomButton from './CustomButton';
import Image from 'next/image';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-gray-300'>
            Journey Through Automotive Excellence
            </h1>
            <p className='text-[27px] text-black-100 font-light mt-5'>
            A Paradise for Auto Enthusiasts
            </p>
            <CustomButton />
        </div>
        <div className='hero__image-container'>
            <div className = 'hero__image'>
            <Image src= '/futuristic.png' alt = 'hero' fill className='object-contain'/>

            </div>
           

        </div>
    </div>
  )
}
export default Hero;