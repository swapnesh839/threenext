import { GithubIcon, InstagramIcon, LucideLinkedin, TwitterIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='min-h-8 z-50 w-full  Headerbg border-t border-purple-950'>
            <div className='custom-container flex flex-col'>
                <div className='flex md:flex-row flex-col align-middle justify-between mt-5 p-3'>
                    <div className='w-full md:w-1/3 flex'>
                        <div className='mx-auto '>
                            <Link className='justify-start flex my-auto' href={'/'}>
                                <Image width={200} height={80} src="/assets/img/logo.png" alt="logo" />
                            </Link>
                            <div className='mt-4'>
                                <p className=''>
                                    Combinimg Tech With Reality
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 flex'>
                        <div className='mx-auto '>
                            <p>Scocial Media</p>
                            <div className='mt-4'>
                                <a href='https://www.instagram.com/' target='_blank'><p className='flex justify-start my-1 align-middle text-sm'>
                                    <InstagramIcon size={19} className='text-xs mr-1' /> Instagram
                                </p></a>
                                <a href='https://www.linkedin.com/' target='_blank'>
                                    <p className='flex justify-start my-1 align-middle text-sm'>
                                        <LucideLinkedin size={19} className='text-xs mr-1' /> LinkedIn
                                    </p>
                                </a>
                                <a href='https://github.com/' target='_blank'>
                                    <p className='flex justify-start my-1 align-middle text-sm'>
                                        <GithubIcon size={19} className='text-xs mr-1' /> Github
                                    </p>
                                </a>
                                <p className='flex justify-start my-1 align-middle text-sm'>
                                    <TwitterIcon size={19} className='text-xs mr-1' /> Twitter
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 flex'>
                        <div className='mx-auto '>
                            <p>Contact Me</p>
                            <div className='mt-4'>
                                <p className='flex justify-start my-1 align-middle'>
                                    +91 6743563740
                                </p>
                                <p className='flex justify-start my-1 align-middle'>
                                    business.swapnesh@gmail.com
                                </p>
                                {/* <p className='flex justify-start my-1 align-middle'>
                                    Project 1
                                </p>
                                <p className='flex justify-start my-1 align-middle'>
                                    Project 1
                                </p> */}
                                <p className='flex justify-start my-1 align-middle'>
                                    Bhubaneswara,Odisha
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className=' text-white p-3 w-full  mt-5 text-center'>©2024 Swapnesh Io. All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer