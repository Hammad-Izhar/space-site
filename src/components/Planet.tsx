import { useFrame, useLoader } from "@react-three/fiber";
import { memo, useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { Mesh, MeshLambertMaterial } from "three";

const Planet = () => {
  const planetRef = useRef<Mesh>(null!);

  const moonURL = new URL(`/src/assets/textures/moon.jpg`, import.meta.url)
    .href;
  const earthURL = new URL(`/src/assets/textures/earth.jpg`, import.meta.url)
    .href;

  const textures = useLoader(THREE.TextureLoader, [moonURL, earthURL]);

  useLayoutEffect(() => {
    planetRef.current.rotation.x = 0.5 * Math.PI;
    planetRef.current.rotation.y = -0.23 * Math.PI;
  });

  useFrame(() => {
    planetRef.current.rotation.y -= 0.001;
  });

  return (
    <>
      <ambientLight color="#FFFFFF" intensity={1} />
      <directionalLight color="#FFFFFF" intensity={1} />
      <mesh ref={planetRef} position={[0, 2, 0]}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshPhongMaterial
          map={textures[Math.floor(Math.random() * textures.length)]}
        />
      </mesh>
    </>
  );
};

export default memo(Planet);
