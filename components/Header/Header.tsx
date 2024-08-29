"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Volume, VolumeX } from 'lucide-react';
import { Volume2 } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { Rootstore } from '@/lib/reduxtoolkit/store/store';
import { toggleMusic } from '@/lib/reduxtoolkit/Scilce/MusicSclice';

const Header = () => {
  const musicstate = useSelector((state: Rootstore) => state.music.music)
  const dispatch = useDispatch()
  return (
    <div className='min-h-8 '>
      <div className='custom-container flex flex-row flex-nowrap align-middle justify-between custom-text1'>
        <Link className='justify-center flex my-auto' href={'/'}>
          <Image width={200} height={100} src="/assets/img/logo.png" alt="logo" />
        </Link>
        <ul className='flex p-3 flex-row  my-auto'>
          <li className='mx-4'>
            <Link className='hover:text-red-950' href={'/Car'}>3D Car</Link>
          </li>
          <li className='mx-4 flex justify-center align-middle' onClick={() => dispatch(toggleMusic())}>
            {
              musicstate ? <Volume className='m-auto' /> : <Volume2 className='m-auto'/>
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header