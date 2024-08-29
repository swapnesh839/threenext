"use client";

import React, { useState, useRef, Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";
import { useScroll, useTransform } from "framer-motion";
import { useSelector } from "react-redux";
const music = '/assets/audio/space-ambience-56265.mp3';
import { Rootstore } from '@/lib/reduxtoolkit/store/store';

const StarBackground = (props: any) => {
    const ref: any = useRef();
    const ref2: any = useRef();
    // const [sphere] = useState(() =>
    //     random.inSphere(new Float32Array(3000 * 3), { radius: 1.2 })
    // );
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(3000 * 3), { radius: 1.2 })
    );

    const { scrollY } = useScroll();
    const rotateY = useTransform(scrollY, [0, window.innerHeight], [0, Math.PI * 300]);

    useFrame(({ clock }) => {
        ref.current.rotation.x += Math.PI / 270;
        ref.current.rotation.y = rotateY.get();

        const elapsedTime = clock.getElapsedTime();
        const color = `hsl(${(elapsedTime * 10) % 360}, 100%, 50%)`;
        ref.current.material.color.set(color);
    });

    return (
        <group>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    color="blue" // This initial color will be overridden by the useFrame hook
                    size={0.004}
                    sizeAttenuation={true}
                    depthWrite={false}
                    transparent
                />
            </Points>
            <Points
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    color="blue" // This initial color will be overridden by the useFrame hook
                    size={0.0004}
                    sizeAttenuation={true}
                    depthWrite={false}
                    transparent
                />
            </Points>
        </group>
    );
};

const Background = () => {

    return (
        <div className="w-full h-full fixed inset-0">
            <Suspense fallback={null}>
                <Audio />
                <Canvas className="fixed top-0 left-0 right-0 bottom-0 bg-black w-full h-full -z-50" camera={{ position: [0, 0, 1] }}>
                    <StarBackground />
                    <group>

                    </group>
                </Canvas>
            </Suspense>
        </div>
    )
};


const Audio = () => {
    const MusicState = useSelector((state: Rootstore) => state.music.music);
    const audioref = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {
        console.log(MusicState);
    
        if (MusicState) {
            if (audioref.current) {
                audioref.current.play();
            }
        }else{
            if (audioref.current) {
                audioref.current.pause();
            }
        }
    },[MusicState])
    return (
        <div className="hidden">
            <audio autoPlay loop ref={audioref}>
                <source src={music} type="audio/mpeg" />
                <source src={music} type="audio/ogg" />
                <source src={music} type="audio/wav" />
                <source src={music} type="audio/mp3" />
            </audio>
        </div>
    );
};



export default Background;
