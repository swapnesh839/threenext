"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { SwitchCamera } from 'lucide-react';
import Link from "next/link";
type CameraPosition = 'top' | 'general' | 'right' | 'left';
const Model = ({ color, camerposition }: { color: string, camerposition?: CameraPosition }) => {
    const { camera } = useThree()
    useEffect(() => {
        console.log(camerposition);
        if (camerposition === 'general') {
            camera.position.set(2, 2, 3)
        }
        if (camerposition === 'top') {
            camera.position.set(0, 3, 1)
        }
        if (camerposition === 'right') {
            camera.position.set(3, 0, 1)
        }
        if (camerposition === 'left') {
            camera.position.set(-3, 0, 1)
        }
    }, [camerposition, camera.position])
    const ref = useRef<Mesh>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.traverse((object) => {
                if (object instanceof Mesh) {
                    object.castShadow = true;
                    object.receiveShadow = true;
                }
            });
        }
    },[ref])
    const { scene } = useGLTF('/assets/glb/lamborghini.glb', true);
    useGLTF.preload('/assets/glb/lamborghini.glb')
    useEffect(() => {
        if (ref.current) {
            ref.current.traverse((object) => {
                if (object instanceof Mesh) {
                    if (object.parent && object.parent.name === 'modeltochangecolor') {
                        console.log(`Modifying Mesh: ${object.name}`);
                        const material = object.material as MeshStandardMaterial;
                        material.color.set(color);
                    }
                }
            });
        } else {
        }
    }, [color, scene]);

    return <group>
        <primitive ref={ref} object={scene} />
        {/* <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow={true}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial
                color="white"
                roughness={0.4}
                metalness={0.7}
                transparent
                opacity={0.3}
            /> */}
        {/* <meshBasicMaterial transparent  opacity={0.3} 
            // side={DoubleSide}
             color="white" /> */}
        {/* </mesh> */}
    </group>

};

const Page = () => {
    const [camerapositin, setCameraposition] = useState<CameraPosition>("general");
    // const [camerapositincount, setCamerapositioncount] = useState(0);
    const camerswap = () => {
        if (camerapositin === "general") {
            setCameraposition("top");
        } else if (camerapositin === "top") {
            setCameraposition("right");
        } else if (camerapositin === "right") {
            setCameraposition("left");
        } else if (camerapositin === "left") {
            setCameraposition("general");
        }
    }
    const [color, setcolor] = useState("#ffffff")
    return (
        <div className="w-full h-full fixed inset-0 -z-40 bg-black">
            <Suspense fallback={null}>
                <SwitchCamera
                    size={40}
                    onClick={camerswap}
                    className="fixed right-0 top-1/2 z-[999] hover:text-sky-500 hover:rotate-[-12deg] hover:scale-105 transition-all m-3 p-1 rounded-lg Headerbg text-2xl"
                />
                <Link href={'/Car/V2'}
                    className="fixed right-0 top-1/3 z-[999] text-purple-500 hover:scale-105 transition-all  px-3 py-1 rounded-s bg-white text-xl"
                >V2</Link>
                <button className="fixed left-0 top-1/2 m-3 bg-purple-900 text-white hover:bg-black border border-transparent hover:border-purple-900 font-bold py-2 px-4 rounded z-30">
                    <a target="_blank" href="https://sketchfab.com/3d-models/lamborghini-huracan-twin-turbo-lost-1d3809ea5a6749d9864ec4c32511d716">Model</a>
                </button>
                <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-30 m-7 w-fit flex justify-center align-middle">
                    <div className="inline w-6 h-6 mx-3 rounded-full bg-[#ffffff]" onClick={() => setcolor("#ffffff")}></div>
                    <div className="inline w-6 h-6 mx-3 rounded-full bg-[#156CC3]" onClick={() => setcolor('#156CC3')}></div>
                    <div className="inline w-6 h-6 mx-3 rounded-full bg-[#580D08]" onClick={() => setcolor('#580D08')}></div>
                    <div className="inline w-6 h-6 mx-3 rounded-full bg-[#74C108]" onClick={() => setcolor('#74C108')}></div>
                    <div className="inline w-6 h-6 mx-3 rounded-full bg-[#FFB317]" onClick={() => setcolor("#FFB317")}></div>
                </div>
                <Canvas
                    className="fixed top-0 left-0 right-0 bottom-0  w-full h-full -z-10"
                    camera={{ position: [2, 2, 3] }}
                >
                    <ambientLight intensity={0.3} />
                    <spotLight

                    />
                    <directionalLight
                        intensity={2}
                        position={[5, 5, 5]}
                        castShadow
                    />
                    <directionalLight
                        intensity={2}
                        position={[-5, -5, 5]}
                        castShadow
                    />
                    <directionalLight
                        intensity={2}
                        position={[5, -5, -5]}
                        castShadow
                    />
                    <directionalLight
                        intensity={2}
                        position={[-5, 5, 5]}
                        castShadow
                    />
                    <OrbitControls autoRotate={true} autoRotateSpeed={0.2} minDistance={2} maxDistance={10} />
                    <Model camerposition={camerapositin} color={color} />
                </Canvas>
            </Suspense>
        </div>
    );
};

export default Page;
