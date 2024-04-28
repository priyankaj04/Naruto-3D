"use client";
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

const Rasengan = React.memo(function Rasengan(props) {
    // Use React.memo for performance optimization
    const { nodes, materials } = useGLTF("/models/rasengan_from_naruto_shippuden.glb");

    const modelRef = useRef();

    useFrame((state) => {
        modelRef.current.rotation.y += 0.007;
    });

    return (
        <group ref={modelRef} {...props} dispose={null}
            scale={[1.2, 1.2, 1.2]}
            rotation={[0.4, -1, 0]}
            position={[0, 0, 0]}
        >
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Sphere_2">
                                <mesh
                                    name="Object_4"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_4.geometry}
                                    material={materials['Material.001']}
                                />
                            </group>
                            <group name="rasengan_core_empty_3" scale={1.431} />
                            <group name="Sphere001_4" scale={0.913}>
                                <mesh
                                    name="Object_7"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_7.geometry}
                                    material={materials['Material.003']}
                                />
                            </group>
                            <group name="Sphere002_5" scale={0.653}>
                                <mesh
                                    name="Object_9"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_9.geometry}
                                    material={materials['Material.002']}
                                />
                            </group>
                            <group name="Cylinder_6" scale={[1.709, 0.368, 1.709]}>
                                <mesh
                                    name="Object_11"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_11.geometry}
                                    material={materials['Material.004']}
                                />
                            </group>
                            <group name="rasengan_around_empty_7" scale={1.422} />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
});

export default Rasengan

useGLTF.preload('/models/rasengan_from_naruto_shippuden.glb')