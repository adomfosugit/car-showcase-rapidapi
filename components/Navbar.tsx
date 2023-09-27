import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <header className='w-full abolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href = '/' className='flex justify-center items-center '>
                <p>CLONES</p>
            </Link>
            <Button type='button' variant={'secondary'}>Sign In</Button>


        </nav>
    </header>
  )
}

export default Navbar