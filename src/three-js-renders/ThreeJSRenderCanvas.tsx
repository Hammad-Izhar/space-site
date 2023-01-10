import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Nebula from "./Nebula";
import FileSaver from "file-saver";

function record(canvas: HTMLCanvasElement, time: number) {
    const recordedChunks: Blob[] = [];

    return new Promise((res, rej) => {
        // https://stackoverflow.com/questions/19235286/convert-html5-canvas-sequence-to-a-video-file/62065826#62065826
        const stream = canvas.captureStream(60 /* fps */);
        const mediaRecorder = new MediaRecorder(stream, {
            mimeType: "video/webm; codecs=vp9",
        });

        console.log("start");
        mediaRecorder.start(time || 4000);

        mediaRecorder.ondataavailable = function (event) {
            recordedChunks.push(event.data);
            if (mediaRecorder.state === "recording") {
                console.log("end");
                mediaRecorder.stop();
            }
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: "video/webm" });
            const url: string = URL.createObjectURL(blob);

            res(url);
        };
    });
}

const ThreeCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null!);

    useEffect(() => {
        const fetchVideo = async () => {
            const url = await record(
                canvasRef.current,
                (10 * Math.PI + 1) * 1000
            );
            FileSaver.saveAs(url as string);
            console.log(url);
        };

        fetchVideo();
    }, []);

    return (
        <div className="w-screen h-screen">
            <Canvas
                ref={canvasRef}
                camera={{
                    fov: 60,
                    position: [0, 0, 1],
                    rotation: [1.16, -0.12, 0.27],
                }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Nebula numClouds={50} />
            </Canvas>
        </div>
    );
};

export default ThreeCanvas;
