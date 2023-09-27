'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import { Button } from './ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const  SearchButton = () => (
  <Button type='submit' className='absolute right-20' >
    <Image src='/magnifying-glass.svg' width={30} height={30} object-contain alt='lens' />
  </Button>
)
const Searchbar = () => {
  const router = useRouter()
    const [manufacturer,setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(manufacturer === '' && model === '') {
        return alert('please fill in the search bar ...')

      }
      updateSearcparams(model.toLocaleLowerCase(),manufacturer.toLocaleLowerCase())

    }
    const updateSearcparams = (model:string, manufacturer:string) => {
      const searchParams = new URLSearchParams(window.location.search)
      if(model) {
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }
      if(manufacturer) {
        searchParams.set('manufacturer', manufacturer)
      } else {
        searchParams.delete('manufacturer')
      }
      const newPathname = `${window.location.pathname}?${searchParams.toString()}`
      router.push(newPathname)
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item relative'>
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
            <SearchButton />
        </div>
        
    </form>
  )
}

export default Searchbar