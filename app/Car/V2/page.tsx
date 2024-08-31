"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls, PerspectiveCamera, useGLTF, useHelper } from "@react-three/drei";
import { Mesh, Object3D, RepeatWrapping, SpotLight, SpotLightHelper, TextureLoader } from "three";
import { LinearEncoding } from "@react-three/drei/helpers/deprecated";
const Model = () => {
    const ref = useRef<Mesh>(null);
    const { camera } = useThree()
    const { scene } = useGLTF('/assets/glb/lamborghini.glb', true);
    useGLTF.preload('/assets/glb/lamborghini.glb')


    const [roughnessMap, normalMap] = useLoader(TextureLoader, [
        "/assets/textures/metal-siding-base-bl/metal-siding-base_roughness.png",
        "/assets/textures/metal-siding-base-bl/metal-siding-base_normal-ogl.png",
    ])
    useEffect(() => {
        [roughnessMap, normalMap].forEach((map) => {
            map.wrapS = RepeatWrapping;
            map.wrapT = RepeatWrapping;
            map.repeat.set(20, 20);
        })
        // normalMap.encoding = LinearE
    }, [roughnessMap, normalMap])

    const spotLightRef = useRef<SpotLight | null>(null);
    // useHelper(spotLightRef, SpotLightHelper, "hotpink");
    useHelper(spotLightRef as React.MutableRefObject<Object3D>, SpotLightHelper, "hotpink");

    const [lightintensity, setlightintensity] = useState(0)
    const [isInitialFlikkerdone, setisInitialFlikkerdone] = useState(false)
    const [InitialFlikkercount, setInitialFlikkercount] = useState(0)
    useFrame(({ clock }, delta) => {
        // console.log(delta);        

        if (isInitialFlikkerdone) {
            if (lightintensity < 8) {
                setlightintensity(lightintensity + 0.1)
            }
        } else {
            if (InitialFlikkercount > 6) {
                let flikkerstrength = Math.random() * 90
                // console.log(flikkerstrength,"flickerstength");
                setlightintensity(flikkerstrength)
                setInitialFlikkercount(InitialFlikkercount + 1)
            }else{
                setlightintensity(0)
                setisInitialFlikkerdone(true)
            }
        }
    })

    return (
        <>
            <primitive ref={ref} object={scene} />
            <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={50} />
            <color attach="background" args={[0, 0, 0]} />
            <spotLight
                castShadow
                intensity={lightintensity}
                angle={0.6}
                penumbra={1}
                // ref={spotLightRef}
                position={[5, 5, 0]}
                shadow-bias={-0.0001}
                color={[1, 0.25, 0.7]}
            />
            <ambientLight intensity={0.05} />
            {/* <directionalLight
                castShadow
                intensity={1}
                position={[10, 10, 5]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            /> */}

            <spotLight

                castShadow
                color={[0.14, 0.5, 1]}
                intensity={lightintensity}
                angle={0.6}
                penumbra={1}
                position={[-5, 5, 0]}
                shadow-bias={-0.0001}
            />
            <spotLight

                castShadow
                color={[0.14, 1, 1]}
                intensity={lightintensity}
                angle={0.6}
                penumbra={1}
                position={[0, 5, 5]}
                shadow-bias={-0.0001}
            />
            <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
                <planeGeometry args={[30, 30]} />
                <MeshReflectorMaterial
                    envMapIntensity={0}
                    normalMap={normalMap}
                    normalMap-encoding={LinearEncoding}
                    roughnessMap={roughnessMap}
                    dithering={true}
                    mirror={0}
                    blur={[1000, 300]}
                    mixBlur={20}
                    depthScale={0.01}
                    minDepthThreshold={0.9}
                    maxDepthThreshold={1}
                    depthToBlurRatioBias={0.25}
                    mixStrength={80}
                    mixContrast={1}
                    resolution={1024}
                    metalness={0.5}
                    reflectorOffset={0.2}
                    roughness={.8} />
            </mesh>
        </>
    )
};

const Page = () => {
    return (
        <div className="w-full h-full fixed inset-0 -z-40 bg-black">
            <Suspense fallback={null}>
                <Canvas
                    className="fixed top-0 left-0 right-0 bottom-0  w-full h-full -z-10"
                    camera={{ position: [2, 2, 3] }}
                >
                    <OrbitControls autoRotate={true} autoRotateSpeed={0.2} minDistance={2} maxDistance={10} />
                    <Model />
                </Canvas>
            </Suspense>
        </div>
    );
};

export default Page;