import React from 'react'
//import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { DialogClose, DialogPortal } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { generatedCarImageUrl } from '@/utils';
export interface carProps{
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
interface carDetailsProps{
    open:boolean;
 
    onOpenChange:() => void;
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

const CarDetails = ({open,onOpenChange,car}:carDetailsProps) => {
  return (
    <Dialog  open = {open} onOpenChange={onOpenChange}>
        
      
      <DialogContent  className="sm:max-w-[425px] overflow-y-auto h-[600px] ">
        <DialogHeader>
          <DialogTitle >Car Details</DialogTitle>
        </DialogHeader>
        <DialogClose />

        <div className='flex-1 flex flex-col gap-3'>
            <div className='relative w-full h-40  bg-cover bg-slate-200  bg-center'>
            <Image  src = {generatedCarImageUrl(car,'angle')} fill priority className='object-contain' alt='car-image'/>
            </div>

            <div className='flex gap-3'>
                <div className='flex-1 relative w-full h-24 bg-primary-gray-100 rounded-lg'>
                <Image  src = {generatedCarImageUrl(car,'33')} fill priority className='object-contain' alt='car-image'/>
                </div>
                <div className='flex-1 relative w-full h-24 bg-primary-gray-100 rounded-lg'>
                <Image  src = {generatedCarImageUrl(car,'29')} fill priority className='object-contain' alt='car-image'/>
                </div>
                <div className='flex-1 relative w-full h-24 bg-primary-gray-100 rounded-lg'>
                <Image  src = {generatedCarImageUrl(car,'13')} fill priority className='object-contain' alt='car-image'/>
                </div>
            </div>
            
        </div>

        <div className='flex-1 flex flex-col gap-2'>
            <h2 className='font-semibold text-xl capitalize'>{car.make} {car.model}</h2>

        </div>
        <div className='mt-3 flex flex-wrap gap-4'>

            
            {Object.entries(car).map(([key,value]) => 
            <div className='flex justify-between gap-5 w-full text-right' key={key}>
                <h4 className='text-gray capitalize '>{key.split('_').join(' ')}</h4>
                <p className='text-black-100 font-semibold'>{value}</p>

            </div>)}

        </div>
        
          
        
      </DialogContent>
    </Dialog>
  )


 
}

export default CarDetails