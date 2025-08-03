import type { WebcamConfig } from '../types';

/**
 * Class to handle webcam with TypeScript
 */
export class Webcam {
  /**
   * Open webcam and stream it through video tag.
   * @param videoRef - video tag reference
   */
  open = (videoRef: HTMLVideoElement): void => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const config: WebcamConfig = {
        audio: false,
        video: {
          facingMode: "environment",
        },
      };

      navigator.mediaDevices
        .getUserMedia(config)
        .then((stream: MediaStream) => {
          videoRef.srcObject = stream;
        })
        .catch((error: Error) => {
          console.error('Error accessing webcam:', error);
          alert("Can't open Webcam!");
        });
    } else {
      alert("Can't open Webcam!");
    }
  };

  /**
   * Close opened webcam.
   * @param videoRef - video tag reference
   */
  close = (videoRef: HTMLVideoElement): void => {
    if (videoRef.srcObject) {
      const stream = videoRef.srcObject as MediaStream;
      stream.getTracks().forEach((track: MediaStreamTrack) => {
        track.stop();
      });
      videoRef.srcObject = null;
    } else {
      alert("Please open Webcam first!");
    }
  };
}
