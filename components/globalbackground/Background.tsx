"use client";

import React, { useState, useRef,  useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
const music = '/assets/audio/space-ambience-56265.mp3';
import { Rootstore } from '@/lib/reduxtoolkit/store/store';
import StarBackground from "./StarBackground";



const Background = () => {

    return (
        <div className="w-full h-full fixed inset-0 -z-40">
                <Audio />
                <Canvas className="fixed top-0 left-0 right-0 bottom-0 bg-black w-full h-full -z-50" camera={{ position: [0, 0, 0] }}>
                    <StarBackground />
                    <group>
                    </group>
                </Canvas>
        </div>
    )
};


const Audio = () => {
    const MusicState = useSelector((state: Rootstore) => state.music.music);
    const audioref = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {
        if (MusicState) {
            if (audioref.current) {
                audioref.current.play();
            }
        } else {
            if (audioref.current) {
                audioref.current.pause();
            }
        }
    }, [MusicState])
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

export default React.memo(Background);