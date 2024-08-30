"use client"
import React from 'react'
import { motion } from "framer-motion";
import Sparklescomponent from '../StyledComponent/Sparklescomponent'
import { slideInFromLeft } from '@/utilits/motionvariients/motionvarient';

const Herosection = () => {
  return (
    <div className='custom-container sectionpadding'>
      <div className='flex md:flex-row flex-col'>
        <div>
          <motion.div variants={slideInFromLeft(0.5)} initial="hidden" animate="visible">
            <Sparklescomponent text='Three js Portfolio ' />
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.7)}
            initial="hidden" animate="visible"
            className="mt-6 custom-heading"
          >
            <span>
              Combinimg
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-cyan-700">
                {" "}
                Tech With{" "}
              </span>
              Reality
            </span>
          </motion.div>
          <motion.div variants={slideInFromLeft(0.9)} initial="hidden" animate="visible" className='mt-4'>
            <p>
              I&apos;m a Full Stack Software Engineer with skills in the MERN stack, Three.js, and Blender 3D.&nbsp;Explore my projects to see what I can do!
            </p>
          </motion.div>
        </div>
        <div className='md:mt-0 mt-10'>
          <motion.div variants={slideInFromLeft(0.5)} initial="hidden" animate="visible">
            <Sparklescomponent text='Three js Portfolio ' />
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.7)}
            initial="hidden" animate="visible"
            className="mt-6 custom-heading"
          >
            <span>
              Combinimg
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-cyan-700">
                {" "}
                Tech With{" "}
              </span>
              Reality
            </span>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}

export default Herosection