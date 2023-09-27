'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from './ui/button';
import CarDetails from './CarDetails';
import { generatedCarImageUrl } from '@/utils';


 interface carProps  {
   car:{
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number; 
   }
}
const CarCard = ({car}:carProps) => {
  const { city_mpg, year, make, model,transmission, drive } = car;
  const [open, setOpen] = useState(false)
  const modalState = () => {
    setOpen(true)
  }
  return (
    
    <div className='car-card group '>
      <div className='car-card__content  '>
        <h2 className='car-card__content-title'> {make} {model}</h2>

      </div>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image  src = {generatedCarImageUrl(car)} fill priority className='object-contain' alt='car-image'/>

      </div>
      <div className='relative flex w-full mt-2  '>
          <div className='flex group-hover:invisible w-full justify-between text-gray'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image  src= '/steering-wheel.svg' width={20} height={20} alt='wheel'/>
              <p className='text-[14px]'>
                {transmission==='a'? 'Automatic' : 'Manual'}
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image  src= '/tire.svg' width={20} height={20} alt='tyre'/>
              <p className='text-[14px]'>
                {drive?.toUpperCase()}
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image  src= '/gas.svg' width={20} height={20} alt='gas'/>
              <p className='text-[14px]'>
                {city_mpg} MPG
              </p>
            </div>


             </div>
             <div className='car-card__btn-container'>
              <Button variant={'secondary'} 
              onClick={modalState}
              className=' w-full justify-between py-[16px] rounded-full text-white text-[14px] leading-[17px] font-bold items-center'>
                <div className='invisible'>hey</div>
               <p>View More</p>
               <div className='relative w-6 h-6 '>
               <Image src = '/right-arrow.svg' alt='svg' fill className='object-contain'/> 
               </div>
              </Button>
               
             </div>
      </div>
      <CarDetails car={car} open={open} onOpenChange = {()=>setOpen(false)} />
    </div>
    
  )
}

export default CarCard