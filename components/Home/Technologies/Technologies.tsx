"use client"
import Image from 'next/image'
import React from 'react'
import "./Technologies.css"

const Technologies = () => {
    return (
        <div className='custom-container sectionpadding'>
            <div className="grid-container">
                {/* <!-- 1st row: 2 boxes --> */}
                <div className="grid-row">
                    <div className="grid-item"><Image  width={100} height={100} src="/assets/img/Tech/HTML.png" alt="HTML" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="/assets/img/Tech/CSS.png" alt="CSS" /></div>
                </div>

                {/* <!-- 2nd row: 5 boxes --> */}
                <div className="grid-row">
                    <div className="grid-item"><Image  width={100} height={100} src="/assets/img/Tech/JS.png" alt="Javascript" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="/assets/img/Tech/Bootstrap.png" alt="Bootstrap" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="/assets/img/Tech/Threejs.png" alt="Three js" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="/assets/img/Tech/Taiwind.png" alt="Taiwind" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="/assets/img/Tech/Vite.png" alt="Vite" /></div>
                </div>

                {/* <!-- 3rd row: 6 boxes --> */}
                <div className="grid-row">
                    <div className="grid-item"><Image  width={100} height={100} src="/assets/img/Tech/React.png" alt="Image" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="/assets/img/Tech/Threejs.png" alt="Image" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="/asset/img/" alt="Image" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="https://cryptohelper.in/wp-content/uploads/2024/07/cryptohelper-partners-list-5.png" alt="Image" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="https://cryptohelper.in/wp-content/uploads/2024/07/11.png" alt="Image" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="https://cryptohelper.in/wp-content/uploads/2024/07/21.png" alt="Image" /></div>
                </div>

                {/* <!-- 4th row: 5 boxes --> */}
                {/* <div className="grid-row">
                    <div className="grid-item"><Image  width={100} height={100} src="https://cryptohelper.in/wp-content/uploads/2024/07/14.png" alt="Image" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="https://cryptohelper.in/wp-content/uploads/2024/07/15.png" alt="Image" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="/assets/img/Tech/React-querry.png" alt="Image" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="https://cryptohelper.in/wp-content/uploads/2024/07/17.png" alt="Image" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="https://cryptohelper.in/wp-content/uploads/2024/07/18.png" alt="Image" /></div>
                </div> */}

                {/* <!-- 5th row: 2 boxes --> */}
                {/* <div className="grid-row">
                    <div className="grid-item"><Image  width={100} height={100} src="https://cryptohelper.in/wp-content/uploads/2024/07/19.png" alt="Image" /></div>
                    <div className="grid-item"><Image  width={100} height={100} src="https://cryptohelper.in/wp-content/uploads/2024/07/20.png" alt="Image" /></div>
                </div> */}
            </div>
        </div>
    )
}

export default Technologies