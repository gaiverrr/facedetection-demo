import { useState, useEffect } from "react";

export const useUserMedia = (requestedMedia: any) => {
  const [mediaStream, setMediaStream] = useState<any>(null);

  useEffect(() => {
    async function enableVideoStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          requestedMedia
        );
        setMediaStream(stream);
      } catch (err) {
        console.log(err)
        // Handle the error
      }
    }

    if (!mediaStream) {
      enableVideoStream()
    } else return () => {
      mediaStream.getTracks().forEach((track:any) => track.stop())
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
}
