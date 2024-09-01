"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon, VolumeX } from 'lucide-react';
import { Volume2 } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { Rootstore } from '@/lib/reduxtoolkit/store/store';
import { toggleMusic } from '@/lib/reduxtoolkit/Scilce/MusicSclice';

const Header = () => {
  const musicstate = useSelector((state: Rootstore) => state.music.music)
  const dispatch = useDispatch()
  return (
    <div className='min-h-8 z-50 w-full fixed top-0 Headerbg border-b border-purple-950'>
      <div className='custom-container flex flex-row flex-nowrap align-middle justify-between custom-text1'>
        <Link className='justify-center flex my-auto' href={'/'}>
          <Image width={200} height={100} src="/assets/img/logo.png" alt="logo" />
        </Link>
        <ul className='flex p-3 flex-row  my-auto'>
        <li className='mx-4 justify-center align-middle md:flex hidden' onClick={() => dispatch(toggleMusic())}>
           <a href='https://github.com/swapnesh839' target='_blank'> <GithubIcon className='m-auto hover:text-sky-500 hover:rotate-[-12deg] hover:scale-105 transition-all'/></a>
          </li>
          <li className='mx-4 justify-center align-middle md:flex hidden' onClick={() => dispatch(toggleMusic())}>
            <a href='https://www.linkedin.com/in/swapnesh-panda-164b79303/' target='_blank'><LinkedinIcon className='m-auto hover:text-sky-500 hover:rotate-[-12deg] hover:scale-105 transition-all'/></a>
          </li>
          <li className='mx-4 justify-center align-middle md:flex hidden' onClick={() => dispatch(toggleMusic())}>
          <a href='https://www.instagram.com/swapnesh.io/' target='_blank'><Instagram className='m-auto hover:text-sky-500 hover:rotate-[-12deg] hover:scale-105 transition-all'/></a>
          </li>
          <li className='mx-4'>
            <Link className='hover:text-sky-500 hover:scale-105 transition-all' href={'/Car'}>3D Car</Link>
          </li>
          <li className='mx-4 flex justify-center align-middle transition-all' onClick={() => dispatch(toggleMusic())}>
            {
              musicstate ? <Volume2 className='m-auto hover:text-sky-500 hover:rotate-[-12deg] hover:scale-105 transition-all' /> : <VolumeX className='m-auto hover:text-sky-500 hover:rotate-[-12deg] transition-all hover:scale-105' />
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header