import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <header className='bg-gray-800 items-center justify-center flex border-b border-black'>
            <Image
                src="/realmadrid.svg"
                width="70"
                height="70"
                alt='Real Madrid logo'
                className='p-2'
            />
        </header>
    )
}

export default Navbar