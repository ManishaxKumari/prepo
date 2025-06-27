import Link from 'next/link'
import React, { Children, ReactNode } from 'react'
import Image from 'next/image'

const Rootlayout = ({children} : {children : ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2'>
        <Image  src="/logo.png" alt ="logo" width={60} height={50}/>
        <h2>Prepo</h2>
        </Link>

      </nav>
      {children}
    </div>
  )
}

export default Rootlayout
