import { MoveLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Notfound = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col' >
      <Image src="/assets/img/404.png" alt="404" className='max-w-sm w-full' width={500} height={500} />
      <div className='mx-auto mt-3 flex justify-center align-middle border border-transparent hover:border-purple-700 p-1 rounded-lg'><MoveLeft className='text-xs' /><Link href={'/'}>Go Back</Link></div>
    </div>
  )
}

export default Notfound