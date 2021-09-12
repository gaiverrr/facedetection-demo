import type {NextPage} from 'next'
import {useEffect, useRef, useState} from "react";
import {useFaceApi} from "react-use-faceapi";
import {useUserMedia} from "./use-user-media";

const myFaceApiConfig = {
    input: 'inputVideo',
    refreshRate: 250
}

const constraints = {
    audio: false,
    video: {
        facingMode: 'user',
        width: { ideal: 4096 },
        height: { ideal: 2160 }
    }
}

export function setConstraints() {
    return {
        // width: { ideal: 2048 },
        // height: { 3024: 1080 },
        // width: { min: 640, ideal: 4000, max: 4000 },
        // height: { min: 400, ideal: 2500, max: 2500 },
        // width: ,
        // width: { min: 640, ideal: 4940, max: 4940 },
        // height: { min: 400, ideal: 3000, max: 3000, },
        width: { min: 640, ideal: 2964, max: 2964 },
        height: { min: 400, ideal: 1800, max: 1800, },
        frameRate: { max: 10 }
        // 3024 – 4032
    }
}

// const constraints = {
//     audio: false,
//     video: {
//         ...setConstraints(),
//         frameRate: { max: 10 },
//         facingMode: 'user'
//     }
// }
const Home: NextPage = () => {

    const videoRef: any = useRef(null);


    const mediaStream = useUserMedia(constraints);
    const faces = useFaceApi(myFaceApiConfig);
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
    }
    // useEffect(() => {
    //     getVideo();
    // }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(stream => {
                let video = videoRef.current;
                // @ts-ignore
                video.srcObject = stream;
                // @ts-ignore
                // video.play();
                video.onloadedmetadata = e => video.play();
            })
            .catch(err => {
                alert(JSON.stringify(err))
                console.error("error:", err);
            });
    };
    return (
        <div>
            <div style={{"position": "relative"}} className="margin">
                <video ref={videoRef} autoPlay={true} id="inputVideo" playsInline style={{width: '100%', height: '100%', maxWidth: '600px'}}/>
                <canvas id="overlay"/>
            </div>

            {faces && faces.map((face, index) => {

                // Attributes
                const top = face.relativeBox.top * videoRef?.current?.offsetHeight;
                const left = face.relativeBox.left * videoRef?.current?.offsetWidth;
                const width = face.relativeBox.width * videoRef?.current?.offsetWidth;
                const height = face.relativeBox.height * videoRef?.current?.offsetHeight;

                // Rendering
                return (
                    <div key={index} style={{
                        position: 'absolute',
                        width: width,
                        height: height,
                        left: left,
                        top: top,
                        border: '2px solid red',
                    }}
                    />
                );
            })}

        </div>
    )
}

export default Home
