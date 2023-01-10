import { memo, useLayoutEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, Mesh } from "three";
import mercuryURL from "../assets/textures/mercury.jpg";
import venusURL from "../assets/textures/venus.jpeg";
import earthURL from "../assets/textures/earth.jpg";
import moonURL from "../assets/textures/moon.jpg";
import marsURL from "../assets/textures/mars.png";
import jupiterURL from "../assets/textures/jupiter.jpg";
import saturnURL from "../assets/textures/saturn.jpg";
import saturnRingsURL from "../assets/textures/saturn_rings.png";
import uranusURL from "../assets/textures/uranus.png";
import neptuneURL from "../assets/textures/neptune.jpg";

const Planet = () => {
    const planetRef = useRef<Mesh>(null!);
    const ringRef = useRef<Mesh>(null!);

    const textures = useLoader(TextureLoader, [
        mercuryURL,
        venusURL,
        earthURL,
        moonURL,
        marsURL,
        jupiterURL,
        saturnURL,
        uranusURL,
        neptuneURL,
    ]);
    const ring = useLoader(TextureLoader, saturnRingsURL);

    const randomIndex = Math.floor(Math.random() * textures.length);

    useLayoutEffect(() => {
        planetRef.current.rotation.x = 0.4 * Math.PI;
        planetRef.current.rotation.y = -0.23 * Math.PI;
    }, []);

    useFrame(() => {
        planetRef.current.rotation.y -= 0.001;
        if (randomIndex === 6) {
            ringRef.current.rotation.z -= 0.001;
        }
    });

    return (
        <>
            <ambientLight color="#777777" intensity={1} />
            <pointLight position={[-5, 2, 0]} intensity={1} color="#FFFFFF" />
            <mesh ref={planetRef} position={[0, 2, 0]}>
                <sphereGeometry args={[1, 32, 16]} />
                <meshPhongMaterial map={textures[randomIndex]} />
            </mesh>
            {randomIndex === 6 && (
                <mesh ref={ringRef} position={[0, 2, 0.4]}>
                    <ringGeometry args={[1.25, 1.5, 96]} />
                    <meshPhongMaterial
                        map={ring}
                        emissive={"#FFFFFF"}
                        opacity={0}
                        emissiveIntensity={0.04}
                    />
                </mesh>
            )}
        </>
    );
};

export default memo(Planet);
