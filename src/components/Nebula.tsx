import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";

type NebulaProps = {
  numClouds: number;
};

type Cloud = {
  position: [number, number, number];
  rotation: [number, number, number];
};

// Thanks to https://redstapler.co/cool-nebula-background-effect-three-js/ for all the help + resources!
const Nebula = ({ numClouds }: NebulaProps) => {
  const nebulaRef = useRef<THREE.InstancedMesh>(null!);
  const cloudURL = new URL(`/src/assets/textures/clouds.png`, import.meta.url)
    .href;
  const cloudTexture = useLoader(THREE.TextureLoader, cloudURL);
  const clouds: Cloud[] = [];
  const dummyCloud = new THREE.Object3D();

  useEffect(() => {
    for (let cloudID = 0; cloudID <= numClouds; cloudID++) {
      clouds.push({
        position: [Math.random() * 800 - 400, 500, Math.random() * 500 - 500],
        rotation: [1.16, -0.12, Math.random() * 2 * Math.PI],
      });

      dummyCloud.position.set(...clouds[cloudID].position);
      dummyCloud.rotation.set(...clouds[cloudID].rotation);
      dummyCloud.updateMatrix();

      nebulaRef.current.setMatrixAt(cloudID, dummyCloud.matrix);
    }
    nebulaRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  useFrame(() => {
    for (let cloudID = 0; cloudID <= numClouds; cloudID++) {
      const [rotateX, rotateY, rotateZ] = clouds[cloudID].rotation;
      clouds[cloudID].rotation = [rotateX, rotateY, rotateZ - 0.001];

      dummyCloud.position.set(...clouds[cloudID].position);
      dummyCloud.rotation.set(...clouds[cloudID].rotation);

      dummyCloud.updateMatrix();

      nebulaRef.current.setMatrixAt(cloudID, dummyCloud.matrix);
    }
    nebulaRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <ambientLight color="#555555" />
      <directionalLight color="#ff8c19" />
      <pointLight args={["#cc6600", 50, 450, 1.7]} position={[200, 300, 100]} />
      <pointLight args={["#d8547e", 50, 450, 1.7]} position={[100, 300, 100]} />
      <pointLight args={["#3677ac", 50, 450, 1.7]} position={[300, 300, 200]} />

      <color attach="background" args={["#262626"]} />

      <instancedMesh ref={nebulaRef} args={[undefined, undefined, numClouds]}>
        <planeGeometry args={[500, 500]} />
        <meshLambertMaterial
          map={cloudTexture}
          transparent={true}
          opacity={0.55}
          depthWrite={false}
        />
      </instancedMesh>
    </>
  );
};

export default Nebula;
