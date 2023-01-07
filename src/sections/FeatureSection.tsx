import { Canvas, useFrame } from "@react-three/fiber";
import Nebula from "../components/Nebula";
import { useInView } from "react-intersection-observer";

function FeatureSection() {
  const { ref, inView } = useInView();
  return (
    <section
      id="home"
      className="w-screen h-screen relative flex justify-center items-center"
    >
      <h2 className="text-4xl font-orbitron text-center bg-opacity-20 absolute z-10 bg-neutral-800 p-5 rounded-2xl shadow-md shadow-neutral-800">
        Program Design with Data Structures and Algorithms
      </h2>

      <div ref={ref} className="w-screen h-screen">
        <Canvas
          camera={{
            fov: 60,
            position: [0, 0, 1],
            rotation: [1.16, -0.12, 0.27],
          }}
        >
          {inView && <Nebula numClouds={50} />}
        </Canvas>
      </div>
    </section>
  );
}

export default FeatureSection;
