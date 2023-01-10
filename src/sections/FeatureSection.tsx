import nebulaURL from "../assets/video/nebula.webm";

function FeatureSection() {
    return (
        <section
            id="home"
            className="w-screen h-screen relative flex justify-center items-center"
        >
            <h2 className="text-4xl font-orbitron text-center bg-opacity-20 absolute z-10 bg-neutral-800 p-5 rounded-2xl shadow-md shadow-neutral-800">
                Program Design with Data Structures and Algorithms
            </h2>

            <video
                className="w-screen h-screen object-fill"
                loop={true}
                autoPlay={true}
                muted={true}
                src={nebulaURL}
            />
        </section>
    );
}

export default FeatureSection;
