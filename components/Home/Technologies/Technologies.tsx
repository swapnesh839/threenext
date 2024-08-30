"use client"
import Sparklescomponent from "@/components/StyledComponent/Sparklescomponent";
import { slideInFromBottom } from "@/utilits/motionvariients/motionvarient";
import { motion } from "framer-motion";

import Image from 'next/image'
import React from 'react'

const Technologies = () => {
    return (
        <div className='custom-container sectionpadding'>

            <div className='flex flex-col justify-center align-middle mb-20'>
                <motion.div className="text-center mx-auto" variants={slideInFromBottom()} initial="hidden" viewport={{
                    once: true
                }} whileInView="visible">
                    <Sparklescomponent text='Create stunning 3D visuals with Three.js' />
                </motion.div>
                <motion.div className="text-center mx-auto mt-6" variants={slideInFromBottom()} initial="hidden" viewport={{
                    once: true
                }} whileInView="visible">
                    <span className="text-3xl">
                        This conveys the power and capability of Three.js in creating advanced web experiences, aligning with modern technology themes.
                    </span>
                </motion.div>
            </div>
            <div className=' flex justify-center align-middle'>
                <div className='max-w-3xl'>
                    <div className='flex justify-center gap-4 sm:gap-1'>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/HTML.png" alt="HTML" title='HTML' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/CSS.png" alt="CSS" title='CSS' /></motion.div>
                    </div>
                    <div className='flex justify-center gap-4 sm:gap-1'>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/JS.png" alt="Js" title='Js' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Bootstrap.png" alt="Bootstrap" title='Bootstrap' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Git.png" alt="Git" title='Git' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Taiwind.png" alt="Taiwind" title='Taiwind' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Vite.png" alt="Vite" title='Vite' /></motion.div>
                    </div>
                    <div className='flex justify-center gap-4 sm:gap-1'>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/React.png" alt="React" title='React' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Threejs.png" alt="Threejs" title='Threejs' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Nextjs.png" alt="Nextjs" title='Nextjs' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Node.png" alt="Node" title='Node' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Express.png" alt="Express" title='Express' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/MongoDB.png" alt="MongoDB" title='MongoDB' /></motion.div>
                    </div>
                    <div className='flex justify-center gap-4 sm:gap-1'>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/React-querry.png" alt="React-querry" title="React-querry" /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/BLender.png" alt="BLender" title='BLender' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Typescript.png" alt="Typescript" title='Typescript' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Redux.png" alt="Redux" title='Redux' /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Canva.png" alt="Canva" title='Canva' /></motion.div>
                    </div>
                    <div className='flex justify-center gap-4 sm:gap-1'>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Googlemodalviewer.png" title='Googlemodalviewer' alt="Googlemodalviewer" /></motion.div>
                        <motion.div variants={slideInFromBottom()} initial="hidden" viewport={{
                            once: true
                        }} whileInView="visible" className='border-2 border-transparent rounded-2xl hover:border-purple-900 hover:scale-110 transition-all' style={{ maxWidth: 'calc(100%/6 - 20px)', aspectRatio: '1/1' }}><Image width={100} height={100} className='object-cover rounded-2xl' src="/assets/img/Tech/Wordpress.png" title='Wordpress' alt="Wordpress" /></motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies