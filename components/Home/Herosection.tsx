"use client"
import React from 'react'
import { motion } from "framer-motion";
import Sparklescomponent from '../StyledComponent/Sparklescomponent'
import { slideInFromLeft, slideInFromRight } from '@/utilits/motionvariients/motionvarient';
import Image from 'next/image';

const Herosection = () => {
  return (
    <div className='custom-container sectionpadding'>
      <div className='flex md:flex-row flex-col '>
        <div className='w-full md:w-1/2 my-auto'>
          <motion.div variants={slideInFromLeft(0.5)} initial="hidden" animate="visible">
            <Sparklescomponent text='Three js Portfolio ' />
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.7)}
            initial="hidden" animate="visible"
            className="mt-6 custom-heading"
          >
            <span>
              AR Future With
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-cyan-700">
                {" "}
                RealitiQ XR{" "}
              </span>
              {/* Reality */}
            </span>
          </motion.div>
          <motion.div variants={slideInFromLeft(0.9)} initial="hidden" animate="visible" className='mt-4'>
            {/* <p>
              I&apos;m a Full Stack Software Engineer with skills in the MERN stack, Three.js, and Blender 3D.&nbsp;Explore my projects !
            </p> */}
            <p>Make your future with RealitiQ XR</p>
          </motion.div>
          <motion.button variants={slideInFromLeft(1.1)} initial="hidden" animate="visible" className='mt-8 border border-purple-950 bg-gradient-to-r from-[#1e094448] to-[#081b4f48] backdrop-blur-sm text-white bg-blend-saturation py-2 px-8 rounded-xl' >
            Learn More!
          </motion.button>
        </div>
        <div className='md:mt-0 mt-10 w-full md:w-1/2 flex'>
          <motion.div variants={slideInFromRight(0.5)} className='m-auto' initial="hidden" animate="visible">
            <Image src="/assets/img/Herosectionimg.png" alt="hero" width={500} height={500} />
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Herosection