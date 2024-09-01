"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, useTransform } from "framer-motion";
import { random } from "maath";
import React, { useRef, useState } from "react";

const StarBackground = (props?: any) => {
    const { camera } = useThree()
    // camera.position.z = 0
    const ref: any = useRef();
    // const ref2: any = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(3000 * 3), { radius: 1.2 })
    );

    const { scrollY } = useScroll();
    const rotateY = useTransform(scrollY, [0, window.innerHeight], [0, Math.PI * 400]);
    const [loop, setloop] = useState("one")
    const resetloop = () => {
        setTimeout(() => {
            setloop("one");
        }, 60000);
    }

    useFrame((_, delta) => {
        switch (loop) {
            case "one":
                if (camera.position.z < 2.8) {
                    camera.position.z += 0.0065;
                    // console.log("increasing z", camera.position.z);
                } else {
                    setloop("two");
                    // console.log("first ended, moving to 'two'");
                }
                break;

            case "two":
                if (camera.position.z > 1.3) {
                    camera.position.z -= 0.0390;
                    // console.log("decreasing z", camera.position.z);
                } else {
                    resetloop()
                }
                break;
            default:
                break;
        }
        // if (camera.position.z <= 3) {
        //     camera.position.z += 0.0065;
        //     console.log("not", camera.position.z);
        // } else {
        //     camera.position.z -= 0.09;
        //     console.log("not", camera.position.z);
        // }

        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 10;
        ref.current.rotation.z -= delta / 10;
        // ref.current.rotation.x -= Math.PI / 450;
        ref.current.rotation.y = rotateY.get();
        // const elapsedTime = clock.getElapsedTime();

        // // const color = `hsl(${(elapsedTime * 10) % 430}, 100%, 50%)`;
        // const color = `hsl(${(elapsedTime * 10) % 430}, 100%, 50%)`;
        // ref.current.material.color.set(color);
    });

    return (
        <group ref={ref}>
            <Points
                // ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    color="purple" 
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
                    color="blue" 
                    size={0.0004}
                    sizeAttenuation={true}
                    depthWrite={false}
                    transparent
                />
            </Points>
        </group>
    );
};


export default React.memo(StarBackground);