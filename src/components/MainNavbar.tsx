import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

function MainNavbar() {
  return (
    <div className={'w-full flex justify-between px-6 py-4'}>
        <Image
            src="/al_logos/aprtmentlife_logo.png"
            width={100}
            height={100}
            alt="AprtmentLife main logo"
        />
        <div>
            <Button variant={'outline'} className={'mr-1'}>Log In</Button>
            <Button className={'ml-1'}>Sign Up</Button>
        </div>
    </div>
  )
}

export default MainNavbar