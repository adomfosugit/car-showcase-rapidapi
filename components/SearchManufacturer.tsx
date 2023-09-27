import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from './ui/command'
import { manufacturers } from '@/constants'
import { Check, CheckIcon, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Image from 'next/image'
interface searchManufacturerProps {
    manufacturer :string,
    setManufacturer: (manufacturer:string) => void
}
const SearchManufacturer = ({manufacturer,setManufacturer}:searchManufacturerProps) => {
    const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className=' flex-1 max-sm:w-full flex justify-start items-center ml-[100px]'>

<Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] sm:w-[500px] justify-between"
        >
            <Image src='/car-logo.svg' width={20} height={20} className='ml-1' alt='car-logo' />
           <p>{manufacturer ? manufacturer : 'Select Cars...'}</p> 
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 " />
          
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 sm:w-[500px] " >
        <Command >
          <CommandInput placeholder="Volkswagen"  value= {manufacturer} onValueChange={setManufacturer} />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className='overflow-y-scroll h-[120px]'>
                {manufacturers.map((item) => (
                  
                    <CommandItem 
                   
                    onSelect={(currentValue) => {
                        setManufacturer(currentValue=== value ? '' : currentValue )
                    }} >{item}
                  
                    </CommandItem>
                ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>

    </div>
  )
}

export default SearchManufacturer