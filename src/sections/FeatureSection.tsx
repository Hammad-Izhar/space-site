import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import Nebula from "../components/Nebula";

function FeatureSection() {
  return (
    <section id="home" className="w-screen h-screen">
      <Canvas
        camera={{ fov: 60, position: [0, 0, 1], rotation: [1.16, -0.12, 0.27] }}
      >
        <Nebula numClouds={2} />
        {/* <Stats /> */}
      </Canvas>
    </section>
  );
}

export default FeatureSection;
