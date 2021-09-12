import type {NextPage} from 'next'
import {useEffect, useRef, useState} from "react";
import {useFaceApi} from "react-use-faceapi";

const myFaceApiConfig = {
    input: 'inputVideo',
    refreshRate: 250
}

const constraints = {
    audio: false,
    video: {
        facingMode: 'user',
        width: { ideal: 1280 },
        height: { ideal: 720 }
    }
}
const Home: NextPage = () => {
    const videoRef: any = useRef(null);
    const faces = useFaceApi(myFaceApiConfig);
    useEffect(() => {
        getVideo();
    }, [videoRef]);

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
                <video ref={videoRef} id="inputVideo" style={{width: '100%', height: '100%', maxWidth: '600px'}}/>
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
