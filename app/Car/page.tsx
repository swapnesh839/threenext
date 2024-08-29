"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const glb = '/assets/glb/lamborghini.glb';

const Model = () => {
    const { scene } = useGLTF('/assets/glb/lamborghini.glb', true);
    useGLTF.preload('/assets/glb/lamborghini.glb')
    return <primitive object={scene} />;
};

const Page = () => {
    return (
        <div className="w-full h-full fixed inset-0">
            <Suspense fallback={null}>
                <Canvas 
                    className="fixed top-0 left-0 right-0 bottom-0 bg-black w-full h-full -z-10" 
                    camera={{ position: [0, 0, 1] }}
                >
                    <Model />
                </Canvas>
            </Suspense>
        </div>
    );
};

export default Page;
