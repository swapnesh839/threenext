import React from 'react'
import { Sparkles } from 'lucide-react';
function Sparklescomponent({text}:{text?:string}) {
  return (
    <div 
    className='flex w-fit px-5 py-2 rounded-3xl border border-purple-950 backdrop-blur-sm bg-[#2f0e4b50] align-middle justify-center '>
      <Sparkles className='m-auto mr-2 gradient-text' /><span className='gradient-text'>{text}</span>
      </div>
  )
}

export default Sparklescomponent