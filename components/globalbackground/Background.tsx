"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import { random } from "maath";
import { useScroll, useTransform } from "framer-motion";

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

const Background = () => (
    <div className="w-full h-full fixed inset-0 z-[0]">
        <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarBackground />
            </Canvas>
        </Suspense>
    </div>
);

export default Background;
